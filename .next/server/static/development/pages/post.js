module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BlogSearchBox/index.js":
/*!*******************************************!*\
  !*** ./components/BlogSearchBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BlogSearchPoweredBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BlogSearchPoweredBy */ "./components/BlogSearchPoweredBy/index.js");
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../defaults/Language */ "./defaults/Language.js");






var BlogSearchBox = function BlogSearchBox(_ref) {
  var currentRefinement = _ref.currentRefinement,
      isSearchStalled = _ref.isSearchStalled,
      refine = _ref.refine,
      setIsLoading = _ref.setIsLoading;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(isSearchStalled);
  }, [isSearchStalled]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_4__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale,
        translation = _ref2.translation;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      noValidate: true,
      action: "",
      onSubmit: function onSubmit(evt) {
        evt.preventDefault();
      },
      role: "search",
      className: "jsx-1704152223"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "search",
      value: currentRefinement,
      onChange: function onChange(event) {
        return refine(event.currentTarget.value);
      },
      placeholder: translation.topBar.searchInBlog,
      className: "jsx-1704152223" + " " + ((isSearchStalled ? '--is-search-stalled' : '') || "")
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlogSearchPoweredBy__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1704152223"
  }, "input[type=\"search\"].jsx-1704152223{background:transparent;color:#687e98;font-family:stolzl,sans-serif;font-size:16px;width:315px;margin-right:10px;padding:0 0 10px 0;border:none;}input[type=\"search\"].jsx-1704152223:active,input[type=\"search\"].jsx-1704152223:focus{outline:none;}input[type=\"search\"].--is-search-stalled.jsx-1704152223{color:#56c6b6;}@media screen and (max-width:650px){input[type=\"search\"].jsx-1704152223{margin:0;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBSWtDLEFBWVYsQUFJQyxBQU1ILFNBQ1MsSUFWdEIsQ0FJQSxTQWhCZ0IsSUF1QmQsVUF0QjhCLDhCQUNmLGVBQ0gsWUFDTSxrQkFDQyxtQkFDUCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEJveC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdFNlYXJjaEJveCB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcbmltcG9ydCBCbG9nU2VhcmNoUG93ZXJlZEJ5IGZyb20gJy4uL0Jsb2dTZWFyY2hQb3dlcmVkQnknO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuXG5jb25zdCBCbG9nU2VhcmNoQm94ID0gKHsgY3VycmVudFJlZmluZW1lbnQsIGlzU2VhcmNoU3RhbGxlZCwgcmVmaW5lLCBzZXRJc0xvYWRpbmcgfSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKGlzU2VhcmNoU3RhbGxlZCk7XG4gIH0sIFtpc1NlYXJjaFN0YWxsZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgICAgeyh7IGxvY2FsZSwgdHJhbnNsYXRpb24gfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG5vVmFsaWRhdGUgYWN0aW9uPVwiXCIgb25TdWJtaXQ9eyhldnQpID0+IHsgZXZ0LnByZXZlbnREZWZhdWx0KCkgfX0gcm9sZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNTZWFyY2hTdGFsbGVkID8gJy0taXMtc2VhcmNoLXN0YWxsZWQnIDogJyd9XG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFJlZmluZW1lbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiByZWZpbmUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGlvbi50b3BCYXIuc2VhcmNoSW5CbG9nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCbG9nU2VhcmNoUG93ZXJlZEJ5IC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9MYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogIzY4N2U5ODtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHdpZHRoOiAzMTVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmFjdGl2ZSxcbiAgICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpmb2N1cyB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9XCJzZWFyY2hcIl0uLS1pcy1zZWFyY2gtc3RhbGxlZCB7XG4gICAgICAgICAgY29sb3I6ICM1NmM2YjY7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RTZWFyY2hCb3goQmxvZ1NlYXJjaEJveCk7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchBox/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectSearchBox"])(BlogSearchBox));

/***/ }),

/***/ "./components/BlogSearchHit/index.js":
/*!*******************************************!*\
  !*** ./components/BlogSearchHit/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/Language */ "./defaults/Language.js");





