import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  //to detect user browser default language
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    //override LanguageDetector
    lng: localStorage.getItem("i18nextLng") || "en",
    interpolation: { escapeValue: false },
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;
