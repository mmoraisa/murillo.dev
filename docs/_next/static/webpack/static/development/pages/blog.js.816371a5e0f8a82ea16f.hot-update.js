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


var BlogPost = function BlogPost(_ref) {
  var index = _ref.index,
      post = _ref.post;

  if (index % 3 === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "post multiplo de 3");
  } else if (index % 2 === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "post multiplo de 2");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "post");
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.816371a5e0f8a82ea16f.hot-update.js.map