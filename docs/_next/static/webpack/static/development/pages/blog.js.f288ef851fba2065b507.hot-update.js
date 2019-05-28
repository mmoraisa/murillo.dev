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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2678330091", [post.fields.heroImage.fields.file.url]]]) + " " + "post ".concat(even ? '--is-even' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2678330091", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2678330091", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2678330091", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2678330091", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__separator"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2678330091", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2678330091", [post.fields.heroImage.fields.file.url]]]) + " " + "post__image"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2678330091",
    dynamic: [post.fields.heroImage.fields.file.url]
  }, ".post.__jsx-style-dynamic-selector{background:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:3px 3px 10px rgba(0,0,0,.15);}.post.--is-even.__jsx-style-dynamic-selector{background:green;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.post.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:240px;height:240px;padding:30px;}.post__content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.__jsx-style-dynamic-selector{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.__jsx-style-dynamic-selector{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.__jsx-style-dynamic-selector{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.__jsx-style-dynamic-selector{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.__jsx-style-dynamic-selector{background:url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb);background-size:cover;background-position:center;}.post.--is-even.__jsx-style-dynamic-selector .post__image.__jsx-style-dynamic-selector{-webkit-order:-1;-ms-flex-order:-1;order:-1;}@media screen and (max-width:970px){.post.__jsx-style-dynamic-selector{width:100%;}.post.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:calc(50% - 60px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUkwQixBQVFPLEFBTUwsQUFLTCxBQU1DLEFBTXVFLEFBTXJELEFBUWpCLEFBTVEsQUFXNkMsQUFNMUQsQUFNSSxBQUlZLFdBSHpCLENBdkRhLEVBMEJZLENBN0NaLEVBY08sS0FxQ2dFLENBMkJwRixFQTFEYSxLQWlCRyxRQWhCbEIsQ0F5QmEsS0FzQmIsRUE5QmlCLElBU2pCLFdBUm9CLE1BdUJJLE9BckNBLElBakJaLENBZ0NlLEtBVFgsSUF0QjBCLENBUnJCLEFBY3JCLEFBZ0Q2QixTQS9CWixNQVNqQixFQVdrQixPQW5CbEIsR0ErQkEsTUFYaUIsTUEzQ2pCLFNBNENtQixlQTVCQSxFQTZCaUIsSUFyRFYsV0F5QjFCLG1CQTZCcUMsMEJBckRwQixTQXNETyxNQXJEeEIsZ0JBc0RBIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IERvdWJsZUJsb2dQb3N0ID0gKHsgZXZlbiwgcG9zdCB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgYmxvZy8ke3Bvc3QuZmllbGRzLnNsdWd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgJHtldmVuID8gJy0taXMtZXZlbicgOiAnJ31gfSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGF0ZVwiPjE4LzA1LzIwMTk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fdGl0bGVcIj57cG9zdC5maWVsZHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fc2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGVzY3JpcHRpb25cIj57cG9zdC5maWVsZHMuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0OmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0Li0taXMtZXZlbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fZGF0ZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICNhZmFmYWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3RpdGxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3NlcGFyYXRvciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9P3c9MzAwJmg9MzAwJmZpdD10aHVtYik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC4tLWlzLWV2ZW4gLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xuXG4gICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNjBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb3VibGVCbG9nUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/DoubleBlogPost.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.f288ef851fba2065b507.hot-update.js.map