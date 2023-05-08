import defaultTheme from '../themes';

const theme = {
  borderRadius: defaultTheme.borderRadius.high,
  borderColor: {
    normal: defaultTheme.colors.gray600,
    hover: defaultTheme.colors.blue400,
    focus: defaultTheme.colors.blue600,
  },
  disabled: {
    background: defaultTheme.colors.gray200,
    color: defaultTheme.colors.gray400,
  },
  colors: {
    red: defaultTheme.colors.red600,
    blue: defaultTheme.colors.blue600
  }
};

export default theme;
