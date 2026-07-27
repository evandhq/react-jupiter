import styled from 'styled-components';
import { getSize } from '../sizes';

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ type }) => (type === 'vertical' ? 'flex-direction: column;' : '')}
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: ${({ size }) => getSize('checkbox', size).width};
  height: ${({ size }) => getSize('checkbox', size).height};

  border: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
  background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  
  &:hover {
    border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.hover)};
  }

  &:checked {
    border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};
    
    &:after {
      border-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};
    }
  }

  &:after {
    content: '';
    display: block;

    height: ${({ size }) => getSize('checkbox', size).checkHeight};
    width: ${({ size }) => getSize('checkbox', size).checkWidth};
    position: absolute;
    right: ${({ size }) => getSize('checkbox', size).checkRight};
    top: ${({ size }) => getSize('checkbox', size).checkTop};

    transition: 0.2s all linear;

    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border-bottom: ${({ size }) => getSize('checkbox', size).checkBorder} solid transparent;
    border-right: ${({ size }) => getSize('checkbox', size).checkBorder} solid transparent;
  }
`;
