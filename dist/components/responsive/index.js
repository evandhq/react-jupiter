"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactResponsive = require("react-responsive");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const Responsive = (props) => {
  const { option, children } = props;
  const { isDefault } = option;
  const generateQueryObject = () => {
    const { greaterThan, lessThan } = option;
    let query;
    if (greaterThan !== undefined && lessThan !== undefined) {
      query = { minWidth: greaterThan, maxWidth: lessThan };
    } else if (greaterThan !== undefined) {
      query = { minWidth: greaterThan };
    } else {
      query = { maxWidth: lessThan };
    }
    return query;
  };

  const screen = (0, _reactResponsive.useMediaQuery)(generateQueryObject());
  return (isDefault || screen) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

Responsive.propTypes = {
  children: _propTypes.default.oneOfType([
  _propTypes.default.arrayOf(_propTypes.default.node),
  _propTypes.default.node,
  _propTypes.default.string]
  ).isRequired,
  option: _propTypes.default.shape({
    lessThan: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number]
    ),
    greaterThan: _propTypes.default.oneOfType([
    _propTypes.default.string,
    _propTypes.default.number]
    ),
    isDefault: _propTypes.default.bool
  }).isRequired
};var _default = exports.default =

Responsive;