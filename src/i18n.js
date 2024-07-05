import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Locale from "./Locale";

const resources = {
  fa: {
    translation: Locale.Fa,
  },
  en: {
    translation: Locale.En,
  },

  ar: {
    translation: Locale.Ar,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
