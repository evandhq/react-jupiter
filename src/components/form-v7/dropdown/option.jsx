import React from 'react';

const SelectOption = ({ label, value, isDisabled = false }) => (
  <option
    disabled={isDisabled}
    value={value}
    data-test="select-option"
  >
    {label}
  </option>
);

export default SelectOption;
