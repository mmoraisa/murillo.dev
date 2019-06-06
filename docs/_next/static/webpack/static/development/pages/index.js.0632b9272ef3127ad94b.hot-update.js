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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      latestPosts = _useState2[0],
      setLatestPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(router.query.locale || _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      stateLocale = _useState4[0],
      setStateLocale = _useState4[1];

  var setLocaleFn;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_7___default.a.init();

    if (!router.query.locale) {
      var locale = _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["default"].includes(window.navigator.language) ? window.navigator.language : _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"];
      setLocaleFn();
      setStateLocale();
    }

    document.documentElement.setAttribute('lang', router.query.locale || _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_8___default.a(scene);
    var client = Object(contentful__WEBPACK_IMPORTED_MODULE_9__["createClient"])({
      space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_13__["CONTENTFUL_SPACE_ID"],
      accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_13__["CONTENTFUL_ACCESS_TOKEN"]
    });
    client.getEntries({
      content_type: 'blogPost',
      limit: 3,
      order: '-sys.createdAt',
      locale: router.query.locale || _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"]
    }).then(function (response) {
      setLatestPosts(response.items);
    });
  }, [parallax_js__WEBPACK_IMPORTED_MODULE_8___default.a]);
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
    }, "h1.jsx-3062034049,h2.jsx-3062034049,h3.jsx-3062034049{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-3062034049{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-3062034049{font-size:28px;margin:0 0 10px 10px;}.latest-posts.jsx-3062034049 h2.jsx-3062034049{font-size:60px;line-height:50px;height:130px;margin:10px;text-align:right;padding:0 40px 0 calc(40px + 15%);display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.latest-posts.jsx-3062034049 ul.jsx-3062034049{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:30px 15%;}.latest-posts__show-more.jsx-3062034049{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;}.latest-posts__show-more.jsx-3062034049 h3.jsx-3062034049{font-size:22px;margin:0 0 5px 0;}.latest-posts__show-more.jsx-3062034049 *.jsx-3062034049{font-family:stolzl,sans-serif;}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:focus,.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:active{outline:none;}.hero.jsx-3062034049{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-3062034049{width:600px;}#scene.jsx-3062034049{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-3062034049 img.jsx-3062034049{width:70%;}@media screen and (max-width:640px){.hero.jsx-3062034049{padding:0;}h1.jsx-3062034049{font-size:18vw;line-height:18vw;}}@media screen and (max-width:900px){.latest-posts.jsx-3062034049 ul.jsx-3062034049{margin-top:-20px;padding:20px;}.latest-posts__show-more.jsx-3062034049{width:100%;height:initial;margin:20px;padding:0;-webkit-order:1;-ms-flex-order:1;order:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdLd0IsQUFLZ0QsQUFNYixBQVVILEFBS0EsQUFjRixBQU9TLEFBUVAsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQUlhLEFBUWQsQUFJTSxBQVFSLEFBTUUsQUFJSyxBQVNFLEFBS04sVUF2QmYsQUFNRSxDQWtCaUIsQ0FwQ25CLENBWkEsRUE3RHVCLEFBS0osQUE2QkEsQUE2REUsRUFTSixDQWxIQyxBQXVGRSxDQWxDVSxHQWpCSixJQXVDWCxBQTZDQyxJQTlIRSxBQXVEbEIsQUFrRUUsRUFuR2EsQUE2QmYsQUE2REUsRUF6R2lCLEVBVW5CLEFBNkVhLEVBaUNDLE9BeEdBLENBdEJNLEFBMENPLENBaUJWLEFBbUNILENBaUNGLEdBeEhRLE1BZ0JELEVBd0VBLEdBbkNILEVBM0RoQixLQU9nRSxFQW1DbEQsR0FuQnNCLEFBVW5CLEVBMkJELEFBbUNoQixFQTFCeUMsS0ExQjFCLE1Bb0ZiLENBbEVrQixNQWpCcEIsSUFvQytCLFFBeERULEFBc0NGLFNBUXBCLFNBUDBCLEdBdkROLEVBMEJXLGdCQXpCQSw2QkFDL0IsTUFzRGlCLGVBQ2pCLGFBeEM4RCxhQXdEekMsK0JBOUNGLGdCQVRDLENBVXBCLGlCQVQrQiw0QkF1RGQsQ0F0REksY0F1RHJCLCtFQXREQSIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gIGZyb20gJ2NvbnRlbnRmdWwnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCBIZWFkbGluZVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cy9IZWFkbGluZVBvc3QnO1xuaW1wb3J0IHsgQ09OVEVOVEZVTF9TUEFDRV9JRCwgQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9kZWZhdWx0cy9Db250ZW50ZnVsS2V5cyc7XG5pbXBvcnQgTEFOR1VBR0VTLCB7IERFRkFVTFRfTEFOR1VBR0UgfSBmcm9tICcuLi9kZWZhdWx0cy9MYW5ndWFnZXMnO1xuXG5jb25zdCBJbmRleCA9ICh7IHJvdXRlciB9KSA9PiB7XG5cbiAgY29uc3QgW2xhdGVzdFBvc3RzLCBzZXRMYXRlc3RQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGF0ZUxvY2FsZSwgc2V0U3RhdGVMb2NhbGVdID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LmxvY2FsZSB8fCBERUZBVUxUX0xBTkdVQUdFKTtcblxuICBsZXQgc2V0TG9jYWxlRm47XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuXG4gICAgaWYoIXJvdXRlci5xdWVyeS5sb2NhbGUpIHtcblxuICAgICAgY29uc3QgbG9jYWxlID0gKFxuICAgICAgICBMQU5HVUFHRVMuaW5jbHVkZXMod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSlcbiAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlXG4gICAgICAgIDogREVGQVVMVF9MQU5HVUFHRVxuICAgICAgKTtcblxuICAgICAgc2V0TG9jYWxlRm4oXG5cbiAgICAgICk7XG4gICAgICBzZXRTdGF0ZUxvY2FsZSgpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnbGFuZycsXG4gICAgICByb3V0ZXIucXVlcnkubG9jYWxlIHx8IERFRkFVTFRfTEFOR1VBR0VcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgc2NlbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUnKTtcbiAgICB2YXIgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgICAgc3BhY2U6IENPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gICAgICBhY2Nlc3NUb2tlbjogQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU5cbiAgICB9KTtcblxuICAgIGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICAgIGxpbWl0OiAzLFxuICAgICAgb3JkZXI6ICctc3lzLmNyZWF0ZWRBdCcsXG4gICAgICBsb2NhbGU6IHJvdXRlci5xdWVyeS5sb2NhbGUgfHwgREVGQVVMVF9MQU5HVUFHRSxcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBzZXRMYXRlc3RQb3N0cyhyZXNwb25zZS5pdGVtcyk7XG4gICAgfSk7XG5cbiAgfSwgW1BhcmFsbGF4XSk7XG5cbiAgbGV0IHNob3dpbmdMYXRlc3RQb3N0cyA9IGxhdGVzdFBvc3RzO1xuXG4gIHJldHVybiAoXG4gICAgPExhbmd1YWdlLkNvbnN1bWVyPlxuICAgICAgeyh7IGxvY2FsZSwgdHJhbnNsYXRpb24sIHNldExvY2FsZSB9KSA9PiB7XG5cbiAgICAgICAgc2V0TG9jYWxlRm4gPSBzZXRMb2NhbGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDx0aXRsZT5NdXJpbGxvIGRlIE1vcmFpcyAtIHt0cmFuc2xhdGlvbi5pbmRleC50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0cmFuc2xhdGlvbi5pbmRleC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17dHJhbnNsYXRpb24uaW5kZXguZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX190ZXh0c1wiPlxuICAgICAgICAgICAgICAgIDxUeXBlZFxuICAgICAgICAgICAgICAgICAgc3RyaW5ncz17dHJhbnNsYXRpb24uaW5kZXgudHlwZWRTdHJpbmdzfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDkyNTQ1JyxcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3N0b2x6bCwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICczM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHR5cGVTcGVlZD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgxPk11cmlsbG8gZGUgTW9yYWlzPC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzY2VuZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuMlwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3RyYW5zbGF0aW9uLmluZGV4LmRldmVsb3BlckltYWdlQWx0fSAxfWB9XG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHt0cmFuc2xhdGlvbi5pbmRleC5kZXZlbG9wZXJJbWFnZUFsdH0gMn1gfVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0yLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC45XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7dHJhbnNsYXRpb24uaW5kZXguZGV2ZWxvcGVySW1hZ2VBbHR9IDN9YH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMy5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcG9zdHNcIj5cbiAgICAgICAgICAgICAgPGgyIGRhdGEtYW9zPVwiZmFkZS11cFwiPnt0cmFuc2xhdGlvbi5pbmRleC5sYXRlc3R9PGJyLz57dHJhbnNsYXRpb24uaW5kZXgucG9zdHN9PC9oMj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNob3dpbmdMYXRlc3RQb3N0cy5zcGxpY2UoMCwgMilcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsICYmXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmVQb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Bvc3Quc3lzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9e3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtwb3N0LmZpZWxkcy5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17cG9zdC5maWVsZHMudGFnc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF0ZXN0LXBvc3RzX19zaG93LW1vcmVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxoMz57dHJhbnNsYXRpb24uaW5kZXguc2hvd01vcmVUaXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uLmluZGV4LnNob3dNb3JlVGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXsoXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnF1ZXJ5LmxvY2FsZVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Jsb2cnXG4gICAgICAgICAgICAgICAgICAgICAgOiBgJHtsb2NhbGUgfHwgREVGQVVMVF9MQU5HVUFHRX0vYmxvZ2BcbiAgICAgICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+e3RyYW5zbGF0aW9uLmluZGV4LnZpZXdCbG9nfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNob3dpbmdMYXRlc3RQb3N0c1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwgJiZcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZVBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5zeXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5maWVsZHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcj17cm91dGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5maWVsZHMuc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3Bvc3QuZmllbGRzLnRhZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgaDIsXG4gICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNENCOEM0LCAjM0NEM0FEKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHMgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHggMCBjYWxjKDQwcHggKyAxNSUpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzRDQjhDNCwjM0NEM0FEKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHMgdWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTUlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMzV2dyAtIDQwcHgpO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgKiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJkNmFlMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b246Zm9jdXMsXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVyb19fdGV4dHMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICNzY2VuZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMTU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwdmg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAjc2NlbmUgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcblxuICAgICAgICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHZ3O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4dnc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gICAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0cyB1bCB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgIG9yZGVyOiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9MYW5ndWFnZS5Db25zdW1lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXgpO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Index));

/***/ })

})
//# sourceMappingURL=index.js.0632b9272ef3127ad94b.hot-update.js.map