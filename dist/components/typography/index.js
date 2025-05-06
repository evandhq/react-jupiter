"use strict";Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, "Heading", { enumerable: true, get: function () {return _heading.default;} });Object.defineProperty(exports, "Link", { enumerable: true, get: function () {return _link.default;} });Object.defineProperty(exports, "Paragraph", { enumerable: true, get: function () {return _paragraph.default;} });Object.defineProperty(exports, "Text", { enumerable: true, get: function () {return _text.default;} });exports.default = void 0;var _heading = _interopRequireDefault(require("./heading"));
var _text = _interopRequireDefault(require("./text"));
var _paragraph = _interopRequireDefault(require("./paragraph"));
var _link = _interopRequireDefault(require("./link"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}var _default = exports.default =






{
  Heading: _heading.default,
  Text: _text.default,
  Paragraph: _paragraph.default,
  Link: _link.default
};