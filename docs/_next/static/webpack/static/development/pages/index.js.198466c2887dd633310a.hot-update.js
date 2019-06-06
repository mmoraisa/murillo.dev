webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/Language */ "./defaults/Language.js");





var BlogSearchHit = function BlogSearchHit(_ref) {
  var hit = _ref.hit;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_3__["Consumer"], null, function (_ref2) {
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
  }, ".blog-search-hit.jsx-4092717056{width:300px;background:white;box-shadow:5px 5px 20px rgba(0,0,0,0.15);margin:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px;font-size:12px;font-family:stolzl,sans-serif;font-weight:200;border-radius:10px;-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.blog-search-hit.jsx-4092717056:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);box-shadow:2px 2px 15px rgba(0,0,0,0.10);}.blog-search-hit__title.jsx-4092717056{font-weight:400;font-size:14px;line-height:14px;margin-bottom:5px;}.blog-search-hit__description.jsx-4092717056{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.blog-search-hit__tags.jsx-4092717056{margin-top:3px;font-size:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.blog-search-hit__tags__tag.jsx-4092717056{color:#8e8e8e;border:1px solid #e0e0e0;border-radius:5px;padding:2px 4px;margin:5px 5px 0 0;}@media screen and (max-width:650px){.blog-search-hit.jsx-4092717056{width:calc(100vw - 60px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEhpdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBSXVCLEFBZ0JVLEFBS04sQUFPRixBQU9DLEFBTUQsQUFVYSxZQWxEVixFQTRCRSxBQWFNLENBTlYsQ0FkQSxTQThCZixJQWxENEMsQ0FtQy9CLENBZEksRUFPTSxNQWFMLFNBbkJBLFFBT0YsQ0FhQSxTQW5CbEIsSUF0QmtCLEVBNkJsQixDQWFxQixLQTVCeUIsUUFiL0IsTUEwQ2YsWUFSQSxlQXBCQSx5Q0Fid0IsOEVBQ1QsYUFDRSxlQUNnQiw4QkFDZixnQkFDRyxtQkFDSyx3REFDVCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL0Jsb2dTZWFyY2hIaXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuXG5jb25zdCBCbG9nU2VhcmNoSGl0ID0gKHsgaGl0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBsb2NhbGUgfSkgPT4gKFxuICAgICAgICAgIGhpdC5maWVsZHMuc2x1ZyAmJlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsb2NhbGV9L2Jsb2cvJHtoaXQuZmllbGRzLnNsdWdbbG9jYWxlXX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1zZWFyY2gtaGl0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2ctc2VhcmNoLWhpdF9fdGl0bGVcIj57aGl0LmZpZWxkcy50aXRsZVtsb2NhbGVdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvZy1zZWFyY2gtaGl0X19kZXNjcmlwdGlvblwiPntoaXQuZmllbGRzLmRlc2NyaXB0aW9uW2xvY2FsZV19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1oaXRfX3RhZ3NcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBoaXQuZmllbGRzLnRhZ3NbbG9jYWxlXSAmJlxuICAgICAgICAgICAgICAgICAgaGl0LmZpZWxkcy50YWdzW2xvY2FsZV0ubWFwKHRhZyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1oaXRfX3RhZ3NfX3RhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmJsb2ctc2VhcmNoLWhpdCB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IC4xcyBhbGwgZWFzZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0OmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2ctc2VhcmNoLWhpdF9fdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nLXNlYXJjaC1oaXRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0X190YWdzIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0X190YWdzX190YWcge1xuICAgICAgICAgIGNvbG9yOiAjOGU4ZThlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggNXB4IDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgICAgICAgICAuYmxvZy1zZWFyY2gtaGl0IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nU2VhcmNoSGl0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchHit/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogSearchHit);

/***/ })

})
//# sourceMappingURL=index.js.198466c2887dd633310a.hot-update.js.map