import styled from 'styled-components';
import { isMobile } from '../utils/detectMobile';

export const StyledIcon = styled.span`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 8px;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 24px;
  box-sizing: border-box;
`;

export function customModalStyles(
  borderRadius, overlayBackground, width, shadow, fullHeight,
) {
  return {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      borderRadius: `${borderRadius}px`,
      border: '0',
      padding: isMobile ? '50px 0' : '0',
      margin: '0',
      width,
      boxShadow: `0 0 ${shadow.blur}px ${shadow.spread}px rgba(0, 0, 0, ${shadow.opacity})`,
      height: fullHeight ? '100%' : 'auto',
    },
    overlay: {
      background: overlayBackground,
    },
  };
}
