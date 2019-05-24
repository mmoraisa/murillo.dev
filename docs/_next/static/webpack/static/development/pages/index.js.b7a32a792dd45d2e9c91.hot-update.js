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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var _components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/posts/HeadlinePost */ "./components/posts/HeadlinePost/index.js");
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");














var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      latestPosts = _useState2[0],
      setLatestPosts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_6___default.a.init();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_7___default.a(scene);
    var client = Object(contentful__WEBPACK_IMPORTED_MODULE_8__["createClient"])({
      space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_11__["CONTENTFUL_SPACE_ID"],
      accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_11__["CONTENTFUL_ACCESS_TOKEN"]
    });
    client.getEntries({
      content_type: 'blogPost',
      limit: 3,
      order: '-sys.createdAt'
    }).then(function (response) {
      console.log(response);
      setLatestPosts(response.items);
    });
  }, [parallax_js__WEBPACK_IMPORTED_MODULE_7___default.a]);
  var showingLatestPosts = latestPosts;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-2763449193"
  }, "Murillo de Morais - Personal Page"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-2763449193"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "og:description",
    content: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    className: "jsx-2763449193"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2763449193" + " " + "hero"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2763449193" + " " + "hero__texts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
    className: "jsx-2763449193"
  }, "Murillo de Morais")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "scene",
    className: "jsx-2763449193"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.2",
    className: "jsx-2763449193"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 1",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-1.png",
    className: "jsx-2763449193"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.5",
    className: "jsx-2763449193"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 2",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-2.png",
    className: "jsx-2763449193"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-depth": "0.9",
    className: "jsx-2763449193"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: "Developer Image - Layer 3",
    src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-3.png",
    className: "jsx-2763449193"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2763449193" + " " + "latest-posts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    "data-aos": "fade-up",
    className: "jsx-2763449193"
  }, "Latest", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2763449193"
  }), "Posts"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-2763449193"
  }, showingLatestPosts.splice(0, 2).map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: post.sys.id,
      description: post.fields.description,
      imageUrl: post.fields.heroImage.fields.file.url,
      slug: post.fields.slug,
      tags: post.fields.tags,
      title: post.fields.title
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-2763449193" + " " + "latest-posts__show-more"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-2763449193"
  }, "Interested!? So why do not you join my blog?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2763449193"
  }, "There you can learn more about the world of technology and its news"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "jsx-2763449193"
  }, "View blog"))), showingLatestPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: post.sys.id,
      description: post.fields.description,
      imageUrl: post.fields.heroImage.fields.file.url,
      slug: post.fields.slug,
      tags: post.fields.tags,
      title: post.fields.title
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2763449193"
  }, "h1.jsx-2763449193,h2.jsx-2763449193,h3.jsx-2763449193{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-2763449193{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-2763449193{font-size:28px;margin:0 0 10px 10px;}.latest-posts.jsx-2763449193 h2.jsx-2763449193{font-size:60px;line-height:50px;margin:10px;text-align:right;padding:0 40px 0 calc(40px + 5%);display:inline-block;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}.latest-posts.jsx-2763449193 ul.jsx-2763449193{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:30px 20%;}.latest-posts__show-more.jsx-2763449193{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;}.latest-posts__show-more.jsx-2763449193 h3.jsx-2763449193{font-size:22px;margin:0 0 5px 0;}.latest-posts__show-more.jsx-2763449193 *.jsx-2763449193{font-family:stolzl,sans-serif;}.latest-posts__show-more.jsx-2763449193 button.jsx-2763449193{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.latest-posts__show-more.jsx-2763449193 button.jsx-2763449193:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.latest-posts__show-more.jsx-2763449193 button.jsx-2763449193:focus,.latest-posts__show-more.jsx-2763449193 button.jsx-2763449193:active{outline:none;}.hero.jsx-2763449193{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-2763449193{width:600px;}#scene.jsx-2763449193{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-2763449193 img.jsx-2763449193{width:70%;}@media screen and (max-width:640px){.hero.jsx-2763449193{padding:0;}h1.jsx-2763449193{font-size:18vw;line-height:18vw;}}@media screen and (max-width:900px){.latest-posts.jsx-2763449193 ul.jsx-2763449193{margin-top:-20px;padding:20px;}.latest-posts__show-more.jsx-2763449193{width:100%;height:initial;margin:20px;padding:0;-webkit-order:1;-ms-flex-order:1;order:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVIa0IsQUFLMEMsQUFNYixBQVVILEFBS0EsQUFZRixBQU9TLEFBUVAsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQUlhLEFBUWQsQUFJTSxBQVFSLEFBTUUsQUFJSyxBQVNFLEFBS04sVUF2QmYsQUFNRSxDQWtCaUIsQ0FwQ25CLENBWkEsRUEzRHVCLEFBS0osQUEyQkEsQUE2REUsRUFTSixDQWhIQyxBQXFGRSxDQWxDVSxHQWpCSixJQXVDWCxBQTZDQyxJQTVIRSxBQXFEbEIsQUFrRUUsRUFqR1ksQUEyQmQsQUE2REUsRUF2R2lCLEVBVW5CLEFBMkVhLEVBaUNDLE1BdEdLLEVBdEJDLEFBd0NPLENBaUJWLEFBbUNILENBaUNGLEdBdEhRLFFBc0ZELEVBdEVnQixDQW1DbkIsRUF6RGhCLEtBT2dFLEVBaUNsRCxHQVRHLEVBMkJELEFBbUNoQixFQTFCeUMsS0ExQjFCLE1Bb0ZiLENBbEVrQixJQXBDRyxFQW1CdkIsSUFvQytCLFFBbEJYLE9BcEMwQyxFQTRDOUQsU0FQMEIsR0FyRE4sRUF3QlcsZ0JBdkJBLDRCQWdCWCxDQWZwQixNQW9EaUIsV0FwQ2MsSUFxQy9CLHlCQXBDQSxDQW9EcUIsK0JBOUNGLGlCQUNuQiw2Q0E4Q2lCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBQYXJhbGxheCBmcm9tICdwYXJhbGxheC1qcyc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L21haW4nO1xuaW1wb3J0IEhlYWRsaW5lUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzL0hlYWRsaW5lUG9zdCc7XG5pbXBvcnQgeyBDT05URU5URlVMX1NQQUNFX0lELCBDT05URU5URlVMX0FDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2RlZmF1bHRzL0NvbnRlbnRmdWxLZXlzJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgW2xhdGVzdFBvc3RzLCBzZXRMYXRlc3RQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUnKTtcbiAgICB2YXIgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6IENPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gICAgICBhY2Nlc3NUb2tlbjogQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU5cbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICAgIGxpbWl0OiAzLFxuICAgICAgb3JkZXI6ICctc3lzLmNyZWF0ZWRBdCdcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBzZXRMYXRlc3RQb3N0cyhyZXNwb25zZS5pdGVtcyk7XG4gICAgfSk7XG5cbiAgfSwgW1BhcmFsbGF4XSk7XG5cbiAgbGV0IHNob3dpbmdMYXRlc3RQb3N0cyA9IGxhdGVzdFBvc3RzO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXVyaWxsbyBkZSBNb3JhaXMgLSBQZXJzb25hbCBQYWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpLCBJJ20gTXVyaWxsbywgYSBmdWxsc3RhY2sgcHJvZ3JhbW1lciB3aXRoIGEgbG90IG9mIGV4cGVyaWVuY2VzIGluIHdlYiBkZXZlbG9wbWVudC4gSW4gdGhpcyBwZXJzb25hbCBwYWdlIEkgc2hhcmUgc29tZSBrbm93bGVkZ2VzIGFuZCB0ZWNobm9sb2d5IG5ld3MuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhpLCBJJ20gTXVyaWxsbywgYSBmdWxsc3RhY2sgcHJvZ3JhbW1lciB3aXRoIGEgbG90IG9mIGV4cGVyaWVuY2VzIGluIHdlYiBkZXZlbG9wbWVudC4gSW4gdGhpcyBwZXJzb25hbCBwYWdlIEkgc2hhcmUgc29tZSBrbm93bGVkZ2VzIGFuZCB0ZWNobm9sb2d5IG5ld3MuXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3RleHRzXCI+XG4gICAgICAgICAgPFR5cGVkXG4gICAgICAgICAgICBzdHJpbmdzPXtbJ0FyY2hpdGVjdHVyZScsICdEZXZlbG9wbWVudCcsICdEaWdpdGFsIFNvbHV0aW9ucycsICdJbm5vdmF0aW9uJywgJ1RlY2hub2xvZ3knXX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiAnIzA5MjU0NScsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzdG9semwsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMzNweCcsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlU3BlZWQ9ezEwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMT5NdXJpbGxvIGRlIE1vcmFpczwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwic2NlbmVcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgMVwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTEucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgMlwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTIucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjlcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiRGV2ZWxvcGVyIEltYWdlIC0gTGF5ZXIgM1wiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTMucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXBvc3RzXCI+XG4gICAgICAgIDxoMiBkYXRhLWFvcz1cImZhZGUtdXBcIj5MYXRlc3Q8YnIvPlBvc3RzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dpbmdMYXRlc3RQb3N0cy5zcGxpY2UoMCwgMikubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICA8SGVhZGxpbmVQb3N0XG4gICAgICAgICAgICAgICAga2V5PXtwb3N0LnN5cy5pZH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5maWVsZHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5maWVsZHMuc2x1Z31cbiAgICAgICAgICAgICAgICB0YWdzPXtwb3N0LmZpZWxkcy50YWdzfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcG9zdHNfX3Nob3ctbW9yZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgPGgzPkludGVyZXN0ZWQhPyBTbyB3aHkgZG8gbm90IHlvdSBqb2luIG15IGJsb2c/PC9oMz5cbiAgICAgICAgICAgIDxzcGFuPlRoZXJlIHlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGUgd29ybGQgb2YgdGVjaG5vbG9neSBhbmQgaXRzIG5ld3M8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZ1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uPlZpZXcgYmxvZzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dpbmdMYXRlc3RQb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgIDxIZWFkbGluZVBvc3RcbiAgICAgICAgICAgICAgICBrZXk9e3Bvc3Quc3lzLmlkfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBpbWFnZVVybD17cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICBzbHVnPXtwb3N0LmZpZWxkcy5zbHVnfVxuICAgICAgICAgICAgICAgIHRhZ3M9e3Bvc3QuZmllbGRzLnRhZ3N9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNENCOEM0LCAjM0NEM0FEKTtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHMgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4IDAgY2FsYyg0MHB4ICsgNSUpO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM0Q0I4QzQsIzNDRDNBRCk7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0cyB1bCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgcGFkZGluZzogMzBweCAyMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMzB2dyAtIDQwcHgpO1xuICAgICAgICAgIGhlaWdodDogY2FsYygzNXZ3IC0gNDBweCk7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSAqIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQ2YWUzO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b246aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjpmb2N1cyxcbiAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvX190ZXh0cyB7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3NjZW5lIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIG9wYWNpdHk6IC4xNTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzY2VuZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuXG4gICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4dnc7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTh2dztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgICAgICAgICAubGF0ZXN0LXBvc3RzIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b7a32a792dd45d2e9c91.hot-update.js.map