import Layout from '../components/layout/main';
import Typed from 'react-typed';

const Index = () => (
  <Layout>
    <div className="hero">
      <div className="hero__texts">
        <Typed
          strings={['Desenvolvimento', 'Arquitetura', 'Soluções', 'Inovação']}
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
        display: flex;
      }

      .hero__texts {
        width: 600px;
      }

      @media screen and (max-width: 640px) {

        h1 {
          font-size: 19vw;
          line-height: 19vw;
        }

      }
    `}</style>
  </Layout>
);

export default Index
