import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#4CB8C4"></meta>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://use.typekit.net/yvy5dkt.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script type="javascript">{`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-1633123959556765",
              enable_page_level_ads: true
            });
          `}
          </script>
          <style>{`
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

            img {
              max-width: 100%;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
