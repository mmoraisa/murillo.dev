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
    var translation = _ref2.translation;
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
      href: "//blog"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      className: "jsx-1669426194"
    }, translation.post.viewBlog))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_posts_Author__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "data-aos-anchor": ".show-more",
      author: post.fields.author,
      smallScreenStyles: "margin: auto; float: none",
      styles: "margin: 70px 20px 70px 0; float: right;"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1669426194"
    }, "h1.jsx-1669426194,h2.jsx-1669426194,h3.jsx-1669426194{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-1669426194{margin:0;font-size:50px;line-height:50px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;min-height:60px;}.post.jsx-1669426194{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__header.jsx-1669426194{margin-left:-575px;}.post__header__title.jsx-1669426194{height:110px;margin-left:150px;margin-top:175px;position:absolute;background-color:#ffffff;padding:15px 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:525px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__image.jsx-1669426194{width:300px;border-radius:20px;box-shadow:2px 2px 20px rgba(0,0,0,.2);}.post__content.jsx-1669426194{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;width:600px;margin:-130px 0 0 150px;padding:60px;background:#fff;box-shadow:3px 3px 30px rgba(0,0,0,.1);border-radius:10px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__content__publish-date.jsx-1669426194{font-family:arial;font-size:11px;color:#bbbbbb;}.post__content__description.jsx-1669426194{margin:0 0 30px 0;font-weight:700;}.post__content__video__frame.jsx-1669426194{width:100%;height:23.5vw;margin-bottom:40px;border-radius:10px;overflow:hidden;}.post__content__video.jsx-1669426194{width:100%;height:100%;}.post__content__footer.jsx-1669426194{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#a0a0a0;}.post__source.jsx-1669426194{text-transform:lowercase;font-size:12px;text-align:right;}.post__source.jsx-1669426194 a.jsx-1669426194{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.post__tags__tag.jsx-1669426194{display:inline-block;padding:2px 8px;border:1px solid #bababa;border-radius:5px;margin:0 5px 0 0;}.show-more.jsx-1669426194{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;float:right;margin-right:calc(50% - 450px);}.show-more.jsx-1669426194 h3.jsx-1669426194{font-size:22px;margin:0 0 5px 0;}.show-more.jsx-1669426194 *.jsx-1669426194{font-family:stolzl,sans-serif;}.show-more.jsx-1669426194 button.jsx-1669426194{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.show-more.jsx-1669426194 button.jsx-1669426194:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.show-more.jsx-1669426194 button.jsx-1669426194:focus,.show-more.jsx-1669426194 button.jsx-1669426194:active{outline:none;}@media screen and (max-width:900px){h1.jsx-1669426194{font-size:36px;line-height:36px;margin:0;min-height:initial;}.post__header.jsx-1669426194{position:-webkit-sticky;position:sticky;left:20px;}.post__content__video__frame.jsx-1669426194{height:30vh;}.post__content.jsx-1669426194{font-size:14px;width:calc(100% - 50px);margin:-130px 0 0 0;padding:20px;z-index:1;}.show-more.jsx-1669426194{float:none;width:calc(100% - 80px);height:initial;margin:20px 0 40px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0dzQixBQU04QyxBQU10QixBQVVJLEFBT00sQUFJTixBQVlELEFBTVUsQUFpQkosQUFNQSxBQUtQLEFBUUEsQUFLRSxBQVFZLEFBTVgsQUFLTyxBQVFDLEFBVVAsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQU1JLEFBT0MsQUFLSixBQUlHLEFBUUosU0E3S0UsRUFtRUQsQUFRRixBQW1HYyxDQTdJUCxBQWlJbkIsQ0F4SmEsQUFXSyxBQTJIcEIsQ0FsRHVCLENBdUJKLEFBaUNFLEFBZ0JPLEdBOUdYLEFBTUMsQ0E3Q2xCLEFBNkc4QixFQTNCWixDQTVEb0UsQUFvRTVELENBL0IxQixDQTNFbUIsQ0FtRUUsQUFvQkosS0E5RkMsQUFnSWxCLENBcEdtQixBQVlzQixDQW9GekMsQUFpQ2EsQ0E5RkcsQ0FNaEIsQ0FnSG1CLEVBM0VRLEVBbUVILENBOUVMLEFBb0VMLENBM0prRCxBQXNKekMsR0FuRkYsRUExRUQsQUFpSE8sQ0FsRDNCLEFBcUVpQixDQXhHRyxFQXVJbEIsQUFrQjBCLE9BdEY1QixFQThFaUIsQ0FmZixFQXBEa0IsQUEyQkosQ0ExREUsQ0ExRWxCLEFBbUdBLEVBdkUyQixJQVczQixDQTBFYyxDQTREQSxFQXpGa0IsQUFpRzlCLEVBaERjLEVBU3lCLENBbkV6QyxDQStCbUIsRUFvRWpCLENBNURhLElBbkdTLEdBdUhKLENBekdJLEtBc0ZWLENBUmQsSUFwR29CLEtBcUNGLEVBd0VlLEFBbUJiLEtBekdMLElBaUhmLEVBdkkrQixHQXFDZCxJQTJGUyxXQTFGUCxFQXVFbkIsU0E1R2tCLE1Bc0NKLFVBckNkLENBTXFCLENBZ0NLLGdCQXlGVCxLQTFHSCxFQXNESSxDQXBDSCxPQXlGZixFQTFHcUIsSUFrQkgsRUFvQ0csY0FuQ29CLHVDQWxDekMsQUFtQ3FCLG1CQUNlLGVBcEJwQyxNQXNEZ0IsYUFqQ3FCLENBa0NyQyxrQ0FqQ3dCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9wYWdlcy9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSAgZnJvbSAnY29udGVudGZ1bCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L21haW4nO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IHsgQ09OVEVOVEZVTF9TUEFDRV9JRCwgQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9kZWZhdWx0cy9Db250ZW50ZnVsS2V5cyc7XG5pbXBvcnQgQXV0aG9yIGZyb20gJy4uL2NvbXBvbmVudHMvcG9zdHMvQXV0aG9yJztcbmltcG9ydCB7IERFRkFVTFRfTEFOR1VBR0UgfSBmcm9tICcuLi9kZWZhdWx0cy9MYW5ndWFnZXMnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuXG5jb25zdCBQb3N0ID0gd2l0aFJvdXRlcigoeyBlcnJvckNvZGUsIHBvc3QsIHJvdXRlciB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnbGFuZycsXG4gICAgICByb3V0ZXIucXVlcnkubG9jYWxlIHx8IERFRkFVTFRfTEFOR1VBR0VcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgaWYoZXJyb3JDb2RlKSB7XG4gICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtlcnJvckNvZGV9IC8+O1xuICB9XG5cbiAgY29uc3QgcHVibGlzaERhdGUgPSBwb3N0LmZpZWxkcy5wdWJsaXNoRGF0ZTtcbiAgY29uc3QgZGF0ZVJlZ2V4cCA9IC8oPzx5ZWFyPlswLTldezR9KS0oPzxtb250aD5bMC05XXsyfSktKD88ZGF5PlswLTldezJ9KVQoPzxob3VyPlswLTldezJ9KTooPzxtaW51dGU+WzAtOV17Mn0pLztcblxuICBjb25zdCBwdWJsaXNoRGF0ZUdyb3VwcyA9IHB1Ymxpc2hEYXRlLm1hdGNoKGRhdGVSZWdleHApLmdyb3VwcztcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIHsoeyB0cmFuc2xhdGlvbiB9KSA9PiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57cG9zdC5maWVsZHMudGl0bGV9IC0gTXVyaWxsbyBkZSBNb3JhaXMgQmxvZzwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmZpZWxkcy5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwb3N0LmZpZWxkcy5tZXRhRGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUgJiZcbiAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsICYmXG4gICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybC5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6JHtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTMwMCZoPTMwMCZmaXQ9dGh1bWJgfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMT57cG9zdC5maWVsZHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X19wdWJsaXNoLWRhdGVcIj57YCR7cHVibGlzaERhdGVHcm91cHMubW9udGh9LyR7cHVibGlzaERhdGVHcm91cHMuZGF5fS8ke3B1Ymxpc2hEYXRlR3JvdXBzLnllYXJ9ICR7dHJhbnNsYXRpb24ucG9zdC5hdFRpbWV9ICR7cHVibGlzaERhdGVHcm91cHMuaG91cn06JHtwdWJsaXNoRGF0ZUdyb3Vwcy5taW51dGV9YH1oPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy52aWRlbyAmJiBwb3N0LmZpZWxkcy52aWRlby5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fdmlkZW9fX2ZyYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50X192aWRlb1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmZpZWxkcy52aWRlb31cbiAgICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj5cbiAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwb3N0LmZpZWxkcy5ib2R5fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RhZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLnRhZ3MgJiZcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy50YWdzLm1hcCh0YWcgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwicG9zdF9fdGFnc19fdGFnXCI+e3RhZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5maWVsZHMuc291cmNlICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fc291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uLnBvc3Quc291cmNlfTogPGEgaHJlZj17cG9zdC5maWVsZHMuc291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIj57cG9zdC5maWVsZHMuc291cmNlTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LW1vcmVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIj5cbiAgICAgICAgICAgICAgPGgzPnt0cmFuc2xhdGlvbi5wb3N0LnNob3dNb3JlVGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uLnBvc3Quc2hvd01vcmVUZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8vYmxvZ2B9PlxuICAgICAgICAgICAgICAgIDxidXR0b24+e3RyYW5zbGF0aW9uLnBvc3Qudmlld0Jsb2d9PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEF1dGhvclxuICAgICAgICAgICAgICBkYXRhLWFvcy1hbmNob3I9XCIuc2hvdy1tb3JlXCJcbiAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmZpZWxkcy5hdXRob3J9XG4gICAgICAgICAgICAgIHNtYWxsU2NyZWVuU3R5bGVzPVwibWFyZ2luOiBhdXRvOyBmbG9hdDogbm9uZVwiXG4gICAgICAgICAgICAgIHN0eWxlcz1cIm1hcmdpbjogNzBweCAyMHB4IDcwcHggMDsgZmxvYXQ6IHJpZ2h0O1wiIC8+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICBoMSxcbiAgICAgICAgICAgIGgyLFxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNENCOEM0LCAjM0NEM0FEKTtcbiAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9faGVhZGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01NzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2hlYWRlcl9fdGl0bGUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3NXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMCAwIDI1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MjVweDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtMTMwcHggMCAwIDE1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDMwcHggcmdiYSgwLDAsMCwuMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudF9fcHVibGlzaC1kYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X192aWRlb19fZnJhbWUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMy41dnc7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X192aWRlbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X19mb290ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYTBhMGEwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fc291cmNlIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX3NvdXJjZSBhIHtcbiAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX3RhZ3NfX3RhZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JhYmFiYTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3ctbW9yZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDMwdncgLSA0MHB4KTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDM1dncgLSA0MHB4KTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyg1MCUgLSA0NTBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaG93LW1vcmUgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2hvdy1tb3JlICoge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaG93LW1vcmUgYnV0dG9uIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJkNmFlMztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3ctbW9yZSBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaG93LW1vcmUgYnV0dG9uOmZvY3VzLFxuICAgICAgICAgICAgLnNob3ctbW9yZSBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3RfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3ZpZGVvX19mcmFtZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAtMTMwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnNob3ctbW9yZSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCA0MHB4IDIwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0xhbmd1YWdlLkNvbnN1bWVyPlxuICApO1xufSk7XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IGxvY2FsZSwgc2x1ZyB9ID0gcXVlcnk7XG5cbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICBhY2Nlc3NUb2tlbjogQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU5cbiAgfSk7XG5cbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6ICdibG9nUG9zdCcsXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgJ2ZpZWxkcy5zbHVnW2luXSc6IHNsdWcsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcG9zdDogZW50cmllcy5pdGVtc1swXVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/post.js */"));
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
//# sourceMappingURL=post.js.7662ff3faa3b770cfcde.hot-update.js.map