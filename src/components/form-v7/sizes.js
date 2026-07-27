/**
 * Size definitions for form-v7 components.
 * Usage: import { getSize } from '../sizes'; then in styled-components:
 *   ${({ size }) => getSize('select', size).fontSize}
 */

const sizes = {
  select: {
    xs: {
      fontSize: '10px',
      padding: '4px 8px',
      chevronSize: '5px',
      chevronTop: '12px',
      chevronLeft: '12px',
      separatorWidth: '28px',
      separatorLeft: '3px',
    },
    sm: {
      fontSize: '12px',
      padding: '6px 10px',
      chevronSize: '6px',
      chevronTop: '11px',
      chevronLeft: '14px',
      separatorWidth: '30px',
      separatorLeft: '4px',
    },
    md: {
      fontSize: '14px',
      padding: '8px 12px',
      chevronSize: '7px',
      chevronTop: '13px',
      chevronLeft: '16px',
      separatorWidth: '33px',
      separatorLeft: '5px',
    },
    lg: {
      fontSize: '16px',
      padding: '12px 16px',
      chevronSize: '9px',
      chevronTop: '17px',
      chevronLeft: '19px',
      separatorWidth: '36px',
      separatorLeft: '10px',
    },
  },

  textInput: {
    xs: { fontSize: '10px', padding: '4px' },
    sm: { fontSize: '12px', padding: '6px' },
    md: { fontSize: '14px', padding: '8px' },
    lg: { fontSize: '16px', padding: '10px' },
  },

  textarea: {
    xs: { fontSize: '12px', padding: '6px 12px' },
    sm: { fontSize: '14px', padding: '8px 16px' },
    md: { fontSize: '16px', padding: '10px 18px' },
    lg: { fontSize: '18px', padding: '12px 20px' },
  },

  checkbox: {
    xs: {
      width: '12px',
      height: '12px',
      checkWidth: '4px',
      checkHeight: '6px',
      checkRight: '4px',
      checkTop: '1px',
      checkBorder: '1.5px',
    },
    sm: {
      width: '16px',
      height: '16px',
      checkWidth: '5px',
      checkHeight: '8px',
      checkRight: '5px',
      checkTop: '2px',
      checkBorder: '2px',
    },
    md: {
      width: '20px',
      height: '20px',
      checkWidth: '6px',
      checkHeight: '10px',
      checkRight: '6px',
      checkTop: '2px',
      checkBorder: '2px',
    },
    lg: {
      width: '24px',
      height: '24px',
      checkWidth: '7px',
      checkHeight: '12px',
      checkRight: '8px',
      checkTop: '2px',
      checkBorder: '2.5px',
    },
  },

  radio: {
    xs: {
      width: '12px',
      height: '12px',
      top: '3px',
      focusWidth: '16px',
      focusHeight: '16px',
      focusTop: '-5px',
      focusRight: '-5px',
    },
    sm: {
      width: '16px',
      height: '16px',
      top: '4px',
      focusWidth: '20px',
      focusHeight: '20px',
      focusTop: '-6px',
      focusRight: '-6px',
    },
    md: {
      width: '20px',
      height: '20px',
      top: '5px',
      focusWidth: '24px',
      focusHeight: '24px',
      focusTop: '-7px',
      focusRight: '-7px',
    },
    lg: {
      width: '24px',
      height: '24px',
      top: '6px',
      focusWidth: '28px',
      focusHeight: '28px',
      focusTop: '-8px',
      focusRight: '-8px',
    },
  },

  toggle: {
    xs: {
      width: '32px',
      height: '18px',
      sliderSize: '12px',
      translateX: '14px',
      sliderPos: '3px',
    },
    sm: {
      width: '44px',
      height: '24px',
      sliderSize: '18px',
      translateX: '20px',
      sliderPos: '3px',
    },
    md: {
      width: '52px',
      height: '28px',
      sliderSize: '22px',
      translateX: '24px',
      sliderPos: '3px',
    },
    lg: {
      width: '60px',
      height: '32px',
      sliderSize: '26px',
      translateX: '28px',
      sliderPos: '3px',
    },
  },

  fileInput: {
    xs: { fontSize: '10px', padding: '4px' },
    sm: { fontSize: '12px', padding: '6px' },
    md: { fontSize: '14px', padding: '8px' },
    lg: { fontSize: '16px', padding: '10px' },
  },
};

const VALID_SIZES = ['xs', 'sm', 'md', 'lg'];
const DEFAULT_SIZE = 'md';

/**
 * Get size config for a component.
 * @param {string} component - Component name (e.g. 'select', 'textInput')
 * @param {string} size - Size key: 'xs' | 'sm' | 'md' | 'lg'
 * @returns {object} Size config object
 */
export const getSize = (component, size = DEFAULT_SIZE) => {
  const safeSize = VALID_SIZES.includes(size) ? size : DEFAULT_SIZE;
  return sizes[component]?.[safeSize] || sizes[component]?.[DEFAULT_SIZE] || {};
};

export { VALID_SIZES, DEFAULT_SIZE };
export default sizes;
