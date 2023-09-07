import S from './ErrorState.module.scss';
import { makeNamespacedTypography } from '../Typography/Typography';

const ErrorTexts = makeNamespacedTypography("misc.errors");

export default function ErrorState() {
  return (
    <div className={S.errorState}>
      <div className={S.emoji}>😳</div>
      <ErrorTexts path="data_not_found" role="h2" />
    </div>
  );
}