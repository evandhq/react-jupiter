"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const getResponsiveValue = (value, theme) => {
  if (typeof value === 'object') {
    const breakpoints = theme.breakpoints || {
      mobile: 0,
      tablet: 768,
      desktop: 1024
    };

    return Object.entries(value).
    map((_ref) => {let [breakpoint, val] = _ref;
      const minWidth = breakpoints[breakpoint];
      return minWidth ?
      `@media (min-width: ${minWidth}px) { width: ${val * 100}%; }` :
      '';
    }).
    join('\n');
  }
  return `width: ${value * 100}%;`;
};

const getResponsiveVisibility = (visible, theme) => {
  if (typeof visible === 'object') {
    const breakpoints = theme.breakpoints || {
      mobile: 0,
      tablet: 768,
      desktop: 1024
    };

    return Object.entries(visible).
    map((_ref2) => {let [breakpoint, val] = _ref2;
      const minWidth = breakpoints[breakpoint];
      return minWidth ?
      `@media (min-width: ${minWidth}px) { display: ${val ? 'block' : 'none'}; }` :
      '';
    }).
    join('\n');
  }
  return `display: ${visible ? 'block' : 'none'};`;
};

const getResponsiveAlignment = (align, theme) => {
  if (typeof align === 'object') {
    const breakpoints = theme.breakpoints || {
      mobile: 0,
      tablet: 768,
      desktop: 1024
    };

    return Object.entries(align).
    map((_ref3) => {let [breakpoint, val] = _ref3;
      const minWidth = breakpoints[breakpoint];
      return minWidth ? `@media (min-width: ${minWidth}px) { justify-content: ${val}; }` : '';
    }).
    join('\n');
  }
  return `justify-content: ${align};`;
};

const GridContainer = _styledComponents.default.div`
  display: flex;
  flex-wrap: ${(_ref4) => {let { wrap } = _ref4;return wrap ? 'wrap' : 'nowrap';}};
  flex-direction: ${(_ref5) => {let { reverse } = _ref5;return reverse ? 'row-reverse' : 'row';}};
  ${(_ref6) => {let { horizontalAlign, theme } = _ref6;return getResponsiveAlignment(horizontalAlign || 'left', theme);}}
  ${(_ref7) => {let { verticalAlign } = _ref7;return `align-items: ${verticalAlign || 'stretch'};`;}}
`;

const GridUnit = _styledComponents.default.div`
  ${(_ref8) => {let { size, theme } = _ref8;return getResponsiveValue(size, theme);}}
  ${(_ref9) => {let { visible, theme } = _ref9;return getResponsiveVisibility(visible, theme);}}
`;

const Grid = (_ref10) => {let { children, ...props } = _ref10;return (/*#__PURE__*/
    _react.default.createElement(GridContainer, props,
    children
    ));};


Grid.Unit = GridUnit;var _default = exports.default =

Grid;