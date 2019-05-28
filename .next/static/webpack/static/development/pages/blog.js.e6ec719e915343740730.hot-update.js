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
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var DoubleBlogPost = function DoubleBlogPost(_ref) {
  var even = _ref.even,
      post = _ref.post;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "blog/".concat(post.fields.slug)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["649209295", [post.fields.heroImage.fields.file.url]]]) + " " + "post ".concat(even ? '--is-even' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["649209295", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["649209295", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["649209295", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["649209295", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__separator"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["649209295", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["649209295", [post.fields.heroImage.fields.file.url]]]) + " " + "post__image"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "649209295",
    dynamic: [post.fields.heroImage.fields.file.url]
  }, ".post.__jsx-style-dynamic-selector{background:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:5px 5px 20px rgba(0,0,0,.15);}.post.--is-even.__jsx-style-dynamic-selector{background:green;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.post.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:240px;height:240px;padding:30px;}.post__content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.__jsx-style-dynamic-selector{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.__jsx-style-dynamic-selector{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.__jsx-style-dynamic-selector{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.__jsx-style-dynamic-selector{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.__jsx-style-dynamic-selector{background:url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb);}.post.--is-even.__jsx-style-dynamic-selector .post__image.__jsx-style-dynamic-selector{-webkit-order:-1;-ms-flex-order:-1;order:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUkwQixBQVFPLEFBTUwsQUFLTCxBQU1DLEFBTXVFLEFBTXJELEFBUWpCLEFBTVEsQUFXNkMsQUFJMUQsWUE5Q0ksRUEwQlksQ0E3Q1osRUFjTyxLQXFDZ0UsR0EvQnZFLEtBaUJHLFFBaEJsQixDQXlCYSxLQW9CYixFQTVCaUIsSUFTakIsV0FSb0IsTUF1QnBCLE9BckN3QixJQWpCWixDQWdDZSxLQVRYLElBdEIwQixDQVJyQixBQWNyQixTQWlCaUIsTUFTakIsRUFXa0IsT0FuQmxCLFNBb0JpQixNQTNDakIsU0E0Q21CLGVBNUJBLEVBNkJpQixJQXJEVixXQXlCMUIsbUJBNkJxQywwQkFyRHBCLFNBc0RPLE1BckR4QixnQkFzREEiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9CbG9nUG9zdC9Eb3VibGVCbG9nUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgRG91YmxlQmxvZ1Bvc3QgPSAoeyBldmVuLCBwb3N0IH0pID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2BibG9nLyR7cG9zdC5maWVsZHMuc2x1Z31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcG9zdCAke2V2ZW4gPyAnLS1pcy1ldmVuJyA6ICcnfWB9IGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kYXRlXCI+MTgvMDUvMjAxOTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X190aXRsZVwiPntwb3N0LmZpZWxkcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19zZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kZXNjcmlwdGlvblwiPntwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMXMgYWxsIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3Q6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QuLS1pcy1ldmVuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19kYXRlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICBjb2xvcjogI2FmYWZhZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fdGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fc2VwYXJhdG9yIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH0/dz0zMDAmaD0zMDAmZml0PXRodW1iKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0Li0taXMtZXZlbiAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvdWJsZUJsb2dQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/DoubleBlogPost.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.e6ec719e915343740730.hot-update.js.map