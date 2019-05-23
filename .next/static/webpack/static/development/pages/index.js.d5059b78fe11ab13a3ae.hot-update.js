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
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var _components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/posts/HeadlinePost */ "./components/posts/HeadlinePost/index.js");












var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      latestPosts = _useState2[0],
      setLatestPosts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_5___default.a.init();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_6___default.a(scene);
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
  }, [parallax_js__WEBPACK_IMPORTED_MODULE_6___default.a]);
  var showingLatestPosts = latestPosts;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3940916740" + " " + "hero"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3940916740" + " " + "hero__texts"
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
    className: "jsx-3940916740"
  }, "Murillo de Morais")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "scene",
    className: "jsx-3940916740"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.2",
    className: "jsx-3940916740"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 1",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-1.png",
    className: "jsx-3940916740"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.5",
    className: "jsx-3940916740"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 2",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-2.png",
    className: "jsx-3940916740"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.9",
    className: "jsx-3940916740"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 3",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-3.png",
    className: "jsx-3940916740"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3940916740" + " " + "latest-posts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3940916740"
  }, "Latest", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-3940916740"
  }), "Posts"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-3940916740"
  }, showingLatestPosts.splice(0, 2).map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: post.sys.id,
      description: post.fields.description,
      imageUrl: post.fields.heroImage.fields.file.url,
      tags: post.fields.tags,
      title: post.fields.title
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-3940916740" + " " + "latest-posts__show-more"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-3940916740"
  }, "Interested!? So why do not you join my blog?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-3940916740"
  }, "There you can learn more about the world of technology and its news"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-3940916740"
  }, "View Blog"))), showingLatestPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: post.sys.id,
      description: post.fields.description,
      imageUrl: post.fields.heroImage.fields.file.url,
      tags: post.fields.tags,
      title: post.fields.title
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3940916740"
  }, "h1.jsx-3940916740,h2.jsx-3940916740,h3.jsx-3940916740{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-3940916740{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-3940916740{font-size:28px;margin:0 0 10px 10px;}.latest-posts.jsx-3940916740 h2.jsx-3940916740{font-size:60px;line-height:50px;margin:10px;text-align:right;padding:0 40px 0 calc(40px + 5%);display:inline-block;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}.latest-posts.jsx-3940916740 ul.jsx-3940916740{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:30px 80px;}.latest-posts__show-more.jsx-3940916740{width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;}.latest-posts__show-more.jsx-3940916740 h3.jsx-3940916740{font-size:22px;margin:0 0 5px 0;}.latest-posts__show-more.jsx-3940916740 *.jsx-3940916740{font-family:stolzl,sans-serif;}.latest-posts__show-more.jsx-3940916740 button.jsx-3940916740{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.latest-posts__show-more.jsx-3940916740 button.jsx-3940916740:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.latest-posts__show-more.jsx-3940916740 button.jsx-3940916740:focus,.latest-posts__show-more.jsx-3940916740 button.jsx-3940916740:active{outline:none;}.hero.jsx-3940916740{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-3940916740{width:600px;}#scene.jsx-3940916740{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-3940916740 img.jsx-3940916740{width:70%;}@media screen and (max-width:640px){.hero.jsx-3940916740{padding:0;}h1.jsx-3940916740{font-size:18vw;line-height:18vw;}}@media screen and (max-width:900px){.latest-posts.jsx-3940916740 ul.jsx-3940916740{padding:20px;}.latest-posts__show-more.jsx-3940916740{width:100%;height:initial;margin:20px;padding:0;-webkit-order:1;-ms-flex-order:1;order:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHa0IsQUFLMEMsQUFNYixBQVVILEFBS0EsQUFZRixBQU9XLEFBT1QsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQUlhLEFBUWQsQUFJTSxBQVFSLEFBTUUsQUFJSyxBQVNGLEFBSUYsVUF0QmYsQUFNRSxDQWlCaUIsQ0FuQ25CLENBWkEsQUEyQ0UsRUFyR3FCLEFBS0osQUEwQkEsQUE2REUsR0F0R0gsQUFvRkUsQ0FsQ1UsS0FoQkgsRUFzQ1osQUE0Q0MsSUExSEUsQUFvRGxCLEVBOUJjLEFBMEJkLEFBNkRFLEVBdEdpQixFQVVuQixBQTBFYSxFQWdDQyxNQXBHSyxFQXRCQyxDQXdESCxBQW1DSCxDQWdDRixDQW5GRSxFQWpDTSxRQXFGRCxFQXJFZ0IsQUFrQnBCLENBZ0JDLEVBeERoQixLQU9nRSxLQXdCL0MsQUFVakIsRUFnQmdCLEFBbUNoQixFQTFCeUMsV0F5RHZDLENBakVrQixJQW5DRyxNQXNEUSxRQWxCWCxPQW5DMEMsRUEyQzlELFNBUDBCLEdBcEROLEVBd0JXLGdCQXZCQSw0QkFnQlgsQ0FmcEIsTUFtRGlCLFdBbkNjLElBb0MvQix5QkFuQ0EsQ0FtRHFCLCtCQTdDRCxrQkFDcEIsNENBNkNpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBQYXJhbGxheCBmcm9tICdwYXJhbGxheC1qcyc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L21haW4nO1xuaW1wb3J0IEhlYWRsaW5lUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzL0hlYWRsaW5lUG9zdCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtsYXRlc3RQb3N0cywgc2V0TGF0ZXN0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiAnM3NrMWtvN2N5Mnd2JyxcbiAgICAgIGFjY2Vzc1Rva2VuOiAnS0taejI3NXpPaVVrX3FMY0pzLVZrRnY1SDFVZWdycHlNdmxaeUMzQ1hsWSdcbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICAgIGxpbWl0OiAzLFxuICAgICAgb3JkZXI6ICctc3lzLmNyZWF0ZWRBdCdcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBzZXRMYXRlc3RQb3N0cyhyZXNwb25zZS5pdGVtcyk7XG4gICAgfSk7XG5cbiAgfSwgW1BhcmFsbGF4XSk7XG5cbiAgbGV0IHNob3dpbmdMYXRlc3RQb3N0cyA9IGxhdGVzdFBvc3RzO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3RleHRzXCI+XG4gICAgICAgICAgPFR5cGVkXG4gICAgICAgICAgICBzdHJpbmdzPXtbJ0FyY2hpdGVjdHVyZScsICdEZXZlbG9wbWVudCcsICdEaWdpdGFsIFNvbHV0aW9ucycsICdJbm5vdmF0aW9uJywgJ1RlY2hub2xvZ3knXX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiAnIzA5MjU0NScsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzdG9semwsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMzNweCcsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlU3BlZWQ9ezEwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMT5NdXJpbGxvIGRlIE1vcmFpczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwic2NlbmVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgMVwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTEucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgMlwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTIucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjlcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgM1wiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTMucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXBvc3RzXCI+XG4gICAgICAgIDxoMj5MYXRlc3Q8YnIvPlBvc3RzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dpbmdMYXRlc3RQb3N0cy5zcGxpY2UoMCwgMikubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICA8SGVhZGxpbmVQb3N0XG4gICAgICAgICAgICAgICAga2V5PXtwb3N0LnN5cy5pZH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5maWVsZHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgdGFncz17cG9zdC5maWVsZHMudGFnc31cbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXBvc3RzX19zaG93LW1vcmVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgIDxoMz5JbnRlcmVzdGVkIT8gU28gd2h5IGRvIG5vdCB5b3Ugam9pbiBteSBibG9nPzwvaDM+XG4gICAgICAgICAgICA8c3Bhbj5UaGVyZSB5b3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHdvcmxkIG9mIHRlY2hub2xvZ3kgYW5kIGl0cyBuZXdzPC9zcGFuPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImJsb2dcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IEJsb2c8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaG93aW5nTGF0ZXN0UG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICA8SGVhZGxpbmVQb3N0XG4gICAgICAgICAgICAgICAga2V5PXtwb3N0LnN5cy5pZH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5maWVsZHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgdGFncz17cG9zdC5maWVsZHMudGFnc31cbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDExNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0Q0I4QzQsICMzQ0QzQUQpO1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0cyBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDQwcHggMCBjYWxjKDQwcHggKyA1JSk7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzRDQjhDNCwjM0NEM0FEKTtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMzV2dyAtIDQwcHgpO1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgKiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzJkNmFlMztcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b246Zm9jdXMsXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVyb19fdGV4dHMge1xuICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzY2VuZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICBvcGFjaXR5OiAuMTU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTIwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAjc2NlbmUgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcblxuICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHZ3O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4dnc7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gICAgICAgICAgLmxhdGVzdC1wb3N0cyB1bCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d5059b78fe11ab13a3ae.hot-update.js.map