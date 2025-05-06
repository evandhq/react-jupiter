"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _typography = require("../typography");
var _index = require("./index.style");
var _theme = _interopRequireDefault(require("./theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}







function Tabs(_ref)



{let { defaultTab = '', onChange = () => {}, children } = _ref;
  const tabPanels = _react.default.Children.toArray(children);
  const [activeTabKey, setActiveTabKey] = (0, _react.useState)(defaultTab || tabPanels[0].props.tabKey);
  const selectedTabPanel = tabPanels.find((item) => item.props.tabKey === activeTabKey);

  (0, _react.useEffect)(() => {
    onChange(activeTabKey);
  }, [activeTabKey, onChange]);

  function handleClick(e) {
    let selectedTabKey;
    if (e.target.tagName !== 'BUTTON') {
      selectedTabKey = e.target.parentElement.attributes['data-access'].value;
    } else {
      selectedTabKey = e.target.attributes['data-access'].value;
    }

    if (selectedTabKey !== activeTabKey) {
      setActiveTabKey(selectedTabKey);
    }
  }

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement("div", { "data-test": "tabs-container" }, /*#__PURE__*/
    _react.default.createElement(_index.TabHeader, null,
    tabPanels.map((tabPanelData) => {
      const { props: { label, tabKey } } = tabPanelData;

      return (/*#__PURE__*/
        _react.default.createElement(_index.StyledButton, {
          "data-access": tabKey,
          className: `${activeTabKey === tabKey ? 'active' : ''}`,
          key: tabKey,
          "data-test": "tab-label",
          type: "button",
          onClick: handleClick }, /*#__PURE__*/

        _react.default.createElement(_typography.Text, { isCutWithEllipsis: true, size: 12 },
        label || '-'
        )
        ));

    })
    ),

    _react.default.cloneElement(selectedTabPanel)
    )
    ));

}var _default = exports.default =

Tabs;