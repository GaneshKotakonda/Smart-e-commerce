import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json"
const resources = {
  en: {
    translation:en
  },
  ar: {
   
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "translation",
    ns: ["translation"],
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
