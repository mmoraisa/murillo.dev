webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogSearchResults/index.js":
/*!***********************************************!*\
  !*** ./components/BlogSearchResults/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");


var BlogSearchResults = function BlogSearchResults(_ref) {
  var searchState = _ref.searchState,
      searchResults = _ref.searchResults,
      children = _ref.children,
      query = _ref.query;
  console.log('searchState', searchState);
  console.log('searchResults', searchResults);

  if (searchResults && searchResults.nbHits !== 0) {
    return children;
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0__["connectStateResults"])(BlogSearchResults));

/***/ })

})
//# sourceMappingURL=index.js.abb8d69cc01ed627fa9f.hot-update.js.map