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
    className: "jsx-3340452942"
  }, "Murillo de Morais - Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-3340452942"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "og:description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-3340452942"
  })), "Blogs", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3340452942" + " " + "blog__posts"
  }, posts.concat(posts, posts).map(function (post, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_BlogPost__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      index: i,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3340452942"
  }, ".blog__posts.jsx-3340452942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUl3QiwwRUFDVSxtR0FDekIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gIGZyb20gJ2NvbnRlbnRmdWwnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBDT05URU5URlVMX1NQQUNFX0lELCBDT05URU5URlVMX0FDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2RlZmF1bHRzL0NvbnRlbnRmdWxLZXlzJztcbmltcG9ydCBCbG9nUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzL0Jsb2dQb3N0JztcblxuY29uc3QgQmxvZyA9ICgpID0+IHtcblxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiBDT05URU5URlVMX1NQQUNFX0lELFxuICAgICAgYWNjZXNzVG9rZW46IENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgICBjb250ZW50X3R5cGU6ICdibG9nUG9zdCcsXG4gICAgICBvcmRlcjogJy1zeXMuY3JlYXRlZEF0J1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHNldFBvc3RzKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcblxuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk11cmlsbG8gZGUgTW9yYWlzIC0gQmxvZzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIaSwgSSdtIE11cmlsbG8sIGEgZnVsbHN0YWNrIHByb2dyYW1tZXIgd2l0aCBhIGxvdCBvZiBleHBlcmllbmNlcyBpbiB3ZWIgZGV2ZWxvcG1lbnQuIEluIHRoaXMgcGVyc29uYWwgcGFnZSBJIHNoYXJlIHNvbWUga25vd2xlZGdlcyBhbmQgdGVjaG5vbG9neSBuZXdzLlwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIaSwgSSdtIE11cmlsbG8sIGEgZnVsbHN0YWNrIHByb2dyYW1tZXIgd2l0aCBhIGxvdCBvZiBleHBlcmllbmNlcyBpbiB3ZWIgZGV2ZWxvcG1lbnQuIEluIHRoaXMgcGVyc29uYWwgcGFnZSBJIHNoYXJlIHNvbWUga25vd2xlZGdlcyBhbmQgdGVjaG5vbG9neSBuZXdzLlwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICBCbG9nc1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19wb3N0c1wiPlxuICAgICAgICB7XG4gICAgICAgICAgcG9zdHMuY29uY2F0KHBvc3RzLHBvc3RzKS5tYXAoKHBvc3QsIGkpID0+XG4gICAgICAgICAgICA8QmxvZ1Bvc3RcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5ibG9nX19wb3N0cyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/blog.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.d4c0afe9762bfc3f6cd7.hot-update.js.map