"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLocalStorageAuthToken, removeLocalStorageAuthToken } from "./localStorageFunctions";
import httpRequest from "./httpRequest";
import { AUTO_LOGIN_ROUTE } from "@/constants/apiConstants";
import { AutoLoginUserProps } from "@/interfaces/utilsInterfaces";
import { toast } from "sonner";

const AutoLoginUser = ({ children }: AutoLoginUserProps) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const autoLogin = async () => {
    try {
      const res = await httpRequest.get(AUTO_LOGIN_ROUTE);
      console.log(res, "AUTO-LOGIN-RES");
      return res.data;
    } catch (error: any) {
      removeLocalStorageAuthToken();
      toast.error("Error logging in", {
        description: error.response.data,
      });
      return error;
    }
  };
  const { refetch, isLoading } = useQuery({ queryKey: ["user-details"], queryFn: () => autoLogin(), enabled: false });
  useEffect(() => {
    if (getLocalStorageAuthToken()) {
      refetch();
      console.log("Logged in");
    } else {
      console.log("Not logged in");
    }
    setPageLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading || !pageLoaded) {
    return <div className="w-screen h-screen flex items-center justify-center bg-black text-white capitalize text-2xl">LOADING</div>;
  } else {
    return <div>{children}</div>;
  }
};

export default AutoLoginUser;
