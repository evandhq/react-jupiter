"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.StyledWrapper = exports.StyledIcon = void 0;exports.customModalStyles = customModalStyles;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _detectMobile = require("../utils/detectMobile");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const StyledIcon = exports.StyledIcon = _styledComponents.default.span`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 8px;
  z-index: 999;
`;

const StyledWrapper = exports.StyledWrapper = _styledComponents.default.div`
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
`;

function customModalStyles(
borderRadius, overlayBackground, width, widthMobile, shadow, fullHeight)
{
  return {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      borderRadius: `${borderRadius}px`,
      border: '0',
      padding: _detectMobile.isMobile ? '50px 0' : '0',
      margin: '0',
      width: _detectMobile.isMobile ? widthMobile : width,
      boxShadow: `0 0 ${shadow.blur}px ${shadow.spread}px rgba(0, 0, 0, ${shadow.opacity})`,
      height: fullHeight ? '100%' : 'auto'
    },
    overlay: {
      background: overlayBackground
    }
  };
}