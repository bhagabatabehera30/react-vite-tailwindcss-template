import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../translations/en.json';
import fr from '../translations/fr.json';
import or from '../translations/or.json';
import hi from '../translations/hi.json';
const savedLang = localStorage.getItem('i18nextLng') || 'en';
i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass to react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      or: { translation: or },
      hi: { translation: hi },
    },
    lng: savedLang,
    fallbackLng: 'en',
    detection: { 
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // will store last selected language
    },
    interpolation: {
      escapeValue: false, // react already safes from XSS
    },
  });

export default i18n;

