import styled from 'styled-components';
import defaultTheme from '../themes';

const Image = styled.img`
  font-family: 'IranSharp';
  width: ${({ theme, size }) => `${theme.size[size]}px`};
  height: ${({ theme, size }) => `${theme.size[size]}px`};
  @media only screen and (max-width: ${defaultTheme.breakpoints.sm}px) {
    width: ${({ theme, sizeMobile }) => `${theme.size[sizeMobile]}px`};
    height: ${({ theme, sizeMobile }) => `${theme.size[sizeMobile]}px`};
  }
  border-radius: ${({ theme, round }) => (round ? '50%' : `${theme.borderRadius}px`)};
  display: block;
  background-size: cover;
`;

export default Image;
