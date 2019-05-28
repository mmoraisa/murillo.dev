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
    className: "jsx-3819270017"
  }, "Murillo de Morais - Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-3819270017"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "og:description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-3819270017"
  })), "Blogs", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3819270017" + " " + "blog__posts"
  }, posts.concat(posts, posts).map(function (post, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_BlogPost__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      index: i,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3819270017"
  }, ".blog__posts.jsx-3819270017{width:900px;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUl1QixZQUNBLFlBQ0MsMEVBQ1MsOEVBQ0MsNkdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9ICBmcm9tICdjb250ZW50ZnVsJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L21haW4nO1xuaW1wb3J0IHsgQ09OVEVOVEZVTF9TUEFDRV9JRCwgQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9kZWZhdWx0cy9Db250ZW50ZnVsS2V5cyc7XG5pbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cy9CbG9nUG9zdCc7XG5cbmNvbnN0IEJsb2cgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICAgIGFjY2Vzc1Rva2VuOiBDT05URU5URlVMX0FDQ0VTU19UT0tFTlxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxuICAgICAgb3JkZXI6ICctc3lzLmNyZWF0ZWRBdCdcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBzZXRQb3N0cyhyZXNwb25zZS5pdGVtcyk7XG4gICAgfSk7XG5cbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NdXJpbGxvIGRlIE1vcmFpcyAtIEJsb2c8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGksIEknbSBNdXJpbGxvLCBhIGZ1bGxzdGFjayBwcm9ncmFtbWVyIHdpdGggYSBsb3Qgb2YgZXhwZXJpZW5jZXMgaW4gd2ViIGRldmVsb3BtZW50LiBJbiB0aGlzIHBlcnNvbmFsIHBhZ2UgSSBzaGFyZSBzb21lIGtub3dsZWRnZXMgYW5kIHRlY2hub2xvZ3kgbmV3cy5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGksIEknbSBNdXJpbGxvLCBhIGZ1bGxzdGFjayBwcm9ncmFtbWVyIHdpdGggYSBsb3Qgb2YgZXhwZXJpZW5jZXMgaW4gd2ViIGRldmVsb3BtZW50LiBJbiB0aGlzIHBlcnNvbmFsIHBhZ2UgSSBzaGFyZSBzb21lIGtub3dsZWRnZXMgYW5kIHRlY2hub2xvZ3kgbmV3cy5cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgQmxvZ3NcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19fcG9zdHNcIj5cbiAgICAgICAge1xuICAgICAgICAgIHBvc3RzLmNvbmNhdChwb3N0cyxwb3N0cykubWFwKChwb3N0LCBpKSA9PlxuICAgICAgICAgICAgPEJsb2dQb3N0XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuYmxvZ19fcG9zdHMge1xuICAgICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/blog.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.b37455fbe7af66c28ac4.hot-update.js.map