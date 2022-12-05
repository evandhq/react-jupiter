// @flow

import React from 'react';
import GlobalStyle from '../globalStyle';
import { ListContainer, ListItem } from './index.style';
import ProductProperty from './product-property';

type ItemProps = {
  iconName: string,
  text: string,
  color: 'grey' | 'darkBlue' | 'default',
  link: string | undefined
}

type Props = {
  list: [ItemProps],
  isHorizontal?: boolean,
  color?: 'gray' | 'darkBlue' | 'default',
}

const ProductProperties = (props: Props) => {
  const {
    list,
    isHorizontal,
    color,
    link,
    ...rest
  } = props;
  const propsLength = list.length > 1 && isHorizontal ? list.length : 1;

  if (list.length === 1) {
    return (
      <>
        <GlobalStyle />
        <ProductProperty iconName={list[0].iconName} text={list[0].text} {...rest} />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <ListContainer isHorizontal={isHorizontal} {...rest}>
        {list.map(({ iconName, text, link }, index) => (
          <ListItem key={`${iconName}-${index.toString()}`} propsLength={propsLength}>
            <ProductProperty iconName={iconName} text={text} color={color} link={link} />
          </ListItem>
        ))}
      </ListContainer>
    </>
  );
};

ProductProperties.defaultProps = {
  isHorizontal: false,
  color: 'gray',
};

export default ProductProperties;
