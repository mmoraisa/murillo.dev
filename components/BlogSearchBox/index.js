import React, { Fragment } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import BlogSearchPoweredBy from '../BlogSearchPoweredBy';

const BlogSearchBox = ({ currentRefinement, refine }) => (
  <Fragment>
    <form noValidate action="" role="search">
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        placeholder="search in blog..."
      />
      <BlogSearchPoweredBy />
    </form>
    <style jsx>{`

      input[type="search"] {
        background: transparent;
        color: #687e98;
        font-family: stolzl,sans-serif;
        font-size: 16px;
        width: 315px;
        margin-right: 10px;
        padding: 0 0 10px 0;
        border: none;
      }

      input[type="search"]:active,
      input[type="search"]:focus {
        outline: none;
      }

      @media screen and (max-width: 650px) {

        input[type="search"] {
          margin: 0;
          text-align: center;
        }

      }

    `}</style>
  </Fragment>
);

export default connectSearchBox(BlogSearchBox);
