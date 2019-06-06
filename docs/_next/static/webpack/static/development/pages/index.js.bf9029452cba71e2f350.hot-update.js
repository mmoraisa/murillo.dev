webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/posts/HeadlinePost/index.js":
/*!************************************************!*\
  !*** ./components/posts/HeadlinePost/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../defaults/Language */ "./defaults/Language.js");






var HeadlinePost = function HeadlinePost(_ref) {
  var description = _ref.description,
      imageUrl = _ref.imageUrl,
      slug = _ref.slug,
      tags = _ref.tags,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_4__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "".concat(window.location.origin, "/").concat(locale, "/blog/").concat(slug)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-aos": "fade-up",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["700025253", [imageUrl]]]) + " " + "headline-post"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["700025253", [imageUrl]]]) + " " + "headline-post__info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["700025253", [imageUrl]]]) + " " + "headline-post__upper-info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["700025253", [imageUrl]]]) + " " + "headline-post__info__span"
    }, tags.join(' & ')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["700025253", [imageUrl]]]) + " " + "headline-post__info__title"
    }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["700025253", [imageUrl]]]) + " " + "headline-post__description"
    }, description)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "700025253",
      dynamic: [imageUrl]
    }, ".headline-post.__jsx-style-dynamic-selector{list-style-type:none;width:calc(25vw - 40px);height:calc(30vw - 40px);margin:20px 20px 7vw 20px;overflow:hidden;padding:20px;background:url(".concat(imageUrl, "?w=500&h=600&fit=thumb);background-size:cover;background-position:center;font-family:stolzl,sans-serif;color:#ffffff;text-shadow:1px 1px 3px rgba(0,0,0,0.4);border-radius:10px;box-shadow:5px 5px 20px rgba(0,0,0,.3);-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.headline-post.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:1px 1px 20px 0px rgba(0,0,0,0.3);}.headline-post.__jsx-style-dynamic-selector:nth-child(even){margin-top:-120px;}.headline-post__upper-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.headline-post__info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;pointer-events:none;}.headline-post__info__span.__jsx-style-dynamic-selector{font-size:1.3vw;line-height:1.3vw;text-transform:uppercase;}.headline-post__description.__jsx-style-dynamic-selector{font-size:1.3vw;line-height:1.3vw;}.headline-post__info__title.__jsx-style-dynamic-selector{margin:10px 0;font-size:2vw;line-height:2vw;}@media screen and (max-width:900px){.headline-post.__jsx-style-dynamic-selector{width:100%;height:calc(90vw - 40px);margin:40px 0;-webkit-order:0;-ms-flex-order:0;order:0;}.headline-post.__jsx-style-dynamic-selector:hover{-webkit-transform:none;-ms-transform:none;transform:none;box-shadow:5px 5px 20px rgba(0,0,0,.3);}.headline-post.__jsx-style-dynamic-selector:nth-child(even){margin-top:initial;}.headline-post__description.__jsx-style-dynamic-selector{font-size:4vw;line-height:4vw;}.headline-post__info__span.__jsx-style-dynamic-selector{font-size:5vw;line-height:5vw;}.headline-post__info__title.__jsx-style-dynamic-selector{font-size:8vw;line-height:8vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvSGVhZGxpbmVQb3N0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCc0IsQUFHb0MsQUFtQkMsQUFLSixBQUlMLEFBS0EsQUFTRyxBQU1BLEFBS0YsQUFRRCxBQU9JLEFBS0ksQUFJTCxBQUtBLEFBS0EsV0F6QlcsR0FSYixBQXdCSSxBQUtBLEFBS0EsRUE3Q0EsQUFNQSxFQXhCcEIsQ0FpREUsRUF6RXdCLE9Bc0RSLEVBd0JoQixBQUtBLEFBS0EsSUE3Q3lCLEFBTTNCLEVBYWtCLFFBUGxCLENBdEQyQixLQThEZixPQUsrQixFQXhCM0MsV0ExQzRCLElBMEJKLEFBS0EsSUFkeUIsYUE2Qy9DLEtBN0RnQixBQWtFaEIsZ0JBakVhLFVBZ0JmLEdBZnFFLDJCQXdCckUsQUFLeUIsd0NBNUJELHNCQUNLLDJCQUNJLG9CQTJCRCxVQTFCaEIsY0FDNkIsd0NBQ3hCLG1CQUNvQixnQ0F3QjNCLE9BdkJZLEtBd0JKLG9CQUN0QiwrQkF4QmlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvSGVhZGxpbmVQb3N0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBMYW5ndWFnZSBmcm9tICcuLi8uLi8uLi9kZWZhdWx0cy9MYW5ndWFnZSc7XG5cbmNvbnN0IEhlYWRsaW5lUG9zdCA9ICh7IGRlc2NyaXB0aW9uLCBpbWFnZVVybCwgc2x1ZywgdGFncywgdGl0bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIHsoeyBsb2NhbGUgfSkgPT4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPExpbmsgaHJlZj17YCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vJHtsb2NhbGV9L2Jsb2cvJHtzbHVnfWB9PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRsaW5lLXBvc3RcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZS1wb3N0X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZS1wb3N0X191cHBlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkbGluZS1wb3N0X19pbmZvX19zcGFuXCI+eyB0YWdzLmpvaW4oJyAmICcpIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkbGluZS1wb3N0X19pbmZvX190aXRsZVwiPnsgdGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lLXBvc3RfX2Rlc2NyaXB0aW9uXCI+eyBkZXNjcmlwdGlvbiB9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3Qge1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDI1dncgLSA0MHB4KTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDMwdncgLSA0MHB4KTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHggN3Z3IDIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2ltYWdlVXJsfT93PTUwMCZoPTYwMCZmaXQ9dGh1bWIpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGxpbmUtcG9zdDpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGxpbmUtcG9zdDpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0X191cHBlci1pbmZvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3RfX2luZm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGxpbmUtcG9zdF9faW5mb19fc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zdnc7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjN2dztcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3RfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjN2dztcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3Z3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGxpbmUtcG9zdF9faW5mb19fdGl0bGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAydnc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg5MHZ3IC0gNDBweCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVhZGxpbmUtcG9zdDpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0Om50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0X19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDR2dztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0X19pbmZvX19zcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNXZ3O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3RfX2luZm9fX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDh2dztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogOHZ3O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvTGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5IZWFkbGluZVBvc3QucHJvcFR5cGVzID0ge1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZVVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRhZ3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkbGluZVBvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/HeadlinePost/index.js */")));
  });
};

HeadlinePost.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string).isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HeadlinePost);

/***/ })

})
//# sourceMappingURL=index.js.bf9029452cba71e2f350.hot-update.js.map