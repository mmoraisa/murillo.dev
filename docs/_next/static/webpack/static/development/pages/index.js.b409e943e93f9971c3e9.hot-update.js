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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_7___default.a.init();
    console.log(window);
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
        translation = _ref2.translation;
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
    }, "h1.jsx-3062034049,h2.jsx-3062034049,h3.jsx-3062034049{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-3062034049{margin:20px 0 0 0;font-size:120px;text-align:right;line-height:115px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;}h2.jsx-3062034049{font-size:28px;margin:0 0 10px 10px;}.latest-posts.jsx-3062034049 h2.jsx-3062034049{font-size:60px;line-height:50px;height:130px;margin:10px;text-align:right;padding:0 40px 0 calc(40px + 15%);display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.latest-posts.jsx-3062034049 ul.jsx-3062034049{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:30px 15%;}.latest-posts__show-more.jsx-3062034049{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;}.latest-posts__show-more.jsx-3062034049 h3.jsx-3062034049{font-size:22px;margin:0 0 5px 0;}.latest-posts__show-more.jsx-3062034049 *.jsx-3062034049{font-family:stolzl,sans-serif;}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:focus,.latest-posts__show-more.jsx-3062034049 button.jsx-3062034049:active{outline:none;}.hero.jsx-3062034049{height:calc(100vh - 75px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 50px;}.hero__texts.jsx-3062034049{width:600px;}#scene.jsx-3062034049{text-align:center;position:absolute;z-index:-1;opacity:.15;margin-top:-20vh;}#scene.jsx-3062034049 img.jsx-3062034049{width:70%;}@media screen and (max-width:640px){.hero.jsx-3062034049{padding:0;}h1.jsx-3062034049{font-size:18vw;line-height:18vw;}}@media screen and (max-width:900px){.latest-posts.jsx-3062034049 ul.jsx-3062034049{margin-top:-20px;padding:20px;}.latest-posts__show-more.jsx-3062034049{width:100%;height:initial;margin:20px;padding:0;-webkit-order:1;-ms-flex-order:1;order:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVKd0IsQUFLZ0QsQUFNYixBQVVILEFBS0EsQUFjRixBQU9TLEFBUVAsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQUlhLEFBUWQsQUFJTSxBQVFSLEFBTUUsQUFJSyxBQVNFLEFBS04sVUF2QmYsQUFNRSxDQWtCaUIsQ0FwQ25CLENBWkEsRUE3RHVCLEFBS0osQUE2QkEsQUE2REUsRUFTSixDQWxIQyxBQXVGRSxDQWxDVSxHQWpCSixJQXVDWCxBQTZDQyxJQTlIRSxBQXVEbEIsQUFrRUUsRUFuR2EsQUE2QmYsQUE2REUsRUF6R2lCLEVBVW5CLEFBNkVhLEVBaUNDLE9BeEdBLENBdEJNLEFBMENPLENBaUJWLEFBbUNILENBaUNGLEdBeEhRLE1BZ0JELEVBd0VBLEdBbkNILEVBM0RoQixLQU9nRSxFQW1DbEQsR0FuQnNCLEFBVW5CLEVBMkJELEFBbUNoQixFQTFCeUMsS0ExQjFCLE1Bb0ZiLENBbEVrQixNQWpCcEIsSUFvQytCLFFBeERULEFBc0NGLFNBUXBCLFNBUDBCLEdBdkROLEVBMEJXLGdCQXpCQSw2QkFDL0IsTUFzRGlCLGVBQ2pCLGFBeEM4RCxhQXdEekMsK0JBOUNGLGdCQVRDLENBVXBCLGlCQVQrQiw0QkF1RGQsQ0F0REksY0F1RHJCLCtFQXREQSIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgUGFyYWxsYXggZnJvbSAncGFyYWxsYXgtanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gIGZyb20gJ2NvbnRlbnRmdWwnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCBIZWFkbGluZVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cy9IZWFkbGluZVBvc3QnO1xuaW1wb3J0IHsgQ09OVEVOVEZVTF9TUEFDRV9JRCwgQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9kZWZhdWx0cy9Db250ZW50ZnVsS2V5cyc7XG5pbXBvcnQgeyBERUZBVUxUX0xBTkdVQUdFIH0gZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2VzJztcblxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXIgfSkgPT4ge1xuXG4gIGNvbnN0IFtsYXRlc3RQb3N0cywgc2V0TGF0ZXN0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoKTtcblxuICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgJ2xhbmcnLFxuICAgICAgcm91dGVyLnF1ZXJ5LmxvY2FsZSB8fCBERUZBVUxUX0xBTkdVQUdFXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBuZXcgUGFyYWxsYXgoc2NlbmUpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiBDT05URU5URlVMX1NQQUNFX0lELFxuICAgICAgYWNjZXNzVG9rZW46IENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXG4gICAgfSk7XG5cbiAgICBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgICBjb250ZW50X3R5cGU6ICdibG9nUG9zdCcsXG4gICAgICBsaW1pdDogMyxcbiAgICAgIG9yZGVyOiAnLXN5cy5jcmVhdGVkQXQnLFxuICAgICAgbG9jYWxlOiByb3V0ZXIucXVlcnkubG9jYWxlIHx8IERFRkFVTFRfTEFOR1VBR0UsXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgc2V0TGF0ZXN0UG9zdHMocmVzcG9uc2UuaXRlbXMpO1xuICAgIH0pO1xuXG4gIH0sIFtQYXJhbGxheF0pO1xuXG4gIGxldCBzaG93aW5nTGF0ZXN0UG9zdHMgPSBsYXRlc3RQb3N0cztcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIHsoeyBsb2NhbGUsIHRyYW5zbGF0aW9uIH0pID0+IHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPHRpdGxlPk11cmlsbG8gZGUgTW9yYWlzIC0ge3RyYW5zbGF0aW9uLmluZGV4LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RyYW5zbGF0aW9uLmluZGV4LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXt0cmFuc2xhdGlvbi5pbmRleC5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3RleHRzXCI+XG4gICAgICAgICAgICAgICAgPFR5cGVkXG4gICAgICAgICAgICAgICAgICBzdHJpbmdzPXt0cmFuc2xhdGlvbi5pbmRleC50eXBlZFN0cmluZ3N9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMwOTI1NDUnLFxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnc3RvbHpsLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzMzcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDE+TXVyaWxsbyBkZSBNb3JhaXM8L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNjZW5lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRlcHRoPVwiMC4yXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7dHJhbnNsYXRpb24uaW5kZXguZGV2ZWxvcGVySW1hZ2VBbHR9IDF9YH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL211cmlsbG8uZGV2L3NpdGUvaGVyby1pbWctMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1kZXB0aD1cIjAuNVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake3RyYW5zbGF0aW9uLmluZGV4LmRldmVsb3BlckltYWdlQWx0fSAyfWB9XG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9tdXJpbGxvLmRldi9zaXRlL2hlcm8taW1nLTIucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtZGVwdGg9XCIwLjlcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHt0cmFuc2xhdGlvbi5pbmRleC5kZXZlbG9wZXJJbWFnZUFsdH0gM31gfVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbXVyaWxsby5kZXYvc2l0ZS9oZXJvLWltZy0zLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVzdC1wb3N0c1wiPlxuICAgICAgICAgICAgICA8aDIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+e3RyYW5zbGF0aW9uLmluZGV4LmxhdGVzdH08YnIvPnt0cmFuc2xhdGlvbi5pbmRleC5wb3N0c308L2gyPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2hvd2luZ0xhdGVzdFBvc3RzLnNwbGljZSgwLCAyKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwgJiZcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZVBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5zeXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5maWVsZHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3QuZmllbGRzLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXtwb3N0LmZpZWxkcy50YWdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3QtcG9zdHNfX3Nob3ctbW9yZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPnt0cmFuc2xhdGlvbi5pbmRleC5zaG93TW9yZVRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRpb24uaW5kZXguc2hvd01vcmVUZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9eyhcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucXVlcnkubG9jYWxlXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYmxvZydcbiAgICAgICAgICAgICAgICAgICAgICA6IGAke2xvY2FsZSB8fCBERUZBVUxUX0xBTkdVQUdFfS9ibG9nYFxuICAgICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj57dHJhbnNsYXRpb24uaW5kZXgudmlld0Jsb2d9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2hvd2luZ0xhdGVzdFBvc3RzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybCAmJlxuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lUG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LnN5cy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmZpZWxkcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyPXtyb3V0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtwb3N0LmZpZWxkcy5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17cG9zdC5maWVsZHMudGFnc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICBoMixcbiAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0Q0I4QzQsICMzQ0QzQUQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0cyBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweCAwIGNhbGMoNDBweCArIDE1JSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjNENCOEM0LCMzQ0QzQUQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0cyB1bCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAxNSU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzB2dyAtIDQwcHgpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygzNXZ3IC0gNDBweCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSAqIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQ2YWUzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5sYXRlc3QtcG9zdHNfX3Nob3ctbW9yZSBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjpmb2N1cyxcbiAgICAgICAgICAgICAgLmxhdGVzdC1wb3N0c19fc2hvdy1tb3JlIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZXJvX190ZXh0cyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgI3NjZW5lIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4xNTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjB2aDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICNzY2VuZSBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuXG4gICAgICAgICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4dnc7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTh2dztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzIHVsIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubGF0ZXN0LXBvc3RzX19zaG93LW1vcmUge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L0xhbmd1YWdlLkNvbnN1bWVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleCk7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/index.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Index));

/***/ })

})
//# sourceMappingURL=index.js.b409e943e93f9971c3e9.hot-update.js.map