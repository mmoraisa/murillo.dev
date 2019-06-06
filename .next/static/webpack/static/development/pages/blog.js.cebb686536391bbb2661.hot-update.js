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
  }, [initialized, stateLocale]);
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
    }, "body{background:#f8f8f8;}h1{margin:20px 0;font-size:60px;text-align:center;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;font-family:stolzl,sans-serif;font-weight:700;font-style:normal;-webkit-background-clip:text;}.blog__posts{width:900px;margin:auto auto 70px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}@media screen and (max-width:970px){.blog__posts{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0YrQixBQUlvQyxBQUlMLEFBYUYsQUFVQyxXQUNiLENBVjJCLEVBYlosS0FKakIsVUFLb0IsVUFhTCxRQVpLLGtCQUMwQyxnREFZdEMsWUFYSixrQkFDWSw4QkFDZCxnQkFDRSxFQVNLLGdCQVJNLDZCQUMvQixnRUFRQSIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCB7IENPTlRFTlRGVUxfU1BBQ0VfSUQsIENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIH0gZnJvbSAnLi4vZGVmYXVsdHMvQ29udGVudGZ1bEtleXMnO1xuaW1wb3J0IEJsb2dQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QnO1xuaW1wb3J0IExBTkdVQUdFUywgeyBERUZBVUxUX0xBTkdVQUdFIH0gZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2VzJztcbmltcG9ydCAqIGFzIExhbmd1YWdlIGZyb20gJy4uL2RlZmF1bHRzL0xhbmd1YWdlJztcblxuY29uc3QgQmxvZyA9ICh7IHJvdXRlciB9KSA9PiB7XG5cbiAgY29uc3QgW2luaXRpYWxpemVkLCBzZXRJbml0aWFsaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RhdGVMb2NhbGUsIHNldFN0YXRlTG9jYWxlXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5sb2NhbGUgfHwgREVGQVVMVF9MQU5HVUFHRSk7XG5cbiAgbGV0IHNldExvY2FsZUZuO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIXJvdXRlci5xdWVyeS5sb2NhbGUpIHtcblxuICAgICAgY29uc3QgbG9jYWxlID0gKFxuICAgICAgICBMQU5HVUFHRVMuaW5jbHVkZXMod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSlcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgIDogREVGQVVMVF9MQU5HVUFHRVxuICAgICAgKTtcblxuICAgICAgc2V0TG9jYWxlRm4obG9jYWxlKTtcbiAgICAgIHNldFN0YXRlTG9jYWxlKGxvY2FsZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICAgIGFjY2Vzc1Rva2VuOiBDT05URU5URlVMX0FDQ0VTU19UT0tFTlxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxuICAgICAgb3JkZXI6ICctc3lzLmNyZWF0ZWRBdCcsXG4gICAgICBsb2NhbGU6IHN0YXRlTG9jYWxlLFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHNldFBvc3RzKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnbGFuZycsXG4gICAgICBzdGF0ZUxvY2FsZVxuICAgICk7XG5cbiAgfSwgW2luaXRpYWxpemVkLCBzdGF0ZUxvY2FsZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICB7KHsgdHJhbnNsYXRpb24sIHNldExvY2FsZSB9KSA9PiB7XG5cbiAgICAgICAgc2V0TG9jYWxlRm4gPSBzZXRMb2NhbGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT5NdXJpbGxvIGRlIE1vcmFpcyAtIEJsb2c8L3RpdGxlPlxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGksIEknbSBNdXJpbGxvLCBhIGZ1bGxzdGFjayBwcm9ncmFtbWVyIHdpdGggYSBsb3Qgb2YgZXhwZXJpZW5jZXMgaW4gd2ViIGRldmVsb3BtZW50LiBJbiB0aGlzIHBlcnNvbmFsIHBhZ2UgSSBzaGFyZSBzb21lIGtub3dsZWRnZXMgYW5kIHRlY2hub2xvZ3kgbmV3cy5cIiAvPlxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGksIEknbSBNdXJpbGxvLCBhIGZ1bGxzdGFjayBwcm9ncmFtbWVyIHdpdGggYSBsb3Qgb2YgZXhwZXJpZW5jZXMgaW4gd2ViIGRldmVsb3BtZW50LiBJbiB0aGlzIHBlcnNvbmFsIHBhZ2UgSSBzaGFyZSBzb21lIGtub3dsZWRnZXMgYW5kIHRlY2hub2xvZ3kgbmV3cy5cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGgxPkJsb2c8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19wb3N0c1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zdHMubWFwKChwb3N0LCBpKSA9PlxuICAgICAgICAgICAgICAgICAgPEJsb2dQb3N0XG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG5cbiAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM0Q0I4QzQsIzNDRDNBRCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5ibG9nX19wb3N0cyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvIDcwcHggYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xuXG4gICAgICAgICAgICAgICAgLmJsb2dfX3Bvc3RzIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKX1cbiAgICAgIH1cbiAgICA8L0xhbmd1YWdlLkNvbnN1bWVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nKTtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/blog.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Blog));

/***/ })

})
//# sourceMappingURL=blog.js.cebb686536391bbb2661.hot-update.js.map