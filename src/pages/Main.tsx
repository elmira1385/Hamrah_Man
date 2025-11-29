import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Chart from "react-apexcharts";
import png1 from "../image/1.jpg";
import png2 from "../image/2.jpg";
import png3 from "../image/3.jpg";
import png4 from "../image/4.jpg";

const Main = () => {
  const { t } = useTranslation();
  const options1 = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#4e4e4e",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "11px",
            color: "#848484",
          },
          value: {
            show: true,
            color: "#848484",
            fontSize: "12px",
          },
        },
      },
    },
    labels: [t("mainPage.thereIsNo")], // برچسب نمودار
  };
  const options2 = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#4e4e4e",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "11px",
            color: "#848484",
          },
          value: {
            show: true,
            color: "#848484",
            fontSize: "12px",
          },
        },
      },
    },
    labels: [t("mainPage.thereIs")], // برچسب نمودار
  };
  const options3 = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#4e4e4e",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "11px",
            color: "#848484",
          },
          value: {
            show: true,
            color: "#848484",
            fontSize: "12px",
          },
        },
      },
    },
    labels: [t("mainPage.thereIs")], // برچسب نمودار
  };

  const series1 = [0]; // مقدار درصدی که نمایش داده میشه
  const series2 = [30]; // مقدار درصدی که نمایش داده میشه
  const series3 = [50]; // مقدار درصدی که نمایش داده میشه

  return (
    <div className="p-4 bg-gray-100 h-full flex flex-col gap-4">
      <div className="flex gap-2">
        <div className="bg-white p-2 rounded-lg flex gap-14 items-center">
          <div className="flex justify-center items-center gap-2">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 12h16"
              ></path>
              <g
                stroke="#374151"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M4 6h16M4 18h16"></path>
              </g>
            </svg>
            <span className="text-[14px] ">{t("mainPage.number")}</span>
          </div>
          <div>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 9l6 6 3-3"
              ></path>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 9l-1.5 1.5M6 9l4.586 4.586a2 2 0 002.828 0L15 12"
              ></path>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 9l-1.5 1.5"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-white p-2 rounded-lg ">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7 5c0 1.105.96 2 2.143 2H12s.143-4-2.857-4C7.959 3 7 3.895 7 5zM17.143 5c0 1.105-.96 2-2.143 2h-2.857S12 3 15 3c1.183 0 2.143.895 2.143 2z"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 12v4.998a4 4 0 01-4 4H7a4 4 0 01-4-4V12m18 0v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1m18 0h-7M3 12h7"
            ></path>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M14 21V7zM10 21V7z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="bg-white p-2 rounded-lg relative">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              fill="#B6C2CF"
              d="M5.25 18.884a.725.725 0 01-.534-.215.726.726 0 01-.216-.535c0-.212.072-.39.216-.534a.726.726 0 01.534-.215h1.058V9.923c0-1.345.415-2.534 1.245-3.567a5.517 5.517 0 013.197-1.983V3.75c0-.347.121-.642.364-.885.243-.244.538-.365.885-.365s.642.122.885.365c.244.243.366.538.366.885v.623a5.517 5.517 0 013.197 1.983c.83 1.033 1.245 2.222 1.245 3.567v7.462h1.058c.212 0 .39.072.534.215a.726.726 0 01.216.535c0 .212-.072.39-.216.534a.726.726 0 01-.534.215H5.25zm6.748 2.808c-.497 0-.923-.177-1.276-.53a1.742 1.742 0 01-.53-1.277h3.616c0 .498-.177.924-.532 1.277-.354.354-.78.53-1.278.53zm-4.19-4.307h8.384V9.923c0-1.158-.409-2.146-1.228-2.964C14.146 6.14 13.159 5.73 12 5.73s-2.146.41-2.964 1.228c-.819.818-1.228 1.806-1.228 2.964v7.462z"
            ></path>
          </svg>
          <div className="absolute flex justify-center items-center bg-red-500 text-[6px] text-white w-3 h-3 rounded-full top-2 right-2">
            10
          </div>
        </div>
        <div className="bg-white p-2 rounded-lg">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#9FADBC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.333 10.889a4.444 4.444 0 01-4.444 4.444M10.889 19.778a8.889 8.889 0 118.889-8.89m-8.89 8.89a8.861 8.861 0 006.31-2.628 8.86 8.86 0 002.58-6.261m-8.89 8.889a8.848 8.848 0 004.74-1.368c.94-.593 2.207-.616 2.99.174L22 22m-2.222-11.111c0 1.73-.495 3.345-1.35 4.711-.583.93-.607 2.18.165 2.96L22 22m0 0l-4.82-4.831"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between p-3 gap-2 items-center bg-white rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full gap-2 bg-linear-to-tr from-[#F76B1C] to-[#FAD961] p-0.75">
            <img
              className="h-[66px] w-[66px] rounded-full border-3 border-white object-cover"
              src={png1}
              alt=""
            />
          </div>
          <span className="text-[13px]">{t("mainPage.title1")}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full gap-2 bg-linear-to-tr from-[#F76B1C] to-[#FAD961] p-0.75">
            <img
              className="h-[66px] w-[66px] rounded-full border-3 border-white object-cover"
              src={png2}
              alt=""
            />
          </div>
          <span className="text-[13px] ">{t("mainPage.title2")}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full gap-2 bg-linear-to-tr from-[#F76B1C] to-[#FAD961] p-0.75">
            <img
              className="h-[66px] w-[66px] rounded-full border-3 border-white object-cover"
              src={png3}
              alt=""
            />
          </div>
          <span className="text-[13px]">{t("mainPage.title3")}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full gap-2 bg-linear-to-tr from-[#F76B1C] to-[#FAD961] p-0.75">
            <img
              className="h-[66px] w-[66px] rounded-full border-3 border-white object-cover"
              src={png4}
              alt=""
            />
          </div>
          <span className="text-[13px]">{t("mainPage.title4")}</span>
        </div>
      </div>
      <div className="flex bg-white  rounded-lg">
        <div className="flex flex-col  justify-center items-center">
          <span className="pt-4 px-2 text-[14px] text-gray-600">
            {t("mainPage.chart1")}
          </span>
          <Chart
            options={options1}
            series={series1}
            type="radialBar"
            height={130}
            width={120}
          />
        </div>
        <div className="flex flex-col  justify-center items-center">
          <span className="pt-4 px-2 text-[14px] text-gray-600">
            {t("mainPage.chart2")}
          </span>
          <Chart
            options={options2}
            series={series2}
            type="radialBar"
            height={130}
            width={120}
          />
        </div>
        <div className="flex flex-col  justify-center items-center">
          <span className="pt-4 px-2 text-[14px] text-gray-600">
            {t("mainPage.chart3")}
          </span>
          <Chart
            options={options3}
            series={series3}
            type="radialBar"
            height={130}
            width={120}
          />
        </div>
      </div>
      <div className="flex bg-white justify-between items-center rounded-lg p-4">
        <div className="flex flex-col gap-1 ">
          <p className="text-[12px]">{t("mainPage.lastChar")}:</p>
          <p className="text-[12px]">
            168.568
            <span className="text-gray-600"> {t("mainPage.uniqueV")}</span>
          </p>
        </div>
        <button className="text-[14px] bg-[#ff4f00] p-2 rounded-lg text-white">
          {t("mainPage.buycharch")}
        </button>
      </div>
      <div className="flex bg-white justify-between items-center rounded-lg p-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-2 border rounded-md border-gray-300">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fit=""
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.5 11h-.202c-.82 0-1.596-.373-2.11-1.014l-2.377-2.972A2.702 2.702 0 008.701 6H8.5A2.5 2.5 0 006 8.5v0A2.5 2.5 0 008.5 11h.202c.82 0 1.596-.373 2.11-1.014l2.377-2.972A2.701 2.701 0 0115.299 6h.201A2.5 2.5 0 0118 8.5v0a2.5 2.5 0 01-2.5 2.5z"
              ></path>
              <g
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M16.5 21h.5a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h.5M9 17.068L12 14m0 0l3 3.068M12 14v6"></path>
                <path d="M15 17l-.78-.78c-.82-.82-2.22-.24-2.22.919V18.5M9 17l.78-.78c.82-.82 2.22-.24 2.22.919V21"></path>
              </g>
            </svg>
          </div>
          <p className="text-[11px] text-gray-600">
            {t("mainPage.becomeAlways")}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-2 border rounded-md border-gray-300">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fit=""
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.5 9v6L8 13"
              ></path>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.5 9v3.503c0 1.006-1.164 1.566-1.95.937L8 13M13.5 15V9l2.5 2"
              ></path>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.5 15v-3.503c0-1.006 1.164-1.566 1.95-.937L16 11"
              ></path>
              <path
                stroke="#0095da"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.572 3.349a5 5 0 014.856 0l4 2.222A5 5 0 0121 9.942v4.116a5 5 0 01-2.572 4.37l-4 2.223a5 5 0 01-4.856 0l-4-2.222A5 5 0 013 14.058V9.942a5 5 0 012.572-4.37l4-2.223z"
              ></path>
            </svg>
          </div>
          <p className="text-[11px] text-gray-600">{t("mainPage.chart2")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-2 border rounded-md border-gray-300">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fit=""
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <circle
                cx="7"
                cy="19"
                r="2"
                stroke="#ff4f00"
                strokeLinejoin="round"
                strokeWidth="1.5"
                transform="rotate(-90 7 19)"
              ></circle>
              <circle
                cx="15.5"
                cy="2.5"
                r="1.5"
                stroke="#ff4f00"
                strokeLinejoin="round"
                strokeWidth="1.5"
                transform="rotate(-90 15.5 2.5)"
              ></circle>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.424 16.094c-.612-.708-.56-1.625.148-2.617.707-.993 2.034-2.01 3.788-2.905 1.753-.894 3.843-1.619 5.965-2.07 2.123-.45 4.168-.603 5.84-.436 1.672.167 2.884.645 3.46 1.365.576.72.486 1.645-.256 2.64-.742.995-2.099 2.01-3.873 2.896-1.635.816-3.546 1.485-5.496 1.925"
              ></path>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.798 13.776c-.466.1-.921.167-1.34.196-.417.029-.79.02-1.097-.027-.307-.046-.541-.13-.69-.244-.148-.116-.208-.26-.176-.426.032-.167.155-.35.363-.543a4.16 4.16 0 01.848-.576 8.751 8.751 0 011.203-.522c.443-.156.91-.288 1.376-.389.466-.1.921-.167 1.34-.196.417-.029.79-.02 1.097.027.307.046.541.13.69.245.148.115.209.26.177.426-.033.166-.156.35-.364.542a4.163 4.163 0 01-.848.576 8.757 8.757 0 01-1.203.522c-.443.156-.91.288-1.376.389h0z"
              ></path>
            </svg>
          </div>
          <p className="text-[11px] text-gray-600">{t("mainPage.offer")}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-2 border rounded-md border-gray-300">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fit=""
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 19.5a2.5 2.5 0 002.5-2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 00-2.5-2.5z"
              ></path>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.239 18.913a.937.937 0 10-1.326 1.326.937.937 0 001.326-1.326zM5 5a2 2 0 002-2 2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2z"
              ></path>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7.59 4.53a.75.75 0 10-1.06 1.061.75.75 0 001.06-1.06z"
              ></path>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.055 2.93l.578-.455a2.205 2.205 0 012.734 0l.578.455c.41.323.917.49 1.436.474l.732-.023a2.225 2.225 0 012.204 1.62l.211.738c.143.5.454.934.88 1.228l.625.434a2.257 2.257 0 01.837 2.606l-.26.738a2.267 2.267 0 000 1.51l.26.738c.271.766.107 1.602-.393 2.201M3.967 7.401a2.257 2.257 0 00-.837 2.606l.26.738a2.266 2.266 0 010 1.51l-.26.738c-.34.96.004 2.03.837 2.606l.626.434c.425.294.736.728.879 1.228l.21.738a2.225 2.225 0 002.205 1.62l.732-.023a2.208 2.208 0 011.436.474l.578.455c.402.317.884.475 1.367.475M14.5 9.5l-5 5M9.5 14.5l2.938-2.938c.76-.76 2.062-.222 2.062.855v0"
              ></path>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.5 14.5l2.938-2.938c.76-.76.222-2.062-.855-2.062v0"
              ></path>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.334 9.5H14.5v4.167"
              ></path>
            </svg>
          </div>
          <p className="text-[11px] text-gray-600">
            {t("mainPage.admire")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
