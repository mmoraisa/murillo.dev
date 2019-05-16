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
    client.getEntries().then(console.log);
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
  }, "h1.jsx-1354195116,h2.jsx-1354195116{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-1354195116{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-1354195116{font-size:28px;margin:0 0 10px 10px;}.hero.jsx-1354195116{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-1354195116{width:600px;}#scene.jsx-1354195116{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-1354195116 img.jsx-1354195116{width:70%;}@media screen and (max-width:640px){.hero.jsx-1354195116{padding:0;}h1.jsx-1354195116{font-size:18vw;line-height:18vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEa0IsQUFJMEMsQUFNYixBQVVILEFBS1csQUFRZCxBQUlNLEFBUVIsQUFNRSxBQUlLLFVBVG5CLEFBTUUsRUFsQkYsR0FidUIsQUFtQ0YsR0E3Q0gsQUEyQkUsUUFaTCxJQXJCRyxFQW9EaEIsRUE3Q2lCLEVBVW5CLEFBaUJhLFVBakNPLENBa0NOLElBM0JNLFFBNEJELEtBbENuQixLQU9nRSxPQTRCaEUsd0JBZitCLDZCQVpYLGtCQUNXLDZCQUMvQiwrQ0FXcUIsNkZBQ0osZUFDakIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ3BhcmFsbGF4LWpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnM3NrMWtvN2N5Mnd2JyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnS0taejI3NXpPaVVrX3FMY0pzLVZrRnY1SDFVZWdycHlNdmxaeUMzQ1hsWSdcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKClcbiAgICAgIC50aGVuKGNvbnNvbGUubG9nKTtcblxuICB9LCBbUGFyYWxsYXhdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX190ZXh0c1wiPlxuICAgICAgICAgIDxUeXBlZFxuICAgICAgICAgICAgc3RyaW5ncz17WydBcmNoaXRlY3R1cmUnLCAnRGV2ZWxvcG1lbnQnLCAnRGlnaXRhbCBTb2x1dGlvbnMnLCAnSW5ub3ZhdGlvbicsICdUZWNobm9sb2d5J119XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBjb2xvcjogJyMwOTI1NDUnLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc3RvbHpsLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzMzcHgnLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZVNwZWVkPXsxMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDE+TXVyaWxsbyBkZSBNb3JhaXM8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInNjZW5lXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC4yXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIkRldmVsb3BlciBJbWFnZSAtIExheWVyIDFcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0xLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC41XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIkRldmVsb3BlciBJbWFnZSAtIExheWVyIDJcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0yLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC45XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIkRldmVsb3BlciBJbWFnZSAtIExheWVyIDNcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0zLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRDQjhDNCwgIzNDRDNBRCk7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvX190ZXh0cyB7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3NjZW5lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIG9wYWNpdHk6IC4xNTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzY2VuZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuXG4gICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4dnc7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTh2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a70c1b6a11e895c47c36.hot-update.js.map