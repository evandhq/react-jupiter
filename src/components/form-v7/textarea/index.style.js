import styled from 'styled-components';
import { getSize } from '../sizes';

const StyledTextarea = styled.textarea`
  font-family: 'IranSharp';
  font-size: ${({ size }) => getSize('textarea', size).fontSize};

  resize: ${({ resize }) => resize};
  min-height: ${({ minHeight }) => `${minHeight}px`};
  width: 100%;
  padding: ${({ size }) => getSize('textarea', size).padding};
  box-sizing: border-box;
  
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
  background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};

  &:hover {
    border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.hover)};
  }
  &:focus {
    border-color: ${({ theme }) => theme.borderColor.focus};
  }
`;

export default StyledTextarea;
