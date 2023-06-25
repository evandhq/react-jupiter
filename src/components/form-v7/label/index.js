import React from 'react';
import { Text } from '../../typography';
import { toPersianNumber } from '../../utils/numbers';
import StyledLabel from './index.style';

type IProps = {
    htmlFor?: String,
    label?: string,
    number?: number,
    required?: Boolean,
}

function Label(props: IProps) {
  const {
    htmlFor, label, number, required,
  } = props;
  return (
    <>
      {label && (
      <StyledLabel htmlFor={htmlFor}>
        <Text bold size={14}>
          {!!number && `${toPersianNumber(number)}- `}
          {label}
          {!!required && <span className="required">*</span>}
        </Text>
      </StyledLabel>
      )}
    </>
  );
}
Label.defaultProps = {
  label: null,
  number: null,
  required: false,
  htmlFor: null,
};

export default Label;
