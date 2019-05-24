webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");
/* harmony import */ var _components_posts_Author__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/posts/Author */ "./components/posts/Author/index.js");













var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (_ref) {
  var errorCode = _ref.errorCode,
      post = _ref.post,
      router = _ref.router;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_10___default.a.init();
  }, []);

  if (errorCode) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_8___default.a, {
      statusCode: errorCode
    });
  }

  var publishDate = post.fields.publishDate;
  var dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})T(?<hour>[0-9]{2}):(?<minute>[0-9]{2})/;
  var publishDateGroups = publishDate.match(dateRegexp).groups;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-975401078" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-975401078" + " " + "post__header"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "https:".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb"),
    className: "jsx-975401078" + " " + "post__image"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-975401078" + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-975401078"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-975401078" + " " + "post__content__publish-date"
  }, "".concat(publishDateGroups.month, "/").concat(publishDateGroups.day, "/").concat(publishDateGroups.year, " at ").concat(publishDateGroups.hour, ":").concat(publishDateGroups.minute)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-975401078" + " " + "post__content__description"
  }, post.fields.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
    source: post.fields.body
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-975401078" + " " + "post__content__footer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-975401078" + " " + "post__tags"
  }, post.fields.tags.join(', ')), post.fields.source && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-975401078" + " " + "post__source"
  }, "Source: ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: post.fields.source,
    target: "_blank",
    className: "jsx-975401078"
  }, post.fields.source))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-975401078" + " " + "show-more"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-975401078"
  }, "Interested!? So why do not you join my blog?"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-975401078"
  }, "There you can learn more about the world of technology and its news"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-975401078"
  }, "View blog"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_posts_Author__WEBPACK_IMPORTED_MODULE_12__["default"], {
    author: post.fields.author,
    smallScreenStyles: "margin: 0",
    styles: "margin: 70px 20px 70px 0; float: right;"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "975401078"
  }, "h1.jsx-975401078,h2.jsx-975401078,h3.jsx-975401078{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-975401078{margin:0;font-size:50px;line-height:50px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;min-height:60px;}.post.jsx-975401078{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__header.jsx-975401078{margin-left:-575px;}.post__header__title.jsx-975401078{height:110px;margin-left:150px;margin-top:175px;position:absolute;background-color:#ffffff;padding:15px 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:525px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__image.jsx-975401078{width:300px;border-radius:20px;box-shadow:2px 2px 20px rgba(0,0,0,.2);}.post__content.jsx-975401078{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;width:600px;margin:-130px 0 0 150px;padding:60px;background:#fff;box-shadow:3px 3px 30px rgba(0,0,0,.1);border-radius:10px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__content__publish-date.jsx-975401078{font-family:arial;font-size:11px;color:#bbbbbb;}.post__content__description.jsx-975401078{margin:0 0 30px 0;font-weight:700;}.post__content__footer.jsx-975401078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#a0a0a0;}.post__source.jsx-975401078{text-transform:lowercase;font-size:12px;text-align:right;}.post__source.jsx-975401078 a.jsx-975401078{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.show-more.jsx-975401078{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;float:right;}.show-more.jsx-975401078 h3.jsx-975401078{font-size:22px;margin:0 0 5px 0;}.show-more.jsx-975401078 *.jsx-975401078{font-family:stolzl,sans-serif;}.show-more.jsx-975401078 button.jsx-975401078{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.show-more.jsx-975401078 button.jsx-975401078:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.show-more.jsx-975401078 button.jsx-975401078:focus,.show-more.jsx-975401078 button.jsx-975401078:active{outline:none;}@media screen and (max-width:900px){h1.jsx-975401078{font-size:36px;line-height:36px;margin:0;min-height:initial;}.post__header.jsx-975401078{position:-webkit-sticky;position:sticky;left:20px;}.post__content.jsx-975401078{font-size:14px;width:calc(100% - 50px);margin:-130px 0 0 0;padding:20px;z-index:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VrQixBQU0wQyxBQU10QixBQVVJLEFBT00sQUFJTixBQVlELEFBTVUsQUFpQkosQUFNQSxBQUtMLEFBUVksQUFNWCxBQUtRLEFBU1AsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQU1JLEFBT0MsQUFLRCxTQTNJRixHQWlDSSxDQXZCTixBQVdLLEFBcUdwQixDQXpDdUIsQ0FjSixBQWlDRSxBQVlPLEdBcEZYLEFBTUMsQ0E3Q2xCLEFBdUY4QixHQWpFd0QsQUErQzVELEVBckZQLENBMEVGLEtBakZDLEFBMEdsQixDQTlFbUIsQUFZc0IsQ0E4RHpDLEFBaUNhLENBeEVHLENBTWhCLEtBOEV3QixDQWpFTCxBQTJETCxDQXJJa0QsQUFnSXpDLEtBdklILEFBNEZPLENBN0IzQixBQStDaUIsQ0FsRkcsRUFpSGxCLE9BM0RGLEVBaUVpQixDQVhmLEVBekJjLEVBOUdoQixBQXNGQSxFQTFEMkIsSUFXM0IsQ0FxRGMsQ0F1REEsRUE1RWtCLEVBd0NoQixFQVN5QixJQTRCdkMsQ0F2RGEsSUE5RVMsR0FpR0osQ0FuRkksS0FpRVYsS0F2Rk0sS0FxQ0YsRUFtRGxCLEFBa0JvQixLQW5GTCxJQTJGZixFQWpIK0IsR0FxQ2QsSUFxRVMsV0FwRVAsV0FyQ0QsTUFzQ0osVUFyQ2QsQ0FNcUIsQ0FnQ0ssZ0JBbUVULEtBcEZILEVBeUNJLENBdkJILE9BbUVmLEVBcEZxQixJQWtCSCxFQXVCRyxjQXRCb0IsdUNBbEN6QyxBQW1DcUIsbUJBQ2UsZUFwQnBDLE1BeUNnQixhQXBCcUIsQ0FxQnJDLGtDQXBCd0Isc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gIGZyb20gJ2NvbnRlbnRmdWwnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCB7IENPTlRFTlRGVUxfU1BBQ0VfSUQsIENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIH0gZnJvbSAnLi4vZGVmYXVsdHMvQ29udGVudGZ1bEtleXMnO1xuaW1wb3J0IEF1dGhvciBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzL0F1dGhvcic7XG5cbmNvbnN0IFBvc3QgPSB3aXRoUm91dGVyKCh7IGVycm9yQ29kZSwgcG9zdCwgcm91dGVyIH0pID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gIH0sIFtdKTtcblxuICBpZihlcnJvckNvZGUpIHtcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e2Vycm9yQ29kZX0gLz47XG4gIH1cblxuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBvc3QuZmllbGRzLnB1Ymxpc2hEYXRlO1xuICBjb25zdCBkYXRlUmVnZXhwID0gLyg/PHllYXI+WzAtOV17NH0pLSg/PG1vbnRoPlswLTldezJ9KS0oPzxkYXk+WzAtOV17Mn0pVCg/PGhvdXI+WzAtOV17Mn0pOig/PG1pbnV0ZT5bMC05XXsyfSkvO1xuXG4gIGNvbnN0IHB1Ymxpc2hEYXRlR3JvdXBzID0gcHVibGlzaERhdGUubWF0Y2goZGF0ZVJlZ2V4cCkuZ3JvdXBzO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e2BodHRwczoke3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9P3c9MzAwJmg9MzAwJmZpdD10aHVtYmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDE+e3Bvc3QuZmllbGRzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19wdWJsaXNoLWRhdGVcIj57YCR7cHVibGlzaERhdGVHcm91cHMubW9udGh9LyR7cHVibGlzaERhdGVHcm91cHMuZGF5fS8ke3B1Ymxpc2hEYXRlR3JvdXBzLnllYXJ9IGF0ICR7cHVibGlzaERhdGVHcm91cHMuaG91cn06JHtwdWJsaXNoRGF0ZUdyb3Vwcy5taW51dGV9YH08L3NwYW4+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19kZXNjcmlwdGlvblwiPntwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZmllbGRzLmJvZHl9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2Zvb3RlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RhZ3NcIj57cG9zdC5maWVsZHMudGFncy5qb2luKCcsICcpfTwvZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuc291cmNlICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19zb3VyY2VcIj5cbiAgICAgICAgICAgICAgICAgIFNvdXJjZTogPGEgaHJlZj17cG9zdC5maWVsZHMuc291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIj57cG9zdC5maWVsZHMuc291cmNlfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctbW9yZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgIDxoMz5JbnRlcmVzdGVkIT8gU28gd2h5IGRvIG5vdCB5b3Ugam9pbiBteSBibG9nPzwvaDM+XG4gICAgICAgICAgPHNwYW4+VGhlcmUgeW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSB3b3JsZCBvZiB0ZWNobm9sb2d5IGFuZCBpdHMgbmV3czwvc3Bhbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IGJsb2c8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QXV0aG9yXG4gICAgICAgICAgYXV0aG9yPXtwb3N0LmZpZWxkcy5hdXRob3J9XG4gICAgICAgICAgc21hbGxTY3JlZW5TdHlsZXM9XCJtYXJnaW46IDBcIlxuICAgICAgICAgIHN0eWxlcz1cIm1hcmdpbjogNzBweCAyMHB4IDcwcHggMDsgZmxvYXQ6IHJpZ2h0O1wiIC8+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRDQjhDNCwgIzNDRDNBRCk7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNTc1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9faGVhZGVyX190aXRsZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTc1cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAwIDAgMjVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiA1MjVweDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAtMTMwcHggMCAwIDE1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDMwcHggcmdiYSgwLDAsMCwuMSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fcHVibGlzaC1kYXRlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19mb290ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19zb3VyY2Uge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX3NvdXJjZSBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hvdy1tb3JlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMzV2dyAtIDQwcHgpO1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG93LW1vcmUgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG93LW1vcmUgKiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNob3ctbW9yZSBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDZhZTM7XG4gICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNob3ctbW9yZSBidXR0b246aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNob3ctbW9yZSBidXR0b246Zm9jdXMsXG4gICAgICAgIC5zaG93LW1vcmUgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RfX2hlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgICAgICAgICBtYXJnaW46IC0xMzBweCAwIDAgMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufSk7XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHF1ZXJ5O1xuXG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgc3BhY2U6IENPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gICAgYWNjZXNzVG9rZW46IENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXG4gIH0pO1xuXG4gIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxuICAgICdmaWVsZHMuc2x1Z1tpbl0nOiBzbHVnLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBvc3Q6IGVudHJpZXMuaXRlbXNbMF1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/post.js */"));
});

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, slug, client, entries;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            slug = query.slug;
            client = Object(contentful__WEBPACK_IMPORTED_MODULE_6__["createClient"])({
              space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_11__["CONTENTFUL_SPACE_ID"],
              accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_11__["CONTENTFUL_ACCESS_TOKEN"]
            });
            _context.next = 5;
            return client.getEntries({
              content_type: 'blogPost',
              'fields.slug[in]': slug
            });

          case 5:
            entries = _context.sent;
            return _context.abrupt("return", {
              post: entries.items[0]
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.3a1bcd5afef210380237.hot-update.js.map