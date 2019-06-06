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
      className: "jsx-3293073691" + " " + "post"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3293073691" + " " + "post__content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3293073691" + " " + "post__content__date"
    }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3293073691" + " " + "post__content__title"
    }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3293073691" + " " + "post__content__separator"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3293073691" + " " + "post__content__description"
    }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb)"),
        backgroundSize: 'cover'
      },
      className: "jsx-3293073691" + " " + "post__image"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3293073691" + " " + "post__video"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3293073691" + " " + "post__video__backdrop"
    }), post.fields.video && post.fields.video.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
      src: post.fields.video,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-3293073691" + " " + "post__video__content"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3293073691"
    }, ".post.jsx-3293073691{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.jsx-3293073691:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:3px 3px 10px rgba(0,0,0,.15);}.post.jsx-3293073691>div.jsx-3293073691{width:240px;min-height:240px;height:auto;padding:30px;}.post__content.jsx-3293073691{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-3293073691{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-3293073691{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-3293073691{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-3293073691{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-3293073691{background:#9ec6f1;}.post__video.jsx-3293073691{width:300px !important;padding:0 !important;}.post__video__backdrop.jsx-3293073691{position:absolute;width:300px;height:100%;background:#005f8854;pointer-events:none;}.post__video__content.jsx-3293073691{width:100%;height:100%;}@media screen and (max-width:970px){.post.jsx-3293073691{width:calc(100% - 30px);margin:10px 15px;border-radius:10px;box-shadow:5px 5px 20px rgba(0,0,0,.3);overflow:hidden;}.post.jsx-3293073691>div.jsx-3293073691{padding:10px;width:initial;height:initial;}.post.--is-even.jsx-3293073691{-webkit-align-self:initial;-ms-flex-item-align:initial;align-self:initial;}.post__content.jsx-3293073691{-webkit-flex:1;-ms-flex:1;flex:1;}.post__image.jsx-3293073691{width:20% !important;-webkit-order:-1;-ms-flex-order:-1;order:-1;}.post__content__separator.jsx-3293073691{margin:10px 0;}.post__content__title.jsx-3293073691{font-size:22px;}.post__video.jsx-3293073691{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNzQixBQUk0QixBQVFTLEFBTVYsQUFPQyxBQU11RSxBQU1yRCxBQVFqQixBQU1RLEFBV0gsQUFJSSxBQUtMLEFBUVAsQUFPZSxBQVFYLEFBTU0sQUFJWixBQUljLEFBS1AsQUFJQyxBQUlGLFdBekNILENBN0RLLENBNEVELEFBMkJoQixDQTVFeUIsQUFvRXpCLENBSUEsR0E5Q1ksQ0FUZCxFQThDYSxDQXpEeUUsQ0FlL0QsQUFjdkIsQ0FNcUIsR0FTRixFQTVFTCxDQWtCSSxBQW1DSixHQWdDWixNQTFEVyxFQTFCRSxBQW1FUSxDQWRBLEFBdUJyQixFQTdCRixFQTdCaUIsSUFTakIsSUExQkEsTUFtRTJDLENBakR2QixFQW1DRSxFQW1DcEIsU0F6R2lCLEFBcUJLLEFBMkV0QixJQXhGVSxDQTRCZSxJQW1DM0IsQ0E1Q2dCLElBbEIwQixHQVJyQixPQTJCSixDQXlERyxLQWhEcEIsRUFXa0IsT0FuQmxCLEVBeURFLE9BckNlLE1BdkNqQixTQXdDbUIsZUE1QkEsRUE2QmlCLE1BakRWLFNBcUIxQixtQkE2QnFDLDRCQWpEcEIsT0FrRE8sUUFqRHhCLGNBa0RBIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgKiBhcyBMYW5ndWFnZSBmcm9tICcuLi8uLi8uLi9kZWZhdWx0cy9MYW5ndWFnZSc7XG5cbmNvbnN0IFRyaXBsZUJsb2dQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICB7KHsgbG9jYXRpb24gfSkgPT4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC8ke2xvY2F0aW9ufS9ibG9nLyR7cG9zdC5maWVsZHMuc2x1Z31gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kYXRlXCI+MTgvMDUvMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X190aXRsZVwiPntwb3N0LmZpZWxkcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19zZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kZXNjcmlwdGlvblwiPntwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH0/dz0zMDAmaD0zMDAmZml0PXRodW1iKWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdmlkZW9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3ZpZGVvX19iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLnZpZGVvICYmIHBvc3QuZmllbGRzLnZpZGVvLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X192aWRlb19fY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5maWVsZHMudmlkZW99XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW4+XG4gICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0OmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X19kYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYWZhZmFmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X190aXRsZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudF9fc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5ZWM2ZjE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X192aWRlbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X192aWRlb19fYmFja2Ryb3Age1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1Zjg4NTQ7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fdmlkZW9fX2NvbnRlbnQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzBweCkge1xuXG4gICAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0ID4gZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0Li0taXMtZXZlbiB7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0X19jb250ZW50e1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9fY29udGVudF9fc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0X19jb250ZW50X190aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3RfX3ZpZGVvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9MYW5ndWFnZS5Db25zdW1lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBsZUJsb2dQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/TripleBlogPost.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.d0957a75c1f14ae4bc00.hot-update.js.map