const contentful = require('contentful');

module.exports = {
  exportPathMap: async function () {

    const client = contentful.createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN
    });

    const entries = await client.getEntries({
      content_type: 'blogPost'
    });

    let pages = {
      '/': { page: '/' },
      '/blog': { page: '/blog' }
    };

    return entries.items.reduce(
      (obj, post) => ({
        ...obj,
        [`/blog/${post.fields.slug}`]: {
          page: '/post',
          query: { slug: post.fields.slug }
        }
      }), pages);
  }
};
