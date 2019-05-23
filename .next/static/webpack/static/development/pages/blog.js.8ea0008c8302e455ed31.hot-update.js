webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/BlogSearchBox/index.js":
/*!*******************************************!*\
  !*** ./components/BlogSearchBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _BlogSearchPoweredBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BlogSearchPoweredBy */ "./components/BlogSearchPoweredBy/index.js");





var BlogSearchBox = function BlogSearchBox(_ref) {
  var currentRefinement = _ref.currentRefinement,
      isSearchStalled = _ref.isSearchStalled,
      refine = _ref.refine,
      setIsLoading = _ref.setIsLoading;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(isSearchStalled);
  }, [isSearchStalled]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    noValidate: true,
    action: "",
    onSubmit: function onSubmit(evt) {
      evt.preventDefault();
    },
    role: "search",
    className: "jsx-3778508366"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "search",
    value: currentRefinement,
    onChange: function onChange(event) {
      return refine(event.currentTarget.value);
    },
    placeholder: "search in blog...",
    className: "jsx-3778508366" + " " + ((isSearchStalled ? '--is-search-stalled' : '') || "")
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlogSearchPoweredBy__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3778508366"
  }, "input[type=\"search\"].jsx-3778508366{background:transparent;color:#687e98;font-family:stolzl,sans-serif;font-size:16px;width:315px;margin-right:10px;padding:0 0 10px 0;border:none;}input[type=\"search\"].jsx-3778508366:active,input[type=\"search\"].jsx-3778508366:focus{outline:none;}input[type=\"search\"].--is-search-stalled.jsx-3778508366{-webkit-animation:loading-jsx-3778508366 1s linear infinite;animation:loading-jsx-3778508366 1s linear infinite;}@-webkit-keyframes loading-jsx-3778508366{0%{color:#5cd0ae;},50%{color:#4db8c4;},100%{color:#5cd0ae;}}@keyframes loading-jsx-3778508366{0%{color:#5cd0ae;},50%{color:#4db8c4;},100%{color:#5cd0ae;}}@media screen and (max-width:650px){input[type=\"search\"].jsx-3778508366{margin:0;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBSWtDLEFBWVYsQUFJd0IsQUFRckIsQUFHQSxBQUdBLEFBT0wsU0FDUyxJQXpCdEIsQ0FZRSxBQUdBLEFBR0EsU0E5QmMsSUFzQ2QsVUFyQzhCLDhCQUNmLGVBQ0gsWUFDTSxrQkFDQyxBQVdyQixtQkFWYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdFNlYXJjaEJveCB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcbmltcG9ydCBCbG9nU2VhcmNoUG93ZXJlZEJ5IGZyb20gJy4uL0Jsb2dTZWFyY2hQb3dlcmVkQnknO1xuXG5jb25zdCBCbG9nU2VhcmNoQm94ID0gKHsgY3VycmVudFJlZmluZW1lbnQsIGlzU2VhcmNoU3RhbGxlZCwgcmVmaW5lLCBzZXRJc0xvYWRpbmcgfSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKGlzU2VhcmNoU3RhbGxlZCk7XG4gIH0sIFtpc1NlYXJjaFN0YWxsZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxmb3JtIG5vVmFsaWRhdGUgYWN0aW9uPVwiXCIgb25TdWJtaXQ9eyhldnQpID0+IHsgZXZ0LnByZXZlbnREZWZhdWx0KCkgfX0gcm9sZT1cInNlYXJjaFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2lzU2VhcmNoU3RhbGxlZCA/ICctLWlzLXNlYXJjaC1zdGFsbGVkJyA6ICcnfVxuICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgIHZhbHVlPXtjdXJyZW50UmVmaW5lbWVudH1cbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gcmVmaW5lKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGluIGJsb2cuLi5cIlxuICAgICAgICAvPlxuICAgICAgICA8QmxvZ1NlYXJjaFBvd2VyZWRCeSAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAjNjg3ZTk4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDMxNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06YWN0aXZlLFxuICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXS4tLWlzLXNlYXJjaC1zdGFsbGVkIHtcbiAgICAgICAgICBhbmltYXRpb246IGxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsaW5rX21lIHtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgbG9hZGluZyB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgY29sb3I6ICM1Y2QwYWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgY29sb3I6ICM0ZGI4YzQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNWNkMGFlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFNlYXJjaEJveChCbG9nU2VhcmNoQm94KTtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchBox/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectSearchBox"])(BlogSearchBox));

/***/ })

})
//# sourceMappingURL=blog.js.8ea0008c8302e455ed31.hot-update.js.map