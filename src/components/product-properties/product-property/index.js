import React from 'react';
import Icon from '../../icon';
import { Text } from '../../typography';
import Container from './index.style';

export type ItemProps = {
  iconName: string,
  text: string,
  color: 'grey' | 'darkBlue' | 'black' | 'default',
  iconColor: 'grey' | 'darkBlue' | 'black' | 'default',
  link: string | undefined
}

const ProductProperty = (props: ItemProps) => {
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
