webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogSearchBox/index.js":
/*!*******************************************!*\
  !*** ./components/BlogSearchBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");



var BlogSearchBox = function BlogSearchBox(_ref) {
  var currentRefinement = _ref.currentRefinement,
      refine = _ref.refine;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    noValidate: true,
    action: "",
    role: "search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "search",
    value: currentRefinement,
    onChange: function onChange(event) {
      return refine(event.currentTarget.value);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectSearchBox"])(BlogSearchBox));

/***/ })

})
//# sourceMappingURL=index.js.dc7b8dd552ca1e88d186.hot-update.js.map