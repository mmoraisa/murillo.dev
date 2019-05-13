import Link from 'next/link';

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href="blog">blog</Link>
    <Link prefetch as="/post/1" href={`/post?slug=${"1"}`}>teste</Link>
  </div>
);

export default Index
