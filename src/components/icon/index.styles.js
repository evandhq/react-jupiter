import styled from 'styled-components';
import { getColorFromName } from '../utils/theme';

const StyledIcon = styled.i`
  font-size: ${({ theme, size }) => `${theme.size[size]}px`};
  color: ${({ theme, IconColor }) => getColorFromName(theme, IconColor)};
  margin: ${({
    theme, size, stickyLeft, stickyRight, marginRight, marginLeft
  }) => `0 ${!!marginRight ? marginRight : stickyRight ? 0 : theme.marginSize[size]}px 0 ${!!marginLeft ? marginLeft : stickyLeft ? 0 : theme.marginSize[size]}px`};
`;

export default StyledIcon;
