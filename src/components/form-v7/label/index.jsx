import React from 'react';
import { Text } from '../../typography';
import { toPersianNumber } from '../../utils/numbers';

function Label({
  label = null, number = null, required = false, htmlFor = null,
}) {
  return (
    <>
      {label && (
        <label htmlFor={htmlFor} className="relative block mb-1.5">
          <Text bold size={14}>
            {!!number && `${toPersianNumber(number)}- `}
            {label}
            {!!required && <span className="text-red-600 mr-1.5">*</span>}
          </Text>
        </label>
      )}
    </>
  );
}

export default Label;
