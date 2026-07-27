import styled from 'styled-components';
import { getSize } from '../sizes';

export const SelectButton = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    width: ${({ size }) => getSize('select', size).chevronSize};
    height: ${({ size }) => getSize('select', size).chevronSize};
    position: absolute;
    left: ${({ size }) => getSize('select', size).chevronLeft};
    top: ${({ size }) => getSize('select', size).chevronTop};
    border: solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    pointer-events: none;
  }

  &:before {
    content: "";
    display: block;
    width: ${({ size }) => getSize('select', size).separatorWidth};
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: ${({ size }) => getSize('select', size).separatorLeft};
    border-right: 1px solid ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.normal)};
    background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select`
  font-family: 'IranSharp';
  font-weight: normal;
  font-size: ${({ size }) => getSize('select', size).fontSize};
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  border: solid 1px ${({ disabled, theme }) => (disabled ? 'transparent' : theme.borderColor.normal)};
  padding: ${({ size }) => getSize('select', size).padding};
  box-sizing: border-box;
  width: ${({ width }) => width};
  background: ${({ disabled, theme }) => (disabled ? theme.disabled.background : 'white')};
  ${({ disabled, theme }) => (disabled ? `color: ${theme.disabled.color};` : '')}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    border-color: ${({ disabled, theme }) => (disabled ? 'transparent' : theme.borderColor.hover)};
  }

  &:focus {
    border-color: ${({ theme }) => theme.borderColor.focus};
  }
`;
