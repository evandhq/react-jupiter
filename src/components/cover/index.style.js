import styled from 'styled-components';
import defaultImage from '../assets/defaults-images/Cover_default.jpg';
import '../iranSharpFont.scss';

export const Container = styled.div`
  & > a {
    display: block;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  min-height: 50px;
  font-family: 'IranSharp';
  display: block;
  background-image: url(${defaultImage});
  background-size: cover;
`;
