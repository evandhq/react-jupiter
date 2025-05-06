"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isDateObject = exports.convertToJalaali = void 0;var _momentJalaali = _interopRequireDefault(require("moment-jalaali"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

_momentJalaali.default.loadPersian({ dialect: 'persian-modern' });

const isDateObject = (date) => typeof date.getMonth === 'function';exports.isDateObject = isDateObject;

const convertToJalaali = (date, format) => (0, _momentJalaali.default)(date).format(format);exports.convertToJalaali = convertToJalaali;