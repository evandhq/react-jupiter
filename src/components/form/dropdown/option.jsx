import React from 'react';

const SelectOption = (props) => {
  const { label, value, isDisabled = false } = props;

  return (
    <option
      disabled={isDisabled}
      value={value}
      data-test="select-option"
    >
      {label}
    </option>
  );
};

export default SelectOption;
