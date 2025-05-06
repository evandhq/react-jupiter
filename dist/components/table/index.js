"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _tableHeaderRow = _interopRequireDefault(require("./tableHeaderRow"));
var _tableRow = _interopRequireDefault(require("./tableRow"));
var _globalStyle = _interopRequireDefault(require("../globalStyle"));
var _index = require("./index.style");
var _theme = _interopRequireDefault(require("./theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}
















function Table(props) {
  const { columns, data } = props;
  const actionColumnIndexNumber = columns.findIndex((columnItem) => columnItem.dataType === 'action');
  const hasActionColumn = !(actionColumnIndexNumber === -1);

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_globalStyle.default, null), /*#__PURE__*/
    _react.default.createElement(_index.TableContainer, {
      isResponsiveView: window && window.innerWidth < 768,
      "data-test": "jupiter-table",
      actionColumnNumber: hasActionColumn ? actionColumnIndexNumber + 1 : null }, /*#__PURE__*/

    _react.default.createElement("table", null, /*#__PURE__*/
    _react.default.createElement("thead", null, /*#__PURE__*/
    _react.default.createElement(_tableHeaderRow.default, { columns: columns })
    ), /*#__PURE__*/
    _react.default.createElement("tbody", null,
    data.map((rowItem) => /*#__PURE__*/
    _react.default.createElement(_tableRow.default, {
      key: rowItem.key,
      rowItem: rowItem,
      columns: columns }
    )
    )
    )
    )
    )
    ));

}var _default = exports.default =

Table;