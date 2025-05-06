"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _button = _interopRequireDefault(require("../../button"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}









const Buttons = (props) => {
  const {
    onClickFollowMe,
    onClickConnectUs,
    isFollowed
  } = props;

  return (/*#__PURE__*/
    _react.default.createElement(_index.LTRContainer, null, /*#__PURE__*/
    _react.default.createElement(_button.default, {
      className: "follow-button",
      styleType: "primary",
      mainColor: "blue",
      htmlType: "button",
      size: "sm",
      width: "100px",
      onClick: onClickFollowMe,
      style: { marginLeft: '12px' } },

    isFollowed ? 'دنبال میکنید' : 'دنبال کنید'
    ), /*#__PURE__*/
    _react.default.createElement(_button.default, {
      styleType: "secondary",
      htmlType: "button",
      mainColor: "blue",
      width: "100px",
      size: "sm",
      onClick: onClickConnectUs },
    "\u062A\u0645\u0627\u0633"

    )
    ));

};var _default = exports.default =

Buttons;