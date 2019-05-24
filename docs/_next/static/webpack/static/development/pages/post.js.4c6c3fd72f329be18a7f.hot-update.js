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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + (props.className != null && props.className || "author")
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]])
  }, "About the author"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]])
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__avatar"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "".concat(author.fields.image.fields.file.url, "?w=100&h=100&fit=thumb"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__image"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__contacts"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/".concat(author.fields.linkedin),
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__contact"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "fab fa-linkedin"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://github.com/".concat(author.fields.github),
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__contact"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    class: "fab fa-github",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]])
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "mailto:".concat(author.fields.email),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__contact"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    class: "fas fa-envelope",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]])
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__info"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__info__name"
  }, author.fields.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__info__title"
  }, author.fields.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__info__company"
  }, author.fields.company), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3905234406", [styles, smallScreenStyles]]]) + " " + "author__info__short-bio"
  }, author.fields.shortBio)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3905234406",
    dynamic: [styles, smallScreenStyles]
  }, ".author.__jsx-style-dynamic-selector{width:420px;background:#fff;box-shadow:5px 5px 20px rgba(0,0,0,.2);border-radius:10px;padding:60px;".concat(styles, ";}.author.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0 0 30px 0;font-size:26px;line-height:26px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;font-family:stolzl,sans-serif;}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.author__image.__jsx-style-dynamic-selector{width:100px;height:100px;border-radius:50%;}.author__contacts.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:10px;font-size:20px;padding:0 10px;color:#adadad;}.author__info.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:rgba(0,0,0,.84);}.author__info__name.__jsx-style-dynamic-selector,.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-family:stolzl,sans-serif;}.author__info__name.__jsx-style-dynamic-selector{font-size:20px;}.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-size:14px;}.author__info__short-bio.__jsx-style-dynamic-selector{margin-top:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;}@media screen and (max-width:900px){.author.__jsx-style-dynamic-selector{padding:20px;width:calc(100% - 70px);").concat(smallScreenStyles, ";}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.author__image.__jsx-style-dynamic-selector{margin-bottom:10px;}.author__info.__jsx-style-dynamic-selector{padding:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQXV0aG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDa0IsQUFJdUIsQUFTTSxBQVVMLEFBSUQsQUFNQyxBQVNOLEFBVXVCLEFBSWYsQUFLQSxBQUlDLEFBVUQsQUFNUyxBQUtILEFBSVQsVUFDUyxFQXRGTCxBQXVCSCxDQWdEYSxFQW5CNUIsQUFLQSxDQUlvQyxFQXBEbkIsQ0F5RWYsTUExRGtCLEdBdkJxQixFQStDekMsR0F0Q21CLEFBNEJFLElBbUNwQixNQWhERCxPQWQ4RCxBQW1EekIsRUF2QnRCLGNBa0NiLENBdkVtQixPQWlCckIsQUFVK0IsSUFnRFIsT0FkQyxDQTVEVCxhQUVoQixJQWtGRyxJQXZCb0YsR0FwRGxFLGdCQTRCSSxFQW5DeEIsQUFRK0IsNkJBQ0MsY0FnRTlCLGdCQS9ERixJQWtEQSxNQW5Da0IsT0FXTSxTQVZQLGFBV2pCLEVBVmlCLGVBQ0QsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9BdXRob3IvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcblxuY29uc3QgQXV0aG9yID0gKHsgYXV0aG9yLCBzbWFsbFNjcmVlblN0eWxlcywgc3R5bGVzLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIHsuLi5wcm9wc30+XG4gICAgICAgIDxoMj5BYm91dCB0aGUgYXV0aG9yPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9fYXZhdGFyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF1dGhvcl9faW1hZ2VcIiBzcmM9e2Ake2F1dGhvci5maWVsZHMuaW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTEwMCZoPTEwMCZmaXQ9dGh1bWJgfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JfX2NvbnRhY3RzXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi8ke2F1dGhvci5maWVsZHMubGlua2VkaW59YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGhvcl9fY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpblwiPjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHthdXRob3IuZmllbGRzLmdpdGh1Yn1gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aG9yX19jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHthdXRob3IuZmllbGRzLmVtYWlsfWB9IGNsYXNzTmFtZT1cImF1dGhvcl9fY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9faW5mb1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19uYW1lXCI+e2F1dGhvci5maWVsZHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JfX2luZm9fX3RpdGxlXCI+e2F1dGhvci5maWVsZHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19jb21wYW55XCI+e2F1dGhvci5maWVsZHMuY29tcGFueX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JfX2luZm9fX3Nob3J0LWJpb1wiPnthdXRob3IuZmllbGRzLnNob3J0QmlvfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKkpTT04uc3RyaW5naWZ5KGF1dGhvci5maWVsZHMpKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICB3aWR0aDogNDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICAgICR7c3R5bGVzfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvciBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM0Q0I4QzQsIzNDRDNBRCk7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3IgPiBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yX19pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvcl9fY29udGFjdHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjYWRhZGFkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvcl9faW5mbyB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAyNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvcl9faW5mb19fbmFtZSxcbiAgICAgICAgLmF1dGhvcl9faW5mb19fdGl0bGUsXG4gICAgICAgIC5hdXRob3JfX2luZm9fX2NvbXBhbnkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3JfX2luZm9fX25hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3JfX2luZm9fX3RpdGxlLFxuICAgICAgICAuYXV0aG9yX19pbmZvX19jb21wYW55IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yX19pbmZvX19zaG9ydC1iaW8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAgICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgICAgICAgICAgICR7c21hbGxTY3JlZW5TdHlsZXN9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmF1dGhvciA+IGRpdiB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXV0aG9yX19pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdXRob3JfX2luZm8ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3I7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/Author/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ })

})
//# sourceMappingURL=post.js.4c6c3fd72f329be18a7f.hot-update.js.map