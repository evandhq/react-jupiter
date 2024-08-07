// @flow

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import { ListContainer, ListItem } from './index.style';
import ProductProperty from './product-property';
import generalTheme from '../themes';

type ItemProps = {
  iconName: string,
  text: string,
  color: 'grey' | 'darkBlue' | 'black' | 'default',
  iconColor: 'grey' | 'darkBlue' | 'black' | 'default',
  link: string | undefined
}

type Props = {
  list: [ItemProps],
  isHorizontal?: boolean,
  color?: 'gray' | 'darkBlue' | 'black' | 'default',
  iconColor?: 'gray' | 'darkBlue' | 'black' | 'default',
}

const ProductProperties = (props: Props) => {
  const {
    list,
    isHorizontal = false,
    color = 'black',
    iconColor = 'gray',
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
    <ThemeProvider theme={generalTheme}>
      <GlobalStyle />
      <ListContainer isHorizontal={isHorizontal} {...rest}>
        {list.map(({ iconName, text, link }, index) => (
          <ListItem key={`${iconName}-${index.toString()}`} isHorizontal={isHorizontal} propsLength={propsLength}>
            <ProductProperty
              iconName={iconName}
              text={text}
              color={color}
              iconColor={iconColor}
              link={link}
            />
          </ListItem>
        ))}
      </ListContainer>
    </ThemeProvider>
  );
};

export default ProductProperties;