var BlogSearchHit = function BlogSearchHit(_ref) {
  var hit = _ref.hit;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_3__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale;
    return hit.fields.slug && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(locale, "/blog/").concat(hit.fields.slug[locale])
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4092717056" + " " + "blog-search-hit"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4092717056" + " " + "blog-search-hit__title"
    }, hit.fields.title[locale]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4092717056" + " " + "blog-search-hit__description"
    }, hit.fields.description[locale]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4092717056" + " " + "blog-search-hit__tags"
    }, hit.fields.tags[locale] && hit.fields.tags[locale].map(function (tag) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: tag,
        className: "jsx-4092717056" + " " + "blog-search-hit__tags__tag"
      }, tag);
    }))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4092717056"
  }, ".blog-search-hit.jsx-4092717056{width:300px;background:white;box-shadow:5px 5px 20px rgba(0,0,0,0.15);margin:10px 5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px;font-size:12px;font-family:stolzl,sans-serif;font-weight:200;border-radius:10px;-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.blog-search-hit.jsx-4092717056:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);box-shadow:2px 2px 15px rgba(0,0,0,0.10);}.blog-search-hit__title.jsx-4092717056{font-weight:400;font-size:14px;line-height:14px;margin-bottom:5px;}.blog-search-hit__description.jsx-4092717056{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.blog-search-hit__tags.jsx-4092717056{margin-top:3px;font-size:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.blog-search-hit__tags__tag.jsx-4092717056{color:#8e8e8e;border:1px solid #e0e0e0;border-radius:5px;padding:2px 4px;margin:5px 5px 0 0;}@media screen and (max-width:650px){.blog-search-hit.jsx-4092717056{width:calc(100vw - 60px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaEhpdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBSXVCLEFBZ0JVLEFBS04sQUFPRixBQU9DLEFBTUQsQUFVYSxZQWxEVixFQTRCRSxBQWFNLENBTlYsQ0FkQSxTQThCZixJQWxENEMsQ0FtQy9CLENBZEksRUFPTSxNQWFMLFNBbkJBLFFBT0YsQ0FhQSxTQW5CbEIsSUF0QmtCLEVBNkJsQixDQWFxQixLQTVCeUIsUUFiL0IsTUEwQ2YsWUFSQSxlQXBCQSx5Q0Fid0IsOEVBQ1QsYUFDRSxlQUNnQiw4QkFDZixnQkFDRyxtQkFDSyx3REFDVCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL0Jsb2dTZWFyY2hIaXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICogYXMgTGFuZ3VhZ2UgZnJvbSAnLi4vLi4vZGVmYXVsdHMvTGFuZ3VhZ2UnO1xuXG5jb25zdCBCbG9nU2VhcmNoSGl0ID0gKHsgaGl0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBsb2NhbGUgfSkgPT4gKFxuICAgICAgICAgIGhpdC5maWVsZHMuc2x1ZyAmJlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsb2NhbGV9L2Jsb2cvJHtoaXQuZmllbGRzLnNsdWdbbG9jYWxlXX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1zZWFyY2gtaGl0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2ctc2VhcmNoLWhpdF9fdGl0bGVcIj57aGl0LmZpZWxkcy50aXRsZVtsb2NhbGVdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvZy1zZWFyY2gtaGl0X19kZXNjcmlwdGlvblwiPntoaXQuZmllbGRzLmRlc2NyaXB0aW9uW2xvY2FsZV19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1oaXRfX3RhZ3NcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBoaXQuZmllbGRzLnRhZ3NbbG9jYWxlXSAmJlxuICAgICAgICAgICAgICAgICAgaGl0LmZpZWxkcy50YWdzW2xvY2FsZV0ubWFwKHRhZyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1oaXRfX3RhZ3NfX3RhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmJsb2ctc2VhcmNoLWhpdCB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IC4xcyBhbGwgZWFzZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0OmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2ctc2VhcmNoLWhpdF9fdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nLXNlYXJjaC1oaXRfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0X190YWdzIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvZy1zZWFyY2gtaGl0X190YWdzX190YWcge1xuICAgICAgICAgIGNvbG9yOiAjOGU4ZThlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgICAgICAgbWFyZ2luOiA1cHggNXB4IDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgICAgICAgICAuYmxvZy1zZWFyY2gtaGl0IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nU2VhcmNoSGl0O1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchHit/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogSearchHit);

/***/ }),

/***/ "./components/BlogSearchPoweredBy/index.js":
/*!*************************************************!*\
  !*** ./components/BlogSearchPoweredBy/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/Language */ "./defaults/Language.js");





