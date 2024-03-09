import { UIModalProps } from "@/interfaces/widgetInterfaces";
import React, { useEffect } from "react";
import OutsideListenerComponent from "./OutsideListenerComponent";

const UIModal = ({ isOpen, onClose, children }: UIModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Clean up function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (isOpen) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
        <OutsideListenerComponent callback={onClose}>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 z-50 rounded-md">{children}</div>
        </OutsideListenerComponent>
      </div>
    );
  } else {
    return null;
  }
};

export default UIModal;
