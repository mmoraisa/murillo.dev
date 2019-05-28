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

var BlogPost = function BlogPost(_ref2) {
  var index = _ref2.index,
      post = _ref2.post;
  index++;

  if (index % 3 === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TripleBlogPost, {
      post: post
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DoubleBlogPost, {
    even: index % 2 === 0,
    post: post
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.a7516e6b7eef7bacc4cb.hot-update.js.map