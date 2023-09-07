import { Link, Outlet } from "react-router-dom";
import S from "./NavRoot.module.scss";
import Typography, {
  makeNamespacedTypography,
} from "../../components/Typography/Typography";
import { useContext } from "react";
import {
  LOCALE,
  LocalisationContext,
} from "../../contexts/LocalisationProvider";
import Button from "../../components/Button/Button";

export default function NavRoot() {
  return (
    <div className={S.layout}>
      <NavMenu />
      <div className={S.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const NavMenuText = makeNamespacedTypography("misc.nav_menu");
function NavMenu() {
  const { locale, setLocale } = useContext(LocalisationContext);

  function toggleHebrewAndEnglishLocales() {
    setLocale(locale === LOCALE.EN ? LOCALE.HE : LOCALE.EN);
  }

  return (
    <div className={S.navMenu}>
      <Link to="/">
        <div className={S.emoji}>🔥</div>
      </Link>
      <Link to="/">
        <NavMenuText path="home" />
      </Link>
      <Link to="/blog">
        <NavMenuText path="blog" />
      </Link>
      <Button
        onClick={toggleHebrewAndEnglishLocales}
        className={S.localeSwitch}
      >
        <Typography override={locale.toUpperCase()} role="h3" />
      </Button>
    </div>
  );
}

const FooterText = makeNamespacedTypography("misc.footer");
function Footer() {
  return (
    <div className={S.footer}>
      <FooterText path="legal" role="h3" /> <span>ⓒ</span>
      <hr />
    </div>
  );
}
