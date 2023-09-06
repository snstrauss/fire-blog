import S from "./Button.module.scss";
import PropTypes from "prop-types";

export default function Button({ children, className = "", onClick }) {
  return <button className={`${S.button} ${className}`} onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};
