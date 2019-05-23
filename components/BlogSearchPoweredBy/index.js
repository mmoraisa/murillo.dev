import React, { Fragment } from 'react';
import { connectPoweredBy } from 'react-instantsearch-dom';

const BlogSearchPoweredBy = () => {
  return (
    <Fragment>
      <div className="blog-search-powered-by">
        Search powered by <a href="https://www.algolia.com">Algolia</a>
      </div>
      <style jsx>{`

        .blog-search-powered-by {
          font-family: stolzl,sans-serif;
          font-size: 8px;
          text-decoration: none;
          font-weight: 100;
          text-transform: uppercase;
          opacity: .5;
          position: absolute;
          margin-top: -12px;
          pointer-events: none;
        }

        .blog-search-powered-by a {
          text-decoration: none;
          color: #000;
          pointer-events: all;
        }

      `}</style>
    </Fragment>
  );
};

export default connectPoweredBy(BlogSearchPoweredBy);
