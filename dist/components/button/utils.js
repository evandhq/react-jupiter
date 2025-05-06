"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function setFontColor(styleType, mainColor) {
  switch (styleType) {
    case 'secondary':
      return mainColor;
    case 'tertiary':
      return 'darkBlue';
    default:
      return 'white';
  }
}var _default = exports.default =

setFontColor;