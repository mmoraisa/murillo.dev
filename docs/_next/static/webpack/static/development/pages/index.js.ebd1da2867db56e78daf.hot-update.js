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
    className: "jsx-1424042127" + " " + "hero"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1424042127" + " " + "hero__texts"
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
    className: "jsx-1424042127"
  }, "Murillo de Morais")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "scene",
    className: "jsx-1424042127"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.2",
    className: "jsx-1424042127"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 1",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-1.png",
    className: "jsx-1424042127"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.5",
    className: "jsx-1424042127"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 2",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-2.png",
    className: "jsx-1424042127"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.9",
    className: "jsx-1424042127"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 3",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-3.png",
    className: "jsx-1424042127"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1424042127" + " " + "latest-posts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    "data-aos": "fade-up",
    className: "jsx-1424042127"
  }, "Latest", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-1424042127"
  }), "Posts"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-1424042127"
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
    className: "jsx-1424042127" + " " + "latest-posts__show-more"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-1424042127"
  }, "Interested!? So why do not you join my blog?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-1424042127"
  }, "There you can learn more about the world of technology and its news"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-1424042127"
  }, "View Blog"))), showingLatestPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: post.sys.id,
      description: post.fields.description,
      imageUrl: post.fields.heroImage.fields.file.url,
      tags: post.fields.tags,
      title: post.fields.title
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1424042127"
  }, "h1.jsx-1424042127,h2.jsx-1424042127,h3.jsx-1424042127{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-1424042127{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-1424042127{font-size:28px;margin:0 0 10px 10px;}.latest-posts.jsx-1424042127 h2.jsx-1424042127{font-size:60px;line-height:50px;margin:10px;text-align:right;padding:0 40px 0 calc(40px + 5%);display:inline-block;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}.latest-posts.jsx-1424042127 ul.jsx-1424042127{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:30px 80px;}.latest-posts__show-more.jsx-1424042127{width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;}.latest-posts__show-more.jsx-1424042127 h3.jsx-1424042127{font-size:22px;margin:0 0 5px 0;}.latest-posts__show-more.jsx-1424042127 *.jsx-1424042127{font-family:stolzl,sans-serif;}.latest-posts__show-more.jsx-1424042127 button.jsx-1424042127{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.latest-posts__show-more.jsx-1424042127 button.jsx-1424042127:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.latest-posts__show-more.jsx-1424042127 button.jsx-1424042127:focus,.latest-posts__show-more.jsx-1424042127 button.jsx-1424042127:active{outline:none;}.hero.jsx-1424042127{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-1424042127{width:600px;}#scene.jsx-1424042127{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-1424042127 img.jsx-1424042127{width:70%;}@media screen and (max-width:640px){.hero.jsx-1424042127{padding:0;}h1.jsx-1424042127{font-size:18vw;line-height:18vw;}}@media screen and (max-width:900px){.latest-posts.jsx-1424042127 ul.jsx-1424042127{margin-top:-20px;padding:20px;}.latest-posts__show-more.jsx-1424042127{width:100%;height:initial;margin:20px;padding:0;-webkit-order:1;-ms-flex-order:1;order:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHa0IsQUFLMEMsQUFNYixBQVVILEFBS0EsQUFZRixBQU9XLEFBT1QsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQUlhLEFBUWQsQUFJTSxBQVFSLEFBTUUsQUFJSyxBQVNFLEFBS04sVUF2QmYsQUFNRSxDQWtCaUIsQ0FwQ25CLENBWkEsRUExRHVCLEFBS0osQUEwQkEsQUE2REUsRUFTSixDQS9HQyxBQW9GRSxDQWxDVSxLQWhCSCxFQXNDWixBQTZDQyxJQTNIRSxBQW9EbEIsQUFrRUUsRUFoR1ksQUEwQmQsQUE2REUsRUF0R2lCLEVBVW5CLEFBMEVhLEVBaUNDLE1BckdLLEVBdEJDLENBd0RILEFBbUNILENBaUNGLENBcEZFLEVBakNNLFFBcUZELEVBckVnQixBQWtCcEIsQ0FnQkMsRUF4RGhCLEtBT2dFLEtBd0IvQyxBQVVqQixFQWdCZ0IsQUFtQ2hCLEVBMUJ5QyxXQTBEdkMsQ0FsRWtCLElBbkNHLE1Bc0RRLFFBbEJYLE9BbkMwQyxFQTJDOUQsU0FQMEIsR0FwRE4sRUF3QlcsZ0JBdkJBLDRCQWdCWCxDQWZwQixNQW1EaUIsV0FuQ2MsSUFvQy9CLHlCQW5DQSxDQW1EcUIsK0JBN0NELGtCQUNwQiw0Q0E2Q2lCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUeXBlZCBmcm9tICdyZWFjdC10eXBlZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ3BhcmFsbGF4LWpzJztcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9ICBmcm9tICdjb250ZW50ZnVsJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFpbic7XG5pbXBvcnQgSGVhZGxpbmVQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMvSGVhZGxpbmVQb3N0JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgW2xhdGVzdFBvc3RzLCBzZXRMYXRlc3RQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUnKTtcbiAgICB2YXIgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6ICczc2sxa283Y3kyd3YnLFxuICAgICAgYWNjZXNzVG9rZW46ICdLS1p6Mjc1ek9pVWtfcUxjSnMtVmtGdjVIMVVlZ3JweU12bFp5QzNDWGxZJ1xuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxuICAgICAgbGltaXQ6IDMsXG4gICAgICBvcmRlcjogJy1zeXMuY3JlYXRlZEF0J1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIHNldExhdGVzdFBvc3RzKHJlc3BvbnNlLml0ZW1zKTtcbiAgICB9KTtcblxuICB9LCBbUGFyYWxsYXhdKTtcblxuICBsZXQgc2hvd2luZ0xhdGVzdFBvc3RzID0gbGF0ZXN0UG9zdHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fdGV4dHNcIj5cbiAgICAgICAgICA8VHlwZWRcbiAgICAgICAgICAgIHN0cmluZ3M9e1snQXJjaGl0ZWN0dXJlJywgJ0RldmVsb3BtZW50JywgJ0RpZ2l0YWwgU29sdXRpb25zJywgJ0lubm92YXRpb24nLCAnVGVjaG5vbG9neSddfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgY29sb3I6ICcjMDkyNTQ1JyxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3N0b2x6bCwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICczM3B4JyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGVTcGVlZD17MTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxPk11cmlsbG8gZGUgTW9yYWlzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJzY2VuZVwiPlxuICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuMlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJEZXZlbG9wZXIgSW1hZ2UgLSBMYXllciAxXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMS5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuNVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJEZXZlbG9wZXIgSW1hZ2UgLSBMYXllciAyXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMi5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuOVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJEZXZlbG9wZXIgSW1hZ2UgLSBMYXllciAzXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMy5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcG9zdHNcIj5cbiAgICAgICAgPGgyIGRhdGEtYW9zPVwiZmFkZS11cFwiPkxhdGVzdDxici8+UG9zdHM8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd2luZ0xhdGVzdFBvc3RzLnNwbGljZSgwLCAyKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgIDxIZWFkbGluZVBvc3RcbiAgICAgICAgICAgICAgICBrZXk9e3Bvc3Quc3lzLmlkfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZVVybD17cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICB0YWdzPXtwb3N0LmZpZWxkcy50YWdzfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcG9zdHNfX3Nob3ctbW9yZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgPGgzPkludGVyZXN0ZWQhPyBTbyB3aHkgZG8gbm90IHlvdSBqb2luIG15IGJsb2c/PC9oMz5cbiAgICAgICAgICAgIDxzcGFuPlRoZXJlIHlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGUgd29ybGQgb2YgdGVjaG5vbG9neSBhbmQgaXRzIG5ld3M8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uPlZpZXcgQmxvZzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dpbmdMYXRlc3RQb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgIDxIZWFkbGluZVBvc3RcbiAgICAgICAgICAgICAgICBrZXk9e3Bvc3Quc3lzLmlkfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZVVybD17cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICB0YWdzPXtwb3N0LmZpZWxkcy50YWdzfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRDQjhDNCwgIzNDRDNBRCk7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHBhZGRpbmc6IDAgNDBweCAwIGNhbGMoNDBweCArIDUlKTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjNENCOEM0LCMzQ0QzQUQpO1xuICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHMgdWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHggODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMzB2dyAtIDQwcHgpO1xuICAgICAgICAgIGhlaWdodDogY2FsYygzNXZ3IC0gNDBweCk7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSAqIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQ2YWUzO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b246aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjpmb2N1cyxcbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvX190ZXh0cyB7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3NjZW5lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIG9wYWNpdHk6IC4xNTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzY2VuZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuXG4gICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4dnc7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTh2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgICAgICAgICAubGF0ZXN0LXBvc3RzIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ebd1da2867db56e78daf.hot-update.js.map