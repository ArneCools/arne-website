import '@/styles/globals.css'
import '@/styles/particles.scss'
import type { AppProps } from 'next/app'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from '@/locales/en/translations.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationsEN
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
