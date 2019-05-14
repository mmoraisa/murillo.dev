import { Fragment } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <Fragment>
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
      <style jsx>{`

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

      `}</style>
    </Fragment>
  )
};

export default Header;
