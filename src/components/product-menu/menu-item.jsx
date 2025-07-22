import React from 'react';
import { Text } from '../typography';

function MenuItem({ label, handleClick = () => {}, color = 'default' }) {
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

export default MenuItem;
