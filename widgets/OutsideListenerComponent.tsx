import { OutsideListenerComponentProps } from "@/interfaces/widgetInterfaces";
import React, { useEffect, useRef } from "react";

function OutsideListenerComponent({ callback, children }: OutsideListenerComponentProps) {
  function useOutsideAlerter(ref: React.RefObject<any>, callback: () => void) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, callback);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideListenerComponent;
