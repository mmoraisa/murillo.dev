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
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../defaults/Language */ "./defaults/Language.js");






var DoubleBlogPost = function DoubleBlogPost(_ref) {
  var even = _ref.even,
      post = _ref.post;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_4__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: "/blog/".concat(post.fields.slug)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      "data-aos": "fade-up",
      className: "jsx-941312961" + " " + "post ".concat(even ? '--is-even' : '')
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-941312961" + " " + "post__content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-941312961" + " " + "post__content__date"
    }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-941312961" + " " + "post__content__title"
    }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-941312961" + " " + "post__content__separator"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-941312961" + " " + "post__content__description"
    }, post.fields.description)), post.fields.heroImage.fields.file && post.fields.heroImage.fields.file.url && post.fields.heroImage.fields.file.url.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb)")
      },
      className: "jsx-941312961" + " " + "post__image"
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "941312961"
    }, ".post.jsx-941312961{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.jsx-941312961:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:3px 3px 10px rgba(0,0,0,.15);}.post.--is-even.jsx-941312961{background:green;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}.post.jsx-941312961>div.jsx-941312961{width:240px;height:240px;padding:30px;}.post__content.jsx-941312961{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-941312961{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-941312961{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-941312961{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-941312961{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-941312961{background-size:cover;background-position:center;}.post.--is-even.jsx-941312961 .post__image.jsx-941312961{-webkit-order:-1;-ms-flex-order:-1;order:-1;}@media screen and (max-width:970px){.post.jsx-941312961{width:calc(100% - 30px);margin:10px 15px;border-radius:10px;box-shadow:5px 5px 20px rgba(0,0,0,.3);overflow:hidden;}.post.jsx-941312961>div.jsx-941312961{padding:10px;width:initial;height:initial;}.post.--is-even.jsx-941312961{-webkit-align-self:initial;-ms-flex-item-align:initial;align-self:initial;}.post__content.jsx-941312961{-webkit-flex:1;-ms-flex:1;flex:1;}.post__image.jsx-941312961{width:20% !important;-webkit-order:-1;-ms-flex-order:-1;order:-1;}.post__content__separator.jsx-941312961{margin:10px 0;}.post__content__title.jsx-941312961{font-size:22px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUkwQixBQU9TLEFBTUwsQUFLTCxBQU1DLEFBTXVFLEFBTXJELEFBUWpCLEFBTVEsQUFXQSxBQUtiLEFBTWlCLEFBUVgsQUFNTSxBQUlaLEFBSWMsQUFLUCxBQUlDLFlBcEZKLENBOERHLENBcENTLEFBdUR6QixDQUlBLEVBMUZvQixJQWlGVCxDQTVDeUUsQUFXekQsRUFXUixDQXJETixFQThESSxHQTdDRCxHQXNEaEIsS0F0RUYsQ0F5QmEsRUE0QlUsQ0FTckIsRUFoQkYsRUE3QmlCLEdBeUJqQixDQWhCQSxVQTRCMkMsQ0FwQ3ZCLElBeURsQixTQS9GbUIsQUF3QkcsQUE4RHRCLElBL0VVLENBZ0NlLEtBVFgsSUF0QjBCLENBTTFDLFNBaUJpQixDQTRDRyxLQW5DcEIsRUFXa0IsT0FuQmxCLEVBNENFLE9BeEJlLE1BM0NqQixTQTRDbUIsTUFwRE8sU0F3QlAsRUE2QmlCLGVBNUJwQyxtQkE2QnFDLFdBckRwQixlQUNqQixTQXFEd0Isc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvRG91YmxlQmxvZ1Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBMYW5ndWFnZSBmcm9tICcuLi8uLi8uLi9kZWZhdWx0cy9MYW5ndWFnZSc7XG5cbmNvbnN0IERvdWJsZUJsb2dQb3N0ID0gKHsgZXZlbiwgcG9zdCB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICB7KHsgbG9jYWxlIH0pID0+IChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC9ibG9nLyR7cG9zdC5maWVsZHMuc2x1Z31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHBvc3QgJHtldmVuID8gJy0taXMtZXZlbicgOiAnJ31gfSBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kYXRlXCI+MTgvMDUvMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fdGl0bGVcIj57cG9zdC5maWVsZHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3NlcGFyYXRvclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kZXNjcmlwdGlvblwiPntwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlICYmXG4gICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwgJiZcbiAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybC5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTMwMCZoPTMwMCZmaXQ9dGh1bWIpYCxcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMXMgYWxsIGVhc2U7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3Q6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLDAsMCwuMTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0Li0taXMtZXZlbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2RhdGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogI2FmYWZhZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdF9fY29udGVudF9fdGl0bGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0X19jb250ZW50X19zZXBhcmF0b3Ige1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QuLS1pcy1ldmVuIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcblxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IGluaXRpYWw7XG4gICAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3QuLS1pcy1ldmVuIHtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogaW5pdGlhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnR7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudF9fc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X190aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0xhbmd1YWdlLkNvbnN1bWVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlQmxvZ1Bvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/DoubleBlogPost.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.dceca8aade9abb01c77f.hot-update.js.map