import { ILoginSignUpModalProps } from "@/interfaces/shopPageInterfaces";
import UIModal from "@/widgets/UIModal";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginSignUpModal = ({ isOpen, onClose }: ILoginSignUpModalProps) => {
  const tabs = ["login", "sign up"];
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <div className="flex gap-x-4">
        {tabs.map((tab, index) => (
          <button key={index} className={`text-lg border-b-2 pb-1 hover:opacity-60 transition-all ${selectedTab === tab ? "border-blue-600 text-blue-600" : "border-transparent text-black"}`} onClick={() => setSelectedTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      {selectedTab === "login" && <LoginForm closeModal={onClose} />}
      {selectedTab === "sign up" && <SignUpForm setSelectedTab={setSelectedTab} />}
    </UIModal>
  );
};

export default LoginSignUpModal;
