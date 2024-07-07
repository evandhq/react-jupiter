import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import Content from './index.styles';

const Paragraph = ({
  size = theme.defaultSize,
  color = 'riverBedDark',
  bold = false,
  children,
  ...rest
}) => {
  if (children === undefined) return null;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Content size={size} color={color} bold={bold} data-test="paragraph" {...rest}>
        {children}
      </Content>
    </ThemeProvider>
  );
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number,
  color: PropTypes.oneOf(['riverBedDark', 'riverBed']),
  bold: PropTypes.bool,
};

export default Paragraph;
