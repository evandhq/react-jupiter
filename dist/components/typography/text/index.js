"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _theme = _interopRequireDefault(require("../theme"));
var _index = require("./index.styles");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}



const renderString = (_ref) =>
















{let { size = _theme.default.defaultSize, color = 'default', underline = false, lineThrough = false, strong = false, bold = false, fontWight = 400, emphasized = false, subScript = false, supScript = false, marked = false, label = false, isDisplayBlock = false, isCutWithEllipsis = false, children, ...rest } = _ref;
  if (children === undefined) return null;

  let typeOfText;
  if (strong) typeOfText = 'strong';else
  if (emphasized) typeOfText = 'emphasized';else
  if (subScript) typeOfText = 'subScript';else
  if (supScript) typeOfText = 'supScript';else
  typeOfText = 'span';

  switch (typeOfText) {
    case 'strong':
      return (/*#__PURE__*/
        _react.default.createElement(_index.Strong, _extends({
          size: size,
          color: color,
          underline: underline && !lineThrough,
          lineThrough: lineThrough && !underline,
          emphasized: emphasized,
          marked: marked && !label,
          isLabel: label && !marked,
          "data-test": "strong" },
        rest),

        children
        ));

    case 'emphasized':
      return (/*#__PURE__*/
        _react.default.createElement(_index.Emphasized, _extends({
          size: size,
          color: color,
          underline: underline && !lineThrough,
          lineThrough: lineThrough && !underline,
          bold: bold,
          marked: marked && !label,
          isLabel: label && !marked,
          "data-test": "emphasized" },
        rest),

        children
        ));

    case 'subScript':
      return (/*#__PURE__*/
        _react.default.createElement(_index.SubScript, _extends({ color: color, "data-test": "subScript" }, rest),
        children
        ));

    case 'supScript':
      return (/*#__PURE__*/
        _react.default.createElement(_index.SupScript, _extends({ color: color, "data-test": "supScript" }, rest),
        children
        ));

    case 'span':
    default:
      return (/*#__PURE__*/
        _react.default.createElement(_index.String, _extends({
          spanSize: size,
          spanColor: color,
          underline: underline && !lineThrough,
          lineThrough: lineThrough && !underline,
          marked: marked && !label,
          isLabel: label && !marked,
          bold: bold,
          fontWight: fontWight,
          "data-test": "span",
          isDisplayBlock: isDisplayBlock,
          isCutWithEllipsis: isCutWithEllipsis },
        rest),

        children
        ));

  }
};

renderString.propTypes = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ).isRequired,
  size: _propTypes.default.number,
  color: _propTypes.default.oneOf(['red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'black']),
  underline: _propTypes.default.bool,
  lineThrough: _propTypes.default.bool,
  strong: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  emphasized: _propTypes.default.bool,
  subScript: _propTypes.default.bool,
  supScript: _propTypes.default.bool,
  marked: _propTypes.default.bool,
  label: _propTypes.default.bool,
  isDisplayBlock: _propTypes.default.bool,
  isCutWithEllipsis: _propTypes.default.bool
};

const Text = (props) => /*#__PURE__*/
_react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
_react.default.createElement(_globalStyle.default, null),
renderString(props)
);


Text.prototype = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ).isRequired,
  size: _propTypes.default.number,
  color: _propTypes.default.oneOf(['red', 'green', 'blue', 'yellow', 'white', 'darkBlue']),
  underline: _propTypes.default.bool,
  lineThrough: _propTypes.default.bool,
  strong: _propTypes.default.bool,
  bold: _propTypes.default.bool,
  emphasized: _propTypes.default.bool,
  subScript: _propTypes.default.bool,
  supScript: _propTypes.default.bool,
  marked: _propTypes.default.bool,
  label: _propTypes.default.bool,
  isDisplayBlock: _propTypes.default.bool,
  isCutWithEllipsis: _propTypes.default.bool
};

Text.defaultProps = renderString.defaultProps;var _default = exports.default =

Text;