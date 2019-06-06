webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/posts/BlogPost/TripleBlogPost.js":
/*!*****************************************************!*\
  !*** ./components/posts/BlogPost/TripleBlogPost.js ***!
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
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../defaults/Language */ "./defaults/Language.js");






var TripleBlogPost = function TripleBlogPost(_ref) {
  var post = _ref.post;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    prefetch: true,
    href: "/blog/".concat(post.fields.slug)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-2957546055" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2957546055" + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2957546055" + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2957546055" + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2957546055" + " " + "post__content__separator"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2957546055" + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2957546055" + " " + "post__image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2957546055" + " " + "post__video"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2957546055"
  }, ".post.jsx-2957546055{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.jsx-2957546055:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:3px 3px 10px rgba(0,0,0,.15);}.post.jsx-2957546055>div.jsx-2957546055{width:240px;height:240px;padding:30px;}.post__content.jsx-2957546055{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-2957546055{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-2957546055{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-2957546055{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-2957546055{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-2957546055{background:#9ec6f1;}.post__video.jsx-2957546055{background:#374e67;}@media screen and (max-width:970px){.post.jsx-2957546055{width:calc(100% - 30px);margin:10px 15px;border-radius:10px;box-shadow:5px 5px 20px rgba(0,0,0,.3);overflow:hidden;}.post.jsx-2957546055>div.jsx-2957546055{padding:10px;width:initial;height:initial;}.post.--is-even.jsx-2957546055{-webkit-align-self:initial;-ms-flex-item-align:initial;align-self:initial;}.post__content.jsx-2957546055{-webkit-flex:1;-ms-flex:1;flex:1;}.post__image.jsx-2957546055{width:20% !important;-webkit-order:-1;-ms-flex-order:-1;order:-1;}.post__content__separator.jsx-2957546055{margin:10px 0;}.post__content__title.jsx-2957546055{font-size:22px;}.post__video.jsx-2957546055{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUl3QixBQVFTLEFBTVYsQUFNQyxBQU11RSxBQU1yRCxBQVFqQixBQU1RLEFBV0gsQUFJQSxBQU1PLEFBUVgsQUFNTSxBQUlaLEFBSWMsQUFLUCxBQUlDLEFBSUYsWUF2RkYsQ0E2REcsQUEyQmhCLENBOUR5QixBQXNEekIsQ0FJQSxJQXpDRixBQUlBLEVBNEJhLENBM0N5RSxFQXFCakUsQ0FwRE4sRUE2REksR0E1Q0QsR0FxRGhCLEtBckVGLENBeUJhLEVBMkJVLENBU3JCLElBNUNlLElBU2pCLFVBMkIyQyxDQW5DdkIsSUF3RGxCLFNBMUZpQixBQW9CSyxBQTZEdEIsSUF6RVUsQ0EyQmUsS0FUWCxJQWpCMEIsR0FSckIsT0EwQkosQ0EyQ0csS0FsQ3BCLEVBV2tCLE9BbkJsQixFQTJDRSxPQXZCZSxNQXRDakIsU0F1Q21CLGVBNUJBLEVBNkJpQixNQWhEVixTQW9CMUIsbUJBNkJxQyw0QkFoRHBCLE9BaURPLFFBaER4QixjQWlEQSIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL3Bvc3RzL0Jsb2dQb3N0L1RyaXBsZUJsb2dQb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vLi4vLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuXG5jb25zdCBUcmlwbGVCbG9nUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9ibG9nLyR7cG9zdC5maWVsZHMuc2x1Z31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kYXRlXCI+MTgvMDUvMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3RpdGxlXCI+e3Bvc3QuZmllbGRzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fc2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kZXNjcmlwdGlvblwiPntwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdmlkZW9cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMXMgYWxsIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3Q6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLDAsMCwuMTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2RhdGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjYWZhZmFmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X190aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19zZXBhcmF0b3Ige1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOWVjNmYxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX3ZpZGVvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzc0ZTY3O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcblxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0Li0taXMtZXZlbiB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBpbml0aWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0X19jb250ZW50e1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0X19jb250ZW50X19zZXBhcmF0b3Ige1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3RpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdF9fdmlkZW8ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBsZUJsb2dQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/TripleBlogPost.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.a4783c2993b9201972b4.hot-update.js.map