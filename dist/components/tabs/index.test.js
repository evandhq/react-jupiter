"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _index = require("./index");
var _test = _interopRequireDefault(require("../utils/test"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('Tabs', () => {
  it('render tabs container and tabs propare panel and tabs labels', () => {
    const component = (0, _enzyme.mount)(/*#__PURE__*/
      _react.default.createElement(_index.Tabs, null, /*#__PURE__*/
      _react.default.createElement(_index.TabPanel, { label: "\u062A\u0628 \u0627\u0648\u0644", key: "firstTab" }, "this is 1th panel data"

      ), /*#__PURE__*/
      _react.default.createElement(_index.TabPanel, { label: "\u062A\u0628 \u062F\u0648\u0645 \u0627\u06CC\u0646\u062C\u0627", key: "secTab" }, "this is 2nd panel data"

      ), /*#__PURE__*/
      _react.default.createElement(_index.TabPanel, { label: "\u062A\u0628 \u0633\u0648\u0645 \u0637\u0648\u0644\u0627\u0646\u06CC \u0627\u0633\u062A", key: "thirsdTab" }, "this is 3th panel data"

      )
      )
    );
    const tabsContainer = (0, _test.default)(component, 'tabs-container');
    const tabPanel = (0, _test.default)(component, 'tabs-panel');
    const tabLabel = (0, _test.default)(component, 'tab-label').find("[type='button']");

    expect(tabsContainer.length).toBe(1);
    expect(tabPanel.length).toBe(1);
    expect(tabPanel.text()).toBe('this is 1th panel data');
    expect(tabLabel.at(0).text()).toBe('تب اول');
  });
});