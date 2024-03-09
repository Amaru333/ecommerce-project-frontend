import { UIButtonProps } from "@/interfaces/widgetInterfaces";
import React from "react";

const UIButton = ({ children, className, loading = false, ...rest }: UIButtonProps) => {
  // console.log(loading, "LOADING");
  return (
    <button className={`${loading ? "bg-slate-400" : "bg-blue-600 hover:opacity-80 transition-all active:scale-95"} ${className} px-4 py-2 rounded-full text-white`} {...rest} disabled={loading}>
      {children}
    </button>
  );
};

export default UIButton;
