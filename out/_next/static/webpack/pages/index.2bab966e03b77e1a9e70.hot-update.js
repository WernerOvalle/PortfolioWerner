self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? '65px' : '56px';
}, function (props) {
  return props.main ? '72px' : '56px';
}, function (props) {
  return props.main ? '58px 0 16px' : '0';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? '56px' : '48px';
}, function (props) {
  return props.main ? '56px' : '48px';
}, function (props) {
  return props.main ? '40px 0 12px' : '0';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? '28px' : '32px';
}, function (props) {
  return props.main ? '32px' : '40px';
}, function (props) {
  return props.main ? '16px 0 8px' : '0';
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:1670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)';
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? '150px' : '262px';
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? '52px' : '64px';
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? '20px' : '24px';
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? '0' : '0 0 80px';
}, function (_ref5) {
  var alt = _ref5.alt;
  return alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)';
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? '.5' : '1';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? '150px' : '184px';
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? '52px' : '48px';
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? '20px' : '16px';
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? '0' : '64px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? '0' : '32px';
});
var ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)';
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? '.5' : '1';
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? '20px' : '24px';
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? '20px' : '16px';
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref17) {
  var large = _ref17.large;
  return large ? '24px' : '16px';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref18) {
  var large = _ref18.large;
  return large ? '16px' : '8px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref19) {
  var large = _ref19.large;
  return large ? '0' : '8px';
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref20) {
  var large = _ref20.large;
  return large ? '32px' : '24px';
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref21) {
  var nav = _ref21.nav;
  return nav ? '16px' : '24px';
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref22) {
  var large = _ref22.large;
  return large ? '32px' : '16px';
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDZTQUNQLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWpDO0FBQUEsQ0FETyxFQUVBLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBQS9CO0FBQUEsQ0FGQSxFQUdQLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBbkM7QUFBQSxDQUhPLEVBYVQsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBYlMsRUFrQlQsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBbEJTLEVBbUJMLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBbkM7QUFBQSxDQW5CSyxDQUFiO0FBMEJBLElBQU1LLFlBQVksR0FBR1Qsb0VBQUg7QUFBQTtBQUFBO0FBQUEsc2RBRVYsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1MsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFBakM7QUFBQSxDQUZVLEVBR1IsVUFBQ1QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1MsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFBakM7QUFBQSxDQUhRLEVBVVosVUFBQ1QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1MsSUFBTixHQUFhLGFBQWIsR0FBNkIsR0FBeEM7QUFBQSxDQVZZLEVBWWQsVUFBQVQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUE1QjtBQUFBLENBWlMsRUFhUixVQUFDTixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDUyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFqQztBQUFBLENBYlEsRUFjTixVQUFDVCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDUyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFqQztBQUFBLENBZE0sRUFnQlYsVUFBQ1QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1MsSUFBTixHQUFhLGFBQWIsR0FBNkIsR0FBeEM7QUFBQSxDQWhCVSxFQW1CZCxVQUFBVCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQTVCO0FBQUEsQ0FuQlMsRUFzQlIsVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1MsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFBakM7QUFBQSxDQXRCUSxFQXVCTixVQUFDVCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDUyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFqQztBQUFBLENBdkJNLEVBeUJWLFVBQUNULEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNTLElBQU4sR0FBYSxZQUFiLEdBQTRCLEdBQXZDO0FBQUEsQ0F6QlUsQ0FBbEI7QUE4QkEsSUFBTUMsV0FBVyxHQUFHWCxtRUFBSDtBQUFBO0FBQUE7QUFBQSw4UUFRYixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FSYSxFQWViLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQWZhLENBQWpCO0FBc0JBLElBQU1JLGNBQWMsR0FBR1oscUVBQUg7QUFBQTtBQUFBO0FBQUEsMEtBTVgsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ1ksUUFBTixHQUN2QixtREFEdUIsR0FFdkIsbURBRlk7QUFBQSxDQU5XLEVBVWIsVUFBQ1osS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2EsT0FBTixHQUFnQixRQUFoQixHQUEyQixFQUF0QztBQUFBLENBVmEsRUFZaEIsVUFBQ2IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWmdCLEVBaUJoQixVQUFDTixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FqQmdCLENBQXBCO0FBc0JBLElBQU1PLGNBQWMsR0FBR2YsbUVBQUg7QUFBQTtBQUFBO0FBQUEsZ05BT2xCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBrQixFQWFoQixVQUFDTixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FiZ0IsQ0FBcEI7QUFrQkEsSUFBTVEsWUFBWSxHQUFHaEIsd0VBQUg7QUFBQTtBQUFBO0FBQUEsZ3RCQStCZCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0EvQmMsRUF3Q2QsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBeENjLENBQWxCO0FBa0RBLElBQU1TLFVBQVUsR0FBR2pCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtZQUNaO0FBQUEsTUFBR2tCLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQUcsR0FBRyxPQUFILEdBQWEsT0FBN0I7QUFBQSxDQURZLEVBRVg7QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTVCO0FBQUEsQ0FGVyxFQUlSO0FBQUEsTUFBR0EsR0FBSCxTQUFHQSxHQUFIO0FBQUEsU0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUE1QjtBQUFBLENBSlEsRUFTWDtBQUFBLE1BQUdBLEdBQUgsU0FBR0EsR0FBSDtBQUFBLE1BQVFDLElBQVIsU0FBUUEsSUFBUjtBQUFBLFNBQW9CRCxHQUFHLElBQUlDLElBQVIsR0FBZ0IsR0FBaEIsR0FBc0IsVUFBekM7QUFBQSxDQVRXLEVBV1A7QUFBQSxNQUFHRCxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFhQSxHQUFHLEdBQUcsbURBQUgsR0FBeUQsbURBQXpFO0FBQUEsQ0FYTyxFQWdCVjtBQUFBLE1BQUdFLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCQSxRQUFRLEdBQUcsSUFBSCxHQUFVLEdBQXBDO0FBQUEsQ0FoQlUsRUFrQlosVUFBQ25CLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQWxCWSxFQW1CVjtBQUFBLE1BQUdXLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQUcsR0FBRyxPQUFILEdBQWEsT0FBN0I7QUFBQSxDQW5CVSxFQW9CVDtBQUFBLE1BQUdBLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFBNUI7QUFBQSxDQXBCUyxFQXFCTjtBQUFBLE1BQUdBLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFBNUI7QUFBQSxDQXJCTSxFQXNCRjtBQUFBLE1BQUdBLEdBQUgsVUFBR0EsR0FBSDtBQUFBLFNBQWFBLEdBQUcsR0FBRyxHQUFILEdBQVMsTUFBekI7QUFBQSxDQXRCRSxFQXlCWixVQUFDakIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBekJZLEVBNkJGO0FBQUEsTUFBR1UsR0FBSCxVQUFHQSxHQUFIO0FBQUEsU0FBYUEsR0FBRyxHQUFHLEdBQUgsR0FBUyxNQUF6QjtBQUFBLENBN0JFLENBQWhCO0FBaUNBLElBQU1HLFdBQVcsR0FBR3JCLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1vQkFVUjtBQUFBLE1BQUdrQixHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFhQSxHQUFHLEdBQUcsbURBQUgsR0FBeUQsbURBQXpFO0FBQUEsQ0FWUSxFQVdYO0FBQUEsTUFBR0UsUUFBSCxVQUFHQSxRQUFIO0FBQUEsU0FBa0JBLFFBQVEsR0FBRyxJQUFILEdBQVUsR0FBcEM7QUFBQSxDQVhXLEVBYVQ7QUFBQSxNQUFHRixHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTVCO0FBQUEsQ0FiUyxFQWtCUjtBQUFBLE1BQUdFLFFBQUgsVUFBR0EsUUFBSDtBQUFBLFNBQWtCQSxRQUFRLEdBQUcsbUZBQUgsR0FBeUYsTUFBbkg7QUFBQSxDQWxCUSxFQXFDYixVQUFDbkIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBckNhLEVBc0NQO0FBQUEsTUFBR1csR0FBSCxVQUFHQSxHQUFIO0FBQUEsU0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUE1QjtBQUFBLENBdENPLEVBeUNiLFVBQUNqQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0F6Q2EsQ0FBakI7QUE4Q0EsSUFBTWMsYUFBYSxHQUFHdEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsdU9BQ1Q7QUFBQSxNQUFHdUIsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQUFoQztBQUFBLENBRFMsRUFhZixVQUFDdEIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBYmUsRUFjUDtBQUFBLE1BQUdnQixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLEtBQWhDO0FBQUEsQ0FkTyxFQWlCZixVQUFDdEIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBakJlLEVBa0JQO0FBQUEsTUFBR2UsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxHQUFHLEdBQUgsR0FBUyxLQUE3QjtBQUFBLENBbEJPLENBQW5CO0FBc0JBLElBQU1DLFdBQVcsR0FBR3hCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUVaO0FBQUEsTUFBR3VCLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBaEM7QUFBQSxDQUZZLEVBSWIsVUFBQ3RCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUphLEVBS1Y7QUFBQSxNQUFHa0IsR0FBSCxVQUFHQSxHQUFIO0FBQUEsU0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUE1QjtBQUFBLENBTFUsRUFRYixVQUFDeEIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBUmEsRUFTVjtBQUFBLE1BQUdlLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBaEM7QUFBQSxDQVRVLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiYWI5NjZlMDNiNzdlMWE5ZTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gcHJvcHMuZ3JpZCA/IFwiZ3JpZFwiIDogXCJmbGV4XCIgfTtcbiAgZmxleC1kaXJlY3Rpb246ICR7KHByb3BzKSA9PiBwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIiB9O1xuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCIgfSA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXG5cbiAgXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHggMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4IDBcIiB9IDtcblxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzY1cHgnIDogJzU2cHgnfTtcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzcycHgnIDogJzU2cHgnfTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTguNzclLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDYwLjE1JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU4cHggMCAxNnB4JyA6ICcwJ307XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc0MHB4IDAgMTJweCcgOiAnMCd9O1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzI4cHgnIDogJzMycHgnfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMzJweCcgOiAnNDBweCd9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcxNnB4IDAgOHB4JyA6ICcwJ307XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDE2NzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXG5cbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3JBbHQgPyBcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOlxuICAgICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XG5cbiAgICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5kaXZpZGVyID8gXCI0cmVtIDBcIiA6IFwiXCIgfTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogNjcycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMwZjE2MjQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlMGU0ZWI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW4tdG9wOiAyNHB4OyBcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcyNjJweCd9O1xuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc2NHB4J307XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtKSA/ICcwJyA6ICcwIDAgODBweCd9O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjYyMmUgMCUsICNCMTMzRkYgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSknfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcxODRweCd9O1xuICAgIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUycHgnIDogJzQ4cHgnfTtcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzY0cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICczMnB4J307XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICdpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyknIDogJ25vbmUnfTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgJjpkaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzI0cHgnIDogJzE2cHgnfTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcxNnB4JyA6ICc4cHgnfTtcblxuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcwJyA6ICc4cHgnfTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua0ljb25JbWcgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4OyAgXG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcyNHB4J307XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gbmF2ID8gJzE2cHgnIDogJzI0cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMTZweCd9O1xuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9