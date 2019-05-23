import { Fragment } from 'react';
import Link from 'next/link';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import BlogSearchBox from '../BlogSearchBox';
import BlogSearchHit from '../BlogSearchHit';

const searchClient = algoliasearch('28AME38GWP', 'fb35a1582b3871a44b929c258fe2ec24');

const Header = () => {
  return (
    <Fragment>
      <div className="top-bar">
        <nav>
          <ul>
            <li>
              <Link prefetch href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/blog">
                <a>blog</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/blog">
                <a>blog</a>
              </Link>
            </li>
            <li>
              <Link prefetch href="/blog">
                <a>blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        <InstantSearch searchClient={searchClient} indexName="posts">
          <BlogSearchBox />
          <div className="blog-search-box__hits">
            <Hits hitComponent={BlogSearchHit} />
          </div>
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
          justify-content: space-between;
          align-items: center;
        }

        li {
          display: block;
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
