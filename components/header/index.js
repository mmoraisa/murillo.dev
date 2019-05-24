import { Fragment, useState } from 'react';
import Link from 'next/link';
import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch, Hits } from 'react-instantsearch-dom';
import BlogSearchBox from '../BlogSearchBox';
import BlogSearchHit from '../BlogSearchHit';
import BlogSearchResults from '../BlogSearchResults';
import { ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY } from '../../defaults/AlgoliaKeys';

const searchClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY);

const Header = () => {

  const [query, setQuery] = useState('');
  const [searchIsLoading, setSearchIsLoading] = useState(true);

  return (
    <Fragment>
      <div className="top-bar">
        <nav>
          <ul>
            <li>
              <Link prefetch href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/blog">
                <a>blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        <InstantSearch
          searchClient={searchClient}
          indexName="posts"
          onSearchStateChange={({ query }) => setQuery(query)}>
          <Configure
            hitsPerPage={4}
            distinct
          />
          <BlogSearchBox setIsLoading={setSearchIsLoading}/>
          <BlogSearchResults query={query}>
            <div className="blog-search-box__hits">
              <Hits hitComponent={BlogSearchHit} />
            </div>
          </BlogSearchResults>
        </InstantSearch>
      </div>
      <style jsx>{`

        .top-bar {
          background: #ffffff7a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 1;
          transition: .3s all ease;
        }

        .top-bar:hover {
          background: #fff;
        }

        nav {
          width: 300px;
        }

        ul {
          display: flex;
          align-items: center;
        }

        li {
          display: block;
          margin-right: 20px;
        }

        a {
          font-family: stolzl, sans-serif;
          font-weight: 300;
          font-size: 14px;
          color: #0a2544;
          text-decoration: none;
        }

        .blog-search-box__hits {
          position: absolute;
          top: 50px;
          right: 5px;
        }

        @media screen and (max-width: 650px) {

          .blog-search-box__hits {
            top: 90px;
            left: 5px;
          }

          .top-bar {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding-bottom: 10px;
          }

          ul {
            padding: 0;
          }

        }

      `}</style>
    </Fragment>
  )
};

export default Header;
