import React, { Fragment, useEffect } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import BlogSearchPoweredBy from '../BlogSearchPoweredBy';
import * as Language from '../../defaults/Language';

const BlogSearchBox = ({ currentRefinement, isSearchStalled, refine, setIsLoading }) => {

  useEffect(() => {
    setIsLoading(isSearchStalled);
  }, [isSearchStalled]);

  return (
    <Fragment>
      <Language.Consumer>
        {({ locale, translation }) => (
          <form noValidate action="" onSubmit={(evt) => { evt.preventDefault() }} role="search">
            <input
              className={isSearchStalled ? '--is-search-stalled' : ''}
              type="search"
              value={currentRefinement}
              onChange={event => refine(event.currentTarget.value)}
              placeholder={translation.topBar.searchInBlog}
            />
            <BlogSearchPoweredBy />
          </form>
        )}
      </Language.Consumer>
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

        input[type="search"].--is-search-stalled {
          color: #56c6b6;
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
}

export default connectSearchBox(BlogSearchBox);
