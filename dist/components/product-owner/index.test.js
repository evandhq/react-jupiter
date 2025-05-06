"use strict";var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _test = _interopRequireDefault(require("../utils/test"));
var _index = _interopRequireDefault(require("./index"));
var _index2 = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

describe('ProductOwner Tests', () => {
  it('render ProductOwner', () => {
    const component = (0, _enzyme.shallow)(/*#__PURE__*/_react.default.createElement(_index.default, null));
    const productOwner = (0, _test.default)(component, 'product-owner');

    expect(productOwner.length).toBe(1);
  });

  it('check connectUs button order and its functionality', () => {
    let isConnectUsFunctionCalled = false;
    function connectUsFunc() {isConnectUsFunctionCalled = !isConnectUsFunctionCalled;}

    const component = (0, _enzyme.shallow)(/*#__PURE__*/
      _react.default.createElement(_index.default, {
        name: "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC",

        onClickConnectUs: connectUsFunc }
      )
    );
    const productOwner = (0, _test.default)(component, 'product-owner');
    const followmeButton = productOwner.find(_index2.StyledButton).at(0);
    const connectUsButton = productOwner.find(_index2.StyledButton).at(1);
    const descriptionButton = productOwner.find(_index2.StyledButton).at(2);

    expect(followmeButton.text()).toContain('دنبال');
    expect(connectUsButton.text()).toContain('تماس');
    expect(descriptionButton.text()).toContain('توضیحات');
    expect(isConnectUsFunctionCalled).toBe(false);

    expect(isConnectUsFunctionCalled).toBe(false);

    connectUsButton.simulate('click');

    expect(isConnectUsFunctionCalled).toBe(true);
  });

  it('check follow button place and its functionality', () => {
    let isFollowMeFunctionCalled = false;
    function followMeFunc() {
      isFollowMeFunctionCalled = !isFollowMeFunctionCalled;
      return isFollowMeFunctionCalled;
    }

    const component = (0, _enzyme.mount)(/*#__PURE__*/
      _react.default.createElement(_index.default, {
        name: "\u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC \u0627\u0646\u062C\u0645\u0646 \u0639\u0644\u0645\u06CC \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631 \u062F\u0627\u0646\u0634\u06AF\u0627\u0647 \u0635\u0646\u0639\u062A\u06CC \u062E\u0648\u0627\u062C\u0647 \u0646\u0635\u06CC\u0631\u0627\u0644\u062F\u06CC\u0646 \u0637\u0648\u0633\u06CC",

        onClickFollowMe: followMeFunc }
      )
    );
    const productOwner = (0, _test.default)(component, 'product-owner');
    const followmeButton = productOwner.find(_index2.StyledButton).at(0);

    expect(followmeButton.text()).toContain('دنبال');
    expect(isFollowMeFunctionCalled).toBe(false);
    expect(followmeButton.props().styleType).toBe('primary');

    followmeButton.simulate('click');

    expect(isFollowMeFunctionCalled).toBe(true);

    // TODO: try to solve the problem of use '.state()' on hooks
    // I cant use just 'followmeButton.props().styleType' az expect
    // argument because the followmeButton's props doesnt update after click
    // plus I cant check component.state() with enzyme because
    // it doesnt support hooks('.state()' only work with class)
    // expect(component.find(StyledButton).at(0).props().styleType).toBe('secondary');
  });
});