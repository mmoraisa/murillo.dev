module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/blog/1': { page: '/post', query: { slug: 1 } },
      '/blog/2': { page: '/post', query: { slug: 2 } },
    }
  }
};
