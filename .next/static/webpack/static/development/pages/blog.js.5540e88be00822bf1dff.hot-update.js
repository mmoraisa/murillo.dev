webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/TopBar/index.js":
/*!************************************!*\
  !*** ./components/TopBar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _BlogSearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BlogSearchBox */ "./components/BlogSearchBox/index.js");
/* harmony import */ var _BlogSearchHit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BlogSearchHit */ "./components/BlogSearchHit/index.js");
/* harmony import */ var _BlogSearchResults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BlogSearchResults */ "./components/BlogSearchResults/index.js");
/* harmony import */ var _defaults_AlgoliaKeys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../defaults/AlgoliaKeys */ "./defaults/AlgoliaKeys.js");











var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()(_defaults_AlgoliaKeys__WEBPACK_IMPORTED_MODULE_9__["ALGOLIA_APPLICATION_ID"], _defaults_AlgoliaKeys__WEBPACK_IMPORTED_MODULE_9__["ALGOLIA_API_KEY"]);

var TopBar = function TopBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      searchIsLoading = _useState4[0],
      setSearchIsLoading = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2455782255" + " " + "top-bar"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: "jsx-2455782255"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-2455782255"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-2455782255"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2455782255"
  }, "home"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-2455782255"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2455782255"
  }, "blog"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["InstantSearch"], {
    searchClient: searchClient,
    indexName: "posts",
    onSearchStateChange: function onSearchStateChange(_ref) {
      var query = _ref.query;
      return setQuery(query);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["Configure"], {
    hitsPerPage: 4,
    distinct: true
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BlogSearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setIsLoading: setSearchIsLoading
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BlogSearchResults__WEBPACK_IMPORTED_MODULE_8__["default"], {
    query: query
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2455782255" + " " + "blog-search-box__hits"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["Hits"], {
    hitComponent: _BlogSearchHit__WEBPACK_IMPORTED_MODULE_7__["default"]
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2455782255"
  }, ".top-bar.jsx-2455782255{background:#ffffff7a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:-webkit-sticky;position:sticky;top:0;z-index:1;-webkit-transition:.3s all ease;transition:.3s all ease;}.top-bar.jsx-2455782255:hover{background:#fff;}nav.jsx-2455782255{width:300px;}ul.jsx-2455782255{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-2455782255{display:block;margin-right:20px;}a.jsx-2455782255{font-family:stolzl,sans-serif;font-weight:300;font-size:14px;color:#0a2544;-webkit-text-decoration:none;text-decoration:none;}.blog-search-box__hits.jsx-2455782255{position:absolute;top:50px;right:5px;}@media screen and (max-width:650px){.blog-search-box__hits.jsx-2455782255{top:90px;left:5px;}.top-bar.jsx-2455782255{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding-bottom:10px;}ul.jsx-2455782255{padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvVG9wQmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEa0IsQUFJZ0MsQUFXTCxBQUlKLEFBSUMsQUFLQyxBQUtpQixBQVFiLEFBUVAsQUFLYSxBQVFaLFNBWkQsQ0FhWCxFQTNDRixFQVNvQixFQWJwQixFQTBCVyxBQVNULEdBOUNhLE1Bc0NILEdBVE0sRUFKbEIsS0FjQSxTQVRpQixlQUNELGFBWkssQ0FhRSxHQWtCSSxpQkFqRE4sOEJBZ0NyQiwwQ0FiQSxVQStCdUIsV0FqRFMsa0ZBa0RqQixXQUNTLG9CQUN0QixFQW5EZ0Isd0NBQ1YsTUFDSSxVQUNjLHdEQUMxQiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL1RvcEJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoL2xpdGUnO1xuaW1wb3J0IHsgQ29uZmlndXJlLCBJbnN0YW50U2VhcmNoLCBIaXRzIH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xuaW1wb3J0IEJsb2dTZWFyY2hCb3ggZnJvbSAnLi4vQmxvZ1NlYXJjaEJveCc7XG5pbXBvcnQgQmxvZ1NlYXJjaEhpdCBmcm9tICcuLi9CbG9nU2VhcmNoSGl0JztcbmltcG9ydCBCbG9nU2VhcmNoUmVzdWx0cyBmcm9tICcuLi9CbG9nU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgeyBBTEdPTElBX0FQUExJQ0FUSU9OX0lELCBBTEdPTElBX0FQSV9LRVkgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9BbGdvbGlhS2V5cyc7XG5cbmNvbnN0IHNlYXJjaENsaWVudCA9IGFsZ29saWFzZWFyY2goQUxHT0xJQV9BUFBMSUNBVElPTl9JRCwgQUxHT0xJQV9BUElfS0VZKTtcblxuY29uc3QgVG9wQmFyID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoSXNMb2FkaW5nLCBzZXRTZWFyY2hJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+YmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPEluc3RhbnRTZWFyY2hcbiAgICAgICAgICBzZWFyY2hDbGllbnQ9e3NlYXJjaENsaWVudH1cbiAgICAgICAgICBpbmRleE5hbWU9XCJwb3N0c1wiXG4gICAgICAgICAgb25TZWFyY2hTdGF0ZUNoYW5nZT17KHsgcXVlcnkgfSkgPT4gc2V0UXVlcnkocXVlcnkpfT5cbiAgICAgICAgICA8Q29uZmlndXJlXG4gICAgICAgICAgICBoaXRzUGVyUGFnZT17NH1cbiAgICAgICAgICAgIGRpc3RpbmN0XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QmxvZ1NlYXJjaEJveCBzZXRJc0xvYWRpbmc9e3NldFNlYXJjaElzTG9hZGluZ30vPlxuICAgICAgICAgIDxCbG9nU2VhcmNoUmVzdWx0cyBxdWVyeT17cXVlcnl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1ib3hfX2hpdHNcIj5cbiAgICAgICAgICAgICAgPEhpdHMgaGl0Q29tcG9uZW50PXtCbG9nU2VhcmNoSGl0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9CbG9nU2VhcmNoUmVzdWx0cz5cbiAgICAgICAgPC9JbnN0YW50U2VhcmNoPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY3YTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcC1iYXI6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzBhMjU0NDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtYm94X19oaXRzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuXG4gICAgICAgICAgLmJsb2ctc2VhcmNoLWJveF9faGl0cyB7XG4gICAgICAgICAgICB0b3A6IDkwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/TopBar/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./components/header/index.js":
false,

/***/ "./components/layout/main/index.js":
/*!*****************************************!*\
  !*** ./components/layout/main/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TopBar */ "./components/TopBar/index.js");



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=blog.js.5540e88be00822bf1dff.hot-update.js.map