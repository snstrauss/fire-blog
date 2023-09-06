import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import englishTranslations from "../translations/en.json";
import hebrewTranslations from "../translations/he.json";
import { nestedGet } from "../common/helpers";

export const LOCALE = {
  EN: "en",
  HE: "he",
};

const WRITING_DIRECTION = {
  LTR: "ltr",
  RTL: "rtl",
};

const RTLLocales = [LOCALE.HE];

const LOCALE_TO_TRANSLATIONS = {
  [LOCALE.EN]: englishTranslations,
  [LOCALE.HE]: hebrewTranslations,
};

export const LocalisationContext = createContext();

export function useLocalisation(namespace = "") {
  const { text, locale } = useContext(LocalisationContext);

  const missingTextProxy = useMemo(
    () =>
      new Proxy(
        {},
        {
          get() {
            return LOCALE_TO_TRANSLATIONS[locale].misc.errors.missing_text;
          },
        }
      ),
    [locale]
  );

  return nestedGet(text, namespace, missingTextProxy);
}

export default function LocalisationProvider({ children }) {
  const [selectedLocale, setSelectedLocale] = useState(LOCALE.EN);

  const writingDirection = useMemo(
    () =>
      RTLLocales.includes(selectedLocale)
        ? WRITING_DIRECTION.RTL
        : WRITING_DIRECTION.LTR,
    [selectedLocale]
  );

  const selectedLocaleTranslations = useMemo(
    () => LOCALE_TO_TRANSLATIONS[selectedLocale],
    [selectedLocale]
  );

  const layoutLocaleStyles = {
    direction: writingDirection,
  };

  const payload = {
    writingDirection,
    locale: selectedLocale,
    setLocale: setSelectedLocale,
    text: selectedLocaleTranslations,
  };

  return (
    <LocalisationContext.Provider value={payload}>
      <span style={layoutLocaleStyles}>{children}</span>
    </LocalisationContext.Provider>
  );
}

LocalisationProvider.propTypes = {
  children: PropTypes.any,
};
