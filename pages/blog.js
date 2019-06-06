import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router'
import { createClient }  from 'contentful';
import Head from 'next/head';
import Layout from '../components/layout/main';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../defaults/ContentfulKeys';
import BlogPost from '../components/posts/BlogPost';
import { DEFAULT_LANGUAGE } from '../defaults/Languages';

const Blog = ({ router }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const client = createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN
    });

    client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
      locale: router.query.locale || DEFAULT_LANGUAGE,
    })
    .then(function(response) {
      setPosts(response.items);
    });

    document.documentElement.setAttribute(
      'lang',
      router.query.locale || DEFAULT_LANGUAGE
    );

  }, []);


  return (
    <Layout>
      <Head>
        <title>Murillo de Morais - Blog</title>
        <meta name="description" content="Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news." />
        <meta name="og:description" content="Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news." />
      </Head>
      <h1>Blog</h1>
      <div className="blog__posts">
        {
          posts.map((post, i) =>
            <BlogPost
              key={i}
              index={i}
              post={post} />
          )
        }
      </div>
      <style global jsx>{`

        body {
          background: #f8f8f8;
        }

        h1 {
          margin: 20px 0;
          font-size: 60px;
          text-align: center;
          line-height: 115px;
          background-image: linear-gradient(to bottom,#4CB8C4,#3CD3AD);
          color: transparent;
          font-family: stolzl,sans-serif;
          font-weight: 700;
          font-style: normal;
          -webkit-background-clip: text;
        }

        .blog__posts {
          width: 900px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media screen and (max-width: 970px) {

          .blog__posts {
            width: 100%;
          }

        }

      `}</style>
    </Layout>
  );
};

export default withRouter(Blog);
