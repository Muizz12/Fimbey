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

  console.log(languagevalue);
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
          children: ["Currency", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
            value: currencyvalue,
            onChange: function onChange(e) {
              return setcurrencyvalue(e.target.value);
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
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "",
          children: ["Country", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
            value: countryvalue,
            onChange: function onChange(e) {
              return setcountryvalue(e.target.value);
            },
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
            value: languagevalue,
            onChange: function onChange(e) {
              return setlanguagevalue(e.target.value);
            },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM2ZTgwNTlmOWE5ZGExZDIyZTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNkLGtCQUFnQ0QsK0NBQVEsQ0FBQyxDQUFDO0FBQ3RDRSxJQUFBQSxJQUFJLEVBQUU7QUFEZ0MsR0FBRCxFQUd6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQUh5QyxFQU16QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQU55QyxFQVN6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQVR5QyxDQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFjQSxtQkFBOEJKLCtDQUFRLENBQUMsQ0FBQztBQUNwQ0UsSUFBQUEsSUFBSSxFQUFFO0FBRDhCLEdBQUQsRUFHdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FIdUMsRUFNdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FOdUMsRUFTdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FUdUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBY0EsbUJBQWdDTiwrQ0FBUSxDQUFDLENBQUM7QUFDdENFLElBQUFBLElBQUksRUFBRTtBQURnQyxHQUFELEVBR3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBSHlDLEVBTXpDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBTnlDLEVBU3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBVHlDLENBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQWNBLG1CQUEwQ1IsK0NBQVEsRUFBbEQ7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBd0NWLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9XLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQTBDWiwrQ0FBUSxFQUFsRDtBQUFBLE1BQU9hLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsYUFBWjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsMkJBRUk7QUFBSyxlQUFTLEVBQUMsZ0NBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsd0NBQWY7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsa0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFHLG1CQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFNSTtBQUFLLGlCQUFTLEVBQUMsaURBQWY7QUFBQSxnQ0FFSTtBQUFHLG1CQUFTLEVBQUMsRUFBYjtBQUFBLDhDQUVJO0FBQVEsaUJBQUssRUFBRUosYUFBZjtBQUE4QixvQkFBUSxFQUFFLGtCQUFDUSxDQUFEO0FBQUEscUJBQU9QLGdCQUFnQixDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF2QjtBQUFBLGFBQXhDO0FBQWlGLHFCQUFTLEVBQUMsNEhBQTNGO0FBQUEsc0JBQ0toQixRQUFRLENBQUNpQixHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLGtDQUNWO0FBQVEsdUJBQU8sRUFBRSxpQkFBQ0osQ0FBRDtBQUFBLHlCQUFRTCxlQUFlLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXZCO0FBQUEsaUJBQWpCO0FBQUEsMEJBQTZERSxPQUFPLENBQUNuQjtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURVO0FBQUEsYUFBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBV0k7QUFBRyxtQkFBUyxFQUFDLEVBQWI7QUFBQSw2Q0FDSTtBQUFRLGlCQUFLLEVBQUVTLFlBQWY7QUFBNkIsb0JBQVEsRUFBRSxrQkFBQ00sQ0FBRDtBQUFBLHFCQUFPTCxlQUFlLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXRCO0FBQUEsYUFBdkM7QUFBK0UscUJBQVMsRUFBQyw0SEFBekY7QUFBQSxzQkFDS2QsT0FBTyxDQUFDZSxHQUFSLENBQVksVUFBQ2YsT0FBRDtBQUFBLGtDQUNUO0FBQUEsMEJBQVVBLE9BQU8sQ0FBQ0g7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEUztBQUFBLGFBQVo7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSixlQWtCSTtBQUFHLG1CQUFTLEVBQUMsRUFBYjtBQUFBLDhDQUNJO0FBQVEsaUJBQUssRUFBRVcsYUFBZjtBQUE4QixvQkFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEscUJBQU9ILGdCQUFnQixDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF2QjtBQUFBLGFBQXhDO0FBQWlGLHFCQUFTLEVBQUMsNEhBQTNGO0FBQUEsc0JBQ0taLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhLFVBQUNiLFFBQUQ7QUFBQSxrQ0FDVjtBQUFBLDBCQUFVQSxRQUFRLENBQUNMO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFU7QUFBQSxhQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlDSDs7R0ExRlFEOztLQUFBQTtBQTRGVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW2N1cnJlbmN5LCBzZXRjdXJyZW5jeV0gPSB1c2VTdGF0ZShbe1xyXG4gICAgICAgIG5hbWU6ICdQS1InLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnSU5EJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1VTRCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdFVVInLFxyXG4gICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgY29uc3QgW2NvdW5ydHksIHNldGNvdW50cnldID0gdXNlU3RhdGUoW3tcclxuICAgICAgICBuYW1lOiAnUGFraXN0YW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnVVNBJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0VuZ2xhbmQnLFxyXG4gICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRsYW5ndWFnZV0gPSB1c2VTdGF0ZShbe1xyXG4gICAgICAgIG5hbWU6ICdVcmR1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0hpbmRpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRnJlbmNoJyxcclxuICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGNvbnN0IFtjdXJyZW5jeXZhbHVlLCBzZXRjdXJyZW5jeXZhbHVlXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtjb3VudHJ5dmFsdWUsIHNldGNvdW50cnl2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2xhbmd1YWdldmFsdWUsIHNldGxhbmd1YWdldmFsdWVdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGxhbmd1YWdldmFsdWUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtbG9yYSBiZy1ncmF5LTUwJz5cclxuICAgICAgICAgICAgey8qIFRvcCBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtZ3JvdyBtdC0yIG1sLTUgcGwtNSAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1ncm93IGp1c3RpZnktc3RhcnQgc3BhY2UteC00Jz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBcIj5BY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhvdmVyOmJvcmRlci1iLTIgaG92ZXI6c2hhZG93LWxnIGN1cnNvci1wb2ludGVyXCI+Q29udGFjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlclwiPlNlbGxlciA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWwtNCBmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWVuZCBtci00IHNwYWNlLXgtNCc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkN1cnJlbmN5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtjdXJyZW5jeXZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldGN1cnJlbmN5dmFsdWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJtbC0yIHRleHQteHMgdGV4dC1ncmF5LTQwMCAgb3V0bGluZS1ub25lIGhvdmVyOmJvcmRlci1iLTIgaG92ZXI6c2hhZG93LWxnIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5Lm1hcCgoY3VycmVueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gb25DbGljaz17KGUpID0+IChzZXRjb3VudHJ5dmFsdWUoZS50YXJnZXQudmFsdWUpKX0gPntjdXJyZW55Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5Db3VudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2NvdW50cnl2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRjb3VudHJ5dmFsdWUoZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJtbC0yIHRleHQteHMgdGV4dC1ncmF5LTQwMCAgb3V0bGluZS1ub25lIGhvdmVyOmJvcmRlci1iLTIgaG92ZXI6c2hhZG93LWxnIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW5ydHkubWFwKChjb3VucnR5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA+e2NvdW5ydHkubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+bGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bGFuZ3VhZ2V2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRsYW5ndWFnZXZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZS5tYXAoKGxhbmd1YWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA+e2xhbmd1YWdlLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwibmFtZSIsImN1cnJlbmN5Iiwic2V0Y3VycmVuY3kiLCJjb3VucnR5Iiwic2V0Y291bnRyeSIsImxhbmd1YWdlIiwic2V0bGFuZ3VhZ2UiLCJjdXJyZW5jeXZhbHVlIiwic2V0Y3VycmVuY3l2YWx1ZSIsImNvdW50cnl2YWx1ZSIsInNldGNvdW50cnl2YWx1ZSIsImxhbmd1YWdldmFsdWUiLCJzZXRsYW5ndWFnZXZhbHVlIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImN1cnJlbnkiXSwic291cmNlUm9vdCI6IiJ9