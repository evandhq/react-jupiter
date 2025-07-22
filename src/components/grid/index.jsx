import React from 'react';
import styled, { css } from 'styled-components';

const getResponsiveValue = (value, theme) => {
  if (typeof value === 'object') {
    const breakpoints = theme.breakpoints || {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
    };

    return Object.entries(value)
      .map(([breakpoint, val]) => {
        const minWidth = breakpoints[breakpoint];
        return minWidth
          ? `@media (min-width: ${minWidth}px) { width: ${val * 100}%; }`
          : '';
      })
      .join('\n');
  }
  return `width: ${value * 100}%;`;
};

const getResponsiveVisibility = (visible, theme) => {
  if (typeof visible === 'object') {
    const breakpoints = theme.breakpoints || {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
    };

    return Object.entries(visible)
      .map(([breakpoint, val]) => {
        const minWidth = breakpoints[breakpoint];
        return minWidth
          ? `@media (min-width: ${minWidth}px) { display: ${val ? 'block' : 'none'}; }`
          : '';
      })
      .join('\n');
  }
  return `display: ${visible ? 'block' : 'none'};`;
};

const getResponsiveAlignment = (align, theme) => {
  if (typeof align === 'object') {
    const breakpoints = theme.breakpoints || {
      mobile: 0,
      tablet: 768,
      desktop: 1024,
    };

    return Object.entries(align)
      .map(([breakpoint, val]) => {
        const minWidth = breakpoints[breakpoint];
        return minWidth ? `@media (min-width: ${minWidth}px) { justify-content: ${val}; }` : '';
      })
      .join('\n');
  }
  return `justify-content: ${align};`;
};

const GridContainer = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  ${({ horizontalAlign, theme }) => getResponsiveAlignment(horizontalAlign || 'left', theme)}
  ${({ verticalAlign }) => `align-items: ${verticalAlign || 'stretch'};`}
`;

const GridUnit = styled.div`
  ${({ size, theme }) => getResponsiveValue(size, theme)}
  ${({ visible, theme }) => getResponsiveVisibility(visible, theme)}
`;

const Grid = ({ children, ...props }) => (
  <GridContainer {...props}>
    {children}
  </GridContainer>
);

Grid.Unit = GridUnit;

export default Grid; 