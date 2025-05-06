"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Display = (props) => {
  const renderDisplay = () => {
    const { children } = props;
    if (children === undefined) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement(_index.DisplayStyle, props, children);
  };

  return (/*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null,
    renderDisplay()
    ));

};

Display.propTypes = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ).isRequired,
  display: _propTypes.default.string,
  width: _propTypes.default.string,
  widthMobile: _propTypes.default.string,
  justifyContent: _propTypes.default.string,
  justifyContentMobile: _propTypes.default.string,
  alignItems: _propTypes.default.string,
  flexDirection: _propTypes.default.string,
  flexDirectionMobile: _propTypes.default.string,
  wrap: _propTypes.default.string,
  className: _propTypes.default.string,
  flex: _propTypes.default.string,
  alignSelf: _propTypes.default.string
};var _default = exports.default =

Display;