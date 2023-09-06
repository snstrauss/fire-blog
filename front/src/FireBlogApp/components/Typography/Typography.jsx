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
  role: PropTypes.oneOf(["body", "h1", "h2", "h3"]),
};

export function makeNamespacedTypography(namespace) {
  function NameSpacedTypography({ path, className, role, bold }) {
    return (
      <Typography
        namespace={namespace}
        path={path}
        className={className}
        role={role}
        bold={bold}
      />
    );
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
}) {
  const { text: allTranslations } = useContext(LocalisationContext);
  const texts = useLocalisation(namespace);

  const textToRender = useMemo(
    () =>
      path in texts ? texts[path] : allTranslations.misc.errors.missing_text,
    [path, texts, allTranslations]
  );

  const textClassname = `${S.text} ${className} role-${role} ${
    bold ? "bold" : ""
  }`;

  return <span className={textClassname}>{textToRender}</span>;
}

Typography.propTypes = typographyPropTypes;
