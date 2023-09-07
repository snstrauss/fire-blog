import { makeNamespacedTypography } from "../../components/Typography/Typography";
import S from "./NotFoundPage.module.scss";

const NotFoundText = makeNamespacedTypography('not_found');

export default function NotFoundPage() {
  return (
    <div className={S.container}>
      <h1 className={S.emoji}>🤔</h1>
      <NotFoundText path="title" role="h1" bold />
      <NotFoundText path="subtitle" />
    </div>
  );
}
