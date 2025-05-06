"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _icon = _interopRequireDefault(require("../../icon"));
var _typography = require("../../typography");
var _index = _interopRequireDefault(require("./index.style"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}









const ProductProperty = (props) => {
  const {
    iconName,
    text,
    color,
    iconColor,
    link,
    ...rest
  } = props;

  const renderWithLink = () => /*#__PURE__*/
  _react.default.createElement("a", { href: link }, /*#__PURE__*/
  _react.default.createElement(_icon.default, { name: iconName, size: "sm", color: iconColor, stickyRight: true }), /*#__PURE__*/
  _react.default.createElement(_typography.Text, { color: color, size: "12" },
  text
  )
  );


  const renderWithoutLink = () => /*#__PURE__*/
  _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
  _react.default.createElement(_icon.default, { name: iconName, size: "sm", color: iconColor, stickyRight: true }), /*#__PURE__*/
  _react.default.createElement(_typography.Text, { color: color, size: "12" },
  text
  )
  );


  return (/*#__PURE__*/
    _react.default.createElement(_index.default, rest,
    link ? renderWithLink() : renderWithoutLink()
    ));

};var _default = exports.default =

ProductProperty;