var BlogSearchPoweredBy = function BlogSearchPoweredBy() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_3__["Consumer"], null, function (_ref) {
    var translation = _ref.translation;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-203354467" + " " + "blog-search-powered-by"
    }, "".concat(translation.topBar.searchPoweredBy, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.algolia.com",
      target: "_blank",
      className: "jsx-203354467"
    }, "Algolia"));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "203354467"
  }, ".blog-search-powered-by.jsx-203354467{font-family:stolzl,sans-serif;font-size:8px;-webkit-text-decoration:none;text-decoration:none;font-weight:100;text-transform:uppercase;opacity:.5;position:absolute;margin-top:-12px;pointer-events:none;}.blog-search-powered-by.jsx-203354467 a.jsx-203354467{-webkit-text-decoration:none;text-decoration:none;color:#000;pointer-events:all;}@media screen and (max-width:650px){.blog-search-powered-by.jsx-203354467{text-align:center;position:initial;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaFBvd2VyZWRCeS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFJeUMsQUFZVCxBQVFELGtCQUNELFlBcEJMLEtBcUJkLFNBcEJxQixNQVdWLFdBQ1EsbUJBQ3JCLGNBWmtCLGdCQUNTLHlCQUNkLFdBQ08sa0JBQ0QsaUJBQ0csb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvQmxvZ1NlYXJjaFBvd2VyZWRCeS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3RQb3dlcmVkQnkgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XG5pbXBvcnQgKiBhcyBMYW5ndWFnZSBmcm9tICcuLi8uLi9kZWZhdWx0cy9MYW5ndWFnZSc7XG5cbmNvbnN0IEJsb2dTZWFyY2hQb3dlcmVkQnkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExhbmd1YWdlLkNvbnN1bWVyPlxuICAgICAgICB7KHsgdHJhbnNsYXRpb24gfSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1zZWFyY2gtcG93ZXJlZC1ieVwiPlxuICAgICAgICAgICAge2Ake3RyYW5zbGF0aW9uLnRvcEJhci5zZWFyY2hQb3dlcmVkQnl9IGB9PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFsZ29saWEuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QWxnb2xpYTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLmJsb2ctc2VhcmNoLXBvd2VyZWQtYnkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nLXNlYXJjaC1wb3dlcmVkLWJ5IGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICAgIC5ibG9nLXNlYXJjaC1wb3dlcmVkLWJ5IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0UG93ZXJlZEJ5KEJsb2dTZWFyY2hQb3dlcmVkQnkpO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/BlogSearchPoweredBy/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectPoweredBy"])(BlogSearchPoweredBy));

/***/ }),

/***/ "./components/BlogSearchResults/index.js":
/*!***********************************************!*\
  !*** ./components/BlogSearchResults/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0__);


var BlogSearchResults = function BlogSearchResults(_ref) {
  var searchState = _ref.searchState,
      searchResults = _ref.searchResults,
      children = _ref.children;

  if (searchState.query && searchResults && searchResults.query === searchState.query && searchResults.nbHits !== 0) {
    return children;
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_0__["connectStateResults"])(BlogSearchResults));

/***/ }),

/***/ "./components/TopBar/index.js":
/*!************************************!*\
  !*** ./components/TopBar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! algoliasearch/lite */ "algoliasearch/lite");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../defaults/Language */ "./defaults/Language.js");
/* harmony import */ var _BlogSearchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BlogSearchBox */ "./components/BlogSearchBox/index.js");
/* harmony import */ var _BlogSearchHit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BlogSearchHit */ "./components/BlogSearchHit/index.js");
/* harmony import */ var _BlogSearchResults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BlogSearchResults */ "./components/BlogSearchResults/index.js");
/* harmony import */ var _defaults_AlgoliaKeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../defaults/AlgoliaKeys */ "./defaults/AlgoliaKeys.js");











var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()(_defaults_AlgoliaKeys__WEBPACK_IMPORTED_MODULE_10__["ALGOLIA_APPLICATION_ID"], _defaults_AlgoliaKeys__WEBPACK_IMPORTED_MODULE_10__["ALGOLIA_API_KEY"]);

