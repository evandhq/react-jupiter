"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = _interopRequireDefault(require("./index.style"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const adsLabelUrl = 'https://static.evand.net/assets/images/other/ads-label.svg';
// const adsLabelUrl = require('../../../../docs/assets/ads-label.svg');

const finishedLabelUrl = 'https://static.evand.net/assets/images/other/finished-text-label.svg';

const EventCardLabel = (_ref) => {let { type } = _ref;
  switch (type) {
    case 'ads':
      return /*#__PURE__*/_react.default.createElement(_index.default, { src: adsLabelUrl, "data-test": "ads-label" });
    case 'finished':
    default:
      return /*#__PURE__*/_react.default.createElement(_index.default, { src: finishedLabelUrl, "data-test": "finished-label" });
  }
};

EventCardLabel.propTypes = {
  type: _propTypes.default.oneOf(['ads', 'finished']).isRequired
};var _default = exports.default =

EventCardLabel;