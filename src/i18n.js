import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import ChainedBackend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import { initReactI18next } from "react-i18next";

const version = 1;
const apiKey = "OxyAYNmJ7QGgaN4D6QAauQ";
const loadPath = `https://cdn.i18nexus.com/versions/${version}/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["fa", "en"],

    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend
      ],
      backendOptions: [{
        defaultVersion: version
      }, {
        loadPath: loadPath
      }]
    }
  })