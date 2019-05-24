import { Fragment, useEffect } from 'react';
import { withRouter } from 'next/router';
import { createClient }  from 'contentful';
import Error from 'next/error';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../defaults/ContentfulKeys';

const Post = withRouter(({ errorCode, post, router }) => {

  if(errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Fragment>
      <h1>{router.query.slug}</h1>
      <p>{JSON.stringify(post.fields)}</p>
    </Fragment>
  );
});

Post.getInitialProps = async ({ query }) => {
  const { slug } = query;

  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
  });

  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug[in]': slug,
  });

  return {
    post: entries.items[0]
  };
}

export default Post;
