import React, { Fragment } from 'react';
import { connectPoweredBy } from 'react-instantsearch-dom';
import * as Language from '../../defaults/Language';

const BlogSearchPoweredBy = () => {
  return (
    <Fragment>
      <Language.Consumer>
        {({ translation }) => (
          <div className="blog-search-powered-by">
            {`${translation.topBar.searchPoweredBy} `}<a href="https://www.algolia.com" target="_blank">Algolia</a>
          </div>
        )}
      </Language.Consumer>
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

        @media screen and (max-width: 650px) {

          .blog-search-powered-by {
            text-align: center;
            position: initial;
          }


        }

      `}</style>
    </Fragment>
  );
};

export default connectPoweredBy(BlogSearchPoweredBy);
