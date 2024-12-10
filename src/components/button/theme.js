import defaultTheme from '../themes';

const theme = {
  size: {
    lg: {
      padding: '4px 48px',
      font: 20,
      minWidth: 172,
      height: 56,
    },
    md: {
      padding: '4px 32px',
      font: 16,
      minWidth: 128,
      height: 48,
    },
    sm: {
      padding: '2px 16px',
      font: 13,
      minWidth: 80,
      height: 36,
    },
    xs: {
      padding: '2px 8px',
      font: 10,
      minWidth: 64,
      height: 32,
    },
  },
  colors: defaultTheme.colors,
  borderRadius: defaultTheme.borderRadius.low,
};

export default theme;
