"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _actionCell = _interopRequireDefault(require("./actionCell"));
var _typography = require("../typography");
var _spacing = require("../spacing");
var _index = require("./index.style");function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}



















function TableRow(_ref) {let { rowItem, columns } = _ref;
  return (/*#__PURE__*/
    _react.default.createElement(_index.Tr, { status: rowItem.status || null },
    columns.map((columnItem) => {
      if (columnItem.dataType === 'action') {
        if (rowItem.callToActions && rowItem.callToActions.length > 0) {
          return (/*#__PURE__*/
            _react.default.createElement(_actionCell.default, {
              key: `${rowItem.key}-${columnItem.key}`,
              callToActions: rowItem.callToActions }
            ));

        }
        return (/*#__PURE__*/
          _react.default.createElement("td", { key: `${rowItem.key}-${columnItem.key}` }, /*#__PURE__*/
          _react.default.createElement(_spacing.Padding, { top: 3 }, /*#__PURE__*/
          _react.default.createElement(_typography.Text, { size: 14 }, "-"

          )
          )
          ));

      }
      return (/*#__PURE__*/
        _react.default.createElement("td", { key: `${rowItem.key}-${columnItem.key}` }, /*#__PURE__*/
        _react.default.createElement(_typography.Text, { size: 14 },
        rowItem[columnItem.key] || '-'
        )
        ));

    })
    ));

}var _default = exports.default =

TableRow;