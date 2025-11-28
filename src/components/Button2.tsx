import React from 'react'
import { useTranslation } from "react-i18next";
const Button2 = () => {
  const { t } = useTranslation();
  return (
    <button className="text-[#1f2937] py-4 flex justify-center items-center gap-2 rounded-md">
           
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.333 11.833H6M6.342 13l1.65-2.333m-1.65 0L7.992 13M13.167 11.833h-2.333M11.176 13l1.65-2.333m-1.65 0L12.826 13M18 11.833h-2.334M16.008 13l1.65-2.333m-1.65 0L17.658 13"
              ></path>
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 15V9a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3z"
              ></path>
            </svg>{" "}
            {t("loginPage.button2")}
          </button>
  )
}

export default Button2