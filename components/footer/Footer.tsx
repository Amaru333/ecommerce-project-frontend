import { FOOTER_ITEMS } from "@/constants/navbarConstants";
import Link from "next/link";
import React from "react";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-background text-white">
      <div className="screen-container grid grid-cols-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <p>&copy; FONE 2023 - 2024</p>
          <div className="flex items-center gap-x-8 mt-4 ">
            <Link href="/" className="hover:text-blue-600 transition-all">
              <SiInstagram size={20} />
            </Link>
            <Link href="/" className="hover:text-blue-600 transition-all">
              <FaXTwitter size={20} />
            </Link>
            <Link href="/" className="hover:text-blue-600 transition-all">
              <AiFillYoutube size={28} />
            </Link>
          </div>
        </div>
        {FOOTER_ITEMS.map((item, index) => (
          <div key={index}>
            <p className="text-lg pb-2">{item.title}</p>
            <div className="flex flex-col text-sm font-light text-slate-200">
              {item.items.map((link, index) => (
                <Link href={link.link} key={index} className="py-1 w-fit hover:text-blue-600 transition-all">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
