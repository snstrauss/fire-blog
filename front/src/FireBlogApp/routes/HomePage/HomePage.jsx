import S from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import fireVideoSrc from "../../assets/video/fire.mp4";
import { makeNamespacedTypography } from "../../components/Typography/Typography";
import Button from "../../components/Button/Button";

const HomePageText = makeNamespacedTypography("home");

export default function HomePage() {
  return (
    <div className={S.homePage}>
      <div className={S.videoContainer}>
        <video src={fireVideoSrc} loop autoPlay muted />
        <div className={S.textContainer}>
          <HomePageText className={S.title} path="title" bold />
          <HomePageText className={S.subtitle} path="subtitle" role="h2" />
          <Link to="/blog">
            <Button>
              <HomePageText path="button" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
