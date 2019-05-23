webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/BlogSearchResults/index.js":
/*!***********************************************!*\
  !*** ./components/BlogSearchResults/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");



var BlogSearchResults = function BlogSearchResults(_ref) {
  var searchState = _ref.searchState,
      searchResults = _ref.searchResults,
      children = _ref.children;

  if (searchResults && searchResults.nbHits !== 0) {
    return children;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["React"].createElement("div", null, "No results has been found for ", searchState.query, " and index", ' ', searchResults ? searchResults.index : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectStateResults"])(BlogSearchResults));

/***/ })

})
//# sourceMappingURL=blog.js.7b61d55f9dcb3cc3a877.hot-update.js.map