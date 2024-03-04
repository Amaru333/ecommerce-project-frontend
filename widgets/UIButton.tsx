import { UIButtonProps } from "@/interfaces/widgetInterfaces";
import React from "react";

const UIButton = ({ children, className, ...rest }: UIButtonProps) => {
  return (
    <button className={`bg-blue-600 px-4 py-2 rounded-full hover:opacity-80 transition-all active:scale-95 ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default UIButton;
