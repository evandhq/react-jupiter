"use strict";var _react = _interopRequireDefault(require("react"));
var _testUtils = require("../../test-utils");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('Avatar', () => {
  it('renders avatar component', () => {
    (0, _testUtils.render)(/*#__PURE__*/_react.default.createElement(_index.default, { "data-testid": "avatar" }));
    expect(_testUtils.screen.getByTestId('avatar')).toBeInTheDocument();
  });
});