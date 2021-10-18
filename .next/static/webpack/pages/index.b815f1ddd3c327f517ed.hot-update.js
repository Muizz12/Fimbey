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

  var handlechange = function handlechange(e) {
    setcountryvalue(e.target.value);
  };

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
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "hover:border-b-2 hover:shadow-lg cursor-pointer",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "hover:border-b-2 hover:shadow-lg cursor-pointer",
          children: "Seller "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: " ml-4 flex flex-grow justify-end mr-4 space-x-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "",
          children: ["Currency", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
            onClick: handlechange,
            className: "ml-2 text-xs text-gray-400  outline-none hover:border-b-2 hover:shadow-lg cursor-pointer border border-gray-200 rounded-md",
            children: currency.map(function (curreny) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                children: curreny.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
                lineNumber: 76,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
                lineNumber: 83,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjgxNWYxZGRkM2MzMjdmNTE3ZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNkLGtCQUFnQ0QsK0NBQVEsQ0FBQyxDQUFDO0FBQ3RDRSxJQUFBQSxJQUFJLEVBQUU7QUFEZ0MsR0FBRCxFQUd6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQUh5QyxFQU16QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQU55QyxFQVN6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQVR5QyxDQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFjQSxtQkFBOEJKLCtDQUFRLENBQUMsQ0FBQztBQUNwQ0UsSUFBQUEsSUFBSSxFQUFFO0FBRDhCLEdBQUQsRUFHdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FIdUMsRUFNdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FOdUMsRUFTdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FUdUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBY0EsbUJBQWdDTiwrQ0FBUSxDQUFDLENBQUM7QUFDdENFLElBQUFBLElBQUksRUFBRTtBQURnQyxHQUFELEVBR3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBSHlDLEVBTXpDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBTnlDLEVBU3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBVHlDLENBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQWNBLG1CQUEwQ1IsK0NBQVEsRUFBbEQ7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBd0NWLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9XLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQTBDWiwrQ0FBUSxFQUFsRDtBQUFBLE1BQU9hLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkosSUFBQUEsZUFBZSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBRUgsR0FIRDs7QUFJQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFlBQVo7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBLDJCQUVJO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHdDQUFmO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLGtEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLGlEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBRyxtQkFBUyxFQUFDLGlEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFBSyxpQkFBUyxFQUFDLGlEQUFmO0FBQUEsZ0NBRUk7QUFBRyxtQkFBUyxFQUFDLEVBQWI7QUFBQSw4Q0FDSTtBQUFRLG1CQUFPLEVBQUVJLFlBQWpCO0FBQStCLHFCQUFTLEVBQUMsNEhBQXpDO0FBQUEsc0JBQ0taLFFBQVEsQ0FBQ2tCLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsa0NBQ1Y7QUFBQSwwQkFBVUEsT0FBTyxDQUFDcEI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVTtBQUFBLGFBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQVNJO0FBQUcsbUJBQVMsRUFBQyxFQUFiO0FBQUEsNkNBQ0k7QUFBUSxxQkFBUyxFQUFDLDRIQUFsQjtBQUFBLHNCQUNLRyxPQUFPLENBQUNnQixHQUFSLENBQVksVUFBQ2hCLE9BQUQ7QUFBQSxrQ0FDVDtBQUFBLDBCQUFVQSxPQUFPLENBQUNIO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFM7QUFBQSxhQUFaO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEosZUFnQkk7QUFBRyxtQkFBUyxFQUFDLEVBQWI7QUFBQSw4Q0FDSTtBQUFRLHFCQUFTLEVBQUMsNEhBQWxCO0FBQUEsc0JBQ0tLLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhLFVBQUNkLFFBQUQ7QUFBQSxrQ0FDVjtBQUFBLDBCQUFVQSxRQUFRLENBQUNMO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFU7QUFBQSxhQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVDSDs7R0EzRlFEOztLQUFBQTtBQTZGVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW2N1cnJlbmN5LCBzZXRjdXJyZW5jeV0gPSB1c2VTdGF0ZShbe1xyXG4gICAgICAgIG5hbWU6ICdQS1InLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnSU5EJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1VTRCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdFVVInLFxyXG4gICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgY29uc3QgW2NvdW5ydHksIHNldGNvdW50cnldID0gdXNlU3RhdGUoW3tcclxuICAgICAgICBuYW1lOiAnUGFraXN0YW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnSW5kaWEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnVVNBJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0VuZ2xhbmQnLFxyXG4gICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRsYW5ndWFnZV0gPSB1c2VTdGF0ZShbe1xyXG4gICAgICAgIG5hbWU6ICdVcmR1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0hpbmRpJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRnJlbmNoJyxcclxuICAgIH0sXHJcblxyXG4gICAgXSlcclxuICAgIGNvbnN0IFtjdXJyZW5jeXZhbHVlLCBzZXRjdXJyZW5jeXZhbHVlXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtjb3VudHJ5dmFsdWUsIHNldGNvdW50cnl2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2xhbmd1YWdldmFsdWUsIHNldGxhbmd1YWdldmFsdWVdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgaGFuZGxlY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRjb3VudHJ5dmFsdWUoZS50YXJnZXQudmFsdWUpXHJcblxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coY291bnRyeXZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LWxvcmEgYmctZ3JheS01MCc+XHJcbiAgICAgICAgICAgIHsvKiBUb3AgSGVhZGVyICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWdyb3cgbXQtMiBtbC01IHBsLTUgJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LXN0YXJ0IHNwYWNlLXgtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXIgXCI+QWNjb3VudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlclwiPkNvbnRhY3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXJcIj5TZWxsZXIgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIG1sLTQgZmxleCBmbGV4LWdyb3cganVzdGlmeS1lbmQgbXItNCBzcGFjZS14LTQnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5DdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2xpY2s9e2hhbmRsZWNoYW5nZX0gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeS5tYXAoKGN1cnJlbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uID57Y3VycmVueS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5Db3VudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VucnR5Lm1hcCgoY291bnJ0eSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gPntjb3VucnR5Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZS5tYXAoKGxhbmd1YWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA+e2xhbmd1YWdlLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwibmFtZSIsImN1cnJlbmN5Iiwic2V0Y3VycmVuY3kiLCJjb3VucnR5Iiwic2V0Y291bnRyeSIsImxhbmd1YWdlIiwic2V0bGFuZ3VhZ2UiLCJjdXJyZW5jeXZhbHVlIiwic2V0Y3VycmVuY3l2YWx1ZSIsImNvdW50cnl2YWx1ZSIsInNldGNvdW50cnl2YWx1ZSIsImxhbmd1YWdldmFsdWUiLCJzZXRsYW5ndWFnZXZhbHVlIiwiaGFuZGxlY2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImN1cnJlbnkiXSwic291cmNlUm9vdCI6IiJ9