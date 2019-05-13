import { Fragment } from 'react';
import { withRouter } from 'next/router';
import Error from 'next/error';

import fetch from 'isomorphic-unfetch';

const Post = withRouter(({ errorCode, post, router }) => {

  if(errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Fragment>
      <h1>{router.query.slug}</h1>
      <p>{JSON.stringify(post)}</p>
    </Fragment>
  );
});

Post.getInitialProps = async ({ query }) => {
  const { slug } = query;

    const response = await fetch(`http://5cd9d44beb39f80014a74eb4.mockapi.io/blog/posts/${slug}`);

    if(response.ok) {
      return {
        post: await response.json(),
      };
    }
    else {
      return {
        errorCode: response.status,
      };
    }
}

export default Post;
