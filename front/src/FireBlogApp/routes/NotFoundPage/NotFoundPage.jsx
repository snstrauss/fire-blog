import S from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <div className={S.container}>
      <h1 className={S.emoji}>🤔</h1>
      <h1>hmm...</h1>
      <p>I'm sure it was somewhere here...</p>
    </div>
  );
}
