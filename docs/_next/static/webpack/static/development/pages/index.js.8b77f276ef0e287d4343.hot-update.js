webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout/default/index.js":
/*!********************************************!*\
  !*** ./components/layout/default/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! React */ "./node_modules/React/index.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");






var Default = function Default(_ref) {
  var children = _ref.children;
  Object(React__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, []);
  var client = contentful__WEBPACK_IMPORTED_MODULE_4__["default"].createClient({
    space: '3sk1ko7cy2wv',
    accessToken: 'KKZz275zOiUk_qLcJs-VkFv5H1UegrpyMvlZyC3CXlY'
  });
  client.getEntries().then(console.log);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-528300033"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-528300033"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-528300033"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/yvy5dkt.css",
    className: "jsx-528300033"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "528300033"
  }, "html,body{min-height:100vh;width:100%;padding:10px;margin:0;box-sizing:border-box;position:absolute;top:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvbGF5b3V0L2RlZmF1bHQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QixBQUc0QixpQkFDTixXQUNFLGFBQ0osU0FDYSxzQkFDSixrQkFDWixNQUNDLE9BQ1QiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9sYXlvdXQvZGVmYXVsdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ1JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgY29udGVudGZ1bCBmcm9tICdjb250ZW50ZnVsJztcblxuY29uc3QgRGVmYXVsdCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxuXG4gIGNvbnN0IGNsaWVudCA9IGNvbnRlbnRmdWwuY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogJzNzazFrbzdjeTJ3dicsXG4gICAgYWNjZXNzVG9rZW46ICdLS1p6Mjc1ek9pVWtfcUxjSnMtVmtGdjVIMVVlZ3JweU12bFp5QzNDWGxZJ1xuICB9KTtcblxuICBjbGllbnQuZ2V0RW50cmllcygpXG4gICAgLnRoZW4oY29uc29sZS5sb2cpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQveXZ5NWRrdC5jc3NcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/layout/default/index.js */"), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Default);

/***/ })

})
//# sourceMappingURL=index.js.8b77f276ef0e287d4343.hot-update.js.map