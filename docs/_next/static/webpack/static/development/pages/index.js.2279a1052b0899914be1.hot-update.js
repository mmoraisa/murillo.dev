webpackHotUpdate("static/development/pages/index.js",{

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




var BlogSearchBox = function BlogSearchBox(_ref) {
  var currentRefinement = _ref.currentRefinement,
      refine = _ref.refine;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    noValidate: true,
    action: "",
    role: "search",
    className: "jsx-3944990435"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "search",
    value: currentRefinement,
    onChange: function onChange(event) {
      return refine(event.currentTarget.value);
    },
    placeholder: "search in blog...",
    className: "jsx-3944990435"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3944990435"
  }, "input[type=\"search\"].jsx-3944990435{background:transparent;color:#687e98;font-family:stolzl,sans-serif;font-size:16px;width:320px;margin-right:10px;padding:10px 0;border:none;}input[type=\"search\"].jsx-3944990435:active,input[type=\"search\"].jsx-3944990435:focus{outline:none;}@media screen and (max-width:650px){input[type=\"search\"].jsx-3944990435{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFJZ0MsQUFZVixBQU1PLGFBTHRCLEtBTUUsS0FsQmMsY0FDZ0IsOEJBQ2YsZUFDSCxZQUNNLGtCQUNILGVBQ0gsWUFDZCIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL0Jsb2dTZWFyY2hCb3gvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0U2VhcmNoQm94IH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xuXG5jb25zdCBCbG9nU2VhcmNoQm94ID0gKHsgY3VycmVudFJlZmluZW1lbnQsIHJlZmluZSB9KSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8Zm9ybSBub1ZhbGlkYXRlIGFjdGlvbj1cIlwiIHJvbGU9XCJzZWFyY2hcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgdmFsdWU9e2N1cnJlbnRSZWZpbmVtZW50fVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gcmVmaW5lKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBpbiBibG9nLi4uXCJcbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzY4N2U5ODtcbiAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTphY3RpdmUsXG4gICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFNlYXJjaEJveChCbG9nU2VhcmNoQm94KTtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchBox/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectSearchBox"])(BlogSearchBox));

/***/ })

})
//# sourceMappingURL=index.js.2279a1052b0899914be1.hot-update.js.map