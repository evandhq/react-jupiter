import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import Image from './index.styles';
import avatarTheme from './theme';

const defaultImageUrl = 'https://static.evand.net/assets/images/defaults/avatar.svg';

const Avatar = ({
  alt = 'آواتار',
  size = 'md',
  sizeMobile = 'md',
  src = defaultImageUrl,
  round = false,
  ...rest
}) => (
  <ThemeProvider theme={avatarTheme}>
    <GlobalStyle />
    <Image
      src={src}
      alt={alt}
      size={size}
      sizeMobile={sizeMobile}
      data-test="avatar"
      round={round}
      onError={(e) => (e.target.onerror = null, e.target.src = defaultImageUrl)}
      {...rest}
    />
  </ThemeProvider>
);

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  sizeMobile: PropTypes.oneOf(['lg', 'md', 'sm']),
};

export default Avatar;
