import S from "./Blog.module.scss";
import { makeNamespacedTypography } from "../../components/Typography/Typography";
import useApi from "../../hooks/useApi";
import Spinner from "../../components/Spinner/Spinner";
import BlogPostLink from "../../components/BlogPostLink/BlogPostLink";
import ErrorState from "../../components/ErrorState/ErrorState";

const BlogTexts = makeNamespacedTypography("blog");

export default function Blog() {
  const { data: posts, requestPending, error } = useApi("posts");

  return (
    <div className={S.blog}>
      <BlogTexts className={S.title} path="title" role="h2" bold />
      <div className={S.posts}>
        {requestPending && <Spinner />}
        {error && <ErrorState />}
        {posts &&
          posts.map((post, i) => (
            <BlogPostLink
              className={S.link}
              key={post.id}
              delayIndex={i}
              post={post}
            />
          ))}
      </div>
    </div>
  );
}
