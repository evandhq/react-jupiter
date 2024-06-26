import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import Image from './index.styles';
import avatarTheme from './theme';

const defaultImageUrl = 'https://evand-storage.oss-eu-central-1.aliyuncs.com/assets/images/defaults/avatar.svg';

const Avatar = ({
  alt = 'آواتار',
  size = 'md',
  src = defaultImageUrl,
  ...rest
}) => (
  <ThemeProvider theme={avatarTheme}>
    <GlobalStyle />
    <Image src={src} alt={alt} size={size} data-test="avatar" {...rest} />
  </ThemeProvider>
);

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
};

export default Avatar;
