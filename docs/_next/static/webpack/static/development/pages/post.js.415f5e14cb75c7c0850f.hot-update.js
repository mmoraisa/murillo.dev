webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/posts/Author/index.js":
/*!******************************************!*\
  !*** ./components/posts/Author/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);



var Author = function Author(_ref) {
  var author = _ref.author,
      _ref$responsiveStyles = _ref.responsiveStyles,
      responsiveStyles = _ref$responsiveStyles === void 0 ? [] : _ref$responsiveStyles,
      styles = _ref.styles;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author",
    "data-aos": "fade-up"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the author"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "author__image",
    src: "".concat(author.fields.image.fields.file.url, "?w=100&h=100&fit=thumb")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author__info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "author__info__name"
  }, author.fields.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "author__info__title"
  }, author.fields.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "author__info__company"
  }, author.fields.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "author__info__short-bio"
  }, author.fields.shortBio), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "author__info__contacts"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n\n        .author {\n          width: 500px;\n          background: #fff;\n          box-shadow: 5px 5px 20px rgba(0,0,0,.2);\n          border-radius: 10px;\n          padding: 60px;\n          ".concat(styles, "\n        }\n\n        .author h2 {\n          margin: 0 0 30px 0;\n          font-size: 26px;\n          line-height: 26px;\n          background-image: linear-gradient(to bottom,#4CB8C4,#3CD3AD);\n          color: transparent;\n          -webkit-background-clip: text;\n          font-family: stolzl,sans-serif;\n        }\n\n        .author > div {\n          display: flex;\n        }\n\n        .author__image {\n          width: 100px;\n          height: 100px;\n          border-radius: 50%;\n        }\n\n        .author__info {\n          padding: 0 0 0 25px;\n          display: flex;\n          flex-direction: column;\n          color: rgba(0,0,0,.84);\n        }\n\n        .author__info__name,\n        .author__info__title,\n        .author__info__company {\n          font-family: stolzl,sans-serif;\n        }\n\n        .author__info__name {\n          font-size: 20px;\n        }\n\n        .author__info__title,\n        .author__info__company {\n          font-size: 14px;\n        }\n\n        .author__info__short-bio {\n          margin-top: 15px;\n          text-rendering: optimizeLegibility;\n          -webkit-font-smoothing: antialiased;\n          word-break: break-word;\n          font-family: medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;\n        }\n\n        ").concat(responsiveStyles.map(function (responsiveStyle) {
    return "\n            @media screen and (max-width: ".concat(responsiveStyle.screen, "px) {\n              ").concat(responsiveStyle.style, "\n            }\n          ");
  }), "\n\n      ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ })

})
//# sourceMappingURL=post.js.415f5e14cb75c7c0850f.hot-update.js.map