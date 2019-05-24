import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'next/router';
import { createClient }  from 'contentful';
import ReactMarkdown from 'react-markdown';
import Error from 'next/error';
import Layout from '../components/layout/main';
import AOS from 'aos';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../defaults/ContentfulKeys';

const Post = withRouter(({ errorCode, post, router }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  if(errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <Fragment>
      <Layout>
        <div className="post"
              data-aos="fade-up">
          <div className="post__header">
            <img
              className="post__image"
              src={`https:${post.fields.heroImage.fields.file.url}?w=300&h=300&fit=thumb`} />
          </div>
          <div className="post__content">
            <h1>{post.fields.title}</h1>
            <p className="post__content__description">{post.fields.description}</p>
            <ReactMarkdown source={post.fields.body} />
            {
              post.fields.source &&
              <div className="post__source">
                Source: <a href={post.fields.source} target="_blank">{post.fields.source}</a>
              </div>
            }
          </div>
          <div className="post__author">Sobre o autor: {JSON.stringify(post.fields.author)}</div>
          <div className="post__tags">{post.fields.tags.join(', ')}</div>
        </div>
      </Layout>
      <style jsx>{`

        h1,
        h2,
        h3 {
          font-family: stolzl, sans-serif;
          font-weight: 700;
          font-style: normal;
        }

        h1 {
          margin: 0;
          font-size: 50px;
          line-height: 50px;
          background-image: linear-gradient(to bottom, #4CB8C4, #3CD3AD);
          color: transparent;
          -webkit-background-clip: text;
          min-height: 60px;
        }

        .post {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .post__header {
          margin-left: -575px;
        }

        .post__header__title {
          height: 110px;
          margin-left: 150px;
          margin-top: 175px;
          position: absolute;
          background-color: #ffffff;
          padding: 15px 0 0 25px;
          display: flex;
          width: 525px;
          align-items: center;
        }

        .post__image {
          width: 300px;
          border-radius: 20px;
          box-shadow: 2px 2px 20px rgba(0,0,0,.2);
        }

        .post__content {
          color: rgba(0,0,0,.84);
          font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
          font-weight: 100;
          font-size: 16px;
          line-height: 22px;
          width: 600px;
          margin: -130px 0 0 150px;
          padding: 60px;
          background: #fff;
          box-shadow: 3px 3px 30px rgba(0,0,0,.1);
          border-radius: 10px;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          word-break: break-word;
        }

        .post__content__description {
          margin: 10px 0 30px 0;
          font-weight: 700;
        }

        .post__source {
          color: #bfbfbf;
          text-transform: lowercase;
          font-size: 12px;
          text-align: right;
          margin-top: 40px;
        }

        .post__source a {
          color: inherit;
          text-decoration: none;
        }

        @media screen and (max-width: 900px) {

          h1 {
            font-size: 36px;
            margin: 0;
            min-height: initial;
          }

          .post__header {
            position: sticky;
            left: 20px;
          }

          .post__content {
            font-size: 14px;
            width: calc(100% - 50px);
            margin: -130px 0 0 0;
            padding: 20px;
            z-index: 1;
          }

        }

      `}</style>
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
