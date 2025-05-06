"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));
var _test = _interopRequireDefault(require("../../../utils/test"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const setupShallow = (_ref) => {let { type } = _ref;return (
    (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, { type: type })));};


describe('EventCardLabel component', () => {
  it('Should render ads label', () => {
    const component = setupShallow({ type: 'ads' });
    const AdsLabel = (0, _test.default)(component, 'ads-label');
    expect(AdsLabel.length).toBe(1);
  });

  it('Should render finished label', () => {
    const component = setupShallow({ type: 'finished' });
    const AdsLabel = (0, _test.default)(component, 'finished-label');
    expect(AdsLabel.length).toBe(1);
  });
});