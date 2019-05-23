webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogSearchHit/index.js":
/*!*******************************************!*\
  !*** ./components/BlogSearchHit/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_Languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defaults/Languages */ "./defaults/Languages.js");



var BlogSearchHit = function BlogSearchHit(_ref) {
  var hit = _ref.hit;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog-search-hit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "blog-search-hit__title"
  }, hit.fields.title[_defaults_Languages__WEBPACK_IMPORTED_MODULE_1__["ENGLISH"]]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "blog-search-hit__description"
  }, hit.fields.description[_defaults_Languages__WEBPACK_IMPORTED_MODULE_1__["ENGLISH"]]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "blog-search-hit__tags"
  }, hit.fields.tags[_defaults_Languages__WEBPACK_IMPORTED_MODULE_1__["ENGLISH"]]));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogSearchHit);

/***/ })

})
//# sourceMappingURL=index.js.65c829e0ac8da5978f50.hot-update.js.map