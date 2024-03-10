import { USER_LOGIN_ROUTE, USER_SIGNUP_ROUTE } from "@/constants/apiConstants";
import { IUserLogin, IUserSignup } from "@/interfaces/userInterfaces";
import httpRequest from "@/lib/httpRequest";
import { setLocalStorageAuthToken } from "@/lib/localStorageFunctions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

//REGISTER USER
const createNewUser = (userDetails: IUserSignup) => {
  return httpRequest.post(USER_SIGNUP_ROUTE, userDetails, { params: { auth: false } });
};
export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: createNewUser,
  });
};

//LOGIN USER
const loginUser = async (user: IUserLogin, closeModal: () => void) => {
  try {
    const res = await httpRequest.post(USER_LOGIN_ROUTE, user, { params: { auth: false } });
    console.log(res.headers);
    setLocalStorageAuthToken(res.headers["auth-token"]);
    toast.success("Logged in", {
      description: "Successfully logged in. Please wait",
    });
    closeModal();
    return res.data;
  } catch (error: any) {
    toast.error("Error logging in", {
      description: error.response.data,
    });
    return error;
  }
};
export const useLoginUser = (userDetails: IUserLogin, closeModal: () => void) => {
  return useQuery({ queryKey: ["user-details"], queryFn: () => loginUser(userDetails, closeModal), enabled: false });
};
