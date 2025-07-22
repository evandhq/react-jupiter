import React from 'react';
import { Text } from '../../typography';
import { toPersianNumber } from '../../utils/numbers';
import StyledLabel from './index.style';

function Label({
  label = null, number = null, required = false, htmlFor = null,
}) {
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

export default Label;
