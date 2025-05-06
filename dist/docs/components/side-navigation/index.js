"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}

const NavContext = (0, _react.createContext)();

const Container = _styledComponents.default.div`
  direction: ${(_ref) => {let { ltr } = _ref;return ltr ? 'ltr' : 'rtl';}};
  width: 100%;
`;

const NavTitle = _styledComponents.default.div`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  padding: 16px 24px 8px;
  text-transform: uppercase;
`;

const NavItemContainer = _styledComponents.default.div`
  padding: 8px 24px;
  cursor: pointer;
  color: ${(_ref2) => {let { selected } = _ref2;return selected ? '#000' : '#666';}};
  background-color: ${(_ref3) => {let { selected } = _ref3;return selected ? '#f5f5f5' : 'transparent';}};
  &:hover {
    background-color: #f5f5f5;
  }
`;

const NavItemTitle = _styledComponents.default.span`
  font-size: 14px;
`;

const Link = _styledComponents.default.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const NavItem = (_ref4) => {let { title, ltr = false, id } = _ref4;
  const { selectedId, setSelectedId } = (0, _react.useContext)(NavContext);
  const selected = selectedId === id;

  return (/*#__PURE__*/
    _react.default.createElement(NavItemContainer, {
      selected: selected,
      ltr: ltr,
      onClick: () => setSelectedId(id) }, /*#__PURE__*/

    _react.default.createElement(NavItemTitle, null, title)
    ));

};

NavItem.propTypes = {
  title: _propTypes.default.string.isRequired,
  ltr: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired
};

const Nav = (_ref5) => {let { children, id } = _ref5;
  const { selectedId } = (0, _react.useContext)(NavContext);
  const selected = selectedId === id;

  return _react.default.cloneElement(children, { selected });
};

Nav.propTypes = {
  children: _propTypes.default.node.isRequired,
  id: _propTypes.default.string.isRequired
};

const SideNav = (_ref6) => {let { children, defaultSelectedPath } = _ref6;
  const [selectedId, setSelectedId] = (0, _react.useState)(defaultSelectedPath);

  return (/*#__PURE__*/
    _react.default.createElement(NavContext.Provider, { value: { selectedId, setSelectedId } },
    children
    ));

};

SideNav.propTypes = {
  children: _propTypes.default.node.isRequired,
  defaultSelectedPath: _propTypes.default.string.isRequired
};

const SideNavigation = (_ref7) => {let { ltr = false } = _ref7;return (/*#__PURE__*/
    _react.default.createElement(Container, { ltr: ltr }, /*#__PURE__*/
    _react.default.createElement(NavTitle, null, "\u0645\u0639\u0631\u0641\u06CC"), /*#__PURE__*/
    _react.default.createElement(SideNav, { defaultSelectedPath: "1" }, /*#__PURE__*/
    _react.default.createElement(Nav, { id: "1" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0686\u0631\u0627\u061F", ltr: ltr, id: "1" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "2" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627", ltr: ltr, id: "2" })
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "3" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0645\u0646\u0627\u0628\u0639", ltr: ltr, id: "3" })
    ), /*#__PURE__*/
    _react.default.createElement(NavTitle, null, "\u0634\u0631\u0648\u0639 \u0648 \u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC"), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "4" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0646\u0635\u0628", ltr: ltr, id: "4" })
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "5" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC", ltr: ltr, id: "5" })
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "6" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0645\u0641\u0627\u0647\u06CC\u0645", ltr: ltr, id: "6" })
    ), /*#__PURE__*/
    _react.default.createElement(NavTitle, null, "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627"), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "7" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/typography" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u062A\u0627\u06CC\u067E\u0648\u06AF\u0631\u0627\u0641\u06CC", ltr: ltr, id: "7" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "8" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/button" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u062F\u06A9\u0645\u0647\u200C\u0647\u0627", ltr: ltr, id: "8" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "9" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/avatar" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0622\u0648\u0627\u062A\u0627\u0631", ltr: ltr, id: "9" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "10" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/icon" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0622\u06CC\u06A9\u0648\u0646", ltr: ltr, id: "10" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "11" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/icons" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0622\u06CC\u06A9\u0648\u0646\u200C\u0647\u0627", ltr: ltr, id: "11" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "12" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/card" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u06A9\u0627\u0631\u062A", ltr: ltr, id: "12" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "13" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/cover" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u06A9\u0627\u0648\u0631", ltr: ltr, id: "13" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "14" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/form" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u0641\u0631\u0645", ltr: ltr, id: "14" })
    )
    ), /*#__PURE__*/
    _react.default.createElement(Nav, { id: "15" }, /*#__PURE__*/
    _react.default.createElement(Link, { href: "/components/product" }, /*#__PURE__*/
    _react.default.createElement(NavItem, { title: "\u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u0647\u0627\u06CC \u067E\u0631\u0648\u062F\u0627\u06A9\u062A", ltr: ltr, id: "15" })
    )
    )
    )
    ));};


SideNavigation.propTypes = {
  ltr: _propTypes.default.bool
};var _default = exports.default =

SideNavigation;