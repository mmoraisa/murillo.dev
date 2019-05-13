import Head from 'next/head';

const Default = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://use.typekit.net/yvy5dkt.css" />
    </Head>
    { children }
  </div>
);

export default Default;
