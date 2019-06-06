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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");
/* harmony import */ var _components_posts_BlogPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/posts/BlogPost */ "./components/posts/BlogPost/index.js");
/* harmony import */ var _defaults_Languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../defaults/Languages */ "./defaults/Languages.js");
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../defaults/Language */ "./defaults/Language.js");












var Blog = function Blog(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      posts = _useState4[0],
      setPosts = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(router.query.locale || _defaults_Languages__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_LANGUAGE"]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      stateLocale = _useState6[0],
      setStateLocale = _useState6[1];

  var setLocaleFn;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!router.query.locale) {
      var locale = _defaults_Languages__WEBPACK_IMPORTED_MODULE_9__["default"].includes(window.navigator.language) ? window.navigator.language : _defaults_Languages__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_LANGUAGE"];
      setLocaleFn(locale);
      setStateLocale(locale);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var client = Object(contentful__WEBPACK_IMPORTED_MODULE_4__["createClient"])({
      space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_7__["CONTENTFUL_SPACE_ID"],
      accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_7__["CONTENTFUL_ACCESS_TOKEN"]
    });
    client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
      locale: stateLocale
    }).then(function (response) {
      setPosts(response.items);
    });
    document.documentElement.setAttribute('lang', stateLocale);
  }, [stateLocale]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_10__["Consumer"], null, function (_ref2) {
    var translation = _ref2.translation,
        setLocale = _ref2.setLocale;
    setLocaleFn = setLocale;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
      className: "jsx-1051386925"
    }, "Murillo de Morais - Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "description",
      content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
      className: "jsx-1051386925"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "og:description",
      content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
      className: "jsx-1051386925"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
      className: "jsx-1051386925"
    }, "Blog"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1051386925" + " " + "blog__posts"
    }, posts.map(function (post, i) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_BlogPost__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: i,
        index: i,
        post: post
      });
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1051386925"
    }, "body{background:#f8f8f8;}h1{margin:20px 0;font-size:60px;text-align:center;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;font-family:stolzl,sans-serif;font-weight:700;font-style:normal;-webkit-background-clip:text;}.blog__posts{width:900px;margin:auto auto 70px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}@media screen and (max-width:970px){.blog__posts{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0YrQixBQUlvQyxBQUlMLEFBYUYsQUFVQyxXQUNiLENBVjJCLEVBYlosS0FKakIsVUFLb0IsVUFhTCxRQVpLLGtCQUMwQyxnREFZdEMsWUFYSixrQkFDWSw4QkFDZCxnQkFDRSxFQVNLLGdCQVJNLDZCQUMvQixnRUFRQSIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCB7IENPTlRFTlRGVUxfU1BBQ0VfSUQsIENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIH0gZnJvbSAnLi4vZGVmYXVsdHMvQ29udGVudGZ1bEtleXMnO1xuaW1wb3J0IEJsb2dQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QnO1xuaW1wb3J0IExBTkdVQUdFUywgeyBERUZBVUxUX0xBTkdVQUdFIH0gZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2VzJztcbmltcG9ydCAqIGFzIExhbmd1YWdlIGZyb20gJy4uL2RlZmF1bHRzL0xhbmd1YWdlJztcblxuY29uc3QgQmxvZyA9ICh7IHJvdXRlciB9KSA9PiB7XG5cbiAgY29uc3QgW2luaXRpYWxpemVkLCBzZXRJbml0aWFsaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RhdGVMb2NhbGUsIHNldFN0YXRlTG9jYWxlXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5sb2NhbGUgfHwgREVGQVVMVF9MQU5HVUFHRSk7XG5cbiAgbGV0IHNldExvY2FsZUZuO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIXJvdXRlci5xdWVyeS5sb2NhbGUpIHtcblxuICAgICAgY29uc3QgbG9jYWxlID0gKFxuICAgICAgICBMQU5HVUFHRVMuaW5jbHVkZXMod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSlcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgIDogREVGQVVMVF9MQU5HVUFHRVxuICAgICAgKTtcblxuICAgICAgc2V0TG9jYWxlRm4obG9jYWxlKTtcbiAgICAgIHNldFN0YXRlTG9jYWxlKGxvY2FsZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICAgIGFjY2Vzc1Rva2VuOiBDT05URU5URlVMX0FDQ0VTU19UT0tFTlxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxuICAgICAgb3JkZXI6ICctc3lzLmNyZWF0ZWRBdCcsXG4gICAgICBsb2NhbGU6IHN0YXRlTG9jYWxlLFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHNldFBvc3RzKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnbGFuZycsXG4gICAgICBzdGF0ZUxvY2FsZVxuICAgICk7XG5cbiAgfSwgW3N0YXRlTG9jYWxlXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIHsoeyB0cmFuc2xhdGlvbiwgc2V0TG9jYWxlIH0pID0+IHtcblxuICAgICAgICBzZXRMb2NhbGVGbiA9IHNldExvY2FsZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPk11cmlsbG8gZGUgTW9yYWlzIC0gQmxvZzwvdGl0bGU+XG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIaSwgSSdtIE11cmlsbG8sIGEgZnVsbHN0YWNrIHByb2dyYW1tZXIgd2l0aCBhIGxvdCBvZiBleHBlcmllbmNlcyBpbiB3ZWIgZGV2ZWxvcG1lbnQuIEluIHRoaXMgcGVyc29uYWwgcGFnZSBJIHNoYXJlIHNvbWUga25vd2xlZGdlcyBhbmQgdGVjaG5vbG9neSBuZXdzLlwiIC8+XG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIaSwgSSdtIE11cmlsbG8sIGEgZnVsbHN0YWNrIHByb2dyYW1tZXIgd2l0aCBhIGxvdCBvZiBleHBlcmllbmNlcyBpbiB3ZWIgZGV2ZWxvcG1lbnQuIEluIHRoaXMgcGVyc29uYWwgcGFnZSBJIHNoYXJlIHNvbWUga25vd2xlZGdlcyBhbmQgdGVjaG5vbG9neSBuZXdzLlwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aDE+QmxvZzwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX3Bvc3RzXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QsIGkpID0+XG4gICAgICAgICAgICAgICAgICA8QmxvZ1Bvc3RcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgICAgICAgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcblxuICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzRDQjhDNCwjM0NEM0FEKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJsb2dfX3Bvc3RzIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gNzBweCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XG5cbiAgICAgICAgICAgICAgICAuYmxvZ19fcG9zdHMge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApfVxuICAgICAgfVxuICAgIDwvTGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJsb2cpO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/blog.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Blog));

/***/ })

})
//# sourceMappingURL=blog.js.ffc06ba4a0c8da70a61f.hot-update.js.map