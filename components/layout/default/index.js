import Head from 'next/head';

const Default = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://use.typekit.net/yvy5dkt.css" />
    </Head>
    <style jsx global>{`
      html, body {
        min-height: 100vh;
        width: 100%;
        padding: 10px;
        margin: 0;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
      }
    `}</style>
    { children }
  </div>
);

export default Default;
