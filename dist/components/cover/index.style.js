"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.StyledLazyImage = exports.StyledImage = exports.Container = void 0;var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function (e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n.default = e, t && t.set(e, n), n;}

const defaultImageUrl = 'https://static.evand.net/assets/images/defaults/event-cover.jpg';

const Container = exports.Container = _styledComponents.default.div`
  min-height: ${(props) => props.minHeight}px;
  & > a {
    display: block;
  }
  
  & > span {
    display: block;
    width: 100%;
    min-height: inherit;
  }
`;

const lazyLoadingAnimation = (0, _styledComponents.keyframes)`
  100% {
    opacity: 1;
    filter: none;
  }
  0% {
    opacity: 0;
    filter: blur(20px);
  }
`;

const StyledLazyImage = exports.StyledLazyImage = (0, _styledComponents.default)(_reactLazyLoadImageComponent.LazyLoadImage)`
  margin-bottom: -5px;
  min-height: inherit;
  width: 100%;
  font-family: 'IranSharp';
  display: block;
  background-image: url(${defaultImageUrl});
  background-size: cover;
  animation: ${lazyLoadingAnimation} 2s 1;
`;

const StyledImage = exports.StyledImage = _styledComponents.default.img`
  min-height: inherit;
  width: 100%;
  font-family: 'IranSharp';
  display: block;
  background-image: url(${defaultImageUrl});
  background-size: cover;
`;