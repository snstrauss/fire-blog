import { Link } from "react-router-dom";
import S from "./BlogPostLink.module.scss";
import PropTypes from "prop-types";
import Typography from "../../components/Typography/Typography";

export default function BlogPostLink({ post, delayIndex, className }) {
  const { userId, title, body, id } = post;

  return (
    <Link
      className={`${S.link} ${className}`}
      style={{'--delay-index': delayIndex}}
      to={`/blog-post/${userId}/${id}`}
      state={{ title, body }}
    >
      <div className={S.flair}></div>
      <div className={S.titlesContainer}>
        <Typography className={S.title} override={title} bold />
        <div className={S.hoverTitle}></div>
      </div>
    </Link>
  );
}

BlogPostLink.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string,
  delayIndex: PropTypes.number
};
