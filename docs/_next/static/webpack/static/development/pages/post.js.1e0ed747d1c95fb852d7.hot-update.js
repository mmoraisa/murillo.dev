webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");
/* harmony import */ var _components_posts_Author__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/posts/Author */ "./components/posts/Author/index.js");
/* harmony import */ var _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../defaults/Languages */ "./defaults/Languages.js");
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../defaults/Language */ "./defaults/Language.js");
















var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(function (_ref) {
  var errorCode = _ref.errorCode,
      post = _ref.post,
      router = _ref.router;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_11___default.a.init();
    document.documentElement.setAttribute('lang', router.query.locale || _defaults_Languages__WEBPACK_IMPORTED_MODULE_14__["DEFAULT_LANGUAGE"]);
  }, []);

  if (errorCode) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_9___default.a, {
      statusCode: errorCode
    });
  }

  var publishDate = post.fields.publishDate;
  var dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})T(?<hour>[0-9]{2}):(?<minute>[0-9]{2})/;
  var publishDateGroups = publishDate.match(dateRegexp).groups;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_15__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale,
        translation = _ref2.translation;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
      className: "jsx-1669426194"
    }, post.fields.title, " - Murillo de Morais Blog"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "description",
      content: post.fields.metaDescription,
      className: "jsx-1669426194"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "og:description",
      content: post.fields.metaDescription,
      className: "jsx-1669426194"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      "data-aos": "fade-up",
      className: "jsx-1669426194" + " " + "post"
    }, post.fields.heroImage.fields.file && post.fields.heroImage.fields.file.url && post.fields.heroImage.fields.file.url.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1669426194" + " " + "post__header"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      alt: post.fields.heroImage.fields.title,
      src: "https:".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb"),
      className: "jsx-1669426194" + " " + "post__image"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1669426194" + " " + "post__content"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      className: "jsx-1669426194"
    }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-1669426194" + " " + "post__content__publish-date"
    }, "".concat(publishDateGroups.month, "/").concat(publishDateGroups.day, "/").concat(publishDateGroups.year, " ").concat(translation.post.atTime, " ").concat(publishDateGroups.hour, ":").concat(publishDateGroups.minute), "h"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-1669426194" + " " + "post__content__description"
    }, post.fields.description), post.fields.video && post.fields.video.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1669426194" + " " + "post__content__video__frame"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("iframe", {
      src: post.fields.video,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-1669426194" + " " + "post__content__video"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
      source: post.fields.body
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1669426194" + " " + "post__content__footer"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1669426194" + " " + "post__tags"
    }, post.fields.tags && post.fields.tags.map(function (tag) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        key: tag,
        className: "jsx-1669426194" + " " + "post__tags__tag"
      }, tag);
    })), post.fields.source && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-1669426194" + " " + "post__source"
    }, translation.post.source, ": ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: post.fields.source,
      target: "_blank",
      className: "jsx-1669426194"
    }, post.fields.sourceName))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      "data-aos": "fade-up",
      className: "jsx-1669426194" + " " + "show-more"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      className: "jsx-1669426194"
    }, translation.post.showMoreTitle), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-1669426194"
    }, translation.post.showMoreText), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/".concat(locale, "/blog")
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      className: "jsx-1669426194"
    }, translation.post.viewBlog))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_posts_Author__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "data-aos-anchor": ".show-more",
      author: post.fields.author,
      smallScreenStyles: "margin: auto; float: none",
      styles: "margin: 70px 20px 70px 0; float: right;"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1669426194"
    }, "h1.jsx-1669426194,h2.jsx-1669426194,h3.jsx-1669426194{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-1669426194{margin:0;font-size:50px;line-height:50px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;min-height:60px;}.post.jsx-1669426194{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__header.jsx-1669426194{margin-left:-575px;}.post__header__title.jsx-1669426194{height:110px;margin-left:150px;margin-top:175px;position:absolute;background-color:#ffffff;padding:15px 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:525px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__image.jsx-1669426194{width:300px;border-radius:20px;box-shadow:2px 2px 20px rgba(0,0,0,.2);}.post__content.jsx-1669426194{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;width:600px;margin:-130px 0 0 150px;padding:60px;background:#fff;box-shadow:3px 3px 30px rgba(0,0,0,.1);border-radius:10px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__content__publish-date.jsx-1669426194{font-family:arial;font-size:11px;color:#bbbbbb;}.post__content__description.jsx-1669426194{margin:0 0 30px 0;font-weight:700;}.post__content__video__frame.jsx-1669426194{width:100%;height:23.5vw;margin-bottom:40px;border-radius:10px;overflow:hidden;}.post__content__video.jsx-1669426194{width:100%;height:100%;}.post__content__footer.jsx-1669426194{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#a0a0a0;}.post__source.jsx-1669426194{text-transform:lowercase;font-size:12px;text-align:right;}.post__source.jsx-1669426194 a.jsx-1669426194{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.post__tags__tag.jsx-1669426194{display:inline-block;padding:2px 8px;border:1px solid #bababa;border-radius:5px;margin:0 5px 0 0;}.show-more.jsx-1669426194{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;float:right;margin-right:calc(50% - 450px);}.show-more.jsx-1669426194 h3.jsx-1669426194{font-size:22px;margin:0 0 5px 0;}.show-more.jsx-1669426194 *.jsx-1669426194{font-family:stolzl,sans-serif;}.show-more.jsx-1669426194 button.jsx-1669426194{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.show-more.jsx-1669426194 button.jsx-1669426194:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.show-more.jsx-1669426194 button.jsx-1669426194:focus,.show-more.jsx-1669426194 button.jsx-1669426194:active{outline:none;}@media screen and (max-width:900px){h1.jsx-1669426194{font-size:36px;line-height:36px;margin:0;min-height:initial;}.post__header.jsx-1669426194{position:-webkit-sticky;position:sticky;left:20px;}.post__content__video__frame.jsx-1669426194{height:30vh;}.post__content.jsx-1669426194{font-size:14px;width:calc(100% - 50px);margin:-130px 0 0 0;padding:20px;z-index:1;}.show-more.jsx-1669426194{float:none;width:calc(100% - 80px);height:initial;margin:20px 0 40px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0dzQixBQU04QyxBQU10QixBQVVJLEFBT00sQUFJTixBQVlELEFBTVUsQUFpQkosQUFNQSxBQUtQLEFBUUEsQUFLRSxBQVFZLEFBTVgsQUFLTyxBQVFDLEFBVVAsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQU1JLEFBT0MsQUFLSixBQUlHLEFBUUosU0E3S0UsRUFtRUQsQUFRRixBQW1HYyxDQTdJUCxBQWlJbkIsQ0F4SmEsQUFXSyxBQTJIcEIsQ0FsRHVCLENBdUJKLEFBaUNFLEFBZ0JPLEdBOUdYLEFBTUMsQ0E3Q2xCLEFBNkc4QixFQTNCWixDQTVEb0UsQUFvRTVELENBL0IxQixDQTNFbUIsQ0FtRUUsQUFvQkosS0E5RkMsQUFnSWxCLENBcEdtQixBQVlzQixDQW9GekMsQUFpQ2EsQ0E5RkcsQ0FNaEIsQ0FnSG1CLEVBM0VRLEVBbUVILENBOUVMLEFBb0VMLENBM0prRCxBQXNKekMsR0FuRkYsRUExRUQsQUFpSE8sQ0FsRDNCLEFBcUVpQixDQXhHRyxFQXVJbEIsQUFrQjBCLE9BdEY1QixFQThFaUIsQ0FmZixFQXBEa0IsQUEyQkosQ0ExREUsQ0ExRWxCLEFBbUdBLEVBdkUyQixJQVczQixDQTBFYyxDQTREQSxFQXpGa0IsQUFpRzlCLEVBaERjLEVBU3lCLENBbkV6QyxDQStCbUIsRUFvRWpCLENBNURhLElBbkdTLEdBdUhKLENBekdJLEtBc0ZWLENBUmQsSUFwR29CLEtBcUNGLEVBd0VlLEFBbUJiLEtBekdMLElBaUhmLEVBdkkrQixHQXFDZCxJQTJGUyxXQTFGUCxFQXVFbkIsU0E1R2tCLE1Bc0NKLFVBckNkLENBTXFCLENBZ0NLLGdCQXlGVCxLQTFHSCxFQXNESSxDQXBDSCxPQXlGZixFQTFHcUIsSUFrQkgsRUFvQ0csY0FuQ29CLHVDQWxDekMsQUFtQ3FCLG1CQUNlLGVBcEJwQyxNQXNEZ0IsYUFqQ3FCLENBa0NyQyxrQ0FqQ3dCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L21haW4nO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IHsgQ09OVEVOVEZVTF9TUEFDRV9JRCwgQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9kZWZhdWx0cy9Db250ZW50ZnVsS2V5cyc7XG5pbXBvcnQgQXV0aG9yIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMvQXV0aG9yJztcbmltcG9ydCB7IERFRkFVTFRfTEFOR1VBR0UgfSBmcm9tICcuLi9kZWZhdWx0cy9MYW5ndWFnZXMnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuXG5jb25zdCBQb3N0ID0gd2l0aFJvdXRlcigoeyBlcnJvckNvZGUsIHBvc3QsIHJvdXRlciB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnbGFuZycsXG4gICAgICByb3V0ZXIucXVlcnkubG9jYWxlIHx8IERFRkFVTFRfTEFOR1VBR0VcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgaWYoZXJyb3JDb2RlKSB7XG4gICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtlcnJvckNvZGV9IC8+O1xuICB9XG5cbiAgY29uc3QgcHVibGlzaERhdGUgPSBwb3N0LmZpZWxkcy5wdWJsaXNoRGF0ZTtcbiAgY29uc3QgZGF0ZVJlZ2V4cCA9IC8oPzx5ZWFyPlswLTldezR9KS0oPzxtb250aD5bMC05XXsyfSktKD88ZGF5PlswLTldezJ9KVQoPzxob3VyPlswLTldezJ9KTooPzxtaW51dGU+WzAtOV17Mn0pLztcblxuICBjb25zdCBwdWJsaXNoRGF0ZUdyb3VwcyA9IHB1Ymxpc2hEYXRlLm1hdGNoKGRhdGVSZWdleHApLmdyb3VwcztcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIHsoeyBsb2NhbGUsIHRyYW5zbGF0aW9uIH0pID0+IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPntwb3N0LmZpZWxkcy50aXRsZX0gLSBNdXJpbGxvIGRlIE1vcmFpcyBCbG9nPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZmllbGRzLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZmllbGRzLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZSAmJlxuICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmwgJiZcbiAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczoke3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMuZmlsZS51cmx9P3c9MzAwJmg9MzAwJmZpdD10aHVtYmB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LmZpZWxkcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3B1Ymxpc2gtZGF0ZVwiPntgJHtwdWJsaXNoRGF0ZUdyb3Vwcy5tb250aH0vJHtwdWJsaXNoRGF0ZUdyb3Vwcy5kYXl9LyR7cHVibGlzaERhdGVHcm91cHMueWVhcn0gJHt0cmFuc2xhdGlvbi5wb3N0LmF0VGltZX0gJHtwdWJsaXNoRGF0ZUdyb3Vwcy5ob3VyfToke3B1Ymxpc2hEYXRlR3JvdXBzLm1pbnV0ZX1gfWg8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZGVzY3JpcHRpb25cIj57cG9zdC5maWVsZHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLnZpZGVvICYmIHBvc3QuZmllbGRzLnZpZGVvLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X192aWRlb19fZnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3ZpZGVvXCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuZmllbGRzLnZpZGVvfVxuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPlxuICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Bvc3QuZmllbGRzLmJvZHl9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMudGFncyAmJlxuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLnRhZ3MubWFwKHRhZyA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGFnfSBjbGFzc05hbWU9XCJwb3N0X190YWdzX190YWdcIj57dGFnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5zb3VyY2UgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19zb3VyY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb24ucG9zdC5zb3VyY2V9OiA8YSBocmVmPXtwb3N0LmZpZWxkcy5zb3VyY2V9IHRhcmdldD1cIl9ibGFua1wiPntwb3N0LmZpZWxkcy5zb3VyY2VOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctbW9yZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICA8aDM+e3RyYW5zbGF0aW9uLnBvc3Quc2hvd01vcmVUaXRsZX08L2gzPlxuICAgICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRpb24ucG9zdC5zaG93TW9yZVRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bG9jYWxlfS9ibG9nYH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj57dHJhbnNsYXRpb24ucG9zdC52aWV3QmxvZ308L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QXV0aG9yXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWFuY2hvcj1cIi5zaG93LW1vcmVcIlxuICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QuZmllbGRzLmF1dGhvcn1cbiAgICAgICAgICAgICAgc21hbGxTY3JlZW5TdHlsZXM9XCJtYXJnaW46IGF1dG87IGZsb2F0OiBub25lXCJcbiAgICAgICAgICAgICAgc3R5bGVzPVwibWFyZ2luOiA3MHB4IDIwcHggNzBweCAwOyBmbG9hdDogcmlnaHQ7XCIgLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgaDIsXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM0Q0I4QzQsICMzQ0QzQUQpO1xuICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19oZWFkZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTU3NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9faGVhZGVyX190aXRsZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTc1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwIDAgMjVweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDUyNXB4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IC0xMzBweCAwIDAgMTUwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMzBweCByZ2JhKDAsMCwwLC4xKTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X19wdWJsaXNoLWRhdGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNiYmJiYmI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3ZpZGVvX19mcmFtZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIzLjV2dztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3ZpZGVvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2Zvb3RlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19zb3VyY2Uge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fc291cmNlIGEge1xuICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fdGFnc19fdGFnIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmFiYWJhO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2hvdy1tb3JlIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzB2dyAtIDQwcHgpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMzV2dyAtIDQwcHgpO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDUwJSAtIDQ1MHB4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3ctbW9yZSBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaG93LW1vcmUgKiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3ctbW9yZSBidXR0b24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQ2YWUzO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAyMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2hvdy1tb3JlIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3ctbW9yZSBidXR0b246Zm9jdXMsXG4gICAgICAgICAgICAuc2hvdy1tb3JlIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9faGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9fY29udGVudF9fdmlkZW9fX2ZyYW1lIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IC0xMzBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc2hvdy1tb3JlIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDQwcHggMjBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvTGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICk7XG59KTtcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgbG9jYWxlLCBzbHVnIH0gPSBxdWVyeTtcblxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIHNwYWNlOiBDT05URU5URlVMX1NQQUNFX0lELFxuICAgIGFjY2Vzc1Rva2VuOiBDT05URU5URlVMX0FDQ0VTU19UT0tFTlxuICB9KTtcblxuICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogJ2Jsb2dQb3N0JyxcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAnZmllbGRzLnNsdWdbaW5dJzogc2x1ZyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3N0OiBlbnRyaWVzLml0ZW1zWzBdXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/post.js */"));
  });
});

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {
    var query, locale, slug, client, entries;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref3.query;
            locale = query.locale, slug = query.slug;
            client = Object(contentful__WEBPACK_IMPORTED_MODULE_7__["createClient"])({
              space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_12__["CONTENTFUL_SPACE_ID"],
              accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_12__["CONTENTFUL_ACCESS_TOKEN"]
            });
            _context.next = 5;
            return client.getEntries({
              content_type: 'blogPost',
              locale: locale,
              'fields.slug[in]': slug
            });

          case 5:
            entries = _context.sent;
            return _context.abrupt("return", {
              post: entries.items[0]
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.1e0ed747d1c95fb852d7.hot-update.js.map