import styled from 'styled-components';

import { getColorFromName, getHoverColorFromName } from '../../utils';

export const Emphasized = styled.em`
  font-family: 'IranSharp';
  font-size: ${({ size }) => (`${size}px`)};
  ${({ underline }) => (underline ? 'text-decoration: underline;' : '')}
  ${({ lineThrough }) => (lineThrough ? 'text-decoration: line-through;' : '')}
  ${({ strong }) => (strong ? 'font-weight: bold;' : '')}
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  ${({ theme, marked }) => (marked ? `background-color: ${theme.colors.blue200};` : '')}
  ${({ theme, isLabel }) => (isLabel
    ? `background-color: ${theme.colors.gray400}; padding: 2px 8px; border-radius: 2px;`
    : ''
  )}
  &:hover {
    ${({ hover, theme, color }) => (hover ? `color: ${getHoverColorFromName(theme, color)};` : '')}
  }
`;

export const Strong = styled.strong`
  font-family: 'IranSharp';
  font-size: ${({ size }) => (`${size}px`)};
  font-weight: bold;
  ${({ underline }) => (underline ? 'text-decoration: underline;' : '')}
  ${({ lineThrough }) => (lineThrough ? 'text-decoration: line-through;' : '')}
  ${({ emphasized }) => (emphasized ? 'font-style: italic;' : '')}
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  ${({ theme, marked }) => (marked ? `background-color: ${theme.colors.blue200};` : '')}
  ${({ theme, isLabel }) => (isLabel
    ? `background-color: ${theme.colors.gray400}; padding: 2px 8px; border-radius: 2px;`
    : ''
  )}
  &:hover {
    ${({ hover, theme, color }) => (hover ? `color: ${getHoverColorFromName(theme, color)};` : '')}
  }
`;

export const String = styled.span`
  font-family: 'IranSharp';
  font-size: ${({ size }) => (`${size}px`)};
  ${({ underline }) => (underline ? 'text-decoration: underline;' : '')}
  ${({ lineThrough }) => (lineThrough ? 'text-decoration: line-through;' : '')}
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  ${({ theme, marked }) => (marked ? `background-color: ${theme.colors.blue200};` : '')}
  ${({ theme, isLabel }) => (isLabel
    ? `background-color: ${theme.colors.gray400}; padding: 2px 8px; border-radius: 2px;`
    : ''
  )}
  &:hover {
    ${({ hover, theme, color }) => (hover ? `color: ${getHoverColorFromName(theme, color)};` : '')}
  }
`;

export const SubScript = styled.sub`
  font-family: 'IranSharp';
  font-size: 8px;
  color: ${({ theme, color }) => getColorFromName(theme, color)};
`;

export const SupScript = styled.sup`
  font-family: 'IranSharp';
  font-size: 8px;
  color: ${({ theme, color }) => getColorFromName(theme, color)};
`;