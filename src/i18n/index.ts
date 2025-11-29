import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "../Fonts/Webfonts/fontiran.css";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      loginPage: {
        register: "register",
        login: "login",
      },
    },
  },
  fa: {
    translation: {
      loginPage: {
        register: "ثبت نام",
        login: "ورود",
        hiPleaseEnterYourPhoneNumber:
          "سلام،لطفا شماره‌ تلفن  همراه خود را وارد کنید.",
        placeholder: "تلفن همراه",
        error: "تلفن همراه لازم است.",
        button1: "تائید و دریافت کد",
        button2: "ورود با رمز عبور",
      },
      otpPage: {
        enterOkCode: "کد تائید را وارد کنید",
        sendACodeToThisNumber: "کد 5 رقمی به شماره‌ی 09109306236 ارسال شد",
        hiPleaseEnterYourPhoneNumber:
          "سلام،لطفا شماره‌ تلفن  همراه خود را وارد کنید.",
        reciveCodeAgian: "دریافت مجدد کد تائید",
        OkGo:"تائید و ادامه"
      },
      mainPage: {
        number: "09109306236",
        title1: "خدمات",
        title2: "شارژ",
        title3: "قرعه کشی",
        title4: "اینترنت",
        chart1: "مکالمه",
        chart2: "اینترنت",
        chart3: "پیامک",
        thereIsNo: "بسته  ندارید",
        thereIs: "بسته  دارید",
        lastChar:"باقی مانده ی شارژ",
        uniqueV:"ریال",
        buycharch:"خرید شارژ",
        becomeAlways:"تبدیل به دائمی",
        offer:"پیشنهاد",
        admire:"تشویق",
        
       
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
