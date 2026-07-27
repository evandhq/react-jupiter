import styled from 'styled-components';
import { getSize } from '../sizes';

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: 15px;
  * {
    box-sizing: content-box;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ type }) => (type === 'vertical' ? 'flex-direction: column;' : '')}
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: ${({ size }) => getSize('radio', size).width};
  height: ${({ size }) => getSize('radio', size).height};
  margin-right: 5px;
  position: relative;
  top: ${({ size }) => getSize('radio', size).top};
  
  border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s linear;

  &:hover {
    border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.hover)};
  }

  &:checked {
    border: 1px solid ${({ theme }) => (theme.borderColor.normal)};
    width: ${({ size }) => getSize('radio', size).width};
    height: ${({ size }) => getSize('radio', size).height};
    background: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};

    &:after {
      background: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};
    }
  }

  &:after {
    content: '';
    display: block;
    background: ${({ disabled }) => (disabled ? 'white' : 'transparent')};
    position: absolute;
    width: ${({ size }) => getSize('radio', size).focusWidth};
    height: ${({ size }) => getSize('radio', size).focusHeight};
    border-radius: 100%;
    z-index: -1;
    top: ${({ size }) => getSize('radio', size).focusTop};
    right: ${({ size }) => getSize('radio', size).focusRight};
  }
`;
