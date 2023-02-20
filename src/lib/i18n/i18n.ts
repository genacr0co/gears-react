import {initReactI18next} from 'react-i18next';
import i18n from "i18next";

i18n
    .use(initReactI18next)
    .init({
            lng: JSON.parse(localStorage.getItem('language')!),
            fallbackLng: 'en'
        }
    )

export default i18n;