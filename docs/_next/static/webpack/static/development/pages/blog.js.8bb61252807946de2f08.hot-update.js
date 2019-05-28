webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");
/* harmony import */ var _components_posts_BlogPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/posts/BlogPost */ "./components/posts/BlogPost/index.js");









var Blog = function Blog() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var client = Object(contentful__WEBPACK_IMPORTED_MODULE_3__["createClient"])({
      space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_6__["CONTENTFUL_SPACE_ID"],
      accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_6__["CONTENTFUL_ACCESS_TOKEN"]
    });
    client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt'
    }).then(function (response) {
      setPosts(response.items);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-1839021350"
  }, "Murillo de Morais - Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-1839021350"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "og:description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-1839021350"
  })), "Blogs", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1839021350" + " " + "blog__posts"
  }, posts.map(function (post, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_BlogPost__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      index: i,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1839021350"
  }, "body{background:#f8f8f8;}.blog__posts{width:900px;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0N5QixBQUk4QixBQUlQLFlBQ0EsT0FKZCxLQUtlLDBFQUNTLDhFQUNDLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCB7IENPTlRFTlRGVUxfU1BBQ0VfSUQsIENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIH0gZnJvbSAnLi4vZGVmYXVsdHMvQ29udGVudGZ1bEtleXMnO1xuaW1wb3J0IEJsb2dQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QnO1xuXG5jb25zdCBCbG9nID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6IENPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gICAgICBhY2Nlc3NUb2tlbjogQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU5cbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICAgIG9yZGVyOiAnLXN5cy5jcmVhdGVkQXQnXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgc2V0UG9zdHMocmVzcG9uc2UuaXRlbXMpO1xuICAgIH0pO1xuXG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXVyaWxsbyBkZSBNb3JhaXMgLSBCbG9nPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpLCBJJ20gTXVyaWxsbywgYSBmdWxsc3RhY2sgcHJvZ3JhbW1lciB3aXRoIGEgbG90IG9mIGV4cGVyaWVuY2VzIGluIHdlYiBkZXZlbG9wbWVudC4gSW4gdGhpcyBwZXJzb25hbCBwYWdlIEkgc2hhcmUgc29tZSBrbm93bGVkZ2VzIGFuZCB0ZWNobm9sb2d5IG5ld3MuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpLCBJJ20gTXVyaWxsbywgYSBmdWxsc3RhY2sgcHJvZ3JhbW1lciB3aXRoIGEgbG90IG9mIGV4cGVyaWVuY2VzIGluIHdlYiBkZXZlbG9wbWVudC4gSW4gdGhpcyBwZXJzb25hbCBwYWdlIEkgc2hhcmUgc29tZSBrbm93bGVkZ2VzIGFuZCB0ZWNobm9sb2d5IG5ld3MuXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIEJsb2dzXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX3Bvc3RzXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QsIGkpID0+XG4gICAgICAgICAgICA8QmxvZ1Bvc3RcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2dfX3Bvc3RzIHtcbiAgICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/blog.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.8bb61252807946de2f08.hot-update.js.map