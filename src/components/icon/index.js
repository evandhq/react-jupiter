import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import FontStyle from './iconFont';
import iconTheme from './theme';
import StyledIcon from './index.styles';

const Icon = ({
  name,
  size = 'md',
  color = 'default',
  className = '',
  stickyLeft = false,
  stickyRight = false,
  marginLeft = 0,
  marginRight = 0,
  ...rest
}) => {
  if (name === undefined) return null;

  return (
    <ThemeProvider theme={iconTheme}>
      <GlobalStyle />
      <FontStyle />
      <StyledIcon
        size={size}
        IconColor={color}
        className={`jupiter-icon new-icon-${name} ${className}`}
        data-test="icon"
        stickyLeft={stickyLeft}
        stickyRight={stickyRight}
        marginLeft={marginLeft}
        marginRight={marginRight}
        {...rest}
      />
    </ThemeProvider>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xxlg', 'xlg', 'lg', 'md', 'sm', 'xs']),
  color: PropTypes.oneOf(['default', 'red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'gray']),
  className: PropTypes.string,
  stickyLeft: PropTypes.bool,
  stickyRight: PropTypes.bool,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};

export default Icon;
