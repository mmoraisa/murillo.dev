import Link from 'next/link';

const Header = () => {
  return (
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
      </ul>
    </nav>
  )
};

export default Header;
