self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Documentos\\Autodidacta\\Projectos\\Portfolio\\src\\components\\Hero\\Hero.js",
    _this = undefined;






var Hero = function Hero(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      row: true,
      nopadding: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          main: true,
          center: true,
          dataPeriod: "1000",
          "data-rotate": "[ \"Web Developer\", \"Full Stack Developer\", \"UI/UX Designer\" ]",
          children: ["Werner Ovalle ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: "Hello there, welcome to my portfolio, if you want to see my resume, you can click on the following button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: function onClick() {
            return window.location = "https://drive.google.com/file/d/1HOPuUsdMT8opDl6zbX_MwAnotSYjW13G/view?usp=sharing";
          },
          children: "Download"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJwcm9wcyIsIndpbmRvdyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBS0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsc0JBQ1g7QUFBQSwyQkFDRSw4REFBQyw2REFBRDtBQUFTLFNBQUcsTUFBWjtBQUFhLGVBQVMsTUFBdEI7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFBLGdDQUNFLDhEQUFDLGtFQUFEO0FBQWMsY0FBSSxNQUFsQjtBQUFtQixnQkFBTSxNQUF6QjtBQUEwQixvQkFBVSxFQUFDLE1BQXJDO0FBQTRDLHlCQUFZLHFFQUF4RDtBQUFBLG9EQUNnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQVVFLDhEQUFDLG9FQUFEO0FBQ0UsaUJBQU8sRUFBRTtBQUFBLG1CQUNOQyxNQUFNLENBQUNDLFFBQVAsR0FDQyxvRkFGSztBQUFBLFdBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURXO0FBQUEsQ0FBYjs7S0FBTUgsSTtBQTBCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NjlhMjFhYTIxOGQ5NWMxZDhhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uVGV4dCxcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgTGVmdFNlY3Rpb24gfSBmcm9tIFwiLi9IZXJvU3R5bGVzXCI7XG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IChcbiAgPD5cbiAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxuICAgICAgPExlZnRTZWN0aW9uPlxuICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyIGRhdGFQZXJpb2Q9XCIxMDAwXCIgZGF0YS1yb3RhdGU9J1sgXCJXZWIgRGV2ZWxvcGVyXCIsIFwiRnVsbCBTdGFjayBEZXZlbG9wZXJcIiwgXCJVSS9VWCBEZXNpZ25lclwiIF0nPlxuICAgICAgICAgIFdlcm5lciBPdmFsbGUgPGJyIC8+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvU2VjdGlvblRpdGxlPlxuICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgSGVsbG8gdGhlcmUsIHdlbGNvbWUgdG8gbXkgcG9ydGZvbGlvLCBpZiB5b3Ugd2FudCB0byBzZWUgbXkgcmVzdW1lLFxuICAgICAgICAgIHlvdSBjYW4gY2xpY2sgb24gdGhlIGZvbGxvd2luZyBidXR0b25cbiAgICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uID1cbiAgICAgICAgICAgICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFIT1B1VXNkTVQ4b3BEbDZ6YlhfTXdBbm90U1lqVzEzRy92aWV3P3VzcD1zaGFyaW5nXCIpXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0xlZnRTZWN0aW9uPlxuICAgIDwvU2VjdGlvbj5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==