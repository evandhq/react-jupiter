"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _button = _interopRequireDefault(require("../button"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}








function ActionCell(_ref) {let { callToActions } = _ref;
  return (/*#__PURE__*/
    _react.default.createElement("td", null, /*#__PURE__*/
    _react.default.createElement(_index.ActionCellContainer, null, /*#__PURE__*/
    _react.default.createElement(_button.default, _extends({},
    callToActions[0].props, {
      htmlType: "button",
      mainColor: "blue",
      styleType: "secondary",
      size: "sm",
      wide: true }),

    callToActions[0].text
    ),

    callToActions.length > 1 && /*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
    _react.default.createElement(_index.ActionsContainer, null,
    callToActions.map((item, index) => {
      if (index === 0) {
        return null;
      }
      return (/*#__PURE__*/
        _react.default.createElement(_button.default, _extends({
          key: item.text },
        item.props, {
          htmlType: "button",
          mainColor: "blue",
          styleType: "tertiary",
          size: "sm",
          wide: true }),

        item.text
        ));

    })
    )

    )

    )
    ));

}var _default = exports.default =

ActionCell;