var TopBar = function TopBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      searchIsLoading = _useState4[0],
      setSearchIsLoading = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_6__["Consumer"], null, function (_ref) {
    var locale = _ref.locale,
        translation = _ref.translation;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-523739176" + " " + "top-bar"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
      className: "jsx-523739176"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      className: "jsx-523739176"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-523739176"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: "/".concat(locale)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-523739176"
    }, translation.topBar.home))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-523739176"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: "/".concat(locale, "/blog")
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-523739176"
    }, translation.topBar.blog))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["InstantSearch"], {
      searchClient: searchClient,
      indexName: "posts",
      onSearchStateChange: function onSearchStateChange(_ref2) {
        var query = _ref2.query;
        return setQuery(query);
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["Configure"], {
      hitsPerPage: 4,
      distinct: true
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BlogSearchBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setIsLoading: setSearchIsLoading
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BlogSearchResults__WEBPACK_IMPORTED_MODULE_9__["default"], {
      query: query
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-523739176" + " " + "blog-search-box__hits"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_5__["Hits"], {
      hitComponent: _BlogSearchHit__WEBPACK_IMPORTED_MODULE_8__["default"]
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "523739176"
    }, ".top-bar.jsx-523739176{background:#ffffff7a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:-webkit-sticky;position:sticky;top:0;z-index:1;-webkit-transition:.3s all ease;transition:.3s all ease;}.top-bar.jsx-523739176:hover{background:#fff;}nav.jsx-523739176{width:300px;}ul.jsx-523739176{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-523739176{display:block;margin-right:20px;}a.jsx-523739176{font-family:stolzl,sans-serif;font-weight:300;font-size:14px;color:#0a2544;-webkit-text-decoration:none;text-decoration:none;text-transform:lowercase;}.blog-search-box__hits.jsx-523739176{position:absolute;top:50px;right:5px;}@media screen and (max-width:650px){.blog-search-box__hits.jsx-523739176{top:90px;left:5px;}.top-bar.jsx-523739176{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding-bottom:10px;}ul.jsx-523739176{padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvVG9wQmFyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ec0IsQUFJb0MsQUFXTCxBQUlKLEFBSUMsQUFLQyxBQUtpQixBQVNiLEFBUVAsQUFLYSxBQVFaLFNBWkQsQ0FhWCxFQTVDRixFQVNvQixFQWJwQixFQTJCVyxBQVNULEdBL0NhLE1BdUNILEdBVk0sRUFKbEIsS0FlQSxTQVZpQixlQUNELGFBWkssQ0FhRSxHQW1CSSxpQkFsRE4sOEJBZ0NNLHlCQUMzQixpQkFkQSxVQWdDdUIsV0FsRFMsa0ZBbURqQixXQUNTLG9CQUN0QixFQXBEZ0Isd0NBQ1YsTUFDSSxVQUNjLHdEQUMxQiIsImZpbGUiOiIvVXNlcnMvbW1vcmFpcy9Eb2N1bWVudHMvd2Vic2l0ZS9jb21wb25lbnRzL1RvcEJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcbmltcG9ydCB7IENvbmZpZ3VyZSwgSW5zdGFudFNlYXJjaCwgSGl0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcbmltcG9ydCAqIGFzIExhbmd1YWdlIGZyb20gJy4uLy4uL2RlZmF1bHRzL0xhbmd1YWdlJztcbmltcG9ydCBCbG9nU2VhcmNoQm94IGZyb20gJy4uL0Jsb2dTZWFyY2hCb3gnO1xuaW1wb3J0IEJsb2dTZWFyY2hIaXQgZnJvbSAnLi4vQmxvZ1NlYXJjaEhpdCc7XG5pbXBvcnQgQmxvZ1NlYXJjaFJlc3VsdHMgZnJvbSAnLi4vQmxvZ1NlYXJjaFJlc3VsdHMnO1xuaW1wb3J0IHsgQUxHT0xJQV9BUFBMSUNBVElPTl9JRCwgQUxHT0xJQV9BUElfS0VZIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvQWxnb2xpYUtleXMnO1xuXG5jb25zdCBzZWFyY2hDbGllbnQgPSBhbGdvbGlhc2VhcmNoKEFMR09MSUFfQVBQTElDQVRJT05fSUQsIEFMR09MSUFfQVBJX0tFWSk7XG5cbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcblxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYXJjaElzTG9hZGluZywgc2V0U2VhcmNoSXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPExhbmd1YWdlLkNvbnN1bWVyPlxuICAgICAgeyh7IGxvY2FsZSwgdHJhbnNsYXRpb24gfSkgPT4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyXCI+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17YC8ke2xvY2FsZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3RyYW5zbGF0aW9uLnRvcEJhci5ob21lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2AvJHtsb2NhbGV9L2Jsb2dgfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3RyYW5zbGF0aW9uLnRvcEJhci5ibG9nfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8SW5zdGFudFNlYXJjaFxuICAgICAgICAgICAgICBzZWFyY2hDbGllbnQ9e3NlYXJjaENsaWVudH1cbiAgICAgICAgICAgICAgaW5kZXhOYW1lPVwicG9zdHNcIlxuICAgICAgICAgICAgICBvblNlYXJjaFN0YXRlQ2hhbmdlPXsoeyBxdWVyeSB9KSA9PiBzZXRRdWVyeShxdWVyeSl9PlxuICAgICAgICAgICAgICA8Q29uZmlndXJlXG4gICAgICAgICAgICAgICAgaGl0c1BlclBhZ2U9ezR9XG4gICAgICAgICAgICAgICAgZGlzdGluY3RcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJsb2dTZWFyY2hCb3ggc2V0SXNMb2FkaW5nPXtzZXRTZWFyY2hJc0xvYWRpbmd9Lz5cbiAgICAgICAgICAgICAgPEJsb2dTZWFyY2hSZXN1bHRzIHF1ZXJ5PXtxdWVyeX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXNlYXJjaC1ib3hfX2hpdHNcIj5cbiAgICAgICAgICAgICAgICAgIDxIaXRzIGhpdENvbXBvbmVudD17QmxvZ1NlYXJjaEhpdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CbG9nU2VhcmNoUmVzdWx0cz5cbiAgICAgICAgICAgIDwvSW5zdGFudFNlYXJjaD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIC50b3AtYmFyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjdhO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wLWJhcjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMGEyNTQ0O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9nLXNlYXJjaC1ib3hfX2hpdHMge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcblxuICAgICAgICAgICAgICAuYmxvZy1zZWFyY2gtYm94X19oaXRzIHtcbiAgICAgICAgICAgICAgICB0b3A6IDkwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRvcC1iYXIge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9MYW5ndWFnZS5Db25zdW1lcj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xuIl19 */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/TopBar/index.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./components/layout/main/index.js":
/*!*****************************************!*\
  !*** ./components/layout/main/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../TopBar */ "./components/TopBar/index.js");



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/posts/Author/index.js":
/*!******************************************!*\
  !*** ./components/posts/Author/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../defaults/Language */ "./defaults/Language.js");







var Author = function Author(_ref) {
  var author = _ref.author,
      smallScreenStyles = _ref.smallScreenStyles,
      styles = _ref.styles,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["author", "smallScreenStyles", "styles"]);

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_4___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_5__["Consumer"], null, function (_ref2) {
    var locale = _ref2.locale,
        translation = _ref2.translation;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "data-aos": "fade-up"
    }, props, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + (props.className != null && props.className || "author")
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]])
    }, translation.post.aboutTheAuthor), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]])
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__avatar"
    }, author.fields.image.fields.file && author.fields.image.fields.file.url && author.fields.image.fields.file.url.length && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      alt: author.fields.image.fields.title,
      src: "".concat(author.fields.image.fields.file.url, "?w=100&h=100&fit=thumb"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__image"
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__contacts"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "https://www.linkedin.com/in/".concat(author.fields.linkedin, "?locale=").concat(locale),
      target: "_blank",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__contact"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "fab fa-linkedin"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "https://github.com/".concat(author.fields.github),
      target: "_blank",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__contact"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "fab fa-github"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "mailto:".concat(author.fields.email),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__contact"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "fas fa-envelope"
    })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__info"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__info__name"
    }, author.fields.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__info__title"
    }, author.fields.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__info__company"
    }, author.fields.company), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["3259821134", [styles, smallScreenStyles]]]) + " " + "author__info__short-bio"
    }, author.fields.shortBio)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3259821134",
      dynamic: [styles, smallScreenStyles]
    }, ".author.__jsx-style-dynamic-selector{width:420px;background:#fff;box-shadow:5px 5px 20px rgba(0,0,0,.2);border-radius:10px;padding:60px;".concat(styles, ";}.author.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0 0 30px 0;font-size:26px;line-height:26px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;font-family:stolzl,sans-serif;}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.author__image.__jsx-style-dynamic-selector{width:100px;height:100px;border-radius:50%;}.author__contacts.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:10px;font-size:20px;padding:0 10px;}.author__contact.__jsx-style-dynamic-selector{color:#adadad;-webkit-transition:.25s color ease;transition:.25s color ease;}.author__contact.__jsx-style-dynamic-selector:hover{color:#555555;}.author__info.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:rgba(0,0,0,.84);}.author__info__name.__jsx-style-dynamic-selector,.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-family:stolzl,sans-serif;}.author__info__name.__jsx-style-dynamic-selector{font-size:20px;}.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-size:14px;}.author__info__short-bio.__jsx-style-dynamic-selector{margin-top:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;}@media screen and (max-width:900px){.author.__jsx-style-dynamic-selector{padding:20px;width:calc(100% - 70px);").concat(smallScreenStyles, ";}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.author__image.__jsx-style-dynamic-selector{margin-bottom:10px;}.author__info.__jsx-style-dynamic-selector{padding:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQXV0aG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEc0IsQUFJMkIsQUFTTSxBQVVMLEFBSUQsQUFNQyxBQVFDLEFBS0EsQUFJUCxBQVV1QixBQUlmLEFBS0EsQUFJQyxBQVVELEFBTVMsQUFLSCxBQUlULFVBQ1MsRUE5RkwsQUF1QkgsQ0F3RGEsQ0ExQ0MsQUFLN0IsQ0FrQkEsQUFLQSxDQUlvQyxFQTVEbkIsQ0FpRmYsTUFsRWtCLEdBdkJxQixFQXVEekMsR0E5Q21CLEFBb0NFLElBbUNwQixNQXhERCxPQWQ4RCxBQTJEekIsRUF2QnRCLGNBa0NiLENBL0VtQixPQWlCckIsQUFVK0IsRUFTL0IsRUErQ3VCLE9BZEMsQ0FwRVQsYUFFaEIsSUEwRkcsSUF2Qm9GLEdBNURsRSxnQkFvQ0ksRUEzQ3hCLEFBUStCLDZCQUNDLGNBd0U5QixnQkF2RUYsSUEwREEsTUEzQ2tCLE9BbUJNLFNBbEJQLGFBbUJqQixFQWxCaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9BdXRob3IvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAqIGFzIExhbmd1YWdlIGZyb20gJy4uLy4uLy4uL2RlZmF1bHRzL0xhbmd1YWdlJztcblxuY29uc3QgQXV0aG9yID0gKHsgYXV0aG9yLCBzbWFsbFNjcmVlblN0eWxlcywgc3R5bGVzLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2UuQ29uc3VtZXI+XG4gICAgICB7KHsgbG9jYWxlLCB0cmFuc2xhdGlvbiB9KSA9PiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8aDI+e3RyYW5zbGF0aW9uLnBvc3QuYWJvdXRUaGVBdXRob3J9PC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX19hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdXRob3IuZmllbGRzLmltYWdlLmZpZWxkcy5maWxlICYmXG4gICAgICAgICAgICAgICAgICBhdXRob3IuZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybCAmJlxuICAgICAgICAgICAgICAgICAgYXV0aG9yLmZpZWxkcy5pbWFnZS5maWVsZHMuZmlsZS51cmwubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGhvcl9faW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci5maWVsZHMuaW1hZ2UuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2F1dGhvci5maWVsZHMuaW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTEwMCZoPTEwMCZmaXQ9dGh1bWJgfSAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9fY29udGFjdHNcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vJHthdXRob3IuZmllbGRzLmxpbmtlZGlufT9sb2NhbGU9JHtsb2NhbGV9YH1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0aG9yX19jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHthdXRob3IuZmllbGRzLmdpdGh1Yn1gfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRob3JfX2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHthdXRob3IuZmllbGRzLmVtYWlsfWB9IGNsYXNzTmFtZT1cImF1dGhvcl9fY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvcl9faW5mb19fbmFtZVwiPnthdXRob3IuZmllbGRzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvcl9faW5mb19fdGl0bGVcIj57YXV0aG9yLmZpZWxkcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19jb21wYW55XCI+e2F1dGhvci5maWVsZHMuY29tcGFueX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19zaG9ydC1iaW9cIj57YXV0aG9yLmZpZWxkcy5zaG9ydEJpb308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQyMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgICAgICAgICR7c3R5bGVzfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXV0aG9yIGgyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM0Q0I4QzQsIzNDRDNBRCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmF1dGhvciA+IGRpdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hdXRob3JfX2ltYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hdXRob3JfX2NvbnRhY3RzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXV0aG9yX19jb250YWN0IHtcbiAgICAgICAgICAgICAgY29sb3I6ICNhZGFkYWQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC4yNXMgY29sb3IgZWFzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmF1dGhvcl9fY29udGFjdDpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXV0aG9yX19pbmZvIHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMjVweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmF1dGhvcl9faW5mb19fbmFtZSxcbiAgICAgICAgICAgIC5hdXRob3JfX2luZm9fX3RpdGxlLFxuICAgICAgICAgICAgLmF1dGhvcl9faW5mb19fY29tcGFueSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmF1dGhvcl9faW5mb19fbmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmF1dGhvcl9faW5mb19fdGl0bGUsXG4gICAgICAgICAgICAuYXV0aG9yX19pbmZvX19jb21wYW55IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXV0aG9yX19pbmZvX19zaG9ydC1iaW8ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1lZGl1bS1jb250ZW50LXNlcmlmLWZvbnQsR2VvcmdpYSxDYW1icmlhLFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgICAgICAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgICAgICAgICAgICAgJHtzbWFsbFNjcmVlblN0eWxlc31cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hdXRob3IgPiBkaXYge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hdXRob3JfX2ltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmF1dGhvcl9faW5mbyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9MYW5ndWFnZS5Db25zdW1lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/Author/index.js */")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ }),

