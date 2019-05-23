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
    className: "jsx-228615311"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "search",
    value: currentRefinement,
    onChange: function onChange(event) {
      return refine(event.currentTarget.value);
    },
    placeholder: "search in blog...",
    className: "jsx-228615311"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "228615311"
  }, "input[type=\"search\"].jsx-228615311{background:transparent;color:#687e98;font-family:stolzl,sans-serif;font-size:16px;width:315px;margin-right:10px;padding:10px 0;border:none;}input[type=\"search\"].jsx-228615311:active,input[type=\"search\"].jsx-228615311:focus{outline:none;}@media screen and (max-width:650px){input[type=\"search\"].jsx-228615311{margin:0;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFJZ0MsQUFZVixBQU1GLFNBQ1MsSUFOdEIsVUFaZ0IsSUFtQmQsVUFsQjhCLDhCQUNmLGVBQ0gsWUFDTSxrQkFDSCxlQUNILFlBQ2QiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9CbG9nU2VhcmNoQm94L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdFNlYXJjaEJveCB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcblxuY29uc3QgQmxvZ1NlYXJjaEJveCA9ICh7IGN1cnJlbnRSZWZpbmVtZW50LCByZWZpbmUgfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGZvcm0gbm9WYWxpZGF0ZSBhY3Rpb249XCJcIiByb2xlPVwic2VhcmNoXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHZhbHVlPXtjdXJyZW50UmVmaW5lbWVudH1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHJlZmluZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggaW4gYmxvZy4uLlwiXG4gICAgICAvPlxuICAgIDwvZm9ybT5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICM2ODdlOTg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB3aWR0aDogMzE1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06YWN0aXZlLFxuICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U2VhcmNoQm94KEJsb2dTZWFyY2hCb3gpO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchBox/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectSearchBox"])(BlogSearchBox));

/***/ })

})
//# sourceMappingURL=index.js.1f2d70fb758798076b60.hot-update.js.map