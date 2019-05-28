webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/posts/BlogPost/index.js":
/*!********************************************!*\
  !*** ./components/posts/BlogPost/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DoubleBlogPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoubleBlogPost */ "./components/posts/BlogPost/DoubleBlogPost.js");
/* harmony import */ var _TripleBlogPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TripleBlogPost */ "./components/posts/BlogPost/TripleBlogPost.js");




var BlogPost = function BlogPost(_ref) {
  var index = _ref.index,
      post = _ref.post;
  return (index + 1) % 3 === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TripleBlogPost__WEBPACK_IMPORTED_MODULE_2__["default"], {
    post: post
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DoubleBlogPost__WEBPACK_IMPORTED_MODULE_1__["default"], {
    even: index % 2 !== 0,
    post: post
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.e9cf775a8c1048476681.hot-update.js.map