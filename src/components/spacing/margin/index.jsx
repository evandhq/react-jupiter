import React from 'react';
import styled from 'styled-components';
import { _m, _mx, _my, _mt, _mr, _mb, _ml } from '../core';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes';

export const Margin = styled.div`
  ${({ inline }) => inline && 'display: inline-block;'}
  ${({ all, theme }) => _m(all, theme)}
  ${({ horizontal, theme }) => _mx(horizontal, theme)} 
  ${({ vertical, theme }) => _my(vertical, theme)} 
  ${({ top, theme }) => _mt(top, theme)} 
  ${({ right, theme }) => _mr(right, theme)} 
  ${({ bottom, theme }) => _mb(bottom, theme)} 
  ${({ left, theme }) => _ml(left, theme)} 
`;

Margin.displayName = 'Margin';

const Margined = (props) => (
  <ThemeProvider theme={defaultTheme}>
    <Margin {...props} />
  </ThemeProvider>
);

export default Margined;
