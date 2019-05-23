webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
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









var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()('28AME38GWP', 'fb35a1582b3871a44b929c258fe2ec24');

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-168129448" + " " + "top-bar"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "blog"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "blog"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "blog"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["InstantSearch"], {
    searchClient: searchClient,
    indexName: "posts",
    onSearchStateChange: function onSearchStateChange(_ref) {
      var query = _ref.query;
      return setQuery(query);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BlogSearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-168129448" + " " + "blog-search-box__hits"
  }, query && query.length && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["Hits"], {
    hitComponent: _BlogSearchHit__WEBPACK_IMPORTED_MODULE_7__["default"]
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "168129448"
  }, ".top-bar.jsx-168129448{background:#ffffff7a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:-webkit-sticky;position:sticky;top:0;z-index:1;-webkit-transition:.3s all ease;transition:.3s all ease;}.top-bar.jsx-168129448:hover{background:#fff;}nav.jsx-168129448{width:300px;}ul.jsx-168129448{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-168129448{display:block;}a.jsx-168129448{font-family:stolzl,sans-serif;font-weight:300;font-size:14px;color:#0a2544;-webkit-text-decoration:none;text-decoration:none;}.blog-search-box__hits.jsx-168129448{position:absolute;top:50px;right:5px;}@media screen and (max-width:650px){.blog-search-box__hits.jsx-168129448{top:90px;left:5px;}.top-bar.jsx-168129448{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}ul.jsx-168129448{padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFJZ0MsQUFXTCxBQUlKLEFBSUMsQUFNQyxBQUlpQixBQVFiLEFBUVAsQUFLYSxBQU1aLFNBVkQsQ0FXWCxFQXpDRixFQVVBLEVBZEEsRUEwQlcsQUFTVCxHQTlDYSxNQXNDSCxHQVRNLE9BVWxCLFNBVGlCLGVBQ0QsYUFaZ0IsQ0FhVCxHQWtCSSxpQkFqRE4sOEJBZ0NyQixvREFrQnVCLFdBakRTLENBa0JYLGlGQWdDbkIsWUEvQkYscUJBbEJrQix3Q0FDVixNQUNJLFVBQ2Msd0RBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gvbGl0ZSc7XG5pbXBvcnQgeyBJbnN0YW50U2VhcmNoLCBIaXRzIH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xuaW1wb3J0IEJsb2dTZWFyY2hCb3ggZnJvbSAnLi4vQmxvZ1NlYXJjaEJveCc7XG5pbXBvcnQgQmxvZ1NlYXJjaEhpdCBmcm9tICcuLi9CbG9nU2VhcmNoSGl0JztcblxuY29uc3Qgc2VhcmNoQ2xpZW50ID0gYWxnb2xpYXNlYXJjaCgnMjhBTUUzOEdXUCcsICdmYjM1YTE1ODJiMzg3MWE0NGI5MjljMjU4ZmUyZWMyNCcpO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+YmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+YmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+YmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPEluc3RhbnRTZWFyY2hcbiAgICAgICAgICBzZWFyY2hDbGllbnQ9e3NlYXJjaENsaWVudH1cbiAgICAgICAgICBpbmRleE5hbWU9XCJwb3N0c1wiXG4gICAgICAgICAgb25TZWFyY2hTdGF0ZUNoYW5nZT17KHsgcXVlcnkgfSkgPT4gc2V0UXVlcnkocXVlcnkpfT5cbiAgICAgICAgICA8QmxvZ1NlYXJjaEJveCAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1zZWFyY2gtYm94X19oaXRzXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHF1ZXJ5ICYmIHF1ZXJ5Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICA8SGl0cyBoaXRDb21wb25lbnQ9e0Jsb2dTZWFyY2hIaXR9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW5zdGFudFNlYXJjaD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmN2E7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtYmFyOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICMwYTI1NDQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2ctc2VhcmNoLWJveF9faGl0cyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICAgIC5ibG9nLXNlYXJjaC1ib3hfX2hpdHMge1xuICAgICAgICAgICAgdG9wOiA5MHB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/header/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=blog.js.41850bf818bd9b7c76e8.hot-update.js.map