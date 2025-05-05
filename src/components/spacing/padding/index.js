import React from 'react';
import styled from 'styled-components';
import { _p, _px, _py, _pt, _pr, _pb, _pl } from '../core';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes';

export const Padding = styled.div`
  ${({ inline }) => inline && 'display: inline-block;'}
  ${({ all, theme }) => _p(all, theme)}
  ${({ horizontal, theme }) => _px(horizontal, theme)} 
  ${({ vertical, theme }) => _py(vertical, theme)} 
  ${({ top, theme }) => _pt(top, theme)} 
  ${({ right, theme }) => _pr(right, theme)} 
  ${({ bottom, theme }) => _pb(bottom, theme)} 
  ${({ left, theme }) => _pl(left, theme)} 
`;

Padding.displayName = 'Padding';

const Paddinged = (props) => (
  <ThemeProvider theme={defaultTheme}>
    <Padding {...props} />
  </ThemeProvider>
);

export default Paddinged;
