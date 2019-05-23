import Head from 'next/head';

const Default = ({ children }) => (
  <div>
    <Head>
      <title>Murillo de Morais - Personal Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news." />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://use.typekit.net/yvy5dkt.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
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
