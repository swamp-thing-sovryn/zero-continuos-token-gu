webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ConvertForm/ManageConversion.js":
/*!****************************************************!*\
  !*** ./components/ConvertForm/ManageConversion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/web3-contracts */ \"./lib/web3-contracts.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.js\");\n/* harmony import */ var components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ConvertSteps/ConvertSteps */ \"./components/ConvertSteps/ConvertSteps.js\");\n/* harmony import */ var components_utils_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/utils/store */ \"./components/utils/store.js\");\n/* harmony import */ var components_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/utils/constants */ \"./components/utils/constants.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/alverbner/Projects/atix/sovryn/zero-continuos-token-gui/components/ConvertForm/ManageConversion.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\nfunction ManageConversion(_ref) {\n  _s();\n\n  var handleReturnHome = _ref.handleReturnHome;\n  var openOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"])();\n  var claimOrder = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"])();\n  var waitForBatch = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"])();\n  var waitForTx = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"])();\n  var claimOrderReceiptAmount = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"])();\n  var changeAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"])();\n  var getAllowance = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      conversionSteps = _useState[0],\n      setConversionSteps = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(-1)),\n      convertedTotal = _useState2[0],\n      setConvertedTotal = _useState2[1];\n\n  var _useStore = Object(components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"])(function (state) {\n    return [state.toBonded, state.amountSource, state.openOrderHash, state.setOrderHash, state.savedSteps];\n  }),\n      _useStore2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useStore, 5),\n      toBonded = _useStore2[0],\n      amountSource = _useStore2[1],\n      openOrderHash = _useStore2[2],\n      setOrderHash = _useStore2[3],\n      savedSteps = _useStore2[4];\n\n  var updateConvertedValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hash) {\n      var amount;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return claimOrderReceiptAmount(hash);\n\n            case 3:\n              amount = _context.sent;\n              setConvertedTotal(amount);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              throw new Error(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(), [claimOrderReceiptAmount]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var cancelled = false; // Interacting with the bonding curve involves 2, 3 or 4 transactions (depending on the direction and state of allowance):\n    // 1. Reset approval (If we're converting COLLATERAL -> BONDED, an allowance was previously set but abandoned)\n    // 2. Raise approval (If we're converting COLLATERAL -> BONDED, the current allowance is not high enough)\n    // 3. Open a buy order\n    // 4. Claim the order\n\n    var createConvertSteps = /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        var steps, allowance, requiresAllowance, savedIsResetAllowance, savedIsRaiseApproval;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                steps = []; // First we check for allowance if the direction is COLLATERAL -> BONDED\n\n                if (!toBonded) {\n                  _context2.next = 10;\n                  break;\n                }\n\n                _context2.next = 4;\n                return getAllowance();\n\n              case 4:\n                allowance = _context2.sent;\n                // and if we need more, add a step to ask for an approval\n                requiresAllowance = allowance.lt(Object(lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"bigNum\"])(amountSource)) && savedSteps.length === 0;\n                savedIsResetAllowance = savedSteps.length > 0 && savedSteps[0].name === components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RESET_APPROVAL\"];\n                savedIsRaiseApproval = savedSteps.length > 0 && (savedSteps[0].name === components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RAISE_APPROVAL\"] || savedSteps[1].name === components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RAISE_APPROVAL\"]);\n\n                if (requiresAllowance || savedIsRaiseApproval) {\n                  steps.unshift(['Raise approval', {\n                    onTxCreated: function onTxCreated() {\n                      return changeAllowance(amountSource);\n                    },\n                    onResumeWait: function onResumeWait(hash) {\n                      return waitForTx(hash);\n                    },\n                    showDesc: true,\n                    name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RAISE_APPROVAL\"]\n                  }]);\n                } // Then there's the case when a user has an allowance set to the market maker contract\n                // but wants to convert even more tokens this time. When dealing with this case\n                // we want to first prepend a transaction to reset the allowance back to zero\n                // (before raising it in the next transaction from above).\n\n\n                if (requiresAllowance || savedIsResetAllowance) {\n                  steps.unshift(['Reset approval', {\n                    onTxCreated: function onTxCreated() {\n                      return changeAllowance(0);\n                    },\n                    onResumeWait: function onResumeWait(hash) {\n                      return waitForTx(hash);\n                    },\n                    showDesc: true,\n                    name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_RESET_APPROVAL\"]\n                  }]);\n                }\n\n              case 10:\n                // Next add the open order\n                steps.push([\"Create \".concat(toBonded ? 'buy' : 'sell', \" order\"), {\n                  onTxCreated: function onTxCreated() {\n                    console.log('onTxCreated', amountSource, toBonded);\n                    return openOrder(amountSource, toBonded);\n                  },\n                  // We need to store a reference to the hash so we can use it in the following step\n                  onHashCreated: function onHashCreated(hash) {\n                    setOrderHash(hash);\n                  },\n                  onWaitForTx: function onWaitForTx(hash) {\n                    return waitForTx(hash);\n                  },\n                  showDesc: true,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_CREATE_ORDER\"]\n                }]);\n                steps.push(['Wait for batch to finish', {\n                  onWaitCondition: function onWaitCondition(hash) {\n                    return waitForBatch(openOrderHash ? openOrderHash : hash);\n                  },\n                  showDesc: false,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_WAIT_BATCH\"]\n                }]); // And finally the claim order\n\n                steps.push(['Claim order', {\n                  onOrderClaim: function onOrderClaim(hash) {\n                    return claimOrder(openOrderHash ? openOrderHash : hash, toBonded);\n                  },\n                  onResumeWait: function onResumeWait(hash) {\n                    return waitForTx(hash);\n                  },\n                  onTxMined: function onTxMined(hash) {\n                    return updateConvertedValue(hash);\n                  },\n                  showDesc: true,\n                  disableAbandon: true,\n                  name: components_utils_constants__WEBPACK_IMPORTED_MODULE_9__[\"STEP_CLAIM_BATCH\"]\n                }]); // Update state to reflect the correct amount of steps\n                // Show loader for a small amount of time to provide a smooth visual experience\n\n                setTimeout(function () {\n                  if (!cancelled) {\n                    setConversionSteps(steps);\n                  }\n                }, 900);\n\n              case 14:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function createConvertSteps() {\n        return _ref3.apply(this, arguments);\n      };\n    }();\n\n    createConvertSteps();\n    return function () {\n      cancelled = true;\n    };\n  }, [changeAllowance, claimOrder, amountSource, getAllowance, openOrder, toBonded, updateConvertedValue]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, conversionSteps.length > 0 ? __jsx(components_ConvertSteps_ConvertSteps__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    steps: conversionSteps,\n    toBonded: toBonded,\n    fromAmount: amountSource,\n    convertedTotal: convertedTotal,\n    onReturnHome: handleReturnHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }\n  }) : __jsx(_StyledDiv, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(ManageConversion, \"8lsjmf/0c5mZxGC5YntlOkt0pjw=\", false, function () {\n  return [lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useOpenOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrder\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForBatchToFinish\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useWaitForTx\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useClaimOrderReceiptAmount\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useApprove\"], lib_web3_contracts__WEBPACK_IMPORTED_MODULE_5__[\"useAllowance\"], components_utils_store__WEBPACK_IMPORTED_MODULE_8__[\"useStore\"]];\n});\n\n_c = ManageConversion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageConversion);\n\nvar _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"div\").withConfig({\n  displayName: \"ManageConversion___StyledDiv\",\n  componentId: \"sc-rlfcuu-0\"\n})([\"display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ManageConversion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db252ZXJ0Rm9ybS9NYW5hZ2VDb252ZXJzaW9uLmpzP2RmYTAiXSwibmFtZXMiOlsiTWFuYWdlQ29udmVyc2lvbiIsImhhbmRsZVJldHVybkhvbWUiLCJvcGVuT3JkZXIiLCJ1c2VPcGVuT3JkZXIiLCJjbGFpbU9yZGVyIiwidXNlQ2xhaW1PcmRlciIsIndhaXRGb3JCYXRjaCIsInVzZVdhaXRGb3JCYXRjaFRvRmluaXNoIiwid2FpdEZvclR4IiwidXNlV2FpdEZvclR4IiwiY2xhaW1PcmRlclJlY2VpcHRBbW91bnQiLCJ1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCIsImNoYW5nZUFsbG93YW5jZSIsInVzZUFwcHJvdmUiLCJnZXRBbGxvd2FuY2UiLCJ1c2VBbGxvd2FuY2UiLCJ1c2VTdGF0ZSIsImNvbnZlcnNpb25TdGVwcyIsInNldENvbnZlcnNpb25TdGVwcyIsImJpZ051bSIsImNvbnZlcnRlZFRvdGFsIiwic2V0Q29udmVydGVkVG90YWwiLCJ1c2VTdG9yZSIsInN0YXRlIiwidG9Cb25kZWQiLCJhbW91bnRTb3VyY2UiLCJvcGVuT3JkZXJIYXNoIiwic2V0T3JkZXJIYXNoIiwic2F2ZWRTdGVwcyIsInVwZGF0ZUNvbnZlcnRlZFZhbHVlIiwidXNlQ2FsbGJhY2siLCJoYXNoIiwiYW1vdW50IiwiRXJyb3IiLCJ1c2VFZmZlY3QiLCJjYW5jZWxsZWQiLCJjcmVhdGVDb252ZXJ0U3RlcHMiLCJzdGVwcyIsImFsbG93YW5jZSIsInJlcXVpcmVzQWxsb3dhbmNlIiwibHQiLCJsZW5ndGgiLCJzYXZlZElzUmVzZXRBbGxvd2FuY2UiLCJuYW1lIiwiU1RFUF9SRVNFVF9BUFBST1ZBTCIsInNhdmVkSXNSYWlzZUFwcHJvdmFsIiwiU1RFUF9SQUlTRV9BUFBST1ZBTCIsInVuc2hpZnQiLCJvblR4Q3JlYXRlZCIsIm9uUmVzdW1lV2FpdCIsInNob3dEZXNjIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJvbkhhc2hDcmVhdGVkIiwib25XYWl0Rm9yVHgiLCJTVEVQX0NSRUFURV9PUkRFUiIsIm9uV2FpdENvbmRpdGlvbiIsIlNURVBfV0FJVF9CQVRDSCIsIm9uT3JkZXJDbGFpbSIsIm9uVHhNaW5lZCIsImRpc2FibGVBYmFuZG9uIiwiU1RFUF9DTEFJTV9CQVRDSCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsT0FBZ0Q7QUFBQTs7QUFBQSxNQUFwQkMsZ0JBQW9CLFFBQXBCQSxnQkFBb0I7QUFDOUMsTUFBTUMsU0FBUyxHQUFHQyx1RUFBWSxFQUE5QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0Msd0VBQWEsRUFBaEM7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLGtGQUF1QixFQUE1QztBQUNBLE1BQU1DLFNBQVMsR0FBR0MsdUVBQVksRUFBOUI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBR0MscUZBQTBCLEVBQTFEO0FBQ0EsTUFBTUMsZUFBZSxHQUFHQyxxRUFBVSxFQUFsQztBQUNBLE1BQU1DLFlBQVksR0FBR0MsdUVBQVksRUFBakM7O0FBQ0Esa0JBQThDQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPQyxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBNENGLHNEQUFRLENBQUNHLHdEQUFNLENBQUMsQ0FBQyxDQUFGLENBQVAsQ0FBcEQ7QUFBQSxNQUFPQyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxrQkFBMEVDLHVFQUFRLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUksQ0FDeEZBLEtBQUssQ0FBQ0MsUUFEa0YsRUFFeEZELEtBQUssQ0FBQ0UsWUFGa0YsRUFHeEZGLEtBQUssQ0FBQ0csYUFIa0YsRUFJeEZILEtBQUssQ0FBQ0ksWUFKa0YsRUFLeEZKLEtBQUssQ0FBQ0ssVUFMa0YsQ0FBSjtBQUFBLEdBQU4sQ0FBbEY7QUFBQTtBQUFBLE1BQU9KLFFBQVA7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QWdCQTtBQU54QixpQkFGUyxDQUFYLEVBcEV5QixDQWdGekI7QUFDQTs7QUFDQUMsMEJBQVUsQ0FBQyxZQUFNO0FBQ2Ysc0JBQUksQ0FBQzVCLFNBQUwsRUFBZ0I7QUFDZGpCLHNDQUFrQixDQUFDbUIsS0FBRCxDQUFsQjtBQUNEO0FBQ0YsaUJBSlMsRUFJUCxHQUpPLENBQVY7O0FBbEZ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFsQkQsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLE9BQXhCOztBQXlGQUEsc0JBQWtCO0FBRWxCLFdBQU8sWUFBTTtBQUNYRCxlQUFTLEdBQUcsSUFBWjtBQUNELEtBRkQ7QUFHRCxHQXRHUSxFQXNHTixDQUNEdkIsZUFEQyxFQUVEUixVQUZDLEVBR0RxQixZQUhDLEVBSURYLFlBSkMsRUFLRFosU0FMQyxFQU1Ec0IsUUFOQyxFQU9ESyxvQkFQQyxDQXRHTSxDQUFUO0FBZ0hBLFNBQ0UsbUVBQ0daLGVBQWUsQ0FBQ3dCLE1BQWhCLEdBQXlCLENBQXpCLEdBQ0MsTUFBQyw0RUFBRDtBQUNFLFNBQUssRUFBRXhCLGVBRFQ7QUFFRSxZQUFRLEVBQUVPLFFBRlo7QUFHRSxjQUFVLEVBQUVDLFlBSGQ7QUFJRSxrQkFBYyxFQUFFTCxjQUpsQjtBQUtFLGdCQUFZLEVBQUVuQixnQkFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBREY7QUF1QkQ7O0dBdEtRRCxnQjtVQUNXRywrRCxFQUNDRSxnRSxFQUNFRSwwRSxFQUNIRSwrRCxFQUNjRSw2RSxFQUNSRSw2RCxFQUNIRSwrRCxFQUdxRE8sK0Q7OztLQVZuRXRCLGdCO0FBd0tNQSwrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udmVydEZvcm0vTWFuYWdlQ29udmVyc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgdXNlT3Blbk9yZGVyLFxuICB1c2VDbGFpbU9yZGVyLFxuICB1c2VBcHByb3ZlLFxuICB1c2VBbGxvd2FuY2UsXG4gIHVzZUNsYWltT3JkZXJSZWNlaXB0QW1vdW50LFxuICB1c2VXYWl0Rm9yQmF0Y2hUb0ZpbmlzaCxcbiAgdXNlV2FpdEZvclR4XG59IGZyb20gJ2xpYi93ZWIzLWNvbnRyYWN0cydcbmltcG9ydCB7IGJpZ051bSB9IGZyb20gJ2xpYi91dGlscydcbmltcG9ydCBDb252ZXJ0U3RlcHMgZnJvbSAnY29tcG9uZW50cy9Db252ZXJ0U3RlcHMvQ29udmVydFN0ZXBzJ1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbHMvc3RvcmUnO1xuaW1wb3J0IHsgU1RFUF9DTEFJTV9CQVRDSCwgU1RFUF9DUkVBVEVfT1JERVIsIFNURVBfUkFJU0VfQVBQUk9WQUwsIFNURVBfUkVTRVRfQVBQUk9WQUwsIFNURVBfV0FJVF9CQVRDSCB9IGZyb20gJ2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzJztcblxuZnVuY3Rpb24gTWFuYWdlQ29udmVyc2lvbih7IGhhbmRsZVJldHVybkhvbWUgfSkge1xuICBjb25zdCBvcGVuT3JkZXIgPSB1c2VPcGVuT3JkZXIoKVxuICBjb25zdCBjbGFpbU9yZGVyID0gdXNlQ2xhaW1PcmRlcigpXG4gIGNvbnN0IHdhaXRGb3JCYXRjaCA9IHVzZVdhaXRGb3JCYXRjaFRvRmluaXNoKClcbiAgY29uc3Qgd2FpdEZvclR4ID0gdXNlV2FpdEZvclR4KClcbiAgY29uc3QgY2xhaW1PcmRlclJlY2VpcHRBbW91bnQgPSB1c2VDbGFpbU9yZGVyUmVjZWlwdEFtb3VudCgpXG4gIGNvbnN0IGNoYW5nZUFsbG93YW5jZSA9IHVzZUFwcHJvdmUoKVxuICBjb25zdCBnZXRBbGxvd2FuY2UgPSB1c2VBbGxvd2FuY2UoKVxuICBjb25zdCBbY29udmVyc2lvblN0ZXBzLCBzZXRDb252ZXJzaW9uU3RlcHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjb252ZXJ0ZWRUb3RhbCwgc2V0Q29udmVydGVkVG90YWxdID0gdXNlU3RhdGUoYmlnTnVtKC0xKSlcbiAgY29uc3QgW3RvQm9uZGVkLCBhbW91bnRTb3VyY2UsIG9wZW5PcmRlckhhc2gsIHNldE9yZGVySGFzaCwgc2F2ZWRTdGVwc10gPSB1c2VTdG9yZShzdGF0ZSA9PiBbXG4gICAgICBzdGF0ZS50b0JvbmRlZCxcbiAgICAgIHN0YXRlLmFtb3VudFNvdXJjZSxcbiAgICAgIHN0YXRlLm9wZW5PcmRlckhhc2gsXG4gICAgICBzdGF0ZS5zZXRPcmRlckhhc2gsXG4gICAgICBzdGF0ZS5zYXZlZFN0ZXBzXG4gIF0pXG5cbiAgY29uc3QgdXBkYXRlQ29udmVydGVkVmFsdWUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyBoYXNoID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGF3YWl0IGNsYWltT3JkZXJSZWNlaXB0QW1vdW50KGhhc2gpXG5cbiAgICAgICAgc2V0Q29udmVydGVkVG90YWwoYW1vdW50KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgICB9XG4gICAgfSxcbiAgICBbY2xhaW1PcmRlclJlY2VpcHRBbW91bnRdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgLy8gSW50ZXJhY3Rpbmcgd2l0aCB0aGUgYm9uZGluZyBjdXJ2ZSBpbnZvbHZlcyAyLCAzIG9yIDQgdHJhbnNhY3Rpb25zIChkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgc3RhdGUgb2YgYWxsb3dhbmNlKTpcbiAgICAvLyAxLiBSZXNldCBhcHByb3ZhbCAoSWYgd2UncmUgY29udmVydGluZyBDT0xMQVRFUkFMIC0+IEJPTkRFRCwgYW4gYWxsb3dhbmNlIHdhcyBwcmV2aW91c2x5IHNldCBidXQgYWJhbmRvbmVkKVxuICAgIC8vIDIuIFJhaXNlIGFwcHJvdmFsIChJZiB3ZSdyZSBjb252ZXJ0aW5nIENPTExBVEVSQUwgLT4gQk9OREVELCB0aGUgY3VycmVudCBhbGxvd2FuY2UgaXMgbm90IGhpZ2ggZW5vdWdoKVxuICAgIC8vIDMuIE9wZW4gYSBidXkgb3JkZXJcbiAgICAvLyA0LiBDbGFpbSB0aGUgb3JkZXJcbiAgICBjb25zdCBjcmVhdGVDb252ZXJ0U3RlcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgc3RlcHMgPSBbXVxuXG4gICAgICAvLyBGaXJzdCB3ZSBjaGVjayBmb3IgYWxsb3dhbmNlIGlmIHRoZSBkaXJlY3Rpb24gaXMgQ09MTEFURVJBTCAtPiBCT05ERURcbiAgICAgIGlmICh0b0JvbmRlZCkge1xuICAgICAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCBnZXRBbGxvd2FuY2UoKVxuXG4gICAgICAgIC8vIGFuZCBpZiB3ZSBuZWVkIG1vcmUsIGFkZCBhIHN0ZXAgdG8gYXNrIGZvciBhbiBhcHByb3ZhbFxuICAgICAgICBjb25zdCByZXF1aXJlc0FsbG93YW5jZSA9IGFsbG93YW5jZS5sdChiaWdOdW0oYW1vdW50U291cmNlKSkgJiYgc2F2ZWRTdGVwcy5sZW5ndGggPT09IDA7XG4gICAgICAgIGNvbnN0IHNhdmVkSXNSZXNldEFsbG93YW5jZSA9IHNhdmVkU3RlcHMubGVuZ3RoID4gMCAmJiAoc2F2ZWRTdGVwc1swXS5uYW1lID09PSBTVEVQX1JFU0VUX0FQUFJPVkFMKTtcbiAgICAgICAgY29uc3Qgc2F2ZWRJc1JhaXNlQXBwcm92YWwgPSBzYXZlZFN0ZXBzLmxlbmd0aCA+IDAgJiYgKHNhdmVkU3RlcHNbMF0ubmFtZSA9PT0gU1RFUF9SQUlTRV9BUFBST1ZBTCB8fCBzYXZlZFN0ZXBzWzFdLm5hbWUgPT09IFNURVBfUkFJU0VfQVBQUk9WQUwpO1xuXG4gICAgICAgIGlmIChyZXF1aXJlc0FsbG93YW5jZSB8fCBzYXZlZElzUmFpc2VBcHByb3ZhbCkge1xuICAgICAgICAgIHN0ZXBzLnVuc2hpZnQoW1xuICAgICAgICAgICAgJ1JhaXNlIGFwcHJvdmFsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb25UeENyZWF0ZWQ6ICgpID0+IGNoYW5nZUFsbG93YW5jZShhbW91bnRTb3VyY2UpLFxuICAgICAgICAgICAgICBvblJlc3VtZVdhaXQ6IChoYXNoKSA9PiB3YWl0Rm9yVHgoaGFzaCksXG4gICAgICAgICAgICAgIHNob3dEZXNjOiB0cnVlLFxuICAgICAgICAgICAgICBuYW1lOiBTVEVQX1JBSVNFX0FQUFJPVkFMXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlbiB0aGVyZSdzIHRoZSBjYXNlIHdoZW4gYSB1c2VyIGhhcyBhbiBhbGxvd2FuY2Ugc2V0IHRvIHRoZSBtYXJrZXQgbWFrZXIgY29udHJhY3RcbiAgICAgICAgLy8gYnV0IHdhbnRzIHRvIGNvbnZlcnQgZXZlbiBtb3JlIHRva2VucyB0aGlzIHRpbWUuIFdoZW4gZGVhbGluZyB3aXRoIHRoaXMgY2FzZVxuICAgICAgICAvLyB3ZSB3YW50IHRvIGZpcnN0IHByZXBlbmQgYSB0cmFuc2FjdGlvbiB0byByZXNldCB0aGUgYWxsb3dhbmNlIGJhY2sgdG8gemVyb1xuICAgICAgICAvLyAoYmVmb3JlIHJhaXNpbmcgaXQgaW4gdGhlIG5leHQgdHJhbnNhY3Rpb24gZnJvbSBhYm92ZSkuXG4gICAgICAgIGlmKHJlcXVpcmVzQWxsb3dhbmNlIHx8IHNhdmVkSXNSZXNldEFsbG93YW5jZSkge1xuICAgICAgICAgIHN0ZXBzLnVuc2hpZnQoW1xuICAgICAgICAgICAgJ1Jlc2V0IGFwcHJvdmFsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb25UeENyZWF0ZWQ6ICgpID0+IGNoYW5nZUFsbG93YW5jZSgwKSxcbiAgICAgICAgICAgICAgb25SZXN1bWVXYWl0OiAoaGFzaCkgPT4gd2FpdEZvclR4KGhhc2gpLFxuICAgICAgICAgICAgICBzaG93RGVzYzogdHJ1ZSxcbiAgICAgICAgICAgICAgbmFtZTogU1RFUF9SRVNFVF9BUFBST1ZBTFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE5leHQgYWRkIHRoZSBvcGVuIG9yZGVyXG4gICAgICBzdGVwcy5wdXNoKFtcbiAgICAgICAgYENyZWF0ZSAke3RvQm9uZGVkID8gJ2J1eScgOiAnc2VsbCd9IG9yZGVyYCxcbiAgICAgICAge1xuICAgICAgICAgIG9uVHhDcmVhdGVkOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25UeENyZWF0ZWQnLCBhbW91bnRTb3VyY2UsIHRvQm9uZGVkKVxuICAgICAgICAgICAgcmV0dXJuIG9wZW5PcmRlcihhbW91bnRTb3VyY2UsIHRvQm9uZGVkKVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBoYXNoIHNvIHdlIGNhbiB1c2UgaXQgaW4gdGhlIGZvbGxvd2luZyBzdGVwXG4gICAgICAgICAgb25IYXNoQ3JlYXRlZDogaGFzaCA9PiB7XG4gICAgICAgICAgICBzZXRPcmRlckhhc2goaGFzaClcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uV2FpdEZvclR4OiAoaGFzaCkgPT4gd2FpdEZvclR4KGhhc2gpLFxuICAgICAgICAgIHNob3dEZXNjOiB0cnVlLFxuICAgICAgICAgIG5hbWU6IFNURVBfQ1JFQVRFX09SREVSXG4gICAgICAgIH0sXG4gICAgICBdKVxuXG4gICAgICBzdGVwcy5wdXNoKFtcbiAgICAgICAgJ1dhaXQgZm9yIGJhdGNoIHRvIGZpbmlzaCcsXG4gICAgICAgIHtcbiAgICAgICAgICBvbldhaXRDb25kaXRpb246IChoYXNoKSA9PiB3YWl0Rm9yQmF0Y2gob3Blbk9yZGVySGFzaCA/IG9wZW5PcmRlckhhc2ggOiBoYXNoKSxcbiAgICAgICAgICBzaG93RGVzYzogZmFsc2UsXG4gICAgICAgICAgbmFtZTogU1RFUF9XQUlUX0JBVENIXG4gICAgICAgIH0sXG4gICAgICBdKVxuICAgICAgLy8gQW5kIGZpbmFsbHkgdGhlIGNsYWltIG9yZGVyXG4gICAgICBzdGVwcy5wdXNoKFtcbiAgICAgICAgJ0NsYWltIG9yZGVyJyxcbiAgICAgICAge1xuICAgICAgICAgIG9uT3JkZXJDbGFpbTogKGhhc2gpID0+IGNsYWltT3JkZXIob3Blbk9yZGVySGFzaCA/IG9wZW5PcmRlckhhc2ggOiBoYXNoLCB0b0JvbmRlZCksXG4gICAgICAgICAgb25SZXN1bWVXYWl0OiAoaGFzaCkgPT4gd2FpdEZvclR4KGhhc2gpLFxuICAgICAgICAgIG9uVHhNaW5lZDogaGFzaCA9PiB1cGRhdGVDb252ZXJ0ZWRWYWx1ZShoYXNoKSxcbiAgICAgICAgICBzaG93RGVzYzogdHJ1ZSxcbiAgICAgICAgICBkaXNhYmxlQWJhbmRvbjogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiBTVEVQX0NMQUlNX0JBVENIXG4gICAgICAgIH0sXG4gICAgICBdKVxuXG4gICAgICAvLyBVcGRhdGUgc3RhdGUgdG8gcmVmbGVjdCB0aGUgY29ycmVjdCBhbW91bnQgb2Ygc3RlcHNcbiAgICAgIC8vIFNob3cgbG9hZGVyIGZvciBhIHNtYWxsIGFtb3VudCBvZiB0aW1lIHRvIHByb3ZpZGUgYSBzbW9vdGggdmlzdWFsIGV4cGVyaWVuY2VcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHNldENvbnZlcnNpb25TdGVwcyhzdGVwcylcbiAgICAgICAgfVxuICAgICAgfSwgOTAwKVxuICAgIH1cblxuICAgIGNyZWF0ZUNvbnZlcnRTdGVwcygpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgfSwgW1xuICAgIGNoYW5nZUFsbG93YW5jZSxcbiAgICBjbGFpbU9yZGVyLFxuICAgIGFtb3VudFNvdXJjZSxcbiAgICBnZXRBbGxvd2FuY2UsXG4gICAgb3Blbk9yZGVyLFxuICAgIHRvQm9uZGVkLFxuICAgIHVwZGF0ZUNvbnZlcnRlZFZhbHVlLFxuICBdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb252ZXJzaW9uU3RlcHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPENvbnZlcnRTdGVwc1xuICAgICAgICAgIHN0ZXBzPXtjb252ZXJzaW9uU3RlcHN9XG4gICAgICAgICAgdG9Cb25kZWQ9e3RvQm9uZGVkfVxuICAgICAgICAgIGZyb21BbW91bnQ9e2Ftb3VudFNvdXJjZX1cbiAgICAgICAgICBjb252ZXJ0ZWRUb3RhbD17Y29udmVydGVkVG90YWx9XG4gICAgICAgICAgb25SZXR1cm5Ib21lPXtoYW5kbGVSZXR1cm5Ib21lfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17YFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgYH1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VDb252ZXJzaW9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ConvertForm/ManageConversion.js\n");

/***/ })

})