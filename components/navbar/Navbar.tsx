"use client";

import { NAVBAR_ITEMS } from "@/constants/navbarConstants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-background text-white">
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
        <div className="flex gap-x-12 items-center">
          <FaUserLarge className="hover:text-blue-600 transition-all active:scale-95" />
          <IoIosCart size={24} className="hover:text-blue-600 transition-all active:scale-95" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
