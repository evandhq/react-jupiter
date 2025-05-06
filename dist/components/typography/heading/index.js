"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _theme = _interopRequireDefault(require("../theme"));
var _index = require("./index.styles");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}



const { sizes } = _theme.default;

const Heading = (_ref) =>





{let { size = sizes.medium, level = 1, color = 'default', children, ...rest } = _ref;
  const renderLevel = () => {
    if (children === undefined) {
      return null;
    }
    switch (level) {
      case 6:
        return /*#__PURE__*/_react.default.createElement(_index.H6, _extends({ size: size, "data-test": "h6-tag", color: color }, rest), children);
      case 5:
        return /*#__PURE__*/_react.default.createElement(_index.H5, _extends({ size: size, "data-test": "h5-tag", color: color }, rest), children);
      case 4:
        return /*#__PURE__*/_react.default.createElement(_index.H4, _extends({ size: size, "data-test": "h4-tag", color: color }, rest), children);
      case 3:
        return /*#__PURE__*/_react.default.createElement(_index.H3, _extends({ size: size, "data-test": "h3-tag", color: color }, rest), children);
      case 2:
        return /*#__PURE__*/_react.default.createElement(_index.H2, _extends({ size: size, "data-test": "h2-tag", color: color }, rest), children);
      case 1:
      default:
        return /*#__PURE__*/_react.default.createElement(_index.H1, _extends({ size: size, "data-test": "h1-tag", color: color }, rest), children);
    }
  };

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null),
    renderLevel()
    ));

};

Heading.propTypes = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ).isRequired,
  size: _propTypes.default.oneOf([sizes.large, sizes.medium, sizes.small]),
  level: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6]),
  color: _propTypes.default.oneOf(['red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'default'])
};var _default = exports.default =

Heading;