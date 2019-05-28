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
    className: "jsx-261501644" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-261501644" + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-261501644" + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-261501644" + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-261501644" + " " + "post__content__separator"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-261501644" + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-261501644" + " " + "post__image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-261501644" + " " + "post__video"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "261501644"
  }, ".post.jsx-261501644{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;}.post.jsx-261501644:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:5px 5px 20px rgba(0,0,0,.15);}.post.jsx-261501644>div.jsx-261501644{width:240px;height:240px;padding:30px;}.post__content.jsx-261501644{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-261501644{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-261501644{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-261501644{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-261501644{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-261501644{background:#9ec6f1;}.post__video.jsx-261501644{background:#374e67;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUl3QixBQU9TLEFBTVYsQUFNQyxBQU11RSxBQU1yRCxBQVFqQixBQU1RLEFBV0gsQUFJQSxZQTlDTixFQTBCWSxLQWlCM0IsQUFJQSxHQWZzRixHQS9CdkUsS0FpQkcsUUFoQmxCLENBeUJhLE9BUkksSUFTakIsV0FSb0IsYUFqQ0QsQUFtQkssSUFaWixDQTJCZSxLQVRYLElBakIwQixHQVByQixPQXlCSixNQVNqQixFQVdrQixPQW5CbEIsU0FvQmlCLE1BdENqQixTQXVDbUIsZUE1QkEsRUE2QmlCLE1BL0NWLFNBbUIxQixtQkE2QnFDLDRCQS9DckMsT0FnRHdCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL3Bvc3RzL0Jsb2dQb3N0L1RyaXBsZUJsb2dQb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbmNvbnN0IFRyaXBsZUJsb2dQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGF0ZVwiPjE4LzA1LzIwMTk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fdGl0bGVcIj57cG9zdC5maWVsZHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fc2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGVzY3JpcHRpb25cIj57cG9zdC5maWVsZHMuZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3ZpZGVvXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC4xcyBhbGwgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0OmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19kYXRlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICBjb2xvcjogI2FmYWZhZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fdGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fc2VwYXJhdG9yIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzllYzZmMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X192aWRlbyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzM3NGU2NztcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBsZUJsb2dQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/TripleBlogPost.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.a9d03de7d0483fa3bfa5.hot-update.js.map