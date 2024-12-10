import styled from 'styled-components';
import defaultTheme from '../themes';

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
    ? `display: ${display};`
    : ''
  )}
  ${({ width }) => (width
    ? `width: ${width};`
    : ''
  )}
  ${({ widthMobile }) => (widthMobile
    ? `@media only screen and (max-width: ${defaultTheme.breakpoints.sm}px) {
        width: ${widthMobile};
      }`
    : ''
  )}
  ${({ justifyContent }) => (justifyContent
    ? `justify-content: ${justifyContent};`
    : ''
  )}

  ${({ justifyContentMobile }) => (justifyContentMobile
    ? `@media only screen and (max-width: ${defaultTheme.breakpoints.sm}px) {
        justify-content: ${justifyContentMobile};
      }`
    : ''
  )}

  ${({ alignItems }) => (alignItems
    ? `align-items: ${alignItems};`
    : ''
  )}
  ${({ alignItemsMobile }) => (alignItemsMobile
    ? `@media only screen and (max-width: ${defaultTheme.breakpoints.sm}px) {
        align-items: ${alignItemsMobile};
      }`
    : ''
  )}
  ${({ flexDirection }) => (flexDirection
    ? `flex-direction: ${flexDirection};`
    : ''
  )}

  ${({ flexDirectionMobile }) => (flexDirectionMobile
    ? `@media only screen and (max-width: ${defaultTheme.breakpoints.sm}px) {
        flex-direction: ${flexDirectionMobile};
      }`
    : ''
  )}
  ${({ wrap }) => (wrap
    ? 'flex-wrap: wrap;'
    : ''
  )}
  ${({ flex }) => (flex
    ? `flex: ${flex};`
    : ''
  )}
  ${({ alignSelf }) => (alignSelf
    ? `align-self: ${alignSelf};`
    : ''
  )}
`;
