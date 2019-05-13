module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/post/1': { page: '/post', query: { slug: 1 } },
      '/post/2': { page: '/post', query: { slug: 2 } },
    }
  }
};
