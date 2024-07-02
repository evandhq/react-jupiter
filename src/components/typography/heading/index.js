import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import {
  H1, H2, H3, H4, H5, H6,
} from './index.styles';

const { sizes } = theme;

const Heading = ({
  size = sizes.medium,
  level = 1,
  color = 'default',
  children,
  ...rest
}) => {
  const renderLevel = () => {
    if (children === undefined) {
      return null;
    }
    switch (level) {
      case 6:
        return (<H6 size={size} data-test="h6-tag" color={color} {...rest}>{children}</H6>);
      case 5:
        return (<H5 size={size} data-test="h5-tag" color={color} {...rest}>{children}</H5>);
      case 4:
        return (<H4 size={size} data-test="h4-tag" color={color} {...rest}>{children}</H4>);
      case 3:
        return (<H3 size={size} data-test="h3-tag" color={color} {...rest}>{children}</H3>);
      case 2:
        return (<H2 size={size} data-test="h2-tag" color={color} {...rest}>{children}</H2>);
      case 1:
      default:
        return (<H1 size={size} data-test="h1-tag" color={color} {...rest}>{children}</H1>);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {renderLevel()}
    </ThemeProvider>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.oneOf([sizes.large, sizes.medium, sizes.small]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'default']),
};

export default Heading;
