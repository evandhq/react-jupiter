"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = getIconFileName;function getIconFileName(type, isLightIcon) {
  return `icon-${type}${isLightIcon ? '-light' : ''}`;
}