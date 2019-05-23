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
      refine = _ref.refine;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    noValidate: true,
    action: "",
    role: "search",
    className: "jsx-558684942"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "search",
    value: currentRefinement,
    onChange: function onChange(event) {
      return refine(event.currentTarget.value);
    },
    placeholder: "search in blog...",
    className: "jsx-558684942"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlogSearchPoweredBy__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "558684942"
  }, "input[type=\"search\"].jsx-558684942{background:transparent;color:#687e98;font-family:stolzl,sans-serif;font-size:16px;width:315px;margin-right:10px;padding:0 0 10px 0;border:none;}input[type=\"search\"].jsx-558684942:active,input[type=\"search\"].jsx-558684942:focus{outline:none;}@media screen and (max-width:650px){input[type=\"search\"].jsx-558684942{margin:0;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlZ0IsQUFJZ0MsQUFZVixBQU1GLFNBQ1MsSUFOdEIsVUFaZ0IsSUFtQmQsVUFsQjhCLDhCQUNmLGVBQ0gsWUFDTSxrQkFDQyxtQkFDUCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3RTZWFyY2hCb3ggfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XG5pbXBvcnQgQmxvZ1NlYXJjaFBvd2VyZWRCeSBmcm9tICcuLi9CbG9nU2VhcmNoUG93ZXJlZEJ5JztcblxuY29uc3QgQmxvZ1NlYXJjaEJveCA9ICh7IGN1cnJlbnRSZWZpbmVtZW50LCByZWZpbmUgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGZvcm0gbm9WYWxpZGF0ZSBhY3Rpb249XCJcIiByb2xlPVwic2VhcmNoXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHZhbHVlPXtjdXJyZW50UmVmaW5lbWVudH1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHJlZmluZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggaW4gYmxvZy4uLlwiXG4gICAgICAvPlxuICAgICAgPEJsb2dTZWFyY2hQb3dlcmVkQnkgLz5cbiAgICA8L2Zvcm0+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjNjg3ZTk4O1xuICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgd2lkdGg6IDMxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTphY3RpdmUsXG4gICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTZWFyY2hCb3goQmxvZ1NlYXJjaEJveCk7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchBox/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectSearchBox"])(BlogSearchBox));

/***/ })

})
//# sourceMappingURL=blog.js.c5a46ee645f75ada560f.hot-update.js.map