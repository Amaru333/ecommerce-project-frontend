import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from "react";
import UIButton from "@/widgets/UIButton";
import FormInput from "@/widgets/FormInput";
import axios from "axios";

const SignUpForm = () => {
  // SIGN UP FUNCTIONALITIES
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const onSubmit = () => {
    axios.post("http://localhost:3001/api/users", signupData).then((res) => console.log(res.data));
    // console.log(submitData);
  };
  return (
    <>
      <FormInput icon={<IoPersonSharp />} label="full name" id="name" type="text" placeholder="full name" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
      <FormInput icon={<MdEmail />} label="email" id="email" type="email" placeholder="abc@xyz.com" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
      <FormInput icon={<RiLockPasswordFill />} label="password" id="password" type="password" placeholder="••••••••" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
      <FormInput icon={<FaLocationDot />} label="address line 1" id="address-line1" type="text" placeholder="area name" value={signupData.address.line1} onChange={(e) => setSignupData({ ...signupData, address: { ...signupData.address, line1: e.target.value } })} />
      <FormInput label="address line 2" id="address-line2" type="text" placeholder="apartment / unit no." value={signupData.address.line2} onChange={(e) => setSignupData({ ...signupData, address: { ...signupData.address, line2: e.target.value } })} />
      <FormInput label="state" id="state" type="text" placeholder="state" value={signupData.address.state} onChange={(e) => setSignupData({ ...signupData, address: { ...signupData.address, state: e.target.value } })} />
      <div className="grid grid-cols-2 gap-x-4">
        <FormInput className="w-20" label="city" id="city" type="text" placeholder="city" value={signupData.address.city} onChange={(e) => setSignupData({ ...signupData, address: { ...signupData.address, city: e.target.value } })} />
        <FormInput className="w-20" label="zip code" id="zipcode" type="text" placeholder="10000" value={signupData.address.zip} onChange={(e) => setSignupData({ ...signupData, address: { ...signupData.address, zip: e.target.value } })} />
      </div>
      <div className="mt-8 flex justify-center">
        <UIButton className="px-16" onClick={() => onSubmit()}>
          sign up
        </UIButton>
      </div>
    </>
  );
};

export default SignUpForm;
