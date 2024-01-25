import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  kr: {
    translation: {
      "Welcome to React": "환영합니다 React 와 react-i18next",
    },
  },
};

i18n
  .use(initReactI18next) //
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
