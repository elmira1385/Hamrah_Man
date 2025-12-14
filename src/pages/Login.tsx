import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import svg from "../image/dark-logo.svg";
import { useForm } from "react-hook-form";
import Button2 from "../components/Button2";
import { useNavigate } from "react-router";
import { useNumberLogin } from "../store/useNumber";


const Login = () => {
  const {setNumber}=useNumberLogin()
  const { t } = useTranslation();
  const changePage=useNavigate()
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
      
    },
  });

  useEffect(()=>{
    const savedPhoneNumber=localStorage.getItem("phoneNumber")
    if(savedPhoneNumber){
      changePage("/main")
    }
  },[localStorage])
  return (
    <div className="flex flex-col bg-[#0095da] w-full h-full pt-40 ">
      <div className="flex flex-col  bg-white justify-between relative px-5 py-8 rounded-t-2xl h-full">
        <div className="flex flex-col">
          <img
            className="w-[110px] h-[74px] absolute -top-2 left-50  -translate-1/2"
            src={svg}
            alt=""
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-center gap-2">
              <p>
                {t("loginPage.register")}{" "}
                <span className="text-gray-400">|</span> {t("loginPage.login")}
              </p>
              <p className="text-[#1f2937] text-[14px]">
                {t("loginPage.hiPleaseEnterYourPhoneNumber")}
              </p>
            </div>
            <div className="flex justify-center items-center py-3 pl-3 pr-8 rounded-md border border-gray-200">
              <input
                className="w-full  placeholder:text-gray-400 text-[15px] outline-none"
                placeholder={t("loginPage.placeholder")}
                {...register("phoneNumber", {
                  minLength: 11,
                  required: true,
                })}
                type="text"
              />

              <span className="flex justify-center text-gray-400">
                <span>|</span> &#1784;<span></span>&#1785; <span>+</span>{" "}
              </span>
            </div>
          </div>
          <p className="text-[14px] text-red-400 pt-4">
            {errors.phoneNumber && <span>{t("loginPage.error")} </span>}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={()=>{
          changePage("/otp")
           setNumber(getValues("phoneNumber"))
          }} className="bg-[#0095da] py-4 text-white rounded-md">
            {t("loginPage.button1")}
          </button>
          <Button2/>
        </div>
      </div>
    </div>
  );
};

export default Login;