/***/ "./defaults/AlgoliaKeys.js":
/*!*********************************!*\
  !*** ./defaults/AlgoliaKeys.js ***!
  \*********************************/
/*! exports provided: ALGOLIA_APPLICATION_ID, ALGOLIA_API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALGOLIA_APPLICATION_ID", function() { return ALGOLIA_APPLICATION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALGOLIA_API_KEY", function() { return ALGOLIA_API_KEY; });
var ALGOLIA_APPLICATION_ID = '28AME38GWP';
var ALGOLIA_API_KEY = '61e0dda6b5826930ea92f7399e2ef304';

/***/ }),

/***/ "./defaults/ContentfulKeys.js":
/*!************************************!*\
  !*** ./defaults/ContentfulKeys.js ***!
  \************************************/
/*! exports provided: CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENTFUL_SPACE_ID", function() { return CONTENTFUL_SPACE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENTFUL_ACCESS_TOKEN", function() { return CONTENTFUL_ACCESS_TOKEN; });
var CONTENTFUL_SPACE_ID = '3sk1ko7cy2wv';
var CONTENTFUL_ACCESS_TOKEN = 'WFs08eirFwvAcY6p7wrwLYO402fEAnZPIU8wKUQq30o';

/***/ }),

/***/ "./defaults/Language.js":
/*!******************************!*\
  !*** ./defaults/Language.js ***!
  \******************************/
