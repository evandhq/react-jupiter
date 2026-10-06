import React from 'react';
import { toPersianNumber } from '../../utils/numbers';
import { DEFAULT_SIZE } from '../sizes';

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

function Label({
  label = null, number = null, required = false, htmlFor = null, size = DEFAULT_SIZE,
}) {
  const sizeClass = sizeClasses[size] || sizeClasses[DEFAULT_SIZE];

  return (
    <>
      {label && (
        <label
          htmlFor={htmlFor}
          className={`relative block mb-1.5 font-bold font-['IranSharp'] text-gray-700 ${sizeClass}`}
        >
          {!!number && `${toPersianNumber(number)}- `}
          {label}
          {!!required && <span className="text-red-600 mr-1.5">*</span>}
        </label>
      )}
    </>
  );
}

export default Label;
