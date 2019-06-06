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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../defaults/Language */ "./defaults/Language.js");
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var _components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/posts/HeadlinePost */ "./components/posts/HeadlinePost/index.js");
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");
/* harmony import */ var _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../defaults/Languages */ "./defaults/Languages.js");

















var Index = function Index(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      latestPosts = _useState4[0],
      setLatestPosts = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(router.query.locale || _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"]),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      stateLocale = _useState6[0],
      setStateLocale = _useState6[1];

  var setLocaleFn;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_7___default.a.init();

    if (!router.query.locale) {
      var locale = _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["default"].includes(window.navigator.language) ? window.navigator.language : _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"];
      setLocaleFn(locale);
      setStateLocale(locale);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_8___default.a(scene);

    if (initialized) {}

    var client = Object(contentful__WEBPACK_IMPORTED_MODULE_9__["createClient"])({
      space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_13__["CONTENTFUL_SPACE_ID"],
      accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_13__["CONTENTFUL_ACCESS_TOKEN"]
    });
    client.getEntries({
      content_type: 'blogPost',
      limit: 3,
      order: '-sys.createdAt',
      locale: stateLocale
    }).then(function (response) {
      setLatestPosts(response.items);
    });
    document.documentElement.setAttribute('lang', stateLocale);
  }, [parallax_js__WEBPACK_IMPORTED_MODULE_8___default.a, initialized, stateLocale]);
  var showingLatestPosts = latestPosts;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_10__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale,
        translation = _ref2.translation,
        setLocale = _ref2.setLocale;
    setLocaleFn = setLocale;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
      className: "jsx-3062034049"
    }, "Murillo de Morais - ", translation.index.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "description",
      content: translation.index.description,
      className: "jsx-3062034049"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "og:description",
      content: translation.index.description,
      className: "jsx-3062034049"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3062034049" + " " + "hero"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3062034049" + " " + "hero__texts"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_5___default.a, {
      strings: translation.index.typedStrings,
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
      className: "jsx-3062034049"
    }, "Murillo de Morais")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "scene",
      className: "jsx-3062034049"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      "data-depth": "0.2",
      className: "jsx-3062034049"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      alt: "".concat(translation.index.developerImageAlt, " 1}"),
      src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-1.png",
      className: "jsx-3062034049"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      "data-depth": "0.5",
      className: "jsx-3062034049"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      alt: "".concat(translation.index.developerImageAlt, " 2}"),
      src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-2.png",
      className: "jsx-3062034049"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      "data-depth": "0.9",
      className: "jsx-3062034049"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      alt: "".concat(translation.index.developerImageAlt, " 3}"),
      src: "https://s3.amazonaws.com/murillo.dev/site/hero-img-3.png",
      className: "jsx-3062034049"
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-3062034049" + " " + "latest-posts"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
      "data-aos": "fade-up",
      className: "jsx-3062034049"
    }, translation.index.latest, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
      className: "jsx-3062034049"
    }), translation.index.posts), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      className: "jsx-3062034049"
    }, showingLatestPosts.splice(0, 2).filter(function (post) {
      return post.fields.heroImage.fields.file && post.fields.heroImage.fields.file.url && post.fields.heroImage.fields.file.url.length;
    }).map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: post.sys.id,
        description: post.fields.description,
        imageUrl: post.fields.heroImage.fields.file.url,
        slug: post.fields.slug,
        tags: post.fields.tags,
        title: post.fields.title
      });
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      "data-aos": "fade-up",
      className: "jsx-3062034049" + " " + "latest-posts__show-more"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
      className: "jsx-3062034049"
    }, translation.index.showMoreTitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-3062034049"
    }, translation.index.showMoreText), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: router.query.locale ? 'blog' : "".concat(locale || _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"], "/blog")
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "jsx-3062034049"
    }, translation.index.viewBlog))), showingLatestPosts.filter(function (post) {
      return post.fields.heroImage.fields.file && post.fields.heroImage.fields.file.url && post.fields.heroImage.fields.file.url.length;
    }).map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_posts_HeadlinePost__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: post.sys.id,
        description: post.fields.description,
        imageUrl: post.fields.heroImage.fields.file.url,
        router: router,
        slug: post.fields.slug,
        tags: post.fields.tags,
        title: post.fields.title
      });
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3062034049"
    }, "h1.jsx-3062034049,h2.jsx-3062034049,h3.jsx-3062034049{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-3062034049{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-3062034049{font-size:28px;margin:0 0 10px 10px;}.latest-posts.jsx-3062034049 h2.jsx-3062034049{font-size:60px;line-height:50px;height:130px;margin:10px;text-align:right;padding:0 40px 0 calc(40px + 15%);display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.latest-posts.jsx-3062034049 ul.jsx-3062034049{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:30px 15%;}.latest-posts__show-more.jsx-3062034049{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;}.latest-posts__show-more.jsx-3062034049 h3.jsx-3062034049{font-size:22px;margin:0 0 5px 0;}.latest-posts__show-more.jsx-3062034049 *.jsx-3062034049{font-family:stolzl,sans-serif;}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:focus,.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:active{outline:none;}.hero.jsx-3062034049{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-3062034049{width:600px;}#scene.jsx-3062034049{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-3062034049 img.jsx-3062034049{width:70%;}@media screen and (max-width:640px){.hero.jsx-3062034049{padding:0;}h1.jsx-3062034049{font-size:18vw;line-height:18vw;}}@media screen and (max-width:900px){.latest-posts.jsx-3062034049 ul.jsx-3062034049{margin-top:-20px;padding:20px;}.latest-posts__show-more.jsx-3062034049{width:100%;height:initial;margin:20px;padding:0;-webkit-order:1;-ms-flex-order:1;order:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJLd0IsQUFLZ0QsQUFNYixBQVVILEFBS0EsQUFjRixBQU9TLEFBUVAsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQUlhLEFBUWQsQUFJTSxBQVFSLEFBTUUsQUFJSyxBQVNFLEFBS04sVUF2QmYsQUFNRSxDQWtCaUIsQ0FwQ25CLENBWkEsRUE3RHVCLEFBS0osQUE2QkEsQUE2REUsRUFTSixDQWxIQyxBQXVGRSxDQWxDVSxHQWpCSixJQXVDWCxBQTZDQyxJQTlIRSxBQXVEbEIsQUFrRUUsRUFuR2EsQUE2QmYsQUE2REUsRUF6R2lCLEVBVW5CLEFBNkVhLEVBaUNDLE9BeEdBLENBdEJNLEFBMENPLENBaUJWLEFBbUNILENBaUNGLEdBeEhRLE1BZ0JELEVBd0VBLEdBbkNILEVBM0RoQixLQU9nRSxFQW1DbEQsR0FuQnNCLEFBVW5CLEVBMkJELEFBbUNoQixFQTFCeUMsS0ExQjFCLE1Bb0ZiLENBbEVrQixNQWpCcEIsSUFvQytCLFFBeERULEFBc0NGLFNBUXBCLFNBUDBCLEdBdkROLEVBMEJXLGdCQXpCQSw2QkFDL0IsTUFzRGlCLGVBQ2pCLGFBeEM4RCxhQXdEekMsK0JBOUNGLGdCQVRDLENBVXBCLGlCQVQrQiw0QkF1RGQsQ0F0REksY0F1RHJCLCtFQXREQSIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gIGZyb20gJ2NvbnRlbnRmdWwnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCBIZWFkbGluZVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cy9IZWFkbGluZVBvc3QnO1xuaW1wb3J0IHsgQ09OVEVOVEZVTF9TUEFDRV9JRCwgQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9kZWZhdWx0cy9Db250ZW50ZnVsS2V5cyc7XG5pbXBvcnQgTEFOR1VBR0VTLCB7IERFRkFVTFRfTEFOR1VBR0UgfSBmcm9tICcuLi9kZWZhdWx0cy9MYW5ndWFnZXMnO1xuXG5jb25zdCBJbmRleCA9ICh7IHJvdXRlciB9KSA9PiB7XG5cbiAgY29uc3QgW2luaXRpYWxpemVkLCBzZXRJbml0aWFsaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsYXRlc3RQb3N0cywgc2V0TGF0ZXN0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3RhdGVMb2NhbGUsIHNldFN0YXRlTG9jYWxlXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5sb2NhbGUgfHwgREVGQVVMVF9MQU5HVUFHRSk7XG5cbiAgbGV0IHNldExvY2FsZUZuO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoKTtcblxuICAgIGlmKCFyb3V0ZXIucXVlcnkubG9jYWxlKSB7XG5cbiAgICAgIGNvbnN0IGxvY2FsZSA9IChcbiAgICAgICAgTEFOR1VBR0VTLmluY2x1ZGVzKHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UpXG4gICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZVxuICAgICAgICA6IERFRkFVTFRfTEFOR1VBR0VcbiAgICAgICk7XG5cbiAgICAgIHNldExvY2FsZUZuKGxvY2FsZSk7XG4gICAgICBzZXRTdGF0ZUxvY2FsZShsb2NhbGUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xuXG4gICAgaWYoaW5pdGlhbGl6ZWQpIHtcblxuICAgIH1cblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgICBzcGFjZTogQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICAgIGFjY2Vzc1Rva2VuOiBDT05URU5URlVMX0FDQ0VTU19UT0tFTlxuICAgIH0pO1xuXG4gICAgY2xpZW50LmdldEVudHJpZXMoe1xuICAgICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxuICAgICAgbGltaXQ6IDMsXG4gICAgICBvcmRlcjogJy1zeXMuY3JlYXRlZEF0JyxcbiAgICAgIGxvY2FsZTogc3RhdGVMb2NhbGUsXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgc2V0TGF0ZXN0UG9zdHMocmVzcG9uc2UuaXRlbXMpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICdsYW5nJyxcbiAgICAgIHN0YXRlTG9jYWxlXG4gICAgKTtcblxuICB9LCBbUGFyYWxsYXgsIGluaXRpYWxpemVkLCBzdGF0ZUxvY2FsZV0pO1xuXG4gIGxldCBzaG93aW5nTGF0ZXN0UG9zdHMgPSBsYXRlc3RQb3N0cztcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIHsoeyBsb2NhbGUsIHRyYW5zbGF0aW9uLCBzZXRMb2NhbGUgfSkgPT4ge1xuXG4gICAgICAgIHNldExvY2FsZUZuID0gc2V0TG9jYWxlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICA8dGl0bGU+TXVyaWxsbyBkZSBNb3JhaXMgLSB7dHJhbnNsYXRpb24uaW5kZXgudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dHJhbnNsYXRpb24uaW5kZXguZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RyYW5zbGF0aW9uLmluZGV4LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fdGV4dHNcIj5cbiAgICAgICAgICAgICAgICA8VHlwZWRcbiAgICAgICAgICAgICAgICAgIHN0cmluZ3M9e3RyYW5zbGF0aW9uLmluZGV4LnR5cGVkU3RyaW5nc31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzA5MjU0NScsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdzdG9semwsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMzNweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMT5NdXJpbGxvIGRlIE1vcmFpczwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic2NlbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHt0cmFuc2xhdGlvbi5pbmRleC5kZXZlbG9wZXJJbWFnZUFsdH0gMX1gfVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0xLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC41XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7dHJhbnNsYXRpb24uaW5kZXguZGV2ZWxvcGVySW1hZ2VBbHR9IDJ9YH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuOVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3RyYW5zbGF0aW9uLmluZGV4LmRldmVsb3BlckltYWdlQWx0fSAzfWB9XG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTMucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXBvc3RzXCI+XG4gICAgICAgICAgICAgIDxoMiBkYXRhLWFvcz1cImZhZGUtdXBcIj57dHJhbnNsYXRpb24uaW5kZXgubGF0ZXN0fTxici8+e3RyYW5zbGF0aW9uLmluZGV4LnBvc3RzfTwvaDI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzaG93aW5nTGF0ZXN0UG9zdHMuc3BsaWNlKDAsIDIpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybCAmJlxuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lUG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LnN5cy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5maWVsZHMuc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3Bvc3QuZmllbGRzLnRhZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVzdC1wb3N0c19fc2hvdy1tb3JlXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+e3RyYW5zbGF0aW9uLmluZGV4LnNob3dNb3JlVGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0cmFuc2xhdGlvbi5pbmRleC5zaG93TW9yZVRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17KFxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5xdWVyeS5sb2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdibG9nJ1xuICAgICAgICAgICAgICAgICAgICAgIDogYCR7bG9jYWxlIHx8IERFRkFVTFRfTEFOR1VBR0V9L2Jsb2dgXG4gICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPnt0cmFuc2xhdGlvbi5pbmRleC52aWV3QmxvZ308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzaG93aW5nTGF0ZXN0UG9zdHNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsICYmXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmVQb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Bvc3Quc3lzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXI9e3JvdXRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3QuZmllbGRzLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXtwb3N0LmZpZWxkcy50YWdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICAgIGgyLFxuICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTE1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRDQjhDNCwgIzNDRDNBRCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4IDAgY2FsYyg0MHB4ICsgMTUlKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM0Q0I4QzQsIzNDRDNBRCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzIHVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDE1JTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygzMHZ3IC0gNDBweCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDM1dncgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlICoge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDZhZTM7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uOmZvY3VzLFxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlcm9fX3RleHRzIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAjc2NlbmUge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjE1O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHZoO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgI3NjZW5lIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG5cbiAgICAgICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTh2dztcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHZ3O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAgICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHMgdWwge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgICB9fVxuICAgIDwvTGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4KTtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Index));

/***/ })

})
//# sourceMappingURL=index.js.d3bf077a154bfaac418b.hot-update.js.map