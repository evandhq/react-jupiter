import React from 'react';
import { Text } from '../typography';

type Props = {
  label: string,
  handleClick?: () => void,
  color: string
}
function MenuItem({ label, handleClick, color } : Props) {
  return (
    <Text
      size={14}
      bold
      onClick={handleClick}
      data-test="product-menu-item"
      color={color}
    >
      {label}
    </Text>
  );
}

MenuItem.defaultProps = {
  handleClick: () => {},
  color: "default"
};
export default MenuItem;
