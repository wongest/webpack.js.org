"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 3835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MessageBar)
});

// EXTERNAL MODULE: ./styles/icons/cross.svg
var cross = __webpack_require__(151);
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(3615);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/dist/mdx-react.modern.js
var mdx_react_modern = __webpack_require__(2682);
;// CONCATENATED MODULE: ./components/NotificationBar/Notification.mdx
var _excluded = ["components"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */
/* @jsx mdx */
/* @jsxFrag mdx.Fragment */
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
    props = _objectWithoutProperties(_ref, _excluded);
  return (0,mdx_react_modern/* mdx */.kt)(MDXLayout, _extends({
    components: components
  }, props), (0,mdx_react_modern/* mdx */.kt)("p", null, "Webpack 5 现已正式发布。请阅读我们的 ", (0,mdx_react_modern/* mdx */.kt)("a", {
    href: "/blog/2020-10-10-webpack-5-release/",
    parentName: "p"
  }, "发布公告"), "。如还未准备升级，请阅读 ", (0,mdx_react_modern/* mdx */.kt)("a", {
    href: "https://v4.webpack.docschina.org/",
    parentName: "p"
  }, "webpack 4 文档"), "。"));
}
MDXContent.isMDXComponent = true;
/* harmony default export */ const Notification = (MDXContent);
// EXTERNAL MODULE: ./components/NotificationBar/NotificationBar.jsx
var NotificationBar = __webpack_require__(3629);
// EXTERNAL MODULE: ../node_modules/react-spring/dist/react-spring.modern.mjs + 4 modules
var react_spring_modern = __webpack_require__(372);
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
;// CONCATENATED MODULE: ./components/NotificationBar/MessageBar.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









MessageBar.propTypes = {
  onClose: (prop_types_default()).func
};
function MessageBar(props) {
  var _useState = (0,react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var listTransitions = (0,react_spring_modern/* useTransition */.Yz)(list, {
    config: react_spring_modern/* config.gentle */.vc.gentle,
    from: {
      opacity: 0,
      transform: 'translate3d(-50%, 0px, 0px)'
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0px, 0px, 0px)'
    },
    keys: list.map(function (item, index) {
      return index;
    })
  });
  (0,react.useEffect)(function () {
    setList(['']);
  }, []);
  var close = function close() {
    localStorage.setItem('notification-dismissed', NotificationBar/* version */.i8);
    props.onClose();
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: listTransitions(function (styles) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react_spring_modern/* animated.div */.q.div, {
        className: "flex items-center rounded z-50 fixed left-[1px] right-[1px] bottom-[1px] bg-white border-2 border-solid border-gray-700 max-w-full pl-20 py-20 shadow-2xl md:left-20 md:right-auto md:bottom-20 md:max-w-[300px] dark:bg-gray-500 print:hidden",
        style: styles,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Notification, {}), NotificationBar/* localStorageIsEnabled */.Bn ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          role: "button",
          className: "px-20 self-stretch inline-flex items-center cursor-pointer",
          onClick: close,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(cross/* default */.Z, {
            "aria-label": "Dismiss",
            className: "fill-current text-gray-300 dark:text-white transform duration-200 hover:text-gray-700",
            width: 25
          })
        }) : null]
      });
    })
  });
}

/***/ })

};
;