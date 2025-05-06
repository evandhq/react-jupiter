"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.WithoutCloseButton = exports.Minimal = exports.FullOptions = exports.DisabledClose = void 0;var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");
var _index = _interopRequireDefault(require("./index"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}var _default = exports.default =

{
  title: 'Modal',
  component: _index.default,

  argTypes: {
    modalWidth: {
      control: 'text',
      defaultValue: '30%'
    },
    modalWidthMobile: {
      control: 'text',
      defaultValue: '80%'
    },
    hasCloseButton: {
      control: 'boolean',
      defaultValue: true
    },
    disabledClose: {
      control: 'boolean',
      defaultValue: false
    },
    isOpen: {
      control: 'boolean',
      defaultValue: true
    },
    onRequestClose: {
      action: 'onRequestClose'
    },
    onAfterOpen: {
      action: 'onAfterOpen'
    }
  }
};

const Template = (args) => {
  const [show, setShow] = (0, _react.useState)(false);
  return (/*#__PURE__*/
    _react.default.createElement("div", null, /*#__PURE__*/
    _react.default.createElement("button", { type: "button", onClick: () => setShow(true) }, "\u0646\u0645\u0627\u06CC\u0634 \u0645\u0648\u062F\u0627\u0644"), /*#__PURE__*/
    _react.default.createElement("div", null, /*#__PURE__*/
    _react.default.createElement("article", null, /*#__PURE__*/
    _react.default.createElement("p", null, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC")
    )
    ), /*#__PURE__*/
    _react.default.createElement(_index.default, _extends({}, args, { isOpen: show, onRequestClose: () => setShow(false) }), /*#__PURE__*/
    _react.default.createElement("h1", null, "\u0633\u0644\u0627\u0645"), /*#__PURE__*/
    _react.default.createElement("p", null, "\u0627\u06CC\u0646 \u06CC\u06A9 \u0646\u0645\u0648\u0646\u0647 \u0627\u0633\u062A")
    )
    ));

};

const Minimal = exports.Minimal = Template.bind({});
Minimal.args = {
  modalWidth: '30%',
  modalWidthMobile: '80%',
  hasCloseButton: true,
  disabledClose: false
};

const FullOptions = exports.FullOptions = Template.bind({});
FullOptions.args = {
  modalWidth: '100px',
  modalWidthMobile: '80%',
  hasCloseButton: true,
  disabledClose: false,
  onRequestClose: (0, _addonActions.action)('trigger what you want to do in onRequestClose function'),
  onAfterOpen: (0, _addonActions.action)('trigger what you want to do in onAfterOpen function')
};

const WithoutCloseButton = exports.WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  ...Minimal.args,
  hasCloseButton: false
};

const DisabledClose = exports.DisabledClose = Template.bind({});
DisabledClose.args = {
  ...Minimal.args,
  disabledClose: true
};