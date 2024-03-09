import { USER_LOGIN_ROUTE, USER_SIGNUP_ROUTE } from "@/constants/apiConstants";
import { IUserLogin, IUserSignup } from "@/interfaces/userInterfaces";
import httpRequest from "@/util/httpRequest";
import { useMutation, useQuery } from "@tanstack/react-query";

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
const loginUser = async (user: IUserLogin) => {
  try {
    const res = await httpRequest.post(USER_LOGIN_ROUTE, user, { params: { auth: false } });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const useLoginUser = (userDetails: IUserLogin) => {
  return useQuery({ queryKey: ["user-details"], queryFn: () => loginUser(userDetails), enabled: false });
};
