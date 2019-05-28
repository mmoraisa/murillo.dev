import React from 'react';
import DoubleBlogPost from './DoubleBlogPost';
import TripleBlogPost from './TripleBlogPost';

const BlogPost = ({ index, post }) => (
  index % 2 !== 0
  ? <DoubleBlogPost even={true} post={post} />
  : (
    (index + 1) % 3 === 0
    ? <TripleBlogPost post={post} />
    : <DoubleBlogPost even={false} post={post} />
  )
);

export default BlogPost;
