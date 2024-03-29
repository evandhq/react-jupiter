import styled from 'styled-components';
import { Text } from '../../typography';
import Icon from '../../icon';

export const Input = styled.input`
  font-family: 'IranSharp';
  font-weight: bold;
  font-size: 12px;
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  border: solid 1px ${({ theme }) => theme.borderColor.normal};
  padding: 4px;
  box-sizing: border-box;
  width: 100%;

  &::file-selector-button {
    color: ${ ({ theme }) => `${theme.colors.blue}`};
    padding: 0.5em;
    border: ${ ({ theme }) => `thin solid ${theme.colors.blue}`};
    border-radius: 3px;
    width: 100px;
    height: 80;
  }

  &[disabled=""]{
    background-color: ${({ theme }) => theme.disabled.background};
    color: ${({ theme }) => theme.disabled.color};
    border-color: transparent;


    &:hover {
      border-color: transparent;
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.borderColor.hover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.borderColor.focus};
  }
`;

export const LabelContainer = styled(Text)`
  display: block;
  margin-bottom: 8px;
`;

export const DescriptionContainer = styled(Text)`
  display: block;
  margin-bottom: 4px;
`;

export const PasswordIcon = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: 6px;

  &:hover {
    cursor: pointer;
  }
`;