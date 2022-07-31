import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  ${({ justifyContent }) => (justifyContent
    ? `justify-content: ${justifyContent}`
    : ''
  )}
  ${({ alignItems }) => (alignItems
    ? `align-items: ${alignItems}`
    : ''
  )}
`;

export const Block = styled.div`
  display: block;
`;

export const DisplayStyle = styled.div`
  ${({ display }) => (display
    ? `display: ${display}`
    : ''
  )}
  ${({ width }) => (width
    ? `width: ${width}`
    : ''
  )}
  ${({ justifyContent }) => (justifyContent
    ? `justify-content: ${justifyContent}`
    : ''
  )}
  ${({ alignItems }) => (alignItems
    ? `align-items: ${alignItems}`
    : ''
  )}
  ${({ flexDirection }) => (flexDirection
    ? `flex-direction: ${flexDirection}`
    : ''
  )}
`;
