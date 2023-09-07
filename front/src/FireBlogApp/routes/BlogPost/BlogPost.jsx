import { useEffect, useState } from "react";
import S from "./BlogPost.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { makeApiCall } from "../../hooks/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorState from "../../components/ErrorState/ErrorState";
import Typography, {
  makeNamespacedTypography,
} from "../../components/Typography/Typography";
import PropTypes from "prop-types";

export default function BlogPost() {
  const postParams = useParams();
  const { state } = useLocation();

  const { error, pending, postData, authorData } = usePostData(
    postParams,
    state
  );

  const { title, body } = postData;

  const paragraphs = body ? body.split("\n") : [];

  return (
    <div className={S.blogPost}>
      {error ? (
        <ErrorState />
      ) : pending && !body ? (
        <Spinner />
      ) : (
        <>
          <Typography className={S.title} override={title} role="title" />
          {paragraphs.map((text, i) => (
            <Typography
              key={text}
              className={S.paragraph}
              override={text}
              styleParams={{ "--delay-index": i }}
            />
          ))}
          {authorData.name && <AuthorDetails {...authorData} />}
        </>
      )}
    </div>
  );
}

const AuthorDetailsText = makeNamespacedTypography("blog_post.author_details");
function AuthorDetails({ name, email }) {
  return (
    <div className={S.authorDetails}>
      <AuthorDetailsText
        path="write_author"
        replace={{ name, email }}
        role="h2"
      />
    </div>
  );
}

AuthorDetails.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

function usePostData({ authorId, id }, receivedState) {
  const { title, body } = receivedState ? receivedState : {};

  const [postData, setPostData] = useState({
    title,
    body,
  });
  const [authorData, setAuthorData] = useState({});
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPending(true);
    setError(false);

    Promise.all([makeApiCall(`users/${authorId}`), makeApiCall(`posts/${id}`)])
      .then(([authorData, postData]) => {
        setAuthorData(authorData);
        setPostData(postData);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setPending(false);
      });
  }, [authorId, id]);

  return {
    pending,
    error,
    postData,
    authorData,
  };
}
