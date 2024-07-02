import React from 'react';

type Props = {
  label: string,
  value: string,
  isDisabled?: boolean,
}
const SelectOption = ({ label, value, isDisabled = false }: Props) => (
  <option
    disabled={isDisabled}
    value={value}
    data-test="select-option"
  >
    {label}
  </option>
);

export default SelectOption;
