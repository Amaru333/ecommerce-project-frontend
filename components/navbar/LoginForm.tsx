import FormInput from "@/widgets/FormInput";
import UIButton from "@/widgets/UIButton";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useLoginUser } from "./apiRequests";

const LoginForm = () => {
  // LOGIN FUNCTIONALITIES
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const data = useLoginUser(loginData);
  const onSubmit = () => {
    data.refetch();
  };

  return (
    <div>
      <FormInput icon={<MdEmail />} label="email" id="email" type="email" placeholder="abc@xyz.com" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
      <FormInput icon={<RiLockPasswordFill />} label="password" id="password" type="password" placeholder="••••••••" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
      <div className="mt-8 flex justify-center">
        <UIButton onClick={onSubmit} className="px-16" loading={data.isLoading}>
          login
        </UIButton>
      </div>
    </div>
  );
};

export default LoginForm;
