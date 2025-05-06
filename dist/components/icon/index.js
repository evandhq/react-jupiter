"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var HeroIcons = _interopRequireWildcard(require("@heroicons/react/24/outline"));
var HeroIconsSolid = _interopRequireWildcard(require("@heroicons/react/24/solid"));function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}











const Icon = (_ref) =>








{let { name, size = 'md', color, className, style, onClick, variant = 'outline', ...rest } = _ref;
  // Map old size values to new size values in pixels
  const getSizeInPixels = () => {
    switch (size) {
      case 'xs':
        return 12;
      case 'sm':
        return 16;
      case 'md':
        return 20;
      case 'lg':
        return 24;
      case 'xl':
        return 32;
      case '2xl':
        return 40;
      default:
        // If it's already a number, return it directly
        return typeof size === 'number' ? size : 20;
    }
  };

  // Map old color values to new color tokens
  const getColor = () => {
    switch (color) {
      case 'white':
        return 'white';
      case 'black':
        return '#000000';
      case 'gray':
        return '#6B7280'; // gray-500
      case 'darkGray':
        return '#374151'; // gray-700
      case 'darkBlue':
        return '#6941C6'; // primary-700
      case 'red':
        return '#EF4444'; // error-500
      case 'green':
        return '#10B981'; // success-500
      case 'yellow':
        return '#F59E0B'; // warning-500
      case 'blue':
        return '#3B82F6'; // info-500
      default:
        // If it's not a known color name, pass it through as a custom color
        return color;
    }
  };

  // Get the appropriate Heroicon component
  const getHeroIcon = () => {
    const iconName = name.
    split('-').
    map((part, index) => index === 0 ? part.charAt(0).toUpperCase() + part.slice(1) : part.charAt(0).toUpperCase() + part.slice(1)).
    join('') + 'Icon';
    const icons = variant === 'solid' ? HeroIconsSolid : HeroIcons;
    console.log(iconName, icons[iconName]);
    return icons[iconName];
  };

  // Apply styles and colors
  const iconSize = getSizeInPixels();
  const iconColor = getColor();

  const iconStyle = {
    ...style,
    color: iconColor,
    width: iconSize,
    height: iconSize
  };

  const HeroIcon = getHeroIcon();
  if (!HeroIcon) {
    console.log(`Icon "${HeroIcon}" not found in Heroicons`);
    return null;
  }

  return (/*#__PURE__*/
    _react.default.createElement("div", _extends({
      className: (0, _tailwindMerge.twMerge)('inline-block', className),
      onClick: onClick,
      "aria-hidden": "true" },
    rest), /*#__PURE__*/

    _react.default.createElement(HeroIcon, { style: iconStyle })
    ));

};var _default = exports.default =

Icon;