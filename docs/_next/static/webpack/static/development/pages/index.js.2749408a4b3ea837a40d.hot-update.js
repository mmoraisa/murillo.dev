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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3519434500", [imageUrl]]]) + " " + "headline-post"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3519434500", [imageUrl]]]) + " " + "headline-post__info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3519434500", [imageUrl]]]) + " " + "headline-post__upper-info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3519434500", [imageUrl]]]) + " " + "headline-post__info__span"
    }, tags.join(' & ')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3519434500", [imageUrl]]]) + " " + "headline-post__info__title"
    }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3519434500", [imageUrl]]]) + " " + "headline-post__description"
    }, description)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3519434500",
      dynamic: [imageUrl]
    }, ".headline-post.__jsx-style-dynamic-selector{list-style-type:none;width:calc(25vw - 40px);height:calc(30vw - 40px);margin:20px 20px 7vw 20px;overflow:hidden;padding:20px;background:url(".concat(imageUrl, "?w=500&h=600&fit=thumb);background-size:cover;background-position:center;font-family:stolzl,sans-serif;color:#ffffff;text-shadow:1px 1px 3px rgba(0,0,0,0.4);border-radius:10px;box-shadow:5px 5px 20px rgba(0,0,0,.3);-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.headline-post.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:1px 1px 20px 0px rgba(0,0,0,0.3);}.headline-post.__jsx-style-dynamic-selector:nth-child(even){margin-top:-120px;}.headline-post__upper-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.headline-post__info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;pointer-events:none;}.headline-post__info__span.__jsx-style-dynamic-selector{font-size:1.3vw;line-height:1.3vw;text-transform:uppercase;}.headline-post__description.__jsx-style-dynamic-selector{font-size:1.3vw;line-height:1.3vw;}.headline-post__info__title.__jsx-style-dynamic-selector{margin:10px 0;font-size:2vw;line-height:2vw;}@media screen and (max-width:900px){.headline-post.__jsx-style-dynamic-selector{width:100%;height:calc(90vw - 40px);margin:40px 0;-webkit-order:0;-ms-flex-order:0;order:0;}.headline-post.__jsx-style-dynamic-selector:hover{-webkit-transform:none;-ms-transform:none;transform:none;box-shadow:5px 5px 20px rgba(0,0,0,.3);}.headline-post.__jsx-style-dynamic-selector:nth-child(even){margin-top:initial;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvSGVhZGxpbmVQb3N0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCc0IsQUFHb0MsQUFtQkMsQUFLSixBQUlMLEFBS0EsQUFTRyxBQU1BLEFBS0YsQUFRRCxBQU9JLEFBS0ksV0FYTSxHQVJiLEVBWEksQUFNQSxFQXhCcEIsQ0FpREUsRUF6RXdCLE9Bc0RSLE1BWFMsQUFNM0IsRUFha0IsUUFQbEIsQ0F0RDJCLEtBOERmLE9BSytCLEVBeEIzQyxXQTFDNEIsSUEwQkosQUFLQSxJQWR5QixhQTZDL0MsS0E3RGdCLEFBa0VoQixnQkFqRWEsVUFnQmYsR0FmcUUsMkJBd0JyRSxBQUt5Qix3Q0E1QkQsc0JBQ0ssMkJBQ0ksb0JBMkJELFVBMUJoQixjQUM2Qix3Q0FDeEIsbUJBQ29CLGdDQXdCM0IsT0F2QlksS0F3Qkosb0JBQ3RCLCtCQXhCaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9IZWFkbGluZVBvc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCAqIGFzIExhbmd1YWdlIGZyb20gJy4uLy4uLy4uL2RlZmF1bHRzL0xhbmd1YWdlJztcblxuY29uc3QgSGVhZGxpbmVQb3N0ID0gKHsgZGVzY3JpcHRpb24sIGltYWdlVXJsLCBzbHVnLCB0YWdzLCB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExhbmd1YWdlLkNvbnN1bWVyPlxuICAgICAgeyh7IGxvY2FsZSB9KSA9PiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TGluayBocmVmPXtgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS8ke2xvY2FsZX0vYmxvZy8ke3NsdWd9YH0+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGxpbmUtcG9zdFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lLXBvc3RfX2luZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lLXBvc3RfX3VwcGVyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRsaW5lLXBvc3RfX2luZm9fX3NwYW5cIj57IHRhZ3Muam9pbignICYgJykgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRsaW5lLXBvc3RfX2luZm9fX3RpdGxlXCI+eyB0aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmUtcG9zdF9fZGVzY3JpcHRpb25cIj57IGRlc2NyaXB0aW9uIH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGxpbmUtcG9zdCB7XG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjV2dyAtIDQwcHgpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMzB2dyAtIDQwcHgpO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweCA3dncgMjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7aW1hZ2VVcmx9P3c9NTAwJmg9NjAwJmZpdD10aHVtYik7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0OmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0Om50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3RfX3VwcGVyLWluZm8ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGxpbmUtcG9zdF9faW5mbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0X19pbmZvX19zcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjN2dztcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3Z3O1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGxpbmUtcG9zdF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3Z3O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zdnc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0X19pbmZvX190aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJ2dztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAgICAgICAgICAgICAuaGVhZGxpbmUtcG9zdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDkwdncgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWFkbGluZS1wb3N0OmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3Q6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBpbml0aWFsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlYWRsaW5lLXBvc3RfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0xhbmd1YWdlLkNvbnN1bWVyPlxuICApO1xufTtcblxuSGVhZGxpbmVQb3N0LnByb3BUeXBlcyA9IHtcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YWdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGxpbmVQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/HeadlinePost/index.js */")));
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
//# sourceMappingURL=index.js.2749408a4b3ea837a40d.hot-update.js.map