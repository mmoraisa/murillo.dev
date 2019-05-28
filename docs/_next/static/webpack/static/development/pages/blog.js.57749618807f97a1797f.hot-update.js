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
    className: "jsx-2800139080" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2800139080" + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2800139080" + " " + "post__content__date"
  }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2800139080" + " " + "post__content__title"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2800139080" + " " + "post__content__separator"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-2800139080" + " " + "post__content__description"
  }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2800139080" + " " + "post__image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2800139080" + " " + "post__video"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2800139080"
  }, ".post.jsx-2800139080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.jsx-2800139080:hover{-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);z-index:1;box-shadow:5px 5px 20px rgba(0,0,0,.15);}.post.jsx-2800139080>div.jsx-2800139080{width:240px;height:240px;padding:30px;}.post__content.jsx-2800139080{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-2800139080{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-2800139080{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-2800139080{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-2800139080{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-2800139080{background:#9ec6f1;}.post__video.jsx-2800139080{background:#374e67;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUl3QixBQVFRLEFBTVQsQUFNQyxBQU11RSxBQU1yRCxBQVFqQixBQU1RLEFBV0gsQUFJQSxZQTlDTixFQTBCWSxLQWlCM0IsQUFJQSxHQWZzRixHQS9CdkUsS0FpQkcsUUFoQmxCLENBeUJhLE9BUkksSUFTakIsV0FSb0IsYUFsQ0QsQUFvQkssQ0FaWixJQTJCZSxLQVRYLENBakIwQixNQVJyQixPQTBCSixNQVNqQixFQVdrQixPQW5CbEIsU0FvQmlCLEdBdENqQixZQXVDbUIsZUE1QkEsRUE2QmlCLE1BaERWLFNBb0IxQixtQkE2QnFDLDRCQWhEcEIsT0FpRE8sUUFoRHhCLGNBaURBIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcblxuY29uc3QgVHJpcGxlQmxvZ1Bvc3QgPSAoeyBwb3N0IH0pID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kYXRlXCI+MTgvMDUvMjAxOTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X190aXRsZVwiPntwb3N0LmZpZWxkcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19zZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kZXNjcmlwdGlvblwiPntwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdmlkZW9cIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5wb3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0OmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMTUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2RhdGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjYWZhZmFmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X190aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19zZXBhcmF0b3Ige1xuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOWVjNmYxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX3ZpZGVvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzc0ZTY3O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpcGxlQmxvZ1Bvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/TripleBlogPost.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.57749618807f97a1797f.hot-update.js.map