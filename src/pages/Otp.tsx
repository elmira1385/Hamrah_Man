import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import svg from "../image/dark-logo.svg";
import { useForm } from "react-hook-form";
import Button2 from "../components/Button2";
import { useNavigate } from "react-router";

const Otp = () => {
  const changePage = useNavigate();
  const { t } = useTranslation();
  const { register, setFocus,watch } = useForm({
    defaultValues: {
      phoneNumber1: "",
      phoneNumber2: "",
      phoneNumber3: "",
      phoneNumber4: "",
      phoneNumber5: "",
    },
  });
  useEffect(() => {
    setFocus("phoneNumber1");
  });
  useEffect(() => {
    if(watch("phoneNumber1").length===1){
      setFocus("phoneNumber2")
    }
    if(watch("phoneNumber2").length===1){
      setFocus("phoneNumber3")
    }
    if(watch("phoneNumber3").length===1){
      setFocus("phoneNumber4")
    }
    if(watch("phoneNumber4").length===1){
      setFocus("phoneNumber5")
    }                                       
    if(watch("phoneNumber5").length===1){
      changePage("/main");
    }
  },[watch()]);
  return (
    <div className="flex flex-col bg-[#0095da] w-full h-full pt-40 ">
      <div className="flex flex-col  bg-white justify-between relative px-5 py-8 rounded-t-2xl h-full">
        <div className="flex flex-col">
          <img
            className="w-[110px] h-[74px] absolute -top-2 left-50  -translate-1/2"
            src={svg}
            alt=""
          />
          <div className="flex flex-col gap-4">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 12H3"
              ></path>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.818 4L21 12m0 0l-8.182 8M21 12H11M13 20l5.78-5.78c.82-.82.24-2.22-.919-2.22H9"
              ></path>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 4l5.78 5.78c.82.82.24 2.22-.919 2.22H9"
              ></path>
            </svg>
            <p className="font-semibold">{t("otpPage.enterOkCode")}</p>
            <p className="text-[#1f2937] text-[14px]">
              {t("otpPage.sendACodeToThisNumber")}
            </p>
            <div dir="ltr" className="flex justify-between ">
              <input 
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber1", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber2", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber3", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber4", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
              <input
                className="w-16 p-2 flex justify-center items-center border border-gray-300 rounded-md"
                {...register("phoneNumber5", {
                  required: true,
                })}
                type="text"
                max={1}
                maxLength={1}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-center text-[14px] text-gray-400 pb-6 flex justify-center items-center gap-2">
            <svg
              fill="none"
              viewBox="0 0 21 20"
              xmlns="http://www.w3.org/2000/svg"
              // fit=""
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.444 9.86H5.5m.285.973L7.16 8.89m-1.375 0l1.375 1.944M11.472 9.86H9.528m.285.973l1.374-1.944m-1.374 0l1.374 1.944M15.5 9.86h-1.944m.284.973l1.375-1.944m-1.375 0l1.375 1.944M10.5 15H15a3 3 0 003-3V8a3 3 0 00-3-3h-.75m-7.5 10H6a3 3 0 01-3-3V8a3 3 0 013-3h4.5M12.167 16.667L10.5 15m0 0l1.667-1.667M10.5 15h2.778"
              ></path>
              <path
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.167 13.333v0c-.615.615-.18 1.667.69 1.667H13M12.167 16.667v0c-.615-.615-.18-1.667.69-1.667H13M9.111 3.333L10.778 5m0 0L9.11 6.667M10.778 5H8M9.111 6.667v0C9.726 6.05 9.291 5 8.421 5h-.143"
              ></path>
              <path
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.111 3.333v0c.615.615.18 1.667-.69 1.667h-.143"
              ></path>
            </svg>{" "}
            {t("otpPage.reciveCodeAgian")}
          </p>
          <button
            onClick={() => {
              changePage("/main");
            }}
            className="bg-[#0095da] py-4 text-white rounded-md"
          >
            {t("otpPage.OkGo")}
          </button>
          <Button2 />
        </div>
      </div>
    </div>
  );
};

export default Otp;
