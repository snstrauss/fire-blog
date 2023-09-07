import S from "./Typography.module.scss";
import {
  LocalisationContext,
  useLocalisation,
} from "../../contexts/LocalisationProvider";
import PropTypes from "prop-types";
import { useContext, useMemo } from "react";

const typographyPropTypes = {
  namespace: PropTypes.string,
  path: PropTypes.string,
  className: PropTypes.string,
  bold: PropTypes.bool,
  replace: PropTypes.object,
  override: PropTypes.string,
  styleParams: PropTypes.object,
  role: PropTypes.oneOf(["body", "h1", "h2", "h3", "title"]),
};

export function makeNamespacedTypography(namespace) {
  function NameSpacedTypography(typographyProps) {
    return <Typography namespace={namespace} {...typographyProps} />;
  }

  NameSpacedTypography.propTypes = typographyPropTypes;

  return NameSpacedTypography;
}

export default function Typography({
  namespace = "",
  path = "",
  className = "",
  role = "body",
  bold = false,
  replace,
  override,
  styleParams = {}
}) {
  const { text: allTranslations } = useContext(LocalisationContext);
  const texts = useLocalisation(namespace);

  const textToRender = useMemo(() => {
    const text = override
      ? override
      : path in texts
      ? texts[path]
      : allTranslations.misc.errors.missing_text;

    const textWithReplacements = replace
      ? addParametersToText(text, replace)
      : text;

    return textWithReplacements;
  }, [path, texts, allTranslations, replace, override]);

  const textClassname = `${S.text} ${className} role-${role} ${
    bold ? "bold" : ""
  }`;

  return <span className={textClassname} style={styleParams}>{textToRender}</span>;
}

Typography.propTypes = typographyPropTypes;

function addParametersToText(template, replacements) {
  return Object.entries(replacements).reduce((text, [key, value]) => {
    return text.replace(`{{${key}}}`, value);
  }, template);
}
