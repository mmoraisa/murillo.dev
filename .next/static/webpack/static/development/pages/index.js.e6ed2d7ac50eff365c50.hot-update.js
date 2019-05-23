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
    className: "jsx-3263460109"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "search",
    value: currentRefinement,
    onChange: function onChange(event) {
      return refine(event.currentTarget.value);
    },
    placeholder: "search in blog...",
    className: "jsx-3263460109"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3263460109"
  }, "input[type=\"search\"].jsx-3263460109{color:#687e98;font-family:stolzl,sans-serif;font-size:16px;padding:10px 0;border:none;border-bottom:1px solid #75757540;}input[type=\"search\"].jsx-3263460109:active,input[type=\"search\"].jsx-3263460109:focus{outline:none;}@media screen and (max-width:650px){input[type=\"search\"].jsx-3263460109{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFJdUIsQUFVRCxBQU1PLGFBTHRCLENBVmdDLElBZ0I5QiwwQkFmZSxlQUNBLGVBQ0gsWUFDc0Isa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3RTZWFyY2hCb3ggfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XG5cbmNvbnN0IEJsb2dTZWFyY2hCb3ggPSAoeyBjdXJyZW50UmVmaW5lbWVudCwgcmVmaW5lIH0pID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxmb3JtIG5vVmFsaWRhdGUgYWN0aW9uPVwiXCIgcm9sZT1cInNlYXJjaFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICB2YWx1ZT17Y3VycmVudFJlZmluZW1lbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiByZWZpbmUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGluIGJsb2cuLi5cIlxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgY29sb3I6ICM2ODdlOTg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NTc1NzU0MDtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTphY3RpdmUsXG4gICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFNlYXJjaEJveChCbG9nU2VhcmNoQm94KTtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchBox/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectSearchBox"])(BlogSearchBox));

/***/ })

})
//# sourceMappingURL=index.js.e6ed2d7ac50eff365c50.hot-update.js.map