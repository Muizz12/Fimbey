"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\fimbey\\Fembey\\src\\components\\Header.js",
    _s = $RefreshSig$();




function Header() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    name: 'PKR'
  }, {
    name: 'IND'
  }, {
    name: 'USD'
  }, {
    name: 'EUR'
  }]),
      currency = _useState[0],
      setcurrency = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    name: 'Pakistan'
  }, {
    name: 'India'
  }, {
    name: 'USA'
  }, {
    name: 'England'
  }]),
      counrty = _useState2[0],
      setcountry = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    name: 'Urdu'
  }, {
    name: 'Hindi'
  }, {
    name: 'English'
  }, {
    name: 'French'
  }]),
      language = _useState3[0],
      setlanguage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      currencyvalue = _useState4[0],
      setcurrencyvalue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      countryvalue = _useState5[0],
      setcountryvalue = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      languagevalue = _useState6[0],
      setlanguagevalue = _useState6[1];

  console.log(countryvalue);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "font-lora bg-gray-50",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "flex flex-grow mt-2 ml-5 pl-5 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-grow justify-start space-x-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "hover:border-b-2 hover:shadow-lg cursor-pointer ",
          children: "Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "hover:border-b-2 hover:shadow-lg cursor-pointer",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "hover:border-b-2 hover:shadow-lg cursor-pointer",
          children: "Seller "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: " ml-4 flex flex-grow justify-end mr-4 space-x-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "",
          children: ["Currency", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
              value: countryvalue,
              onChange: function onChange(e) {
                return setcountryvalue(e.target.value);
              },
              className: "ml-2 text-xs text-gray-400  outline-none hover:border-b-2 hover:shadow-lg cursor-pointer border border-gray-200 rounded-md",
              children: currency.map(function (curreny) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                  onClick: function onClick(e) {
                    return setcountryvalue(e.target.value);
                  },
                  children: curreny.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "",
          children: ["Country", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
            className: "ml-2 text-xs text-gray-400  outline-none hover:border-b-2 hover:shadow-lg cursor-pointer border border-gray-200 rounded-md",
            children: counrty.map(function (counrty) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: counrty.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "",
          children: ["language", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
            className: "ml-2 text-xs text-gray-400  outline-none hover:border-b-2 hover:shadow-lg cursor-pointer border border-gray-200 rounded-md",
            children: language.map(function (language) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: language.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

_s(Header, "cIrEQiS3loPtvT+WDewYvkGjesY=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTg3YTYxMjRiN2Y1YTA3ZGM1ZTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNkLGtCQUFnQ0QsK0NBQVEsQ0FBQyxDQUFDO0FBQ3RDRSxJQUFBQSxJQUFJLEVBQUU7QUFEZ0MsR0FBRCxFQUd6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQUh5QyxFQU16QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQU55QyxFQVN6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQVR5QyxDQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFjQSxtQkFBOEJKLCtDQUFRLENBQUMsQ0FBQztBQUNwQ0UsSUFBQUEsSUFBSSxFQUFFO0FBRDhCLEdBQUQsRUFHdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FIdUMsRUFNdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FOdUMsRUFTdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FUdUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBY0EsbUJBQWdDTiwrQ0FBUSxDQUFDLENBQUM7QUFDdENFLElBQUFBLElBQUksRUFBRTtBQURnQyxHQUFELEVBR3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBSHlDLEVBTXpDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBTnlDLEVBU3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBVHlDLENBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQWNBLG1CQUEwQ1IsK0NBQVEsRUFBbEQ7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBd0NWLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9XLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQTBDWiwrQ0FBUSxFQUFsRDtBQUFBLE1BQU9hLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsWUFBWjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsMkJBRUk7QUFBSyxlQUFTLEVBQUMsZ0NBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsd0NBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsa0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFHLG1CQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSTtBQUFLLGlCQUFTLEVBQUMsaURBQWY7QUFBQSxnQ0FFSTtBQUFHLG1CQUFTLEVBQUMsRUFBYjtBQUFBLDhDQUNJO0FBQUEsbUNBQ0k7QUFBUSxtQkFBSyxFQUFFQSxZQUFmO0FBQTZCLHNCQUFRLEVBQUUsa0JBQUNNLENBQUQ7QUFBQSx1QkFBT0wsZUFBZSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF0QjtBQUFBLGVBQXZDO0FBQStFLHVCQUFTLEVBQUMsNEhBQXpGO0FBQUEsd0JBQ0toQixRQUFRLENBQUNpQixHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLG9DQUNWO0FBQVEseUJBQU8sRUFBRSxpQkFBQ0osQ0FBRDtBQUFBLDJCQUFRTCxlQUFlLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXZCO0FBQUEsbUJBQWpCO0FBQUEsNEJBQTZERSxPQUFPLENBQUNuQjtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURVO0FBQUEsZUFBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQVdJO0FBQUcsbUJBQVMsRUFBQyxFQUFiO0FBQUEsNkNBQ0k7QUFBUSxxQkFBUyxFQUFDLDRIQUFsQjtBQUFBLHNCQUNLRyxPQUFPLENBQUNlLEdBQVIsQ0FBWSxVQUFDZixPQUFEO0FBQUEsa0NBQ1Q7QUFBQSwwQkFBVUEsT0FBTyxDQUFDSDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURTO0FBQUEsYUFBWjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKLGVBa0JJO0FBQUcsbUJBQVMsRUFBQyxFQUFiO0FBQUEsOENBQ0k7QUFBUSxxQkFBUyxFQUFDLDRIQUFsQjtBQUFBLHNCQUNLSyxRQUFRLENBQUNhLEdBQVQsQ0FBYSxVQUFDYixRQUFEO0FBQUEsa0NBQ1Y7QUFBQSwwQkFBVUEsUUFBUSxDQUFDTDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURVO0FBQUEsYUFBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Q0g7O0dBMUZRRDs7S0FBQUE7QUE0RlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Y3VycmVuY3ldID0gdXNlU3RhdGUoW3tcclxuICAgICAgICBuYW1lOiAnUEtSJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0lORCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdVU0QnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRVVSJyxcclxuICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGNvbnN0IFtjb3VucnR5LCBzZXRjb3VudHJ5XSA9IHVzZVN0YXRlKFt7XHJcbiAgICAgICAgbmFtZTogJ1Bha2lzdGFuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0luZGlhJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1VTQScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdFbmdsYW5kJyxcclxuICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGNvbnN0IFtsYW5ndWFnZSwgc2V0bGFuZ3VhZ2VdID0gdXNlU3RhdGUoW3tcclxuICAgICAgICBuYW1lOiAnVXJkdScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdIaW5kaScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdFbmdsaXNoJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0ZyZW5jaCcsXHJcbiAgICB9LFxyXG5cclxuICAgIF0pXHJcbiAgICBjb25zdCBbY3VycmVuY3l2YWx1ZSwgc2V0Y3VycmVuY3l2YWx1ZV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbY291bnRyeXZhbHVlLCBzZXRjb3VudHJ5dmFsdWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtsYW5ndWFnZXZhbHVlLCBzZXRsYW5ndWFnZXZhbHVlXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb3VudHJ5dmFsdWUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtbG9yYSBiZy1ncmF5LTUwJz5cclxuICAgICAgICAgICAgey8qIFRvcCBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtZ3JvdyBtdC0yIG1sLTUgcGwtNSAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1ncm93IGp1c3RpZnktc3RhcnQgc3BhY2UteC00Jz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBcIj5BY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhvdmVyOmJvcmRlci1iLTIgaG92ZXI6c2hhZG93LWxnIGN1cnNvci1wb2ludGVyXCI+Q29udGFjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlclwiPlNlbGxlciA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWwtNCBmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWVuZCBtci00IHNwYWNlLXgtNCc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Y291bnRyeXZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldGNvdW50cnl2YWx1ZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14cyB0ZXh0LWdyYXktNDAwICBvdXRsaW5lLW5vbmUgaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5Lm1hcCgoY3VycmVueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG9uQ2xpY2s9eyhlKSA9PiAoc2V0Y291bnRyeXZhbHVlKGUudGFyZ2V0LnZhbHVlKSl9ID57Y3VycmVueS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+Q291bnRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14cyB0ZXh0LWdyYXktNDAwICBvdXRsaW5lLW5vbmUgaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnJ0eS5tYXAoKGNvdW5ydHkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uID57Y291bnJ0eS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5sYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14cyB0ZXh0LWdyYXktNDAwICBvdXRsaW5lLW5vbmUgaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UubWFwKChsYW5ndWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gPntsYW5ndWFnZS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsIm5hbWUiLCJjdXJyZW5jeSIsInNldGN1cnJlbmN5IiwiY291bnJ0eSIsInNldGNvdW50cnkiLCJsYW5ndWFnZSIsInNldGxhbmd1YWdlIiwiY3VycmVuY3l2YWx1ZSIsInNldGN1cnJlbmN5dmFsdWUiLCJjb3VudHJ5dmFsdWUiLCJzZXRjb3VudHJ5dmFsdWUiLCJsYW5ndWFnZXZhbHVlIiwic2V0bGFuZ3VhZ2V2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJjdXJyZW55Il0sInNvdXJjZVJvb3QiOiIifQ==