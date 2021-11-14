webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/wallet.js":
/*!***********************!*\
  !*** ./lib/wallet.js ***!
  \***********************/
/*! exports provided: useWalletAugmented, WalletProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWalletAugmented\", function() { return useWalletAugmented; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WalletProvider\", function() { return WalletProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var use_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-wallet */ \"./node_modules/use-wallet/dist/esm/index.js\");\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environment */ \"./lib/environment.js\");\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_environment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web3-utils */ \"./lib/web3-utils.js\");\n\n\n\n\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/home/alverbner/Projects/atix/sovryn/zero-continuos-token-gui/lib/wallet.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar CHAIN_ID = Number(_environment__WEBPACK_IMPORTED_MODULE_6___default()('CHAIN_ID'));\nvar WalletAugmentedContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext();\n\nfunction logError(err) {\n  var _console;\n\n  for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    messages[_key - 1] = arguments[_key];\n  }\n\n  // Check for presence of window to determine browser env before showing alert\n  if (true) {\n    window.alert(messages.join(' '));\n  }\n\n  (_console = console).error.apply(_console, messages.concat([err]));\n}\n\nfunction useWalletAugmented() {\n  _s();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(WalletAugmentedContext);\n} // Add Ethers.js, error handling and analytics tracking to the useWallet() object\n\n\n_s(useWalletAugmented, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nfunction WalletAugmented(_ref) {\n  _s2();\n\n  var children = _ref.children;\n  var wallet = Object(use_wallet__WEBPACK_IMPORTED_MODULE_5__[\"useWallet\"])();\n  var ethereum = wallet.ethereum,\n      connect = wallet.connect;\n  var ethersProvider = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return ethereum ? new ethers__WEBPACK_IMPORTED_MODULE_4__[\"providers\"].Web3Provider(ethereum) : null;\n  }, [ethereum]);\n  var augmentedActivate = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])( /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(type) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return connect(type);\n\n            case 3:\n              return _context.abrupt(\"return\", true);\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              //if (error instanceof UnsupportedChainError) {\n              logError(_context.t0, \"Unsupported chain: please connect to the network called \".concat(Object(_web3_utils__WEBPACK_IMPORTED_MODULE_7__[\"getNetworkName\"])(CHAIN_ID), \" in your Ethereum Provider.\"));\n              return _context.abrupt(\"return\");\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(), [connect]);\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useMemo\"])(function () {\n    return _objectSpread(_objectSpread({}, wallet), {}, {\n      activate: augmentedActivate,\n      networkName: Object(_web3_utils__WEBPACK_IMPORTED_MODULE_7__[\"getNetworkName\"])(CHAIN_ID),\n      ethersProvider: ethersProvider\n    });\n  }, [wallet, ethersProvider, augmentedActivate]);\n  return __jsx(WalletAugmentedContext.Provider, {\n    value: contextValue,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s2(WalletAugmented, \"EDGVOSUgwL+ZjHhonfJr/mng6ok=\", false, function () {\n  return [use_wallet__WEBPACK_IMPORTED_MODULE_5__[\"useWallet\"]];\n});\n\n_c = WalletAugmented;\n\nfunction WalletProvider(_ref3) {\n  var children = _ref3.children;\n  console.log(CHAIN_ID, _environment__WEBPACK_IMPORTED_MODULE_6___default()('PORTIS_DAPP_ID'));\n  return __jsx(use_wallet__WEBPACK_IMPORTED_MODULE_5__[\"UseWalletProvider\"], {\n    chainId: CHAIN_ID,\n    connectors: {\n      fortmatic: {\n        apiKey: _environment__WEBPACK_IMPORTED_MODULE_6___default()('FORTMATIC_API_KEY')\n      },\n      portis: {\n        dAppId: _environment__WEBPACK_IMPORTED_MODULE_6___default()('PORTIS_DAPP_ID'),\n        chainId: [30, 31]\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, __jsx(WalletAugmented, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, children));\n}\n\n_c2 = WalletProvider;\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"WalletAugmented\");\n$RefreshReg$(_c2, \"WalletProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3dhbGxldC5qcz81ZDlhIl0sIm5hbWVzIjpbIkNIQUlOX0lEIiwiTnVtYmVyIiwiZW52IiwiV2FsbGV0QXVnbWVudGVkQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImxvZ0Vycm9yIiwiZXJyIiwibWVzc2FnZXMiLCJ3aW5kb3ciLCJhbGVydCIsImpvaW4iLCJjb25zb2xlIiwiZXJyb3IiLCJ1c2VXYWxsZXRBdWdtZW50ZWQiLCJ1c2VDb250ZXh0IiwiV2FsbGV0QXVnbWVudGVkIiwiY2hpbGRyZW4iLCJ3YWxsZXQiLCJ1c2VXYWxsZXQiLCJldGhlcmV1bSIsImNvbm5lY3QiLCJldGhlcnNQcm92aWRlciIsInVzZU1lbW8iLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJhdWdtZW50ZWRBY3RpdmF0ZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsImdldE5ldHdvcmtOYW1lIiwiY29udGV4dFZhbHVlIiwiYWN0aXZhdGUiLCJuZXR3b3JrTmFtZSIsIldhbGxldFByb3ZpZGVyIiwibG9nIiwiZm9ydG1hdGljIiwiYXBpS2V5IiwicG9ydGlzIiwiZEFwcElkIiwiY2hhaW5JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsbURBQUcsQ0FBQyxVQUFELENBQUosQ0FBdkI7QUFFQSxJQUFNQyxzQkFBc0IsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBL0I7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBb0M7QUFBQTs7QUFBQSxvQ0FBVkMsUUFBVTtBQUFWQSxZQUFVO0FBQUE7O0FBQ2xDO0FBQ0EsWUFBbUM7QUFDakNDLFVBQU0sQ0FBQ0MsS0FBUCxDQUFhRixRQUFRLENBQUNHLElBQVQsQ0FBYyxHQUFkLENBQWI7QUFDRDs7QUFDRCxjQUFBQyxPQUFPLEVBQUNDLEtBQVIsaUJBQWlCTCxRQUFqQixTQUEyQkQsR0FBM0I7QUFDRDs7QUFFRCxTQUFTTyxrQkFBVCxHQUE4QjtBQUFBOztBQUM1QixTQUFPQyx3REFBVSxDQUFDWixzQkFBRCxDQUFqQjtBQUNELEMsQ0FFRDs7O0dBSlNXLGtCOztBQUtULFNBQVNFLGVBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw0REFBUyxFQUF4QjtBQUNBLE1BQVFDLFFBQVIsR0FBOEJGLE1BQTlCLENBQVFFLFFBQVI7QUFBQSxNQUFrQkMsT0FBbEIsR0FBOEJILE1BQTlCLENBQWtCRyxPQUFsQjtBQUVBLE1BQU1DLGNBQWMsR0FBR0MscURBQU8sQ0FDNUI7QUFBQSxXQUFPSCxRQUFRLEdBQUcsSUFBSUksZ0RBQVMsQ0FBQ0MsWUFBZCxDQUEyQkwsUUFBM0IsQ0FBSCxHQUEwQyxJQUF6RDtBQUFBLEdBRDRCLEVBRTVCLENBQUNBLFFBQUQsQ0FGNEIsQ0FBOUI7QUFLQSxNQUFNTSxpQkFBaUIsR0FBR0MseURBQVc7QUFBQSxpTUFDbkMsaUJBQU1DLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFVVAsT0FBTyxDQUFDTyxJQUFELENBRmpCOztBQUFBO0FBQUEsK0NBR1csSUFIWDs7QUFBQTtBQUFBO0FBQUE7QUFLSTtBQUNBdEIsc0JBQVEsZ0ZBRXFEdUIsa0VBQWMsQ0FDdkU3QixRQUR1RSxDQUZuRSxpQ0FBUjtBQU5KOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRG1DOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BdUJuQyxDQUFDcUIsT0FBRCxDQXZCbUMsQ0FBckM7QUEwQkEsTUFBTVMsWUFBWSxHQUFHUCxxREFBTyxDQUMxQjtBQUFBLDJDQUNLTCxNQURMO0FBRUVhLGNBQVEsRUFBRUwsaUJBRlo7QUFHRU0saUJBQVcsRUFBRUgsa0VBQWMsQ0FBQzdCLFFBQUQsQ0FIN0I7QUFJRXNCLG9CQUFjLEVBQWRBO0FBSkY7QUFBQSxHQUQwQixFQU8xQixDQUFDSixNQUFELEVBQVNJLGNBQVQsRUFBeUJJLGlCQUF6QixDQVAwQixDQUE1QjtBQVVBLFNBQ0UsTUFBQyxzQkFBRCxDQUF3QixRQUF4QjtBQUFpQyxTQUFLLEVBQUVJLFlBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsUUFESCxDQURGO0FBS0Q7O0lBbERRRCxlO1VBQ1FHLG9EOzs7S0FEUkgsZTs7QUFvRFQsU0FBU2lCLGNBQVQsUUFBc0M7QUFBQSxNQUFaaEIsUUFBWSxTQUFaQSxRQUFZO0FBQ3BDTCxTQUFPLENBQUNzQixHQUFSLENBQVlsQyxRQUFaLEVBQXNCRSxtREFBRyxDQUFDLGdCQUFELENBQXpCO0FBQ0EsU0FDRSxNQUFDLDREQUFEO0FBQ0UsV0FBTyxFQUFFRixRQURYO0FBRUUsY0FBVSxFQUFFO0FBQ1ZtQyxlQUFTLEVBQUU7QUFBRUMsY0FBTSxFQUFFbEMsbURBQUcsQ0FBQyxtQkFBRDtBQUFiLE9BREQ7QUFFVm1DLFlBQU0sRUFBRTtBQUNOQyxjQUFNLEVBQUVwQyxtREFBRyxDQUFDLGdCQUFELENBREw7QUFFTnFDLGVBQU8sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMO0FBRkg7QUFGRSxLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQnRCLFFBQWxCLENBVkYsQ0FERjtBQWNEOztNQWhCUWdCLGM7QUFrQlQiLCJmaWxlIjoiLi9saWIvd2FsbGV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyBVc2VXYWxsZXRQcm92aWRlciwgdXNlV2FsbGV0IH0gZnJvbSAndXNlLXdhbGxldCdcbmltcG9ydCBlbnYgZnJvbSAnLi9lbnZpcm9ubWVudCdcbmltcG9ydCB7IGdldE5ldHdvcmtOYW1lIH0gZnJvbSAnLi93ZWIzLXV0aWxzJ1xuXG5jb25zdCBDSEFJTl9JRCA9IE51bWJlcihlbnYoJ0NIQUlOX0lEJykpXG5cbmNvbnN0IFdhbGxldEF1Z21lbnRlZENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcblxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyLCAuLi5tZXNzYWdlcykge1xuICAvLyBDaGVjayBmb3IgcHJlc2VuY2Ugb2Ygd2luZG93IHRvIGRldGVybWluZSBicm93c2VyIGVudiBiZWZvcmUgc2hvd2luZyBhbGVydFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuYWxlcnQobWVzc2FnZXMuam9pbignICcpKVxuICB9XG4gIGNvbnNvbGUuZXJyb3IoLi4ubWVzc2FnZXMsIGVycilcbn1cblxuZnVuY3Rpb24gdXNlV2FsbGV0QXVnbWVudGVkKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRBdWdtZW50ZWRDb250ZXh0KVxufVxuXG4vLyBBZGQgRXRoZXJzLmpzLCBlcnJvciBoYW5kbGluZyBhbmQgYW5hbHl0aWNzIHRyYWNraW5nIHRvIHRoZSB1c2VXYWxsZXQoKSBvYmplY3RcbmZ1bmN0aW9uIFdhbGxldEF1Z21lbnRlZCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlV2FsbGV0KClcbiAgY29uc3QgeyBldGhlcmV1bSwgY29ubmVjdCB9ID0gd2FsbGV0XG5cbiAgY29uc3QgZXRoZXJzUHJvdmlkZXIgPSB1c2VNZW1vKFxuICAgICgpID0+IChldGhlcmV1bSA/IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKSA6IG51bGwpLFxuICAgIFtldGhlcmV1bV1cbiAgKVxuXG4gIGNvbnN0IGF1Z21lbnRlZEFjdGl2YXRlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgdHlwZSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb25uZWN0KHR5cGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvL2lmIChlcnJvciBpbnN0YW5jZW9mIFVuc3VwcG9ydGVkQ2hhaW5FcnJvcikge1xuICAgICAgICBsb2dFcnJvcihcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBgVW5zdXBwb3J0ZWQgY2hhaW46IHBsZWFzZSBjb25uZWN0IHRvIHRoZSBuZXR3b3JrIGNhbGxlZCAke2dldE5ldHdvcmtOYW1lKFxuICAgICAgICAgICAgQ0hBSU5fSURcbiAgICAgICAgICApfSBpbiB5b3VyIEV0aGVyZXVtIFByb3ZpZGVyLmBcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgICAvL31cblxuICAgICAgICBsb2dFcnJvcihcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAnQW4gZXJyb3IgaGFwcGVuZWQgd2hpbGUgdHJ5aW5nIHRvIGFjdGl2YXRlIHRoZSB3YWxsZXQsIHBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbY29ubmVjdF1cbiAgKVxuXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIC4uLndhbGxldCxcbiAgICAgIGFjdGl2YXRlOiBhdWdtZW50ZWRBY3RpdmF0ZSxcbiAgICAgIG5ldHdvcmtOYW1lOiBnZXROZXR3b3JrTmFtZShDSEFJTl9JRCksXG4gICAgICBldGhlcnNQcm92aWRlcixcbiAgICB9KSxcbiAgICBbd2FsbGV0LCBldGhlcnNQcm92aWRlciwgYXVnbWVudGVkQWN0aXZhdGVdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxXYWxsZXRBdWdtZW50ZWRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2FsbGV0QXVnbWVudGVkQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBXYWxsZXRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc29sZS5sb2coQ0hBSU5fSUQsIGVudignUE9SVElTX0RBUFBfSUQnKSlcbiAgcmV0dXJuIChcbiAgICA8VXNlV2FsbGV0UHJvdmlkZXJcbiAgICAgIGNoYWluSWQ9e0NIQUlOX0lEfVxuICAgICAgY29ubmVjdG9ycz17e1xuICAgICAgICBmb3J0bWF0aWM6IHsgYXBpS2V5OiBlbnYoJ0ZPUlRNQVRJQ19BUElfS0VZJykgfSxcbiAgICAgICAgcG9ydGlzOiB7XG4gICAgICAgICAgZEFwcElkOiBlbnYoJ1BPUlRJU19EQVBQX0lEJyksXG4gICAgICAgICAgY2hhaW5JZDogWzMwLCAzMV0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxXYWxsZXRBdWdtZW50ZWQ+e2NoaWxkcmVufTwvV2FsbGV0QXVnbWVudGVkPlxuICAgIDwvVXNlV2FsbGV0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IHsgdXNlV2FsbGV0QXVnbWVudGVkLCBXYWxsZXRQcm92aWRlciB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/wallet.js\n");

/***/ })

})