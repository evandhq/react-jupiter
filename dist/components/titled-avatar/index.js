"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireDefault(require("react"));
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _avatar = _interopRequireDefault(require("../avatar"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}











const TitledAvatar = (_ref) =>





{let { title, avatar, renderAvatarLink = () => false, avatarSize = 'md', titleSize = 12 } = _ref;
  const renderTitle = () => /*#__PURE__*/
  _react.default.createElement(_index.SmallTitle, { size: titleSize }, title);


  if (renderAvatarLink) {
    return renderAvatarLink(/*#__PURE__*/
      _react.default.createElement(_index.Container, { "data-test": "titled-avatar" }, /*#__PURE__*/
      _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
      _react.default.createElement(_avatar.default, { src: avatar, size: avatarSize, sizeMobile: avatarSize, round: true }),
      renderTitle()
      )
    );
  }

  return (/*#__PURE__*/
    _react.default.createElement(_index.Container, { "data-test": "titled-avatar" }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_avatar.default, { src: avatar, size: avatarSize, sizeMobile: avatarSize, round: true }),
    renderTitle()
    ));

};var _default = exports.default =

TitledAvatar;