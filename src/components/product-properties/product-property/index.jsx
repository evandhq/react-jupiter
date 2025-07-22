import React from 'react';
import Icon from '../../icon';
import { Text } from '../../typography';
import Container from './index.style';

const ProductProperty = (props) => {
  const {
    iconName,
    text,
    color,
    iconColor,
    link,
    ...rest
  } = props;

  const renderWithLink = () => (
    <a href={link}>
      <Icon name={iconName} size="sm" color={iconColor} stickyRight />
      <Text color={color} size="12">
        {text}
      </Text>
    </a>
  );

  const renderWithoutLink = () => (
    <>
      <Icon name={iconName} size="sm" color={iconColor} stickyRight />
      <Text color={color} size="12">
        {text}
      </Text>
    </>
  );

  return (
    <Container {...rest}>
      {link ? renderWithLink() : renderWithoutLink()}
    </Container>
  );
};

export default ProductProperty;
