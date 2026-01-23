import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import de from './locales/de.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      de: { translation: de }
    },
    fallbackLng: 'en', // English is primary market (foreign buyers)
    supportedLngs: ['en', 'es', 'de'],
    
    detection: {
      order: ['path', 'querystring', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0,
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
