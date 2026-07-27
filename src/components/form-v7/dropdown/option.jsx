import React from 'react';

const SelectOption = ({ label, value, isDisabled = false, className = '' }) => (
  <option
    disabled={isDisabled}
    value={value}
    data-test="select-option"
    className={className}
  >
    {label}
  </option>
);

export default SelectOption;
