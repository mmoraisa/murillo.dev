import { useEffect } from 'react';
import Typed from 'react-typed';
import Parallax from 'parallax-js';
import Layout from '../components/layout/main';

const Index = () => {

  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }, [Parallax]);

  return (
    <Layout>
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
      <style jsx>{`
        h1,
        h2 {
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
      `}</style>
    </Layout>
  );
};

export default Index
