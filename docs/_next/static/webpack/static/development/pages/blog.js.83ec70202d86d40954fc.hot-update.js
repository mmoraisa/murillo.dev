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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["831659582", [post.fields.heroImage.fields.file.url]]]) + " " + "post ".concat(even ? '--is-even' : '')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["831659582", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["831659582", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["831659582", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["831659582", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__separator"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["831659582", [post.fields.heroImage.fields.file.url]]]) + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["831659582", [post.fields.heroImage.fields.file.url]]]) + " " + "post__image"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "831659582",
    dynamic: [post.fields.heroImage.fields.file.url]
  }, ".post.__jsx-style-dynamic-selector{background:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s -webkit-transform ease;-webkit-transition:.1s transform ease;transition:.1s transform ease;}.post.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:5px 5px 20px rgba(0,0,0,.2);}.post.--is-even.__jsx-style-dynamic-selector{background:green;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.post.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:240px;height:240px;padding:30px;}.post__content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.__jsx-style-dynamic-selector{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.__jsx-style-dynamic-selector{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.__jsx-style-dynamic-selector{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.__jsx-style-dynamic-selector{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.__jsx-style-dynamic-selector{background:url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb);}.post.--is-even.__jsx-style-dynamic-selector .post__image.__jsx-style-dynamic-selector{-webkit-order:-1;-ms-flex-order:-1;order:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUkwQixBQU9PLEFBTUwsQUFLTCxBQU1DLEFBTXVFLEFBTXJELEFBUWpCLEFBTVEsQUFXNkMsQUFJMUQsWUE5Q0ksRUEwQlksQ0E1Q1osRUFhTyxLQXFDZ0UsR0EvQnZFLEtBaUJHLFFBaEJsQixDQXlCYSxLQW9CYixFQTVCaUIsSUFTakIsV0FSb0IsTUF1QnBCLE9BckN3QixJQWpCWixDQWdDZSxLQVRYLElBdEJ5QixDQVBwQixBQWFyQixTQWlCaUIsTUFTakIsRUFXa0IsT0FuQmxCLFNBb0JpQixLQTNDakIsVUE0Q21CLGVBNUJBLEVBNkJpQixJQXBESixXQXdCaEMsbUJBNkJxQyxtQ0FDYixzQkFDeEIsMkJBdERBIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IERvdWJsZUJsb2dQb3N0ID0gKHsgZXZlbiwgcG9zdCB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgYmxvZy8ke3Bvc3QuZmllbGRzLnNsdWd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgJHtldmVuID8gJy0taXMtZXZlbicgOiAnJ31gfSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGF0ZVwiPjE4LzA1LzIwMTk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fdGl0bGVcIj57cG9zdC5maWVsZHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fc2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGVzY3JpcHRpb25cIj57cG9zdC5maWVsZHMuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjFzIHRyYW5zZm9ybSBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3Q6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdC4tLWlzLWV2ZW4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2RhdGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjYWZhZmFmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X190aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19zZXBhcmF0b3Ige1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTMwMCZoPTMwMCZmaXQ9dGh1bWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QuLS1pcy1ldmVuIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlQmxvZ1Bvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/DoubleBlogPost.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.83ec70202d86d40954fc.hot-update.js.map