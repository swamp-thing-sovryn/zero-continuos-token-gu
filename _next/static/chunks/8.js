(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

/***/ "./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js ***!
  \************************************************************************************/
/*! exports provided: AbstractConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AbstractConnector\", function() { return AbstractConnector; });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/types */ \"./node_modules/@web3-react/types/dist/types.esm.js\");\n\n\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nvar AbstractConnector =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inheritsLoose(AbstractConnector, _EventEmitter);\n\n  function AbstractConnector(_temp) {\n    var _this;\n\n    var _ref = _temp === void 0 ? {} : _temp,\n        supportedChainIds = _ref.supportedChainIds;\n\n    _this = _EventEmitter.call(this) || this;\n    _this.supportedChainIds = supportedChainIds;\n    return _this;\n  }\n\n  var _proto = AbstractConnector.prototype;\n\n  _proto.emitUpdate = function emitUpdate(update) {\n    if (true) {\n      console.log(\"Emitting '\" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Update + \"' with payload\", update);\n    }\n\n    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Update, update);\n  };\n\n  _proto.emitError = function emitError(error) {\n    if (true) {\n      console.log(\"Emitting '\" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Error + \"' with payload\", error);\n    }\n\n    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Error, error);\n  };\n\n  _proto.emitDeactivate = function emitDeactivate() {\n    if (true) {\n      console.log(\"Emitting '\" + _web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Deactivate + \"'\");\n    }\n\n    this.emit(_web3_react_types__WEBPACK_IMPORTED_MODULE_1__[\"ConnectorEvent\"].Deactivate);\n  };\n\n  return AbstractConnector;\n}(events__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]);\n\n\n//# sourceMappingURL=abstract-connector.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B3ZWIzLXJlYWN0L2Fic3RyYWN0LWNvbm5lY3Rvci9kaXN0L2Fic3RyYWN0LWNvbm5lY3Rvci5lc20uanM/MzQ0NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ2E7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDLGlDQUFpQyxnRUFBYztBQUMvQzs7QUFFQSxjQUFjLGdFQUFjO0FBQzVCOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QyxpQ0FBaUMsZ0VBQWM7QUFDL0M7O0FBRUEsY0FBYyxnRUFBYztBQUM1Qjs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0MsaUNBQWlDLGdFQUFjO0FBQy9DOztBQUVBLGNBQWMsZ0VBQWM7QUFDNUI7O0FBRUE7QUFDQSxDQUFDLENBQUMsbURBQVk7O0FBRWU7QUFDN0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHdlYjMtcmVhY3QvYWJzdHJhY3QtY29ubmVjdG9yL2Rpc3QvYWJzdHJhY3QtY29ubmVjdG9yLmVzbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgeyBDb25uZWN0b3JFdmVudCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3R5cGVzJztcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG52YXIgQWJzdHJhY3RDb25uZWN0b3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoQWJzdHJhY3RDb25uZWN0b3IsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIEFic3RyYWN0Q29ubmVjdG9yKF90ZW1wKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgc3VwcG9ydGVkQ2hhaW5JZHMgPSBfcmVmLnN1cHBvcnRlZENoYWluSWRzO1xuXG4gICAgX3RoaXMgPSBfRXZlbnRFbWl0dGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdXBwb3J0ZWRDaGFpbklkcyA9IHN1cHBvcnRlZENoYWluSWRzO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBYnN0cmFjdENvbm5lY3Rvci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmVtaXRVcGRhdGUgPSBmdW5jdGlvbiBlbWl0VXBkYXRlKHVwZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRW1pdHRpbmcgJ1wiICsgQ29ubmVjdG9yRXZlbnQuVXBkYXRlICsgXCInIHdpdGggcGF5bG9hZFwiLCB1cGRhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdChDb25uZWN0b3JFdmVudC5VcGRhdGUsIHVwZGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXRFcnJvciA9IGZ1bmN0aW9uIGVtaXRFcnJvcihlcnJvcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRW1pdHRpbmcgJ1wiICsgQ29ubmVjdG9yRXZlbnQuRXJyb3IgKyBcIicgd2l0aCBwYXlsb2FkXCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoQ29ubmVjdG9yRXZlbnQuRXJyb3IsIGVycm9yKTtcbiAgfTtcblxuICBfcHJvdG8uZW1pdERlYWN0aXZhdGUgPSBmdW5jdGlvbiBlbWl0RGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVtaXR0aW5nICdcIiArIENvbm5lY3RvckV2ZW50LkRlYWN0aXZhdGUgKyBcIidcIik7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KENvbm5lY3RvckV2ZW50LkRlYWN0aXZhdGUpO1xuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdENvbm5lY3Rvcjtcbn0oRXZlbnRFbWl0dGVyKTtcblxuZXhwb3J0IHsgQWJzdHJhY3RDb25uZWN0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0LWNvbm5lY3Rvci5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js\n");

