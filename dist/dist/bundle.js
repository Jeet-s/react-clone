/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _react_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react/react */ \"./react/react.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction Button(_ref) {\n  var count = _ref.count,\n    setCount = _ref.setCount,\n    text = _ref.text;\n  return /*#__PURE__*/_react_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, text);\n}\nfunction App() {\n  var _React$useState = _react_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].useState(0),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    count = _React$useState2[0],\n    setCount = _React$useState2[1];\n  return /*#__PURE__*/_react_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    id: \"div\"\n  }, count, /*#__PURE__*/_react_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Button, {\n    count: count,\n    setCount: setCount,\n    text: click\n  }));\n}\n_react_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render( /*#__PURE__*/_react_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(App, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://react/./index.jsx?");

/***/ }),

/***/ "./react/react.js":
/*!************************!*\
  !*** ./react/react.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useState */ \"./react/useState.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./react/render.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/** @jsx createElement */\n\n\n\nfunction createElement(type, props) {\n  if (typeof type === \"function\") {\n    var newType = type(props);\n    return createElement(newType.type, _objectSpread(_objectSpread({}, newType.props), props ? Object.keys(props).filter(function (prop) {\n      return prop.startsWith(\"on\") && window.hasOwnProperty(prop.toLowerCase());\n    }).reduce(function (acc, prop) {\n      acc[prop] = props[prop];\n      return acc;\n    }, {}) : {}), newType.props.children);\n  }\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    $$typeof: Symbol(\"react.element\"),\n    type: type,\n    key: (props === null || props === void 0 ? void 0 : props.key) || null,\n    props: _objectSpread(_objectSpread({}, props), {}, {\n      children: (children === null || children === void 0 ? void 0 : children.length) == 1 ? children[0] : children\n    })\n  };\n}\nvar React = {\n  render: _render__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  createElement: createElement,\n  useState: _useState__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (React);\n\n//# sourceURL=webpack://react/./react/react.js?");

/***/ }),

/***/ "./react/render.js":
/*!*************************!*\
  !*** ./react/render.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render(element, container) {\n  var domElement;\n  if (typeof element === \"string\" || typeof element === \"number\") {\n    domElement = document.createTextNode(element);\n  } else {\n    domElement = document.createElement(element.type);\n  }\n  if (element.props) {\n    Object.keys(element.props).forEach(function (prop) {\n      if (prop == \"style\") {\n        Object.keys(element.props[prop]).forEach(function (key) {\n          domElement.style[key] = element.props[prop][key];\n        });\n      } else if (prop.startsWith(\"on\") && window.hasOwnProperty(prop.toLowerCase())) {\n        domElement.addEventListener(prop.slice(2).toLowerCase(), element.props[prop]);\n      } else if (prop != \"children\") {\n        domElement[prop] = element.props[prop];\n      }\n    });\n    var children = element.props.children;\n    if (typeof children === \"string\" || typeof children === \"number\") {\n      var textNode = document.createTextNode(children);\n      domElement.appendChild(textNode);\n    } else {\n      var _children;\n      children = ((_children = children) === null || _children === void 0 ? void 0 : _children.length) > 1 ? children : [children];\n      children.forEach(function (child) {\n        render(child, domElement);\n      });\n    }\n  }\n  container.appendChild(domElement);\n}\n\n//# sourceURL=webpack://react/./react/render.js?");

/***/ }),

/***/ "./react/useState.js":
/*!***************************!*\
  !*** ./react/useState.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useState)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./react/render.js\");\n\nvar hooksState = [];\nvar currentStateIndex = 0;\nfunction useState(initialValue) {\n  console.log(\"useState\", initialValue);\n  if (hooksState[currentStateIndex]) {\n    currentStateIndex++;\n    return hooksState[currentStateIndex];\n  }\n  var pair = [initialValue, setState];\n  function setState(newValue) {\n    console.log(\"setState\", newValue);\n    if (typeof newValue === \"function\") {\n      pair[0] = newValue(pair[0]);\n    } else {\n      pair[0] = newValue;\n    }\n  }\n  currentStateIndex++;\n  return pair;\n}\n\n//# sourceURL=webpack://react/./react/useState.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.jsx");
/******/ 	
/******/ })()
;