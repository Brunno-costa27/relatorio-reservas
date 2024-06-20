import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from '../locale/en.json'
import ptTranslation from '../locale/pt.json'



const resources = {
  en: {
      ...enTranslation
    },
  pt: {
      ...ptTranslation
    },

};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "pt-br", 
  });

  export default i18n;