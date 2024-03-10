import { IUserData } from "@/interfaces/userInterfaces";
import React from "react";
import Image from "next/image";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoPerson } from "react-icons/io5";
import { PiSignOutFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { useLogoutUser } from "@/functions/commonFunctions";

const UserContextMenu = ({ userData }: { userData: IUserData }) => {
  const logout = useLogoutUser();
  const menuItems = [
    {
      name: "Profile",
      icon: <IoPerson size={18} />,
      action: () => console.log("Profile"),
    },
    {
      name: "Orders",
      icon: <TbTruckDelivery size={18} />,
      action: () => console.log("Orders"),
    },
  ];
  return (
    <Popover>
      <PopoverTrigger>
        <Image src={userData?.profile_image} alt="user-profile" width={24} height={24} className="rounded-full border border-white" />
      </PopoverTrigger>
      <PopoverContent className="max-w-52 text-slate-600 p-2">
        <p className="font-semibold text-xl mb-4 p-2">Hey {userData.name.split(" ")[0]}!</p>
        <div className="grid gap-y-2">
          {menuItems.map((item, index) => (
            <button key={index} onClick={item.action} className="flex items-center justify-between hover:bg-blue-100 transition-all px-2 py-1 rounded-md">
              <p>{item.name}</p>
              <div>{item.icon}</div>
            </button>
          ))}
          <button className="flex items-center justify-between text-red-500 mt-4 px-2 mb-2" onClick={logout}>
            <p>Logout</p>
            <PiSignOutFill size={18} />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserContextMenu;
