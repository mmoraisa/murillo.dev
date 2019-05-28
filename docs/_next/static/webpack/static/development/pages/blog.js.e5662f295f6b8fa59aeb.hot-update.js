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




var TripleBlogPost = function TripleBlogPost(_ref) {
  var post = _ref.post;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-4100286373" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4100286373" + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4100286373" + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4100286373" + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4100286373" + " " + "post__content__separator"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4100286373" + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4100286373" + " " + "post__image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4100286373" + " " + "post__video"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4100286373"
  }, ".post.jsx-4100286373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s -webkit-transform ease;-webkit-transition:.1s transform ease;transition:.1s transform ease;}.post.jsx-4100286373:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:5px 5px 20px rgba(0,0,0,.15);}.post.jsx-4100286373>div.jsx-4100286373{width:240px;height:240px;padding:30px;}.post__content.jsx-4100286373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-4100286373{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-4100286373{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-4100286373{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-4100286373{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-4100286373{background:#9ec6f1;}.post__video.jsx-4100286373{background:#374e67;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUl3QixBQU9TLEFBTVYsQUFNQyxBQU11RSxBQU1yRCxBQVFqQixBQU1RLEFBV0gsQUFJQSxZQTlDTixFQTBCWSxLQWlCM0IsQUFJQSxHQWZzRixHQS9CdkUsS0FpQkcsUUFoQmxCLENBeUJhLE9BUkksSUFTakIsV0FSb0IsYUFqQ0QsQUFtQkssSUFaWixDQTJCZSxLQVRYLElBakIwQixHQVByQixPQXlCSixNQVNqQixFQVdrQixPQW5CbEIsU0FvQmlCLE1BdENqQixTQXVDbUIsZUE1QkEsRUE2QmlCLE1BL0NKLFNBbUJoQyxtQkE2QnFDLG1DQUNiLHNCQUN4Qiw2QkFqREEiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9CbG9nUG9zdC9UcmlwbGVCbG9nUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuXG5jb25zdCBUcmlwbGVCbG9nUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2RhdGVcIj4xOC8wNS8yMDE5PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3RpdGxlXCI+e3Bvc3QuZmllbGRzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3NlcGFyYXRvclwiPjwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X192aWRlb1wiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMXMgdHJhbnNmb3JtIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4xNSk7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fZGF0ZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICNhZmFmYWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3RpdGxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3NlcGFyYXRvciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM5ZWM2ZjE7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fdmlkZW8ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzRlNjc7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmlwbGVCbG9nUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/TripleBlogPost.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.e5662f295f6b8fa59aeb.hot-update.js.map