webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/posts/BlogPost/DoubleBlogPost.js":
/*!*****************************************************!*\
  !*** ./components/posts/BlogPost/DoubleBlogPost.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var DoubleBlogPost = function DoubleBlogPost(_ref) {
  var even = _ref.even;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post ".concat(even ? 'even' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__description"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__image"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ }),

/***/ "./components/posts/BlogPost/TripleBlogPost.js":
/*!*****************************************************!*\
  !*** ./components/posts/BlogPost/TripleBlogPost.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TripleBlogPost = function TripleBlogPost() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__description"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__video"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ }),

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
  index++;

  if (index % 3 === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TripleBlogPost__WEBPACK_IMPORTED_MODULE_2__["default"], {
      post: post
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DoubleBlogPost__WEBPACK_IMPORTED_MODULE_1__["default"], {
    even: index % 2 === 0,
    post: post
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.09502cce5d6c244be87d.hot-update.js.map