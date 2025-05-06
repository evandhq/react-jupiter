"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.getHoverColorFromName = exports.getFocusColorFromName = exports.getColorFromName = void 0;var _themes = _interopRequireDefault(require("../themes"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

const getColorFromName = function () {let theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _themes.default;let color = arguments.length > 1 ? arguments[1] : undefined;
  switch (color) {
    case 'red':
      return theme.colors.red600;
    case 'green':
      return theme.colors.green600;
    case 'blue':
      return theme.colors.blue600;
    case 'yellow':
      return theme.colors.yellow600;
    case 'darkBlue':
      return theme.colors.darkBlue600;
    case 'gray':
      return theme.colors.gray800;
    case 'white':
      return theme.colors.white;
    case 'light':
      return theme.colors.riverBed;
    case 'black':
      return theme.colors.black;
    default:
    case 'default':
      return theme.defaultColor;
  }
};exports.getColorFromName = getColorFromName;

const getHoverColorFromName = (theme, color) => {
  switch (color) {
    case 'red':
      return theme.colors.red400;
    case 'green':
      return theme.colors.green400;
    case 'blue':
      return theme.colors.blue400;
    case 'yellow':
      return theme.colors.yellow400;
    case 'darkBlue':
      return theme.colors.darkBlue400;
    case 'black':
      return theme.colors.gray600;
    default:
    case 'default':
      return theme.defaultColor;
  }
};exports.getHoverColorFromName = getHoverColorFromName;

const getFocusColorFromName = (theme, color) => {
  switch (color) {
    case 'red':
      return theme.colors.red800;
    case 'green':
      return theme.colors.green800;
    case 'blue':
      return theme.colors.blue800;
    case 'yellow':
      return theme.colors.yellow800;
    case 'darkBlue':
      return theme.colors.darkBlue800;
    case 'gray':
      return theme.colors.gray800;
    default:
    case 'default':
      return theme.defaultColor;
  }
};exports.getFocusColorFromName = getFocusColorFromName;