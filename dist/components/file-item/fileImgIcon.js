"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _index = require("./index.style");
var _fileImgsFont = _interopRequireDefault(require("./fileImgsFont"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}





const FileImgIcon = (props) => {
  const { iconFileName } = props;

  return (/*#__PURE__*/
    _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/
    _react.default.createElement(_fileImgsFont.default, null), /*#__PURE__*/
    _react.default.createElement(_index.StyledImgIcon, {
      className: `jupiter-file-font ${iconFileName}`,
      "data-test": "file-image" }, /*#__PURE__*/

    _react.default.createElement("span", { className: "path1" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path2" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path3" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path4" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path5" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path6" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path7" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path8" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path9" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path10" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path11" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path12" }), /*#__PURE__*/
    _react.default.createElement("span", { className: "path13" })
    )
    ));

};var _default = exports.default =

FileImgIcon;