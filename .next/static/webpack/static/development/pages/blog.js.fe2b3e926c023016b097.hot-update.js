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
  index++;

  if (index % 3 === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, index, " post multiplo de 3");
  } else if (index % 2 === 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, index, " post multiplo de 2");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, index, " post");
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.fe2b3e926c023016b097.hot-update.js.map