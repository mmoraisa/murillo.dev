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
/* harmony import */ var _BlogSearchPoweredBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BlogSearchPoweredBy */ "./components/BlogSearchPoweredBy/index.js");





var BlogSearchBox = function BlogSearchBox(_ref) {
  var currentRefinement = _ref.currentRefinement,
      refine = _ref.refine;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    noValidate: true,
    action: "",
    role: "search",
    className: "jsx-228615311"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "search",
    value: currentRefinement,
    onChange: function onChange(event) {
      return refine(event.currentTarget.value);
    },
    placeholder: "search in blog...",
    className: "jsx-228615311"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlogSearchPoweredBy__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "228615311"
  }, "input[type=\"search\"].jsx-228615311{background:transparent;color:#687e98;font-family:stolzl,sans-serif;font-size:16px;width:315px;margin-right:10px;padding:10px 0;border:none;}input[type=\"search\"].jsx-228615311:active,input[type=\"search\"].jsx-228615311:focus{outline:none;}@media screen and (max-width:650px){input[type=\"search\"].jsx-228615311{margin:0;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlZ0IsQUFJZ0MsQUFZVixBQU1GLFNBQ1MsSUFOdEIsVUFaZ0IsSUFtQmQsVUFsQjhCLDhCQUNmLGVBQ0gsWUFDTSxrQkFDSCxlQUNILFlBQ2QiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9CbG9nU2VhcmNoQm94L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG93ZXJlZEJ5LCBjb25uZWN0U2VhcmNoQm94IH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xuaW1wb3J0IEJsb2dTZWFyY2hQb3dlcmVkQnkgZnJvbSAnLi4vQmxvZ1NlYXJjaFBvd2VyZWRCeSc7XG5cbmNvbnN0IEJsb2dTZWFyY2hCb3ggPSAoeyBjdXJyZW50UmVmaW5lbWVudCwgcmVmaW5lIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxmb3JtIG5vVmFsaWRhdGUgYWN0aW9uPVwiXCIgcm9sZT1cInNlYXJjaFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICB2YWx1ZT17Y3VycmVudFJlZmluZW1lbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiByZWZpbmUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGluIGJsb2cuLi5cIlxuICAgICAgLz5cbiAgICAgIDxCbG9nU2VhcmNoUG93ZXJlZEJ5IC8+XG4gICAgPC9mb3JtPlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogIzY4N2U5ODtcbiAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAzMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTphY3RpdmUsXG4gICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTZWFyY2hCb3goQmxvZ1NlYXJjaEJveCk7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchBox/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectSearchBox"])(BlogSearchBox));

/***/ }),

/***/ "./components/BlogSearchPoweredBy/index.js":
/*!*************************************************!*\
  !*** ./components/BlogSearchPoweredBy/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var BlogSearchPoweredBy = function BlogSearchPoweredBy() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (BlogSearchPoweredBy);

/***/ })

})
//# sourceMappingURL=index.js.a176aaf41aafb799d87f.hot-update.js.map