"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _react = _interopRequireDefault(require("react"));
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}function _extends() {return _extends = Object.assign ? Object.assign.bind() : function (n) {for (var e = 1; e < arguments.length; e++) {var t = arguments[e];for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);}return n;}, _extends.apply(null, arguments);}

const defaultImageUrl = 'https://static.evand.net/assets/images/defaults/event-cover.jpg';











const Cover = (props) => {
  const {
    alt = 'کاور',
    src = defaultImageUrl,
    minHeight = 151,
    renderLink = undefined,
    linkTo = undefined,
    linkTarget = '_blank',
    isLazy = false,
    ...rest
  } = props;

  const renderCover = () =>
  isLazy ? /*#__PURE__*/

  _react.default.createElement(_index.StyledLazyImage, _extends({
    effect: "blur",
    srcSet: `${src}`,
    src: src,
    alt: alt,
    "data-test": "cover" },
  rest)
  ) : /*#__PURE__*/


  _react.default.createElement(_index.StyledImage, _extends({
    srcSet: `${src}`,
    src: src,
    alt: alt,
    "data-test": "cover" },
  rest)
  );



  if (renderLink) {
    return (
      // <Container minHeight={minHeight}>
      renderLink(renderCover())
      // </Container>
    );
  }
  if (linkTo) {
    return (/*#__PURE__*/
      _react.default.createElement("a", { href: linkTo, target: linkTarget },
      renderCover()
      ));

  }
  return (/*#__PURE__*/
    _react.default.createElement(_index.Container, { minHeight: minHeight },
    renderCover()
    ));

};var _default = exports.default =

Cover;