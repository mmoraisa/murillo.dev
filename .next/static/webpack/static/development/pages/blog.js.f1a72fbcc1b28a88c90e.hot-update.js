webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/posts/BlogPost/index.js":
/*!********************************************!*\
  !*** ./components/posts/BlogPost/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DoubleBlogPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DoubleBlogPost */ "./components/posts/BlogPost/DoubleBlogPost.js");
/* harmony import */ var _TripleBlogPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TripleBlogPost */ "./components/posts/BlogPost/TripleBlogPost.js");






var BlogPost = function BlogPost(_ref) {
  var index = _ref.index,
      post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(post.fields.slug)
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(post.fields), (index + 1) % 3 === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TripleBlogPost__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: post
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DoubleBlogPost__WEBPACK_IMPORTED_MODULE_3__["default"], {
    even: index % 2 === 0,
    post: post
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.f1a72fbcc1b28a88c90e.hot-update.js.map