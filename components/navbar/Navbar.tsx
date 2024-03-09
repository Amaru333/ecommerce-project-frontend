"use client";

import { NAVBAR_ITEMS } from "@/constants/navbarConstants";
import UIModal from "@/widgets/UIModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import LoginSignUpModal from "./LoginSignUpModal";

const Navbar = () => {
  const pathname = usePathname();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
          <button className="hover:text-blue-600 transition-all active:scale-95 p-2" onClick={() => setIsLoginModalOpen(true)}>
            <FaUserLarge />
          </button>
          <button className="hover:text-blue-600 transition-all active:scale-95 p-2">
            <IoIosCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
