"use client";

import { NAVBAR_ITEMS } from "@/constants/navbarConstants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import LoginSignUpModal from "./LoginSignUpModal";
import { useQueryClient } from "@tanstack/react-query";
import { IUserData } from "@/interfaces/userInterfaces";
import UserContextMenu from "./UserContextMenu";

const Navbar = () => {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const userData: IUserData | undefined = queryClient.getQueryData(["user-details"]);
  console.log(userData, "USER-DATA");

  return (
    <div className="bg-background text-white">
      <LoginSignUpModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <div className="screen-container py-8 flex justify-between items-center">
        <div>
          <p className="text-2xl">FONE</p>
        </div>
        <div className="flex gap-x-16">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link key={index} href={item.link} className={`pb-1 border-b-2 hover:text-blue-600 transition-all active:scale-95 ${pathname === item.link ? "border-white hover:border-blue-600" : "border-transparent"}`}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-8 items-center">
          {!userData?._id ? (
            <button className="hover:text-blue-600 transition-all active:scale-95 p-2" onClick={() => setIsLoginModalOpen(true)}>
              <FaUserLarge />
            </button>
          ) : (
            <UserContextMenu userData={userData} />
          )}
          <button className="hover:text-blue-600 transition-all active:scale-95 p-2">
            <IoIosCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
