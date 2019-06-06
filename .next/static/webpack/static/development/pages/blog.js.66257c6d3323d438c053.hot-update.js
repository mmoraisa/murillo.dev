webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/BlogSearchHit/index.js":
/*!*******************************************!*\
  !*** ./components/BlogSearchHit/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_Languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/Languages */ "./defaults/Languages.js");
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../defaults/Language */ "./defaults/Language.js");






var BlogSearchHit = function BlogSearchHit(_ref) {
  var hit = _ref.hit;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_4__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale;
    return hit.fields.slug && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(locale, "/blog/").concat(hit.fields.slug[locale])
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4092717056" + " " + "blog-search-hit"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4092717056" + " " + "blog-search-hit__title"
    }, hit.fields.title[locale]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4092717056" + " " + "blog-search-hit__description"
    }, hit.fields.description[locale]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4092717056" + " " + "blog-search-hit__tags"
    }, hit.fields.tags[locale] && hit.fields.tags[locale].map(function (tag) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: tag,
        className: "jsx-4092717056" + " " + "blog-search-hit__tags__tag"
      }, tag);
    }))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4092717056"
  }, ".blog-search-hit.jsx-4092717056{width:300px;background:white;box-shadow:5px 5px 20px rgba(0,0,0,0.15);margin:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px;font-size:12px;font-family:stolzl,sans-serif;font-weight:200;border-radius:10px;-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.blog-search-hit.jsx-4092717056:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);box-shadow:2px 2px 15px rgba(0,0,0,0.10);}.blog-search-hit__title.jsx-4092717056{font-weight:400;font-size:14px;line-height:14px;margin-bottom:5px;}.blog-search-hit__description.jsx-4092717056{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.blog-search-hit__tags.jsx-4092717056{margin-top:3px;font-size:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.blog-search-hit__tags__tag.jsx-4092717056{color:#8e8e8e;border:1px solid #e0e0e0;border-radius:5px;padding:2px 4px;margin:5px 5px 0 0;}@media screen and (max-width:650px){.blog-search-hit.jsx-4092717056{width:calc(100vw - 60px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEhpdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBSXVCLEFBZ0JVLEFBS04sQUFPRixBQU9DLEFBTUQsQUFVYSxZQWxEVixFQTRCRSxBQWFNLENBTlYsQ0FkQSxTQThCZixJQWxENEMsQ0FtQy9CLENBZEksRUFPTSxNQWFMLFNBbkJBLFFBT0YsQ0FhQSxTQW5CbEIsSUF0QmtCLEVBNkJsQixDQWFxQixLQTVCeUIsUUFiL0IsTUEwQ2YsWUFSQSxlQXBCQSx5Q0Fid0IsOEVBQ1QsYUFDRSxlQUNnQiw4QkFDZixnQkFDRyxtQkFDSyx3REFDVCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL0Jsb2dTZWFyY2hIaXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRU5HTElTSCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL0xhbmd1YWdlcyc7XG5pbXBvcnQgKiBhcyBMYW5ndWFnZSBmcm9tICcuLi8uLi9kZWZhdWx0cy9MYW5ndWFnZSc7XG5cbmNvbnN0IEJsb2dTZWFyY2hIaXQgPSAoeyBoaXQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgICAgeyh7IGxvY2FsZSB9KSA9PiAoXG4gICAgICAgICAgaGl0LmZpZWxkcy5zbHVnICYmXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke2xvY2FsZX0vYmxvZy8ke2hpdC5maWVsZHMuc2x1Z1tsb2NhbGVdfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1oaXRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvZy1zZWFyY2gtaGl0X190aXRsZVwiPntoaXQuZmllbGRzLnRpdGxlW2xvY2FsZV19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1oaXRfX2Rlc2NyaXB0aW9uXCI+e2hpdC5maWVsZHMuZGVzY3JpcHRpb25bbG9jYWxlXX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2ctc2VhcmNoLWhpdF9fdGFnc1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGhpdC5maWVsZHMudGFnc1tsb2NhbGVdICYmXG4gICAgICAgICAgICAgICAgICBoaXQuZmllbGRzLnRhZ3NbbG9jYWxlXS5tYXAodGFnID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2ctc2VhcmNoLWhpdF9fdGFnc19fdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9MYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0IHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nLXNlYXJjaC1oaXQ6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0X190aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2ctc2VhcmNoLWhpdF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nLXNlYXJjaC1oaXRfX3RhZ3Mge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nLXNlYXJjaC1oaXRfX3RhZ3NfX3RhZyB7XG4gICAgICAgICAgY29sb3I6ICM4ZThlOGU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgICBtYXJnaW46IDVweCA1cHggMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICAgIC5ibG9nLXNlYXJjaC1oaXQge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA2MHB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dTZWFyY2hIaXQ7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchHit/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogSearchHit);

/***/ })

})
//# sourceMappingURL=blog.js.66257c6d3323d438c053.hot-update.js.map