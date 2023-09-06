import { Link, Outlet } from 'react-router-dom';
import S from './NavRoot.module.scss';

export default function NavRoot() {
  return (
    <div className={S.layout}>
      <div className={S.navMenu}>
        <Link to="/">🔥</Link>
        <Link to="/">home</Link>
        <Link to="/blog">blog</Link>
      </div>
      <div className={S.content}>
        <Outlet />
      </div>
      <div className={S.footer}>
        Some stuff thats always here <span>ⓒ</span>
        <hr />
      </div>
    </div>
  );
}