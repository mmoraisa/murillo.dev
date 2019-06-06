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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_4__["Consumer"], null, function (_ref2) {
    var location = _ref2.location;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: "/".concat(location, "/blog/").concat(post.fields.slug)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      "data-aos": "fade-up",
      className: "jsx-2894886311" + " " + "post"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2894886311" + " " + "post__content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2894886311" + " " + "post__content__date"
    }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2894886311" + " " + "post__content__title"
    }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2894886311" + " " + "post__content__separator"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-2894886311" + " " + "post__content__description"
    }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb)"),
        backgroundSize: 'cover'
      },
      className: "jsx-2894886311" + " " + "post__image"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2894886311" + " " + "post__video"
    }, post.fields.video && post.fields.video.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
      src: post.fields.video,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-2894886311" + " " + "post__video__content"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2894886311"
    }, ".post.jsx-2894886311{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.jsx-2894886311:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:3px 3px 10px rgba(0,0,0,.15);}.post.jsx-2894886311>div.jsx-2894886311{width:240px;height:240px;padding:30px;}.post__content.jsx-2894886311{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-2894886311{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-2894886311{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-2894886311{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-2894886311{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-2894886311{background:#9ec6f1;}.post__video.jsx-2894886311{background:#374e67;}.post__video__content.jsx-2894886311{width:100%;height:100%;}@media screen and (max-width:970px){.post.jsx-2894886311{width:calc(100% - 30px);margin:10px 15px;border-radius:10px;box-shadow:5px 5px 20px rgba(0,0,0,.3);overflow:hidden;}.post.jsx-2894886311>div.jsx-2894886311{padding:10px;width:initial;height:initial;}.post.--is-even.jsx-2894886311{-webkit-align-self:initial;-ms-flex-item-align:initial;align-self:initial;}.post__content.jsx-2894886311{-webkit-flex:1;-ms-flex:1;flex:1;}.post__image.jsx-2894886311{width:20% !important;-webkit-order:-1;-ms-flex-order:-1;order:-1;}.post__content__separator.jsx-2894886311{margin:10px 0;}.post__content__title.jsx-2894886311{font-size:22px;}.post__video.jsx-2894886311{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENzQixBQUk0QixBQVFTLEFBTVYsQUFNQyxBQU11RSxBQU1yRCxBQVFqQixBQU1RLEFBV0gsQUFJQSxBQUlSLEFBT2UsQUFRWCxBQU1NLEFBSVosQUFJYyxBQUtQLEFBSUMsQUFJRixXQXpDSCxDQW5EQyxDQWtFRyxBQTJCaEIsQ0FuRXlCLEFBMkR6QixDQUlBLElBOUNGLEFBSUEsRUFpQ2EsQ0FoRHlFLENBb0J0RixDQU1xQixDQXpETixFQWtFSSxHQWpERCxHQTBEaEIsS0ExRUYsQ0F5QmEsRUFnQ1UsQ0FTckIsSUFqRGUsSUFTakIsVUFnQzJDLENBeEN2QixJQTZEbEIsU0EvRmlCLEFBb0JLLEFBa0V0QixJQTlFVSxDQTJCZSxLQVRYLElBakIwQixHQVJyQixPQTBCSixDQWdERyxLQXZDcEIsRUFXa0IsT0FuQmxCLEVBZ0RFLE9BNUJlLE1BdENqQixTQXVDbUIsZUE1QkEsRUE2QmlCLE1BaERWLFNBb0IxQixtQkE2QnFDLDRCQWhEcEIsT0FpRE8sUUFoRHhCLGNBaURBIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBMYW5ndWFnZSBmcm9tICcuLi8uLi8uLi9kZWZhdWx0cy9MYW5ndWFnZSc7XG5cbmNvbnN0IFRyaXBsZUJsb2dQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICB7KHsgbG9jYXRpb24gfSkgPT4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC8ke2xvY2F0aW9ufS9ibG9nLyR7cG9zdC5maWVsZHMuc2x1Z31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kYXRlXCI+MTgvMDUvMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X190aXRsZVwiPntwb3N0LmZpZWxkcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19zZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kZXNjcmlwdGlvblwiPntwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH0/dz0zMDAmaD0zMDAmZml0PXRodW1iKWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdmlkZW9cIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy52aWRlbyAmJiBwb3N0LmZpZWxkcy52aWRlby5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9fdmlkZW9fX2NvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuZmllbGRzLnZpZGVvfVxuICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPlxuICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC4xcyBhbGwgZWFzZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsMCwwLC4xNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudF9fZGF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgICAgICBjb2xvcjogI2FmYWZhZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudF9fdGl0bGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3NlcGFyYXRvciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOWVjNmYxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fdmlkZW8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzc0ZTY3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fdmlkZW9fX2NvbnRlbnQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xuXG4gICAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0Li0taXMtZXZlbiB7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0X19jb250ZW50e1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9fY29udGVudF9fc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0X19jb250ZW50X190aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3RfX3ZpZGVvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9MYW5ndWFnZS5Db25zdW1lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBsZUJsb2dQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/TripleBlogPost.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.a8b73f9c73b8b333e359.hot-update.js.map