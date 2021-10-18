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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      currencyvalue = _useState4[0],
      setcurrencyvalue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      countryvalue = _useState5[0],
      setcountryvalue = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      languagevalue = _useState6[0],
      setlanguagevalue = _useState6[1];

  console.log(currencyvalue);
  console.log(countryvalue);
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
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "hover:border-b-2 hover:shadow-lg cursor-pointer",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "hover:border-b-2 hover:shadow-lg cursor-pointer",
          children: "Seller "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
          lineNumber: 65,
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
                lineNumber: 77,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
                lineNumber: 84,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

_s(Header, "xWkcrOUNhEfjzgFZVw+RmN5YHAw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTllNDc3ZDhkYzY4Mzc3MDEwNTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNkLGtCQUFnQ0QsK0NBQVEsQ0FBQyxDQUFDO0FBQ3RDRSxJQUFBQSxJQUFJLEVBQUU7QUFEZ0MsR0FBRCxFQUd6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQUh5QyxFQU16QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQU55QyxFQVN6QztBQUNJQSxJQUFBQSxJQUFJLEVBQUU7QUFEVixHQVR5QyxDQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFjQSxtQkFBOEJKLCtDQUFRLENBQUMsQ0FBQztBQUNwQ0UsSUFBQUEsSUFBSSxFQUFFO0FBRDhCLEdBQUQsRUFHdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FIdUMsRUFNdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FOdUMsRUFTdkM7QUFDSUEsSUFBQUEsSUFBSSxFQUFFO0FBRFYsR0FUdUMsQ0FBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBY0EsbUJBQWdDTiwrQ0FBUSxDQUFDLENBQUM7QUFDdENFLElBQUFBLElBQUksRUFBRTtBQURnQyxHQUFELEVBR3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBSHlDLEVBTXpDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBTnlDLEVBU3pDO0FBQ0lBLElBQUFBLElBQUksRUFBRTtBQURWLEdBVHlDLENBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQWNBLG1CQUEwQ1IsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQUEsTUFBT1MsYUFBUDtBQUFBLE1BQXNCQyxnQkFB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QkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIOztHQTVGUUQ7O0tBQUFBO0FBOEZULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbY3VycmVuY3ksIHNldGN1cnJlbmN5XSA9IHVzZVN0YXRlKFt7XHJcbiAgICAgICAgbmFtZTogJ1BLUicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdJTkQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnVVNEJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0VVUicsXHJcbiAgICB9LFxyXG5cclxuICAgIF0pXHJcbiAgICBjb25zdCBbY291bnJ0eSwgc2V0Y291bnRyeV0gPSB1c2VTdGF0ZShbe1xyXG4gICAgICAgIG5hbWU6ICdQYWtpc3RhbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdJbmRpYScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdVU0EnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRW5nbGFuZCcsXHJcbiAgICB9LFxyXG5cclxuICAgIF0pXHJcbiAgICBjb25zdCBbbGFuZ3VhZ2UsIHNldGxhbmd1YWdlXSA9IHVzZVN0YXRlKFt7XHJcbiAgICAgICAgbmFtZTogJ1VyZHUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnSGluZGknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdGcmVuY2gnLFxyXG4gICAgfSxcclxuXHJcbiAgICBdKVxyXG4gICAgY29uc3QgW2N1cnJlbmN5dmFsdWUsIHNldGN1cnJlbmN5dmFsdWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtjb3VudHJ5dmFsdWUsIHNldGNvdW50cnl2YWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2xhbmd1YWdldmFsdWUsIHNldGxhbmd1YWdldmFsdWVdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW5jeXZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKGNvdW50cnl2YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhsYW5ndWFnZXZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LWxvcmEgYmctZ3JheS01MCc+XHJcbiAgICAgICAgICAgIHsvKiBUb3AgSGVhZGVyICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWdyb3cgbXQtMiBtbC01IHBsLTUgJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LXN0YXJ0IHNwYWNlLXgtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXIgXCI+QWNjb3VudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlclwiPkNvbnRhY3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXJcIj5TZWxsZXIgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIG1sLTQgZmxleCBmbGV4LWdyb3cganVzdGlmeS1lbmQgbXItNCBzcGFjZS14LTQnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5DdXJyZW5jeVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Y3VycmVuY3l2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRjdXJyZW5jeXZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeS5tYXAoKGN1cnJlbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG9uQ2xpY2s9eyhlKSA9PiAoc2V0Y291bnRyeXZhbHVlKGUudGFyZ2V0LnZhbHVlKSl9ID57Y3VycmVueS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+Q291bnRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtjb3VudHJ5dmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Y291bnRyeXZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXhzIHRleHQtZ3JheS00MDAgIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOnNoYWRvdy1sZyBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VucnR5Lm1hcCgoY291bnJ0eSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gPntjb3VucnR5Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPmxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2xhbmd1YWdldmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0bGFuZ3VhZ2V2YWx1ZShlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cIm1sLTIgdGV4dC14cyB0ZXh0LWdyYXktNDAwICBvdXRsaW5lLW5vbmUgaG92ZXI6Ym9yZGVyLWItMiBob3ZlcjpzaGFkb3ctbGcgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2UubWFwKChsYW5ndWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gPntsYW5ndWFnZS5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsIm5hbWUiLCJjdXJyZW5jeSIsInNldGN1cnJlbmN5IiwiY291bnJ0eSIsInNldGNvdW50cnkiLCJsYW5ndWFnZSIsInNldGxhbmd1YWdlIiwiY3VycmVuY3l2YWx1ZSIsInNldGN1cnJlbmN5dmFsdWUiLCJjb3VudHJ5dmFsdWUiLCJzZXRjb3VudHJ5dmFsdWUiLCJsYW5ndWFnZXZhbHVlIiwic2V0bGFuZ3VhZ2V2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJjdXJyZW55Il0sInNvdXJjZVJvb3QiOiIifQ==