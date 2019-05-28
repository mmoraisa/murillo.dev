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
    prefetch: true,
    href: "blog/".concat(post.fields.slug)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3907967058", [post.fields.heroImage.fields.file.url]]]) + " " + "post ".concat(even ? '--is-even' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3907967058", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3907967058", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3907967058", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3907967058", [post.fields.heroImage.fields.file.url]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3907967058", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3907967058", [post.fields.heroImage.fields.file.url]]]) + " " + "post__image"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3907967058",
    dynamic: [post.fields.heroImage.fields.file.url]
  }, ".post.__jsx-style-dynamic-selector{background:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post.--is-even.__jsx-style-dynamic-selector{background:green;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.post.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:240px;height:240px;padding:30px;}.post__content.__jsx-style-dynamic-selector{background:white;}.post__image.__jsx-style-dynamic-selector{background:url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb);}.post.--is-even.__jsx-style-dynamic-selector .post__image.__jsx-style-dynamic-selector{-webkit-order:-1;-ms-flex-order:-1;order:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUkwQixBQUtFLEFBS0wsQUFNSyxBQUlrRCxBQUkxRCxZQWJJLEdBVkEsRUFLTyxBQVd0QixRQUxlLGFBQ2YsTUFZQSx1QkFKQSxzQkFuQkEsQUFLQSIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL3Bvc3RzL0Jsb2dQb3N0L0RvdWJsZUJsb2dQb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgRG91YmxlQmxvZ1Bvc3QgPSAoeyBldmVuLCBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgYmxvZy8ke3Bvc3QuZmllbGRzLnNsdWd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgJHtldmVuID8gJy0taXMtZXZlbicgOiAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGF0ZVwiPjE4LzA1LzIwMTk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fdGl0bGVcIj57cG9zdC5maWVsZHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5wb3N0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0Li0taXMtZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH0/dz0zMDAmaD0zMDAmZml0PXRodW1iKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0Li0taXMtZXZlbiAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvdWJsZUJsb2dQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/DoubleBlogPost.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.a34c291e4e31d480c0e9.hot-update.js.map