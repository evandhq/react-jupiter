"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _titledAvatar = _interopRequireDefault(require("../titled-avatar"));
var _index = require("./index.style");
var _responsive = _interopRequireDefault(require("../responsive"));
var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}















const ProductOwner = (_ref) => {let {
    name,
    avatar,
    isLoading,
    isFollowed = false,
    renderTitledAvatarLink = null,
    renderDescriptionLink = null,
    onClickFollowMe = () => false,
    onClickConnectUs = () => {}
  } = _ref;return (/*#__PURE__*/
    _react.default.createElement("div", { "data-test": "product-owner" }, /*#__PURE__*/
    _react.default.createElement(_responsive.default, { option: { lessThan: _themes.default.breakpoints.sm } }, /*#__PURE__*/
    _react.default.createElement(_titledAvatar.default, {
      title: name,
      avatar: avatar,
      avatarSize: _themes.default.sizes.small,
      titleSize: 10,
      renderAvatarLink: renderTitledAvatarLink }
    )
    ), /*#__PURE__*/
    _react.default.createElement(_responsive.default, { option: { greaterThan: _themes.default.breakpoints.sm } }, /*#__PURE__*/
    _react.default.createElement(_titledAvatar.default, {
      title: name,
      avatar: avatar,
      avatarSize: _themes.default.sizes.small,
      titleSize: 12,
      renderAvatarLink: renderTitledAvatarLink }
    )
    ), /*#__PURE__*/
    _react.default.createElement(_responsive.default, { option: { greaterThan: _themes.default.breakpoints.md } }, /*#__PURE__*/
    _react.default.createElement(_index.ButtonContainer, null, /*#__PURE__*/
    _react.default.createElement(_index.StyledButton, {
      className: "follow-button",
      styleType: isFollowed ? 'secondary' : 'primary',
      htmlType: "button",
      mainColor: "blue",
      size: _themes.default.sizes.small,
      isLoading: isLoading,
      onClick: onClickFollowMe },

    isFollowed ? 'دنبال میکنید' : 'دنبال کنید'
    ), /*#__PURE__*/
    _react.default.createElement(_index.StyledButton, {
      styleType: "secondary",
      htmlType: "button",
      mainColor: "blue",
      size: "sm",
      onClick: onClickConnectUs },
    "\u062A\u0645\u0627\u0633"

    ), /*#__PURE__*/
    _react.default.createElement(_index.StyledButton, {
      styleType: "tertiary",
      htmlType: "button",
      size: "sm",
      renderLink: renderDescriptionLink },
    "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"

    )
    )
    )
    ));};var _default = exports.default =


ProductOwner;