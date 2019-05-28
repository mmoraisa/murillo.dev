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
    href: "/".concat(post.fields.slug)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["794662888", [post.fields.heroImage.fields.file.url]]]) + " " + "post ".concat(even ? '--is-even' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["794662888", [post.fields.heroImage.fields.file.url]]]) + " " + "post__description"
  }, post.fields.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["794662888", [post.fields.heroImage.fields.file.url]]]) + " " + "post__image"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "794662888",
    dynamic: [post.fields.heroImage.fields.file.url]
  }, ".post.__jsx-style-dynamic-selector{background:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post.--is-even.__jsx-style-dynamic-selector{background:green;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.post.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:300px;height:300px;}.post__description.__jsx-style-dynamic-selector{background:white;}.post__image.__jsx-style-dynamic-selector{background:url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb);}.post.--is-even.__jsx-style-dynamic-selector .post__image.__jsx-style-dynamic-selector{-webkit-order:-1;-ms-flex-order:-1;order:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2tCLEFBSTBCLEFBS0UsQUFLTCxBQU1LLEFBSWtELEFBSTFELFlBYkksR0FWQSxFQUtPLEFBV3RCLFFBSkEsbUJBWUEsdUJBSkEsc0JBbkJBLEFBS0EiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9CbG9nUG9zdC9Eb3VibGVCbG9nUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IERvdWJsZUJsb2dQb3N0ID0gKHsgZXZlbiwgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QuZmllbGRzLnNsdWd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgJHtldmVuID8gJy0taXMtZXZlbicgOiAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIHtwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5wb3N0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0Li0taXMtZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgLy9ib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTMwMCZoPTMwMCZmaXQ9dGh1bWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QuLS1pcy1ldmVuIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlQmxvZ1Bvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/DoubleBlogPost.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.686ecbe4592faf838867.hot-update.js.map