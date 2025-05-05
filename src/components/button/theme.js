import defaultTheme from '../themes';

const theme = {
  colors: defaultTheme.colors,
  borderRadius: defaultTheme.borderRadius.low,
};
const sizes = {
  xs: 'px-2 py-1 text-xs min-h-[24px]',
  sm: 'px-3 py-1 text-xs min-h-[32px]',
  md: 'px-4 py-2 text-sm min-h-[40px]',
  lg: 'px-6 py-3 text-base min-h-[48px]',
};

// Color mapping to Tailwind colors
const colorMap = {
  red: {
    base: 'red-600',
    hover: 'red-700',
    active: 'red-800',
    light: 'red-50',
    lighter: 'red-100',
  },
  blue: {
    base: 'secondary',
    hover: 'secondary/90',
    active: 'secondary/80',
    light: 'secondary/10',
    lighter: 'secondary/20',
  },
  green: {
    base: 'green-600',
    hover: 'green-700',
    active: 'green-800',
    light: 'green-50',
    lighter: 'green-100',
  },
  yellow: {
    base: 'yellow-500',
    hover: 'yellow-600',
    active: 'yellow-700',
    light: 'yellow-50',
    lighter: 'yellow-100',
  },
  darkBlue: {
    base: 'main',
    hover: 'main/90',
    active: 'main/80',
    light: 'main/10',
    lighter: 'main/20',
  },
  gray: {
    base: 'gray-600',
    hover: 'gray-700',
    active: 'gray-800',
    light: 'gray-50',
    lighter: 'gray-100',
  },
};

export { theme, colorMap, sizes };
