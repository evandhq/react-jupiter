"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _theme = _interopRequireDefault(require("../theme"));
var _text = _interopRequireDefault(require("../text"));
var _index = _interopRequireDefault(require("./index.styles"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const generateLink = (_ref) =>








{let { href = '', target = '_self', size = 14, strong = false, emphasized = false, linkContent, children, ...rest } = _ref;
  if (typeof href === 'function') {
    return href(/*#__PURE__*/
      _react.default.createElement(_text.default, _extends({
        size: size,
        strong: strong,
        emphasized: emphasized,
        color: "blue" },
      rest),

      linkContent
      )
    );
  }
  return (/*#__PURE__*/
    _react.default.createElement(_index.default, _extends({ href: href, target: target, "data-test": "external" }, rest), /*#__PURE__*/
    _react.default.createElement(_text.default, {
      size: size,
      strong: strong,
      emphasized: emphasized,
      color: "blue" },

    children
    )
    ));

};

generateLink.propTypes = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ),
  href: _propTypes.default.oneOfType([
  _propTypes.default.func,
  _propTypes.default.string]
  ),
  linkContent: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ),
  target: _propTypes.default.oneOf(['_self', '_blank', '_parent', '_top']),
  size: _propTypes.default.number,
  strong: _propTypes.default.bool,
  emphasized: _propTypes.default.bool
};

const Link = (props) => {
  const { children, linkContent } = props;
  if (children === undefined && linkContent === undefined) return null;
  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null),
    generateLink(props)
    ));

};

Link.propTypes = generateLink.propTypes;

Link.defaultProps = generateLink.defaultProps;var _default = exports.default =

Link;