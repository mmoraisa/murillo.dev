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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");











var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(function (_ref) {
  var errorCode = _ref.errorCode,
      post = _ref.post,
      router = _ref.router;

  if (errorCode) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_8___default.a, {
      statusCode: errorCode
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2241258720" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2241258720" + " " + "post__header"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "https:".concat(post.fields.heroImage.fields.file.url, "?w=700&fit=thumb"),
    className: "jsx-2241258720" + " " + "post__image"
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2241258720" + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-2241258720"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
    source: post.fields.body
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2241258720" + " " + "post__source"
  }, "Fonte: ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(post.fields.source)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2241258720" + " " + "post__author"
  }, "Sobre o autor: ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(post.fields.author)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2241258720" + " " + "post__tags"
  }, post.fields.tags.join(', ')))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2241258720"
  }, "h1.jsx-2241258720,h2.jsx-2241258720,h3.jsx-2241258720{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-2241258720{margin:0 0 25px 0;font-size:50px;line-height:50px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}.post.jsx-2241258720{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__header__title.jsx-2241258720{height:110px;margin-left:150px;margin-top:175px;position:absolute;background-color:#ffffff;padding:15px 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:525px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__image.jsx-2241258720{width:300px;border-radius:20px;box-shadow:2px 2px 20px rgba(0,0,0,.2);}.post__content.jsx-2241258720{font-family:stolzl,sans-serif;font-weight:100;font-size:16px;line-height:22px;width:600px;margin:-130px 0 0 150px;padding:60px;text-align:justify;background:#fff;box-shadow:3px 3px 30px rgba(0,0,0,.1);border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQU0wQyxBQU1iLEFBU0wsQUFPQSxBQVlELEFBTWtCLFlBTFgsQ0FuQk4sQUFPSyxLQWhCSCxZQU5DLEFBd0NBLENBakJDLEFBWXNCLEVBNUJ0QixhQU5DLEFBd0NILEVBakJHLEVBaEI0QyxXQWtDN0MsR0F4Q25CLEVBdUIyQixJQVczQixRQU9jLFNBM0JVLEdBNEJFLENBbEJGLG1CQWpCSixHQWtCTCxDQWtCQSxhQUNNLENBcENVLGtCQXFDYixXQXBDbEIsS0FxQ3lDLEdBL0JwQixzQkFXUCxZQUNPLEVBb0JBLG1CQUNyQixzQ0FoQ0Esa0NBWUEiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvcGFnZXMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9ICBmcm9tICdjb250ZW50ZnVsJztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBDT05URU5URlVMX1NQQUNFX0lELCBDT05URU5URlVMX0FDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2RlZmF1bHRzL0NvbnRlbnRmdWxLZXlzJztcblxuY29uc3QgUG9zdCA9IHdpdGhSb3V0ZXIoKHsgZXJyb3JDb2RlLCBwb3N0LCByb3V0ZXIgfSkgPT4ge1xuXG4gIGlmKGVycm9yQ29kZSkge1xuICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17ZXJyb3JDb2RlfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e2BodHRwczoke3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9P3c9NzAwJmZpdD10aHVtYmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgICA8aDE+e3Bvc3QuZmllbGRzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZmllbGRzLmJvZHl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19zb3VyY2VcIj5Gb250ZToge0pTT04uc3RyaW5naWZ5KHBvc3QuZmllbGRzLnNvdXJjZSl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19hdXRob3JcIj5Tb2JyZSBvIGF1dG9yOiB7SlNPTi5zdHJpbmdpZnkocG9zdC5maWVsZHMuYXV0aG9yKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RhZ3NcIj57cG9zdC5maWVsZHMudGFncy5qb2luKCcsICcpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNENCOEM0LCAjM0NEM0FEKTtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19oZWFkZXJfX3RpdGxlIHtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNzVweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMCAyNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDUyNXB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogLTEzMHB4IDAgMCAxNTBweDtcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDMwcHggcmdiYSgwLDAsMCwuMSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn0pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBxdWVyeTtcblxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIHNwYWNlOiBDT05URU5URlVMX1NQQUNFX0lELFxuICAgIGFjY2Vzc1Rva2VuOiBDT05URU5URlVMX0FDQ0VTU19UT0tFTlxuICB9KTtcblxuICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICAnZmllbGRzLnNsdWdbaW5dJzogc2x1ZyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3N0OiBlbnRyaWVzLml0ZW1zWzBdXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/post.js */"));
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
              space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_10__["CONTENTFUL_SPACE_ID"],
              accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_10__["CONTENTFUL_ACCESS_TOKEN"]
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
//# sourceMappingURL=post.js.8b21977144864238c369.hot-update.js.map