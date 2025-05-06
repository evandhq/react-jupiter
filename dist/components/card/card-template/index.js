"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../../globalStyle"));
var _themes = _interopRequireDefault(require("../../themes"));
var _index = _interopRequireDefault(require("./index.style"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const CardTemplate = (_ref) =>








{let { level = 1, hoverToLevel = 1, maxWidth = null, renderLink = undefined, direction = 'vertical', background = '', children, ...rest } = _ref;
  const renderContent = () => {
    if (renderLink) {
      return renderLink(/*#__PURE__*/
        _react.default.createElement(_index.default, _extends({
          maxWidth: maxWidth,
          level: level,
          hoverToLevel: hoverToLevel,
          direction: direction,
          "data-test": "card-template",
          background: background },
        rest),

        children
        )
      );
    }
    return (/*#__PURE__*/
      _react.default.createElement(_index.default, _extends({
        maxWidth: maxWidth,
        level: level,
        hoverToLevel: hoverToLevel,
        direction: direction,
        "data-test": "card-template",
        background: background },
      rest),

      children
      ));

  };

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _themes.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null),
    renderContent()
    ));

};

CardTemplate.propTypes = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ).isRequired,
  level: _propTypes.default.oneOf([1, 2, 3, 4, 5]),
  hoverToLevel: _propTypes.default.number,
  maxWidth: _propTypes.default.oneOfType([
  _propTypes.default.number,
  _propTypes.default.string]
  ),
  renderLink: _propTypes.default.func,
  direction: _propTypes.default.oneOf(['vertical', 'horizontal']),
  background: _propTypes.default.string
};var _default = exports.default =

CardTemplate;