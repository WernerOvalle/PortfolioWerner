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
          className: "TappingMachine",
          children: ["Werner Ovalle ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, _this), "Full Stack Developer"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: "Hello there, welcome to my portfolio, if you want to see my resume, you can click on the following button"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: function onClick() {
            return window.location = "https://drive.google.com/file/d/1HOPuUsdMT8opDl6zbX_MwAnotSYjW13G/view?usp=sharing";
          },
          children: "Download"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJwcm9wcyIsIndpbmRvdyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxzQkFDWDtBQUFBLDJCQUNFLDhEQUFDLDZEQUFEO0FBQVMsU0FBRyxNQUFaO0FBQWEsZUFBUyxNQUF0QjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0VBQUQ7QUFBYyxjQUFJLE1BQWxCO0FBQW1CLGdCQUFNLE1BQXpCO0FBQTBCLG1CQUFTLEVBQUMsZ0JBQXBDO0FBQUEsb0RBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBU0UsOERBQUMsb0VBQUQ7QUFDRSxpQkFBTyxFQUFFO0FBQUEsbUJBQ05DLE1BQU0sQ0FBQ0MsUUFBUCxHQUNDLG9GQUZLO0FBQUEsV0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRFc7QUFBQSxDQUFiOztLQUFNSCxJO0FBeUJOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRiN2FkNmY1NGYzNTZkMWQ2NGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVyby5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IExlZnRTZWN0aW9uIH0gZnJvbSBcIi4vSGVyb1N0eWxlc1wiO1xuXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiAoXG4gIDw+XG4gICAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cbiAgICAgIDxMZWZ0U2VjdGlvbj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlciBjbGFzc05hbWU9XCJUYXBwaW5nTWFjaGluZVwiPlxuICAgICAgICAgIFdlcm5lciBPdmFsbGUgPGJyIC8+XG4gICAgICAgICBGdWxsIFN0YWNrIERldmVsb3BlclxuICAgICAgICA8L1NlY3Rpb25UaXRsZT5cbiAgICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICAgIEhlbGxvIHRoZXJlLCB3ZWxjb21lIHRvIG15IHBvcnRmb2xpbywgaWYgeW91IHdhbnQgdG8gc2VlIG15IHJlc3VtZSxcbiAgICAgICAgICB5b3UgY2FuIGNsaWNrIG9uIHRoZSBmb2xsb3dpbmcgYnV0dG9uXG4gICAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbiA9XG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xSE9QdVVzZE1UOG9wRGw2emJYX013QW5vdFNZalcxM0cvdmlldz91c3A9c2hhcmluZ1wiKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIERvd25sb2FkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9MZWZ0U2VjdGlvbj5cbiAgICA8L1NlY3Rpb24+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJzb3VyY2VSb290IjoiIn0=