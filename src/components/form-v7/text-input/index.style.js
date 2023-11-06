import styled from 'styled-components';
import { Text } from '../../typography';
import Icon from '../../icon';

export const Input = styled.input`
  font-family: 'IranSharp';
  font-weight: normal;
  font-size: 12px;
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  border: solid 1px ${({ theme }) => theme.borderColor.normal};
  padding: 6px;
  box-sizing: border-box;
  width: 100%;
  direction: ${({ rtl }) => (rtl ? 'rtl' : 'ltr')};

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

export const DescriptionContainer = styled(Text)`
  display: block;
  margin-bottom: 4px;
`;

export const PasswordIcon = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: 3px;

  &:hover {
    cursor: pointer;
  }
`;
