import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ type }) => (type === 'vertical' ? 'flex-direction: column; align-items: flex-start;' : '')}
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ disabled, theme }) => (disabled ? theme.disabled.color : theme.borderColor.focus)};
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ disabled, theme }) => (disabled ? theme.disabled.background : theme.borderColor.normal)};
  transition: 0.3s;
  border-radius: 24px;

  &:before {
    content: '';
    position: absolute;
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }
`;
