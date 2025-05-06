"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isAndroid = isAndroid;exports.isMobile = isMobile;function isMobile() {
  return !!(
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i));

}

function isAndroid() {
  return !!navigator.userAgent.match(/Android/i);
}