/***/ }),

/***/ "./node_modules/@web3-react/portis-connector/dist/portis-connector.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@web3-react/portis-connector/dist/portis-connector.esm.js ***!
  \********************************************************************************/
/*! exports provided: PortisConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PortisConnector\", function() { return PortisConnector; });\n/* harmony import */ var _web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/abstract-connector */ \"./node_modules/@web3-react/abstract-connector/dist/abstract-connector.esm.js\");\n/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-invariant */ \"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\");\n\n\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n\n  _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nvar chainIdToNetwork = {\n  1: 'mainnet',\n  3: 'ropsten',\n  4: 'rinkeby',\n  5: 'goerli',\n  42: 'kovan',\n  100: 'xdai',\n  30: 'orchid',\n  31: 'orchidTestnet',\n  99: 'core',\n  77: 'sokol',\n  61: 'classic',\n  8: 'ubiq',\n  108: 'thundercore',\n  18: 'thundercoreTestnet',\n  163: 'lightstreams',\n  122: 'fuse',\n  15001: 'maticTestnet'\n};\nvar PortisConnector = /*#__PURE__*/function (_AbstractConnector) {\n  _inheritsLoose(PortisConnector, _AbstractConnector);\n\n  function PortisConnector(_ref) {\n    var _this;\n\n    var dAppId = _ref.dAppId,\n        networks = _ref.networks,\n        _ref$config = _ref.config,\n        config = _ref$config === void 0 ? {} : _ref$config;\n    var chainIds = networks.map(function (n) {\n      return typeof n === 'number' ? n : Number(n.chainId);\n    });\n    !chainIds.every(function (c) {\n      return !!chainIdToNetwork[c];\n    }) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false, \"One or more unsupported networks \" + networks) : undefined : void 0;\n    _this = _AbstractConnector.call(this, {\n      supportedChainIds: chainIds\n    }) || this;\n    _this.dAppId = dAppId;\n    _this.networks = networks;\n    _this.config = config;\n    _this.handleOnLogout = _this.handleOnLogout.bind(_assertThisInitialized(_this));\n    _this.handleOnActiveWalletChanged = _this.handleOnActiveWalletChanged.bind(_assertThisInitialized(_this));\n    _this.handleOnError = _this.handleOnError.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  var _proto = PortisConnector.prototype;\n\n  _proto.handleOnLogout = function handleOnLogout() {\n    if (true) {\n      console.log(\"Handling 'onLogout' event\");\n    }\n\n    this.emitDeactivate();\n  };\n\n  _proto.handleOnActiveWalletChanged = function handleOnActiveWalletChanged(account) {\n    if (true) {\n      console.log(\"Handling 'onActiveWalletChanged' event with payload\", account);\n    }\n\n    this.emitUpdate({\n      account: account\n    });\n  };\n\n  _proto.handleOnError = function handleOnError(error) {\n    if (true) {\n      console.log(\"Handling 'onError' event\");\n    }\n\n    this.emitError(error);\n  };\n\n  _proto.activate = function activate() {\n    try {\n      var _this3 = this;\n\n      var _temp3 = function _temp3() {\n        _this3.portis.onLogout(_this3.handleOnLogout);\n\n        _this3.portis.onActiveWalletChanged(_this3.handleOnActiveWalletChanged);\n\n        _this3.portis.onError(_this3.handleOnError);\n\n        return Promise.resolve(_this3.portis.provider.enable().then(function (accounts) {\n          return accounts[0];\n        })).then(function (account) {\n          return {\n            provider: _this3.portis.provider,\n            account: account\n          };\n        });\n      };\n\n      var _temp4 = function () {\n        if (!_this3.portis) {\n          return Promise.resolve(__webpack_require__.e(/*! import() */ 13).then(__webpack_require__.t.bind(null, /*! @portis/web3 */ \"./node_modules/@portis/web3/umd/index.js\", 7)).then(function (m) {\n            var _m$default;\n\n            return (_m$default = m == null ? void 0 : m[\"default\"]) != null ? _m$default : m;\n          })).then(function (Portis) {\n            _this3.portis = new Portis(_this3.dAppId, typeof _this3.networks[0] === 'number' ? chainIdToNetwork[_this3.networks[0]] : _this3.networks[0], _this3.config);\n          });\n        }\n      }();\n\n      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.getProvider = function getProvider() {\n    try {\n      var _this5 = this;\n\n      return Promise.resolve(_this5.portis.provider);\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.getChainId = function getChainId() {\n    try {\n      var _this7 = this;\n\n      return Promise.resolve(_this7.portis.provider.send('eth_chainId'));\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.getAccount = function getAccount() {\n    try {\n      var _this9 = this;\n\n      return Promise.resolve(_this9.portis.provider.send('eth_accounts').then(function (accounts) {\n        return accounts[0];\n      }));\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.deactivate = function deactivate() {\n    this.portis.onLogout(function () {});\n    this.portis.onActiveWalletChanged(function () {});\n    this.portis.onError(function () {});\n  };\n\n  _proto.changeNetwork = function changeNetwork(newNetwork, isGasRelayEnabled) {\n    try {\n      var _this11 = this;\n\n      if (typeof newNetwork === 'number') {\n        !!!chainIdToNetwork[newNetwork] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false, \"Invalid chainId \" + newNetwork) : undefined : void 0;\n\n        _this11.portis.changeNetwork(chainIdToNetwork[newNetwork], isGasRelayEnabled);\n\n        _this11.emitUpdate({\n          chainId: newNetwork\n        });\n      } else {\n        _this11.portis.changeNetwork(newNetwork, isGasRelayEnabled);\n\n        _this11.emitUpdate({\n          chainId: Number(newNetwork.chainId)\n        });\n      }\n\n      return Promise.resolve();\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  _proto.close = function close() {\n    try {\n      var _this13 = this;\n\n      return Promise.resolve(_this13.portis.logout()).then(function () {\n        _this13.emitDeactivate();\n      });\n    } catch (e) {\n      return Promise.reject(e);\n    }\n  };\n\n  return PortisConnector;\n}(_web3_react_abstract_connector__WEBPACK_IMPORTED_MODULE_0__[\"AbstractConnector\"]);\n\n\n//# sourceMappingURL=portis-connector.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3IvZGlzdC9wb3J0aXMtY29ubmVjdG9yLmVzbS5qcz8yNGYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1FO0FBQzVCOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSyxJQUFJLEtBQXFDLEdBQUcsOERBQVMsMERBQTBELFNBQWdCO0FBQ3BJO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsbUpBQXNCO0FBQ3ZEOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkMsb0RBQW9EO0FBQ3BELHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsS0FBcUMsR0FBRyw4REFBUywyQ0FBMkMsU0FBZ0I7O0FBRXRKOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsZ0ZBQWlCOztBQUVRO0FBQzNCIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0B3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3IvZGlzdC9wb3J0aXMtY29ubmVjdG9yLmVzbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvYWJzdHJhY3QtY29ubmVjdG9yJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG5cbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbnZhciBjaGFpbklkVG9OZXR3b3JrID0ge1xuICAxOiAnbWFpbm5ldCcsXG4gIDM6ICdyb3BzdGVuJyxcbiAgNDogJ3JpbmtlYnknLFxuICA1OiAnZ29lcmxpJyxcbiAgNDI6ICdrb3ZhbicsXG4gIDEwMDogJ3hkYWknLFxuICAzMDogJ29yY2hpZCcsXG4gIDMxOiAnb3JjaGlkVGVzdG5ldCcsXG4gIDk5OiAnY29yZScsXG4gIDc3OiAnc29rb2wnLFxuICA2MTogJ2NsYXNzaWMnLFxuICA4OiAndWJpcScsXG4gIDEwODogJ3RodW5kZXJjb3JlJyxcbiAgMTg6ICd0aHVuZGVyY29yZVRlc3RuZXQnLFxuICAxNjM6ICdsaWdodHN0cmVhbXMnLFxuICAxMjI6ICdmdXNlJyxcbiAgMTUwMDE6ICdtYXRpY1Rlc3RuZXQnXG59O1xudmFyIFBvcnRpc0Nvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Fic3RyYWN0Q29ubmVjdG9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvcnRpc0Nvbm5lY3RvciwgX0Fic3RyYWN0Q29ubmVjdG9yKTtcblxuICBmdW5jdGlvbiBQb3J0aXNDb25uZWN0b3IoX3JlZikge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBkQXBwSWQgPSBfcmVmLmRBcHBJZCxcbiAgICAgICAgbmV0d29ya3MgPSBfcmVmLm5ldHdvcmtzLFxuICAgICAgICBfcmVmJGNvbmZpZyA9IF9yZWYuY29uZmlnLFxuICAgICAgICBjb25maWcgPSBfcmVmJGNvbmZpZyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJGNvbmZpZztcbiAgICB2YXIgY2hhaW5JZHMgPSBuZXR3b3Jrcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogTnVtYmVyKG4uY2hhaW5JZCk7XG4gICAgfSk7XG4gICAgIWNoYWluSWRzLmV2ZXJ5KGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gISFjaGFpbklkVG9OZXR3b3JrW2NdO1xuICAgIH0pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIk9uZSBvciBtb3JlIHVuc3VwcG9ydGVkIG5ldHdvcmtzIFwiICsgbmV0d29ya3MpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICBfdGhpcyA9IF9BYnN0cmFjdENvbm5lY3Rvci5jYWxsKHRoaXMsIHtcbiAgICAgIHN1cHBvcnRlZENoYWluSWRzOiBjaGFpbklkc1xuICAgIH0pIHx8IHRoaXM7XG4gICAgX3RoaXMuZEFwcElkID0gZEFwcElkO1xuICAgIF90aGlzLm5ldHdvcmtzID0gbmV0d29ya3M7XG4gICAgX3RoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIF90aGlzLmhhbmRsZU9uTG9nb3V0ID0gX3RoaXMuaGFuZGxlT25Mb2dvdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlT25BY3RpdmVXYWxsZXRDaGFuZ2VkID0gX3RoaXMuaGFuZGxlT25BY3RpdmVXYWxsZXRDaGFuZ2VkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZU9uRXJyb3IgPSBfdGhpcy5oYW5kbGVPbkVycm9yLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQb3J0aXNDb25uZWN0b3IucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVPbkxvZ291dCA9IGZ1bmN0aW9uIGhhbmRsZU9uTG9nb3V0KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ29uTG9nb3V0JyBldmVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXREZWFjdGl2YXRlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZU9uQWN0aXZlV2FsbGV0Q2hhbmdlZCA9IGZ1bmN0aW9uIGhhbmRsZU9uQWN0aXZlV2FsbGV0Q2hhbmdlZChhY2NvdW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnb25BY3RpdmVXYWxsZXRDaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgYWNjb3VudCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0VXBkYXRlKHtcbiAgICAgIGFjY291bnQ6IGFjY291bnRcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlT25FcnJvciA9IGZ1bmN0aW9uIGhhbmRsZU9uRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdvbkVycm9yJyBldmVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXRFcnJvcihlcnJvcik7XG4gIH07XG5cbiAgX3Byb3RvLmFjdGl2YXRlID0gZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RlbXAzID0gZnVuY3Rpb24gX3RlbXAzKCkge1xuICAgICAgICBfdGhpczMucG9ydGlzLm9uTG9nb3V0KF90aGlzMy5oYW5kbGVPbkxvZ291dCk7XG5cbiAgICAgICAgX3RoaXMzLnBvcnRpcy5vbkFjdGl2ZVdhbGxldENoYW5nZWQoX3RoaXMzLmhhbmRsZU9uQWN0aXZlV2FsbGV0Q2hhbmdlZCk7XG5cbiAgICAgICAgX3RoaXMzLnBvcnRpcy5vbkVycm9yKF90aGlzMy5oYW5kbGVPbkVycm9yKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90aGlzMy5wb3J0aXMucHJvdmlkZXIuZW5hYmxlKCkudGhlbihmdW5jdGlvbiAoYWNjb3VudHMpIHtcbiAgICAgICAgICByZXR1cm4gYWNjb3VudHNbMF07XG4gICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChhY2NvdW50KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3ZpZGVyOiBfdGhpczMucG9ydGlzLnByb3ZpZGVyLFxuICAgICAgICAgICAgYWNjb3VudDogYWNjb3VudFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIF90ZW1wNCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpczMucG9ydGlzKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbXBvcnQoJ0Bwb3J0aXMvd2ViMycpLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHZhciBfbSRkZWZhdWx0O1xuXG4gICAgICAgICAgICByZXR1cm4gKF9tJGRlZmF1bHQgPSBtID09IG51bGwgPyB2b2lkIDAgOiBtW1wiZGVmYXVsdFwiXSkgIT0gbnVsbCA/IF9tJGRlZmF1bHQgOiBtO1xuICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChQb3J0aXMpIHtcbiAgICAgICAgICAgIF90aGlzMy5wb3J0aXMgPSBuZXcgUG9ydGlzKF90aGlzMy5kQXBwSWQsIHR5cGVvZiBfdGhpczMubmV0d29ya3NbMF0gPT09ICdudW1iZXInID8gY2hhaW5JZFRvTmV0d29ya1tfdGhpczMubmV0d29ya3NbMF1dIDogX3RoaXMzLm5ldHdvcmtzWzBdLCBfdGhpczMuY29uZmlnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90ZW1wNCAmJiBfdGVtcDQudGhlbiA/IF90ZW1wNC50aGVuKF90ZW1wMykgOiBfdGVtcDMoX3RlbXA0KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiBnZXRQcm92aWRlcigpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoX3RoaXM1LnBvcnRpcy5wcm92aWRlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0Q2hhaW5JZCA9IGZ1bmN0aW9uIGdldENoYWluSWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90aGlzNy5wb3J0aXMucHJvdmlkZXIuc2VuZCgnZXRoX2NoYWluSWQnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0QWNjb3VudCA9IGZ1bmN0aW9uIGdldEFjY291bnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90aGlzOS5wb3J0aXMucHJvdmlkZXIuc2VuZCgnZXRoX2FjY291bnRzJykudGhlbihmdW5jdGlvbiAoYWNjb3VudHMpIHtcbiAgICAgICAgcmV0dXJuIGFjY291bnRzWzBdO1xuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMucG9ydGlzLm9uTG9nb3V0KGZ1bmN0aW9uICgpIHt9KTtcbiAgICB0aGlzLnBvcnRpcy5vbkFjdGl2ZVdhbGxldENoYW5nZWQoZnVuY3Rpb24gKCkge30pO1xuICAgIHRoaXMucG9ydGlzLm9uRXJyb3IoZnVuY3Rpb24gKCkge30pO1xuICB9O1xuXG4gIF9wcm90by5jaGFuZ2VOZXR3b3JrID0gZnVuY3Rpb24gY2hhbmdlTmV0d29yayhuZXdOZXR3b3JrLCBpc0dhc1JlbGF5RW5hYmxlZCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV3TmV0d29yayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgISEhY2hhaW5JZFRvTmV0d29ya1tuZXdOZXR3b3JrXSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJJbnZhbGlkIGNoYWluSWQgXCIgKyBuZXdOZXR3b3JrKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgICAgX3RoaXMxMS5wb3J0aXMuY2hhbmdlTmV0d29yayhjaGFpbklkVG9OZXR3b3JrW25ld05ldHdvcmtdLCBpc0dhc1JlbGF5RW5hYmxlZCk7XG5cbiAgICAgICAgX3RoaXMxMS5lbWl0VXBkYXRlKHtcbiAgICAgICAgICBjaGFpbklkOiBuZXdOZXR3b3JrXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMxMS5wb3J0aXMuY2hhbmdlTmV0d29yayhuZXdOZXR3b3JrLCBpc0dhc1JlbGF5RW5hYmxlZCk7XG5cbiAgICAgICAgX3RoaXMxMS5lbWl0VXBkYXRlKHtcbiAgICAgICAgICBjaGFpbklkOiBOdW1iZXIobmV3TmV0d29yay5jaGFpbklkKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfdGhpczEzID0gdGhpcztcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfdGhpczEzLnBvcnRpcy5sb2dvdXQoKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTMuZW1pdERlYWN0aXZhdGUoKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvcnRpc0Nvbm5lY3Rvcjtcbn0oQWJzdHJhY3RDb25uZWN0b3IpO1xuXG5leHBvcnQgeyBQb3J0aXNDb25uZWN0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcnRpcy1jb25uZWN0b3IuZXNtLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@web3-react/portis-connector/dist/portis-connector.esm.js\n");

/***/ })

}]);