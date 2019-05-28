webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/posts/BlogPost/DoubleBlogPost.js":
/*!*****************************************************!*\
  !*** ./components/posts/BlogPost/DoubleBlogPost.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var DoubleBlogPost = function DoubleBlogPost(_ref) {
  var even = _ref.even,
      post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "".concat(post.fields.slug)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["794662888", [post.fields.heroImage.fields.file.url]]]) + " " + "post ".concat(even ? '--is-even' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["794662888", [post.fields.heroImage.fields.file.url]]]) + " " + "post__description"
  }, post.fields.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["794662888", [post.fields.heroImage.fields.file.url]]]) + " " + "post__image"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "794662888",
    dynamic: [post.fields.heroImage.fields.file.url]
  }, ".post.__jsx-style-dynamic-selector{background:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post.--is-even.__jsx-style-dynamic-selector{background:green;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.post.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:300px;height:300px;}.post__description.__jsx-style-dynamic-selector{background:white;}.post__image.__jsx-style-dynamic-selector{background:url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb);}.post.--is-even.__jsx-style-dynamic-selector .post__image.__jsx-style-dynamic-selector{-webkit-order:-1;-ms-flex-order:-1;order:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBSTBCLEFBS0UsQUFLTCxBQU1LLEFBSWtELEFBSTFELFlBYkksR0FWQSxFQUtPLEFBV3RCLFFBSkEsbUJBWUEsdUJBSkEsc0JBbkJBLEFBS0EiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9CbG9nUG9zdC9Eb3VibGVCbG9nUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IERvdWJsZUJsb2dQb3N0ID0gKHsgZXZlbiwgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj17YCR7cG9zdC5maWVsZHMuc2x1Z31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zdCAke2V2ZW4gPyAnLS1pcy1ldmVuJyA6ICcnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QuLS1pcy1ldmVuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAvL2JveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9P3c9MzAwJmg9MzAwJmZpdD10aHVtYik7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC4tLWlzLWV2ZW4gLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb3VibGVCbG9nUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/DoubleBlogPost.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.e29434ba4b3798568caa.hot-update.js.map