/*! exports provided: Consumer, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Languages */ "./defaults/Languages.js");









var _translations;



var LanguageContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.createContext();
var translations = (_translations = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_translations, _Languages__WEBPACK_IMPORTED_MODULE_9__["PORTUGUESE"], {
  index: {
    description: "Olá, eu sou o Murillo, um desenvolvedor com bastante experiência em desenvolvimento web. Nessa página eu compartilho alguns conhecimentos e notícias sobre tecnologia.",
    developerImageAlt: 'Imagem do Desenvolvedor - Camada',
    latest: 'Últimos',
    posts: 'Posts',
    showMoreText: 'Lá você pode aprender mais sobre o mundo da tecnologia e suas novidades',
    showMoreTitle: 'Interessado!? Então por que não entra no meu blog?',
    title: 'Página Pessoal',
    typedStrings: ['Arquitetura', 'Desenvolvimento', 'Soluções Digitais', 'Inovação', 'Tecnologia'],
    viewBlog: 'Ver blog'
  },
  post: {
    aboutTheAuthor: 'Sobre o autor',
    atTime: 'às',
    source: 'Fonte',
    showMoreText: 'Lá você pode aprender mais soble o mundo da tecnologia e suas notícias',
    showMoreTitle: 'Gostou!? Então por que não vê mais notícias e artigos como esse no meu blog?',
    viewBlog: 'Ver blog'
  },
  topBar: {
    blog: 'Blog',
    home: 'Página Inicial',
    searchInBlog: 'buscar no blog...',
    searchPoweredBy: 'Busca fornecida por'
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_translations, _Languages__WEBPACK_IMPORTED_MODULE_9__["ENGLISH"], {
  index: {
    description: "Hi, I'm Murillo, a fullstack programmer with a lot of experiences in web development. In this personal page I share some knowledges and technology news.",
    developerImageAlt: 'Developer Image - Layer',
    latest: 'Latest',
    posts: 'Posts',
    showMoreText: 'There you can learn more about the world of technology and its news',
    showMoreTitle: 'Interested!? So why do not you join my blog?',
    title: 'Personal Page',
    typedStrings: ['Architecture', 'Development', 'Digital Solutions', 'Innovation', 'Technology'],
    viewBlog: 'View blog'
  },
  post: {
    aboutTheAuthor: 'About the author',
    atTime: 'at',
    source: 'Source',
    showMoreText: 'There you can learn more about the world of technology and its news',
    showMoreTitle: "Did you liked!? So why don't you see more news and articles like this on my blog?",
    viewBlog: 'View blog'
  },
  topBar: {
    blog: 'Blog',
    home: 'Home',
    searchInBlog: 'search in blog...',
    searchPoweredBy: 'Search powered by'
  }
}), _translations);

var LanguageProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LanguageProvider, _Component);

  function LanguageProvider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LanguageProvider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LanguageProvider).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setLocale", function (locale) {
      _this.setState({
        locale: locale,
        translation: translations[locale]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "switchLocale", function () {
      _this.setState(function (state) {
        var locale = state.locale === _Languages__WEBPACK_IMPORTED_MODULE_9__["ENGLISH"] ? _Languages__WEBPACK_IMPORTED_MODULE_9__["PORTUGUESE"] : _Languages__WEBPACK_IMPORTED_MODULE_9__["ENGLISH"];
        return {
          locale: locale,
          translation: translations[locale]
        };
      });
    });

    _this.state = {
      locale: props.locale,
      translation: translations[props.locale]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LanguageProvider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LanguageContext.Provider, {
        value: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          setLocale: this.setLocale,
          switchLocale: this.switchLocale
        })
      }, this.props.children);
    }
  }]);

  return LanguageProvider;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Consumer = LanguageContext.Consumer;
