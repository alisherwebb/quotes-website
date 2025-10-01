import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      welcome: "Xush kelibsiz bizning yangi loyihamizga!",
      "ro'yhatdan o'tish": "Ro'yhatdan O'tish",
      kirish: "Kirish",
      chiqishToast: "Muvaffaqiyatli chiqildi!",
      chiqishyakunlanmadi: "Chiqib ketilmadi",
      Tilmuvoffaqiyatliozgartirildi: "Til muvaffaqiyatli o'zgartirildi",
    },
  },
  en: {
    translation: {
      welcome: "Welcome to our new Project",
      "ro'yhatdan o'tish": "Sign Up",
      kirish: "Enter",
      chiqishToast: "Logout succesfully",
      chiqishToast: "Log out",
      Tilmuvoffaqiyatliozgartirildi: "Language changed successfully",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать в наш новый проект",
      "ro'yhatdan o'tish": "Регистрация",
      kirish: "Войти",
      chiqishToast: "Вы успешно вышли",
      chiqishyakunlanmadi: "He удалось выйти",
      Tilmuvoffaqiyatliozgartirildi: "Язык успешно изменeн",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
