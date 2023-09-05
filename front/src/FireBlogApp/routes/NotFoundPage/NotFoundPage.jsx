import S from "./NotFoundPage.module.scss";
import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const { statusText, message } = useRouteError();

  return (
    <div className={S.container}>
      <h1 className={S.emoji}>🤔</h1>
      <h1>hmm...</h1>
      <p>I'm sure it was somewhere here...</p>
      <p className={S.statusText}>{statusText || message}</p>
    </div>
  );
}
