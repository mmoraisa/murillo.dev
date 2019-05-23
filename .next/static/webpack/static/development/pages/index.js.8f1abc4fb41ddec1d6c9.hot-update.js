webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var _components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/posts/HeadlinePost */ "./components/posts/HeadlinePost/index.js");











var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      latestPosts = _useState2[0],
      setLatestPosts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_5___default.a(scene);
    var client = Object(contentful__WEBPACK_IMPORTED_MODULE_7__["createClient"])({
      space: '3sk1ko7cy2wv',
      accessToken: 'KKZz275zOiUk_qLcJs-VkFv5H1UegrpyMvlZyC3CXlY'
    });
    client.getEntries({
      content_type: 'blogPost',
      limit: 3,
      order: '-sys.createdAt'
    }).then(function (response) {
      console.log(response);
      setLatestPosts(response.items);
    });
  }, [parallax_js__WEBPACK_IMPORTED_MODULE_5___default.a]);
  var showingLatestPosts = latestPosts;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3950236910" + " " + "hero"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3950236910" + " " + "hero__texts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3950236910"
  }, "Murillo de Morais")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "scene",
    className: "jsx-3950236910"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.2",
    className: "jsx-3950236910"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 1",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-1.png",
    className: "jsx-3950236910"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.5",
    className: "jsx-3950236910"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 2",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-2.png",
    className: "jsx-3950236910"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.9",
    className: "jsx-3950236910"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 3",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-3.png",
    className: "jsx-3950236910"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3950236910" + " " + "latest-posts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3950236910"
  }, "Latest", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-3950236910"
  }), "Posts"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-3950236910"
  }, showingLatestPosts.splice(0, 2).map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: post.sys.id,
      description: post.fields.description,
      imageUrl: post.fields.heroImage.fields.file.url,
      tags: post.fields.tags,
      title: post.fields.title
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3950236910" + " " + "latest-posts__show-more"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3950236910"
  }, "Interested!? So why do not you join my blog?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3950236910"
  }, "There you can learn more about the world of technology and its news"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-3950236910"
  }, "View Blog"))), showingLatestPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: post.sys.id,
      description: post.fields.description,
      imageUrl: post.fields.heroImage.fields.file.url,
      tags: post.fields.tags,
      title: post.fields.title
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3950236910"
  }, "h1.jsx-3950236910,h2.jsx-3950236910,h3.jsx-3950236910{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-3950236910{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-3950236910{font-size:28px;margin:0 0 10px 10px;}.latest-posts.jsx-3950236910 h2.jsx-3950236910{font-size:60px;line-height:50px;margin:10px;text-align:right;padding:0 40px 0 calc(40px + 5%);display:inline-block;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}.latest-posts.jsx-3950236910 ul.jsx-3950236910{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:30px 80px;}.latest-posts__show-more.jsx-3950236910{width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;}.latest-posts__show-more.jsx-3950236910 h3.jsx-3950236910{font-size:22px;margin:0 0 5px 0;}.latest-posts__show-more.jsx-3950236910 *.jsx-3950236910{font-family:stolzl,sans-serif;}.latest-posts__show-more.jsx-3950236910 button.jsx-3950236910{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.latest-posts__show-more.jsx-3950236910 button.jsx-3950236910:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.latest-posts__show-more.jsx-3950236910 button.jsx-3950236910:focus,.latest-posts__show-more.jsx-3950236910 button.jsx-3950236910:active{outline:none;}.hero.jsx-3950236910{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-3950236910{width:600px;}#scene.jsx-3950236910{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-3950236910 img.jsx-3950236910{width:70%;}@media screen and (max-width:640px){.hero.jsx-3950236910{padding:0;}h1.jsx-3950236910{font-size:18vw;line-height:18vw;}}@media screen and (max-width:900px){.latest-posts.jsx-3950236910 ul.jsx-3950236910{padding:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHa0IsQUFLMEMsQUFNYixBQVVILEFBS0EsQUFZRixBQU9XLEFBT1QsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQUlhLEFBUWQsQUFJTSxBQVFSLEFBTUUsQUFJSyxBQVNGLFVBbEJqQixBQU1FLEVBbEJGLENBWkEsQUEyQ0UsRUFyR3FCLEFBS0osQUEwQkEsQUE2REUsR0F0R0gsQUFvRkUsQ0FsQ1UsS0FoQkgsRUFzQ1osSUE5RUcsQUFvRGxCLEVBOUJjLEFBMEJkLEFBNkRFLEVBdEdpQixFQVVuQixBQTBFYSxRQXBFTSxFQXRCQyxDQXdESCxBQW1DSCxFQW5EQSxFQWpDTSxRQXFGRCxFQXJFZ0IsQUFrQnBCLENBZ0JDLEVBeERoQixLQU9nRSxLQXdCL0MsQUFVakIsRUFnQmdCLEFBbUNoQixFQTFCeUMsWUFSckIsSUFuQ0csTUFzRFEsUUFsQlgsT0FuQzBDLEVBMkM5RCxTQVAwQixHQXBETixFQXdCVyxnQkF2QkEsNEJBZ0JYLENBZnBCLE1BbURpQixXQW5DYyxJQW9DL0IseUJBbkNBLENBbURxQiwrQkE3Q0Qsa0JBQ3BCLDRDQTZDaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9ICBmcm9tICdjb250ZW50ZnVsJztcbmltcG9ydCBIZWFkbGluZVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cy9IZWFkbGluZVBvc3QnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBbbGF0ZXN0UG9zdHMsIHNldExhdGVzdFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBzY2VuZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2VuZScpO1xuICAgIHZhciBwYXJhbGxheEluc3RhbmNlID0gbmV3IFBhcmFsbGF4KHNjZW5lKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogJzNzazFrbzdjeTJ3dicsXG4gICAgICBhY2Nlc3NUb2tlbjogJ0tLWnoyNzV6T2lVa19xTGNKcy1Wa0Z2NUgxVWVncnB5TXZsWnlDM0NYbFknXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgICBjb250ZW50X3R5cGU6ICdibG9nUG9zdCcsXG4gICAgICBsaW1pdDogMyxcbiAgICAgIG9yZGVyOiAnLXN5cy5jcmVhdGVkQXQnXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgc2V0TGF0ZXN0UG9zdHMocmVzcG9uc2UuaXRlbXMpO1xuICAgIH0pO1xuXG4gIH0sIFtQYXJhbGxheF0pO1xuXG4gIGxldCBzaG93aW5nTGF0ZXN0UG9zdHMgPSBsYXRlc3RQb3N0cztcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX190ZXh0c1wiPlxuICAgICAgICAgIDxUeXBlZFxuICAgICAgICAgICAgc3RyaW5ncz17WydBcmNoaXRlY3R1cmUnLCAnRGV2ZWxvcG1lbnQnLCAnRGlnaXRhbCBTb2x1dGlvbnMnLCAnSW5ub3ZhdGlvbicsICdUZWNobm9sb2d5J119XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBjb2xvcjogJyMwOTI1NDUnLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc3RvbHpsLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzMzcHgnLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZVNwZWVkPXsxMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDE+TXVyaWxsbyBkZSBNb3JhaXM8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInNjZW5lXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC4yXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIkRldmVsb3BlciBJbWFnZSAtIExheWVyIDFcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0xLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC41XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIkRldmVsb3BlciBJbWFnZSAtIExheWVyIDJcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0yLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC45XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIkRldmVsb3BlciBJbWFnZSAtIExheWVyIDNcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0zLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVzdC1wb3N0c1wiPlxuICAgICAgICA8aDI+TGF0ZXN0PGJyLz5Qb3N0czwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaG93aW5nTGF0ZXN0UG9zdHMuc3BsaWNlKDAsIDIpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgPEhlYWRsaW5lUG9zdFxuICAgICAgICAgICAgICAgIGtleT17cG9zdC5zeXMuaWR9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAgICAgIHRhZ3M9e3Bvc3QuZmllbGRzLnRhZ3N9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVzdC1wb3N0c19fc2hvdy1tb3JlXCI+XG4gICAgICAgICAgICA8aDM+SW50ZXJlc3RlZCE/IFNvIHdoeSBkbyBub3QgeW91IGpvaW4gbXkgYmxvZz88L2gzPlxuICAgICAgICAgICAgPHNwYW4+VGhlcmUgeW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSB3b3JsZCBvZiB0ZWNobm9sb2d5IGFuZCBpdHMgbmV3czwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJibG9nXCI+XG4gICAgICAgICAgICAgIDxidXR0b24+VmlldyBCbG9nPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd2luZ0xhdGVzdFBvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgPEhlYWRsaW5lUG9zdFxuICAgICAgICAgICAgICAgIGtleT17cG9zdC5zeXMuaWR9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAgICAgIHRhZ3M9e3Bvc3QuZmllbGRzLnRhZ3N9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNENCOEM0LCAjM0NEM0FEKTtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHMgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4IDAgY2FsYyg0MHB4ICsgNSUpO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM0Q0I4QzQsIzNDRDNBRCk7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0cyB1bCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgcGFkZGluZzogMzBweCA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIHtcbiAgICAgICAgICB3aWR0aDogY2FsYygzMHZ3IC0gNDBweCk7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDM1dncgLSA0MHB4KTtcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlICoge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDZhZTM7XG4gICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uOmZvY3VzLFxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlcm9fX3RleHRzIHtcbiAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjc2NlbmUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgb3BhY2l0eTogLjE1O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgI3NjZW5lIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG5cbiAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTh2dztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHZ3O1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAgICAgICAgIC5sYXRlc3QtcG9zdHMgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.8f1abc4fb41ddec1d6c9.hot-update.js.map