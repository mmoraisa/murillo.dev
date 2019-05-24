import { useEffect, useState } from 'react';
import Head from 'next/head';
import Typed from 'react-typed';
import Link from 'next/link';
import AOS from 'aos';
import Parallax from 'parallax-js';
import { createClient }  from 'contentful';
import Layout from '../components/layout/main';
import HeadlinePost from '../components/posts/HeadlinePost';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../defaults/ContentfulKeys';

const Index = () => {

  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    const client = createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN
    });

    client.getEntries({
      content_type: 'blogPost',
      limit: 3,
      order: '-sys.createdAt'
    })
    .then(function(response) {
      setLatestPosts(response.items);
    });

  }, [Parallax]);

  let showingLatestPosts = latestPosts;

  return (
    <Layout>
      <Head>
        <title>Murillo de Morais - Personal Page</title>
        <meta name="description" content="Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news." />
        <meta name="og:description" content="Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news." />
      </Head>
      <div className="hero">
        <div className="hero__texts">
          <Typed
            strings={['Architecture', 'Development', 'Digital Solutions', 'Innovation', 'Technology']}
            style={{
              color: '#092545',
              fontFamily: 'stolzl, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '33px',
              marginLeft: '10px',
            }}
            typeSpeed={100}
          />
          <h1>Murillo de Morais</h1>
        </div>
        <div id="scene">
          <div data-depth="0.2">
            <img
              alt="Developer Image - Layer 1"
              src="https://s3.amazonaws.com/murillo.dev/site/hero-img-1.png" />
          </div>
          <div data-depth="0.5">
            <img
              alt="Developer Image - Layer 2"
              src="https://s3.amazonaws.com/murillo.dev/site/hero-img-2.png" />
          </div>
          <div data-depth="0.9">
            <img
              alt="Developer Image - Layer 3"
              src="https://s3.amazonaws.com/murillo.dev/site/hero-img-3.png" />
          </div>
        </div>
      </div>
      <div className="latest-posts">
        <h2 data-aos="fade-up">Latest<br/>Posts</h2>
        <ul>
          {
            showingLatestPosts.splice(0, 2).map(post => (
              <HeadlinePost
                key={post.sys.id}
                description={post.fields.description}
                imageUrl={post.fields.heroImage.fields.file.url}
                slug={post.fields.slug}
                tags={post.fields.tags}
                title={post.fields.title}
                />
            ))
          }
          <div className="latest-posts__show-more" data-aos="fade-up">
            <h3>Interested!? So why do not you join my blog?</h3>
            <span>There you can learn more about the world of technology and its news</span>
            <Link href="blog">
              <button>View blog</button>
            </Link>
          </div>
          {
            showingLatestPosts.map(post => (
              <HeadlinePost
                key={post.sys.id}
                description={post.fields.description}
                imageUrl={post.fields.heroImage.fields.file.url}
                slug={post.fields.slug}
                tags={post.fields.tags}
                title={post.fields.title}
                />
            ))
          }
        </ul>
      </div>
      <style jsx>{`
        h1,
        h2,
        h3 {
          font-family: stolzl, sans-serif;
          font-weight: 700;
          font-style: normal;
        }

        h1 {
          margin: 20px 0 0 0;
          font-size: 120px;
          text-align: right;
          line-height: 115px;
          background-image: linear-gradient(to bottom, #4CB8C4, #3CD3AD);
          color: transparent;
          -webkit-background-clip: text;
        }

        h2 {
          font-size: 28px;
          margin: 0 0 10px 10px;
        }

        .latest-posts h2 {
          font-size: 60px;
          line-height: 50px;
          margin: 10px;
          text-align: right;
          padding: 0 40px 0 calc(40px + 15%);
          display: inline-block;
          background-image: linear-gradient(to bottom,#4CB8C4,#3CD3AD);
          color: transparent;
          -webkit-background-clip: text;
        }

        .latest-posts ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 30px 15%;
        }

        .latest-posts__show-more {
          color: rgba(0,0,0,.84);
          width: calc(30vw - 40px);
          height: calc(35vw - 40px);
          margin: 20px;
          padding: 20px;
        }

        .latest-posts__show-more h3 {
          font-size: 22px;
          margin: 0 0 5px 0;
        }

        .latest-posts__show-more * {
          font-family: stolzl,sans-serif;
        }

        .latest-posts__show-more button {
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

        .latest-posts__show-more button:hover {
          transform: scale(1.15);
          box-shadow: 5px 5px 20px rgba(0,0,0,.3);
        }

        .latest-posts__show-more button:focus,
        .latest-posts__show-more button:active {
          outline: none;
        }

        .hero {
          height: calc(100vh - 75px);
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 50px;
        }

        .hero__texts {
          width: 600px;
        }

        #scene {
          text-align: center;
          position: absolute;
          z-index: -1;
          opacity: .15;
          margin-top: -20vh;
        }

        #scene img {
          width: 70%;
        }

        @media screen and (max-width: 640px) {

          .hero {
            padding: 0;
          }

          h1 {
            font-size: 18vw;
            line-height: 18vw;
          }

        }

        @media screen and (max-width: 900px) {

          .latest-posts ul {
            margin-top: -20px;
            padding: 20px;
          }

          .latest-posts__show-more {
            width: 100%;
            height: initial;
            margin: 20px;
            padding: 0;
            order: 1;
          }

        }
      `}</style>
    </Layout>
  );
};

export default Index
