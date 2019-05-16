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
      order: 'sys.createdAt'
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
  }, "h1.jsx-1354195116,h2.jsx-1354195116{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-1354195116{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-1354195116{font-size:28px;margin:0 0 10px 10px;}.hero.jsx-1354195116{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-1354195116{width:600px;}#scene.jsx-1354195116{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-1354195116 img.jsx-1354195116{width:70%;}@media screen and (max-width:640px){.hero.jsx-1354195116{padding:0;}h1.jsx-1354195116{font-size:18vw;line-height:18vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEa0IsQUFJMEMsQUFNYixBQVVILEFBS1csQUFRZCxBQUlNLEFBUVIsQUFNRSxBQUlLLFVBVG5CLEFBTUUsRUFsQkYsR0FidUIsQUFtQ0YsR0E3Q0gsQUEyQkUsUUFaTCxJQXJCRyxFQW9EaEIsRUE3Q2lCLEVBVW5CLEFBaUJhLFVBakNPLENBa0NOLElBM0JNLFFBNEJELEtBbENuQixLQU9nRSxPQTRCaEUsd0JBZitCLDZCQVpYLGtCQUNXLDZCQUMvQiwrQ0FXcUIsNkZBQ0osZUFDakIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ3BhcmFsbGF4LWpzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFpbic7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnM3NrMWtvN2N5Mnd2JyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnS0taejI3NXpPaVVrX3FMY0pzLVZrRnY1SDFVZWdycHlNdmxaeUMzQ1hsWSdcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICAgIGxpbWl0OiAyLFxuICAgICAgb3JkZXI6ICdzeXMuY3JlYXRlZEF0J1xuICAgIH0pXG4gICAgICAudGhlbihjb25zb2xlLmxvZyk7XG5cbiAgfSwgW1BhcmFsbGF4XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fdGV4dHNcIj5cbiAgICAgICAgICA8VHlwZWRcbiAgICAgICAgICAgIHN0cmluZ3M9e1snQXJjaGl0ZWN0dXJlJywgJ0RldmVsb3BtZW50JywgJ0RpZ2l0YWwgU29sdXRpb25zJywgJ0lubm92YXRpb24nLCAnVGVjaG5vbG9neSddfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDkyNTQ1JyxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3N0b2x6bCwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICczM3B4JyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGVTcGVlZD17MTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxPk11cmlsbG8gZGUgTW9yYWlzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJzY2VuZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuMlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJEZXZlbG9wZXIgSW1hZ2UgLSBMYXllciAxXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMS5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuNVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJEZXZlbG9wZXIgSW1hZ2UgLSBMYXllciAyXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMi5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuOVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJEZXZlbG9wZXIgSW1hZ2UgLSBMYXllciAzXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMy5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSxcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDExNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0Q0I4QzQsICMzQ0QzQUQpO1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVyb19fdGV4dHMge1xuICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzY2VuZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICBvcGFjaXR5OiAuMTU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTIwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAjc2NlbmUgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcblxuICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHZ3O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4dnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.afcae0f66385933885f6.hot-update.js.map