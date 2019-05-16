webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");








var Index = function Index() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_3___default.a(scene);
    var client = Object(contentful__WEBPACK_IMPORTED_MODULE_5__["createClient"])({
      space: '3sk1ko7cy2wv',
      accessToken: 'KKZz275zOiUk_qLcJs-VkFv5H1UegrpyMvlZyC3CXlY'
    });
    client.getEntries({
      content_type: 'blogPost',
      limit: 2,
      order: '-sys.createdAt'
    }).then(console.log);
  }, [parallax_js__WEBPACK_IMPORTED_MODULE_3___default.a]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1354195116" + " " + "hero"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1354195116" + " " + "hero__texts"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_2___default.a, {
    strings: ['Architecture', 'Development', 'Digital Solutions', 'Innovation', 'Technology'],
    style: {
      color: '#092545',
      fontFamily: 'stolzl, sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: '33px',
      marginLeft: '10px'
    },
    typeSpeed: 100
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1354195116"
  }, "Murillo de Morais")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "scene",
    className: "jsx-1354195116"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-depth": "0.2",
    className: "jsx-1354195116"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Developer Image - Layer 1",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-1.png",
    className: "jsx-1354195116"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-depth": "0.5",
    className: "jsx-1354195116"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Developer Image - Layer 2",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-2.png",
    className: "jsx-1354195116"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-depth": "0.9",
    className: "jsx-1354195116"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Developer Image - Layer 3",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-3.png",
    className: "jsx-1354195116"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1354195116"
  }, "h1.jsx-1354195116,h2.jsx-1354195116{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-1354195116{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-1354195116{font-size:28px;margin:0 0 10px 10px;}.hero.jsx-1354195116{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-1354195116{width:600px;}#scene.jsx-1354195116{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-1354195116 img.jsx-1354195116{width:70%;}@media screen and (max-width:640px){.hero.jsx-1354195116{padding:0;}h1.jsx-1354195116{font-size:18vw;line-height:18vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEa0IsQUFJMEMsQUFNYixBQVVILEFBS1csQUFRZCxBQUlNLEFBUVIsQUFNRSxBQUlLLFVBVG5CLEFBTUUsRUFsQkYsR0FidUIsQUFtQ0YsR0E3Q0gsQUEyQkUsUUFaTCxJQXJCRyxFQW9EaEIsRUE3Q2lCLEVBVW5CLEFBaUJhLFVBakNPLENBa0NOLElBM0JNLFFBNEJELEtBbENuQixLQU9nRSxPQTRCaEUsd0JBZitCLDZCQVpYLGtCQUNXLDZCQUMvQiwrQ0FXcUIsNkZBQ0osZUFDakIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ3BhcmFsbGF4LWpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnM3NrMWtvN2N5Mnd2JyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnS0taejI3NXpPaVVrX3FMY0pzLVZrRnY1SDFVZWdycHlNdmxaeUMzQ1hsWSdcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICAgIGxpbWl0OiAyLFxuICAgICAgb3JkZXI6ICctc3lzLmNyZWF0ZWRBdCdcbiAgICB9KVxuICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xuXG4gIH0sIFtQYXJhbGxheF0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3RleHRzXCI+XG4gICAgICAgICAgPFR5cGVkXG4gICAgICAgICAgICBzdHJpbmdzPXtbJ0FyY2hpdGVjdHVyZScsICdEZXZlbG9wbWVudCcsICdEaWdpdGFsIFNvbHV0aW9ucycsICdJbm5vdmF0aW9uJywgJ1RlY2hub2xvZ3knXX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiAnIzA5MjU0NScsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzdG9semwsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMzNweCcsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlU3BlZWQ9ezEwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMT5NdXJpbGxvIGRlIE1vcmFpczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwic2NlbmVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgMVwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTEucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgMlwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTIucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjlcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgM1wiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTMucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNENCOEM0LCAjM0NEM0FEKTtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlcm9fX3RleHRzIHtcbiAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc2NlbmUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgb3BhY2l0eTogLjE1O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgI3NjZW5lIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG5cbiAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTh2dztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.46f3001b767a41a08c9e.hot-update.js.map