var Provider = LanguageProvider;

/***/ }),

/***/ "./defaults/Languages.js":
/*!*******************************!*\
  !*** ./defaults/Languages.js ***!
  \*******************************/
/*! exports provided: ENGLISH, PORTUGUESE, DEFAULT_LANGUAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENGLISH", function() { return ENGLISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTUGUESE", function() { return PORTUGUESE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANGUAGE", function() { return DEFAULT_LANGUAGE; });
var ENGLISH = 'en-US';
var PORTUGUESE = 'pt-BR';
var DEFAULT_LANGUAGE = PORTUGUESE;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var head_1 = __importDefault(__webpack_require__(/*! next-server/head */ "next-server/head"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  500: 'Internal Server Error',
  501: 'Not Implemented'
};

var Error =
/*#__PURE__*/
function (_react_1$default$Comp) {
  (0, _inherits2.default)(Error, _react_1$default$Comp);

  function Error() {
    (0, _classCallCheck2.default)(this, Error);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Error).apply(this, arguments));
  }

  (0, _createClass2.default)(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = statusCodes[statusCode] || 'An unexpected error has occurred';
      return react_1.default.createElement("div", {
        style: styles.error
      }, react_1.default.createElement(head_1.default, null, react_1.default.createElement("title", null, statusCode, ": ", title)), react_1.default.createElement("div", null, react_1.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? react_1.default.createElement("h1", {
        style: styles.h1
      }, statusCode) : null, react_1.default.createElement("div", {
        style: styles.desc
      }, react_1.default.createElement("h2", {
        style: styles.h2
      }, title, "."))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
      return {
        statusCode: statusCode
      };
    }
  }]);
  return Error;
}(react_1.default.Component);

Error.displayName = 'ErrorPage';
exports.default = Error;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contentful */ "contentful");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos */ "aos");
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

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/post.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mmorais/Documents/website/pages/post.js */"./pages/post.js");


/***/ }),

/***/ "algoliasearch/lite":
/*!*************************************!*\
  !*** external "algoliasearch/lite" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("algoliasearch/lite");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-instantsearch-dom":
/*!******************************************!*\
  !*** external "react-instantsearch-dom" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-instantsearch-dom");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=post.js.map