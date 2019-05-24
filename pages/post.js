import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { createClient }  from 'contentful';
import ReactMarkdown from 'react-markdown';
import Error from 'next/error';
import Layout from '../components/layout/main';
import AOS from 'aos';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../defaults/ContentfulKeys';
import Author from '../components/posts/Author';

const Post = withRouter(({ errorCode, post, router }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  if(errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const publishDate = post.fields.publishDate;
  const dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})T(?<hour>[0-9]{2}):(?<minute>[0-9]{2})/;

  const publishDateGroups = publishDate.match(dateRegexp).groups;

  return (
    <Fragment>
      <Head>
        <title>{post.fields.title} - Murillo de Morais Blog</title>
        <meta name="description" content={post.fields.metaDescription} />
        <meta name="og:description" content={post.fields.metaDescription} />
      </Head>
      <Layout>
        <div className="post"
              data-aos="fade-up">
          <div className="post__header">
            <img
              className="post__image"
              alt={post.fields.heroImage.fields.title}
              src={`https:${post.fields.heroImage.fields.file.url}?w=300&h=300&fit=thumb`} />
          </div>
          <div className="post__content">
            <h1>{post.fields.title}</h1>
            <span className="post__content__publish-date">{`${publishDateGroups.month}/${publishDateGroups.day}/${publishDateGroups.year} at ${publishDateGroups.hour}:${publishDateGroups.minute}`}</span>
            <p className="post__content__description">{post.fields.description}</p>
            <ReactMarkdown source={post.fields.body} />
            <div className="post__content__footer">
              <div className="post__tags">{post.fields.tags.join(', ')}</div>
              {
                post.fields.source &&
                <div className="post__source">
                  Source: <a href={post.fields.source} target="_blank">{post.fields.source}</a>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="show-more" data-aos="fade-up">
          <h3>Did you liked!? So why don't you see more news and articles like this on my blog?</h3>
          <span>There you can learn more about the world of technology and its news</span>
          <Link href="/blog">
            <button>View blog</button>
          </Link>
        </div>
        <Author
          data-aos-anchor=".show-more"
          author={post.fields.author}
          smallScreenStyles="margin: auto; float: none"
          styles="margin: 70px 20px 70px 0; float: right;" />
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

        .post__content__publish-date {
          font-family: arial;
          font-size: 11px;
          color: #bbbbbb;
        }

        .post__content__description {
          margin: 0 0 30px 0;
          font-weight: 700;
        }

        .post__content__footer {
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
          align-items: center;
          color: #a0a0a0;
        }

        .post__source {
          text-transform: lowercase;
          font-size: 12px;
          text-align: right;
        }

        .post__source a {
          color: inherit;
          text-decoration: none;
        }

        .show-more {
          color: rgba(0,0,0,.84);
          width: calc(30vw - 40px);
          height: calc(35vw - 40px);
          margin: 20px;
          padding: 20px;
          float: right;
          margin-right: calc(50% - 450px);
        }

        .show-more h3 {
          font-size: 22px;
          margin: 0 0 5px 0;
        }

        .show-more * {
          font-family: stolzl,sans-serif;
        }

        .show-more button {
          background: #2d6ae3;
          padding: 10px 40px 10px 20px;
          font-size: 18px;
          color: #ffffff;
          display: block;
          margin: 20px 0 0 0;
          border-radius: 5px;
          transition: .3s all ease;
          cursor: pointer;
        }

        .show-more button:hover {
          transform: scale(1.15);
          box-shadow: 5px 5px 20px rgba(0,0,0,.3);
        }

        .show-more button:focus,
        .show-more button:active {
          outline: none;
        }

        @media screen and (max-width: 900px) {

          h1 {
            font-size: 36px;
            line-height: 36px;
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

          .show-more {
            float: none;
            width: calc(100% - 80px);
            height: initial;
            margin: 20px 0 40px 20px;
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
