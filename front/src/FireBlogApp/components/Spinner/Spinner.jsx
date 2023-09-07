import S from "./Spinner.module.scss";

export default function Spinner() {
  return (
    <div className={S.fireSpinner}>
      <div className={S.flames}>
        <div className={S.flame}></div>
        <div className={S.flame}></div>
        <div className={S.flame}></div>
        <div className={S.flame}></div>
      </div>
      <div className={S.logs}></div>
    </div>
  );
}
