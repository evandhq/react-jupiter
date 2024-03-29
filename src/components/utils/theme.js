import defaultTheme from '../themes';

export const getColorFromName = (theme = defaultTheme, color) => {
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
};

export const getHoverColorFromName = (theme, color) => {
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
};

export const getFocusColorFromName = (theme, color) => {
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
};
