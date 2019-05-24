webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");
/* harmony import */ var _components_posts_Author__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/posts/Author */ "./components/posts/Author/index.js");











var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var errorCode = _ref.errorCode,
      post = _ref.post,
      router = _ref.router;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_8___default.a.init();
  }, []);

  if (errorCode) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_6___default.a, {
      statusCode: errorCode
    });
  }

  var publishDate = post.fields.publishDate;
  var dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})T(?<hour>[0-9]{2}):(?<minute>[0-9]{2})/;
  var publishDateGroups = publishDate.match(dateRegexp).groups;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "post",
    "data-aos": "fade-up"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "post__header"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "post__image",
    src: "https:".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb")
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, post.fields.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "post__content__publish-date"
  }, "".concat(publishDateGroups.month, "/").concat(publishDateGroups.day, "/").concat(publishDateGroups.year, " at ").concat(publishDateGroups.hour, ":").concat(publishDateGroups.minute)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "post__content__description"
  }, post.fields.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: post.fields.body
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "post__content__footer"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "post__tags"
  }, post.fields.tags.join(', ')), post.fields.source && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "post__source"
  }, "Source: ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: post.fields.source,
    target: "_blank"
  }, post.fields.source))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_Author__WEBPACK_IMPORTED_MODULE_10__["default"], {
    author: post.fields.author,
    responsiveStyles: [{
      screen: 900,
      style: "margin: 0"
    }],
    styles: "margin: 70px 70px 70px calc(50% - 430px);"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", null, "\n\n        h1,\n        h2,\n        h3 {\n          font-family: stolzl, sans-serif;\n          font-weight: 700;\n          font-style: normal;\n        }\n\n        h1 {\n          margin: 0;\n          font-size: 50px;\n          line-height: 50px;\n          background-image: linear-gradient(to bottom, #4CB8C4, #3CD3AD);\n          color: transparent;\n          -webkit-background-clip: text;\n          min-height: 60px;\n        }\n\n        .post {\n          padding: 20px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n\n        .post__header {\n          margin-left: -575px;\n        }\n\n        .post__header__title {\n          height: 110px;\n          margin-left: 150px;\n          margin-top: 175px;\n          position: absolute;\n          background-color: #ffffff;\n          padding: 15px 0 0 25px;\n          display: flex;\n          width: 525px;\n          align-items: center;\n        }\n\n        .post__image {\n          width: 300px;\n          border-radius: 20px;\n          box-shadow: 2px 2px 20px rgba(0,0,0,.2);\n        }\n\n        .post__content {\n          color: rgba(0,0,0,.84);\n          font-family: medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n          font-weight: 100;\n          font-size: 16px;\n          line-height: 22px;\n          width: 600px;\n          margin: -130px 0 0 150px;\n          padding: 60px;\n          background: #fff;\n          box-shadow: 3px 3px 30px rgba(0,0,0,.1);\n          border-radius: 10px;\n          text-rendering: optimizeLegibility;\n          -webkit-font-smoothing: antialiased;\n          word-break: break-word;\n        }\n\n        .post__content__publish-date {\n          font-family: arial;\n          font-size: 11px;\n          color: #bbbbbb;\n        }\n\n        .post__content__description {\n          margin: 0 0 30px 0;\n          font-weight: 700;\n        }\n\n        .post__content__footer {\n          display: flex;\n          justify-content: space-between;\n          margin-top: 50px;\n          align-items: center;\n          color: #a0a0a0;\n        }\n\n        .post__source {\n          text-transform: lowercase;\n          font-size: 12px;\n          text-align: right;\n        }\n\n        .post__source a {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        @media screen and (max-width: 900px) {\n\n          h1 {\n            font-size: 36px;\n            line-height: 36px;\n            margin: 0;\n            min-height: initial;\n          }\n\n          .post__header {\n            position: sticky;\n            left: 20px;\n          }\n\n          .post__content {\n            font-size: 14px;\n            width: calc(100% - 50px);\n            margin: -130px 0 0 0;\n            padding: 20px;\n            z-index: 1;\n          }\n\n        }\n\n      "));
});

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, slug, client, entries;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            slug = query.slug;
            client = Object(contentful__WEBPACK_IMPORTED_MODULE_4__["createClient"])({
              space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_9__["CONTENTFUL_SPACE_ID"],
              accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_9__["CONTENTFUL_ACCESS_TOKEN"]
            });
            _context.next = 5;
            return client.getEntries({
              content_type: 'blogPost',
              'fields.slug[in]': slug
            });

          case 5:
            entries = _context.sent;
            return _context.abrupt("return", {
              post: entries.items[0]
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.26037f8580e91fc5dc69.hot-update.js.map