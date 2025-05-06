"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _typography = require("../typography");
var _spacing = require("../spacing");
var _index = require("./index.style");





var _theme = _interopRequireDefault(require("./theme"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}







function Menu(props) {
  const {
    showMore, windowWith, handleToggleShowMore, children
  } = props;
  const menuItems = _react.default.Children.toArray(children);

  function renderMenu() {
    if (menuItems.length > 5 && windowWith > _theme.default.breakpoints.sm) {
      return (/*#__PURE__*/
        _react.default.createElement(_react.default.Fragment, null,

        menuItems.filter((item, index) => index < 4).map(
          (menuItem) => /*#__PURE__*/
          _react.default.createElement(_index.MenuListItem, { key: menuItem.key }, /*#__PURE__*/
          _react.default.createElement(_spacing.Padding, { left: 2, right: 2 },
          _react.default.cloneElement(menuItem)
          )
          )

        ), /*#__PURE__*/

        _react.default.createElement(_index.MenuListItem, { isShowMoreItem: true }, /*#__PURE__*/
        _react.default.createElement(_typography.Text, { size: 16, bold: true, onClick: handleToggleShowMore }, "\u0628\u06CC\u0634\u062A\u0631"

        ), /*#__PURE__*/
        _react.default.createElement(_index.ExtraMenuWrapper, { showMore: showMore },

        menuItems.filter((item, index) => index >= 4).map(
          (menuItem) => /*#__PURE__*/
          _react.default.createElement("li", { key: menuItem.key }, /*#__PURE__*/
          _react.default.createElement(_spacing.Padding, { top: 4, bottom: 4, left: 3, right: 3 },
          _react.default.cloneElement(menuItem)
          )
          )

        )

        )
        )
        ));

    }
    return (/*#__PURE__*/
      _react.default.createElement(_react.default.Fragment, null,

      menuItems.map(
        (menuItem) => /*#__PURE__*/
        _react.default.createElement(_index.MenuListItem, { key: menuItem.key },
        _react.default.cloneElement(menuItem)
        )

      )

      ));

  }

  return (/*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, { theme: _theme.default }, /*#__PURE__*/
    _react.default.createElement(_index.Nav, { "data-test": "product-menu" }, /*#__PURE__*/
    _react.default.createElement(_spacing.Padding, { top: 5, bottom: 5 }, /*#__PURE__*/
    _react.default.createElement(_index.MenuWrapper, props,
    renderMenu()
    )
    )
    )
    ));

}var _default = exports.default =
Menu;