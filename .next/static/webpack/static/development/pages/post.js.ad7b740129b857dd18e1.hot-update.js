webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/posts/Author/index.js":
/*!******************************************!*\
  !*** ./components/posts/Author/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);






var Author = function Author(_ref) {
  var author = _ref.author,
      smallScreenStyles = _ref.smallScreenStyles,
      styles = _ref.styles,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["author", "smallScreenStyles", "styles"]);

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_4___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-aos": "fade-up"
  }, props, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + (props.className != null && props.className || "author")
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]])
  }, "About the author"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]])
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__avatar"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "".concat(author.fields.image.fields.file.url, "?w=100&h=100&fit=thumb"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__image"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__contacts"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__info"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__info__name"
  }, author.fields.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__info__title"
  }, author.fields.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__info__company"
  }, author.fields.company), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__info__short-bio"
  }, author.fields.shortBio), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__info__contacts"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "author__info__contact"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["481733879", [styles, smallScreenStyles]]]) + " " + "fab fa-linkedin"
  })))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "481733879",
    dynamic: [styles, smallScreenStyles]
  }, ".author.__jsx-style-dynamic-selector{width:420px;background:#fff;box-shadow:5px 5px 20px rgba(0,0,0,.2);border-radius:10px;padding:60px;".concat(styles, ";}.author.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0 0 30px 0;font-size:26px;line-height:26px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;font-family:stolzl,sans-serif;}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.author__image.__jsx-style-dynamic-selector{width:100px;height:100px;border-radius:50%;}.author__info.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:rgba(0,0,0,.84);}.author__info__name.__jsx-style-dynamic-selector,.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-family:stolzl,sans-serif;}.author__info__name.__jsx-style-dynamic-selector{font-size:20px;}.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-size:14px;}.author__info__short-bio.__jsx-style-dynamic-selector{margin-top:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;}@media screen and (max-width:900px){.author.__jsx-style-dynamic-selector{padding:20px;width:calc(100% - 70px);").concat(smallScreenStyles, ";}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.author__image.__jsx-style-dynamic-selector{margin-bottom:10px;}.author__info.__jsx-style-dynamic-selector{padding:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQXV0aG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFJdUIsQUFTTSxBQVVMLEFBSUQsQUFNTCxBQVV1QixBQUlmLEFBS0EsQUFJQyxBQVVELEFBTVMsQUFLSCxBQUlULFVBQ1MsRUE3RUwsQUF1QkgsQ0F1Q2EsRUFuQjVCLEFBS0EsQ0FJb0MsRUEzQ25CLENBZ0VmLE1BakRrQixHQXZCcUIsRUFzQ3pDLEdBN0JtQixBQW1CRSxJQW1DcEIsTUF2Q0QsT0FkOEQsQUEwQ3pCLEVBdkJ0QixjQWtDYixDQTlEbUIsT0FpQnJCLElBaUR1QixPQWRDLENBbkRULGFBRWhCLElBeUVHLElBdkJvRixHQTNDbEUsZ0JBbUJJLEVBMUJ4QixBQVErQiw2QkFDQyxjQXVEOUIsZ0JBdERGLElBeUNBLGFBeEJ3QixzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9BdXRob3IvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcblxuY29uc3QgQXV0aG9yID0gKHsgYXV0aG9yLCBzbWFsbFNjcmVlblN0eWxlcywgc3R5bGVzLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIHsuLi5wcm9wc30+XG4gICAgICAgIDxoMj5BYm91dCB0aGUgYXV0aG9yPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9fYXZhdGFyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF1dGhvcl9faW1hZ2VcIiBzcmM9e2Ake2F1dGhvci5maWVsZHMuaW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTEwMCZoPTEwMCZmaXQ9dGh1bWJgfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JfX2NvbnRhY3RzXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JfX2luZm9fX25hbWVcIj57YXV0aG9yLmZpZWxkcy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvcl9faW5mb19fdGl0bGVcIj57YXV0aG9yLmZpZWxkcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JfX2luZm9fX2NvbXBhbnlcIj57YXV0aG9yLmZpZWxkcy5jb21wYW55fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvcl9faW5mb19fc2hvcnQtYmlvXCI+e2F1dGhvci5maWVsZHMuc2hvcnRCaW99PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JfX2luZm9fX2NvbnRhY3RzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qSlNPTi5zdHJpbmdpZnkoYXV0aG9yLmZpZWxkcykqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgICAgJHtzdHlsZXN9XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yIGgyIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzRDQjhDNCwjM0NEM0FEKTtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvciA+IGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3JfX2ltYWdlIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yX19pbmZvIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDI1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yX19pbmZvX19uYW1lLFxuICAgICAgICAuYXV0aG9yX19pbmZvX190aXRsZSxcbiAgICAgICAgLmF1dGhvcl9faW5mb19fY29tcGFueSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvcl9faW5mb19fbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvcl9faW5mb19fdGl0bGUsXG4gICAgICAgIC5hdXRob3JfX2luZm9fX2NvbXBhbnkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3JfX2luZm9fX3Nob3J0LWJpbyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gICAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgICAgICAgICAgJHtzbWFsbFNjcmVlblN0eWxlc31cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXV0aG9yID4gZGl2IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdXRob3JfX2ltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF1dGhvcl9faW5mbyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/Author/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ })

})
//# sourceMappingURL=post.js.ad7b740129b857dd18e1.hot-update.js.map