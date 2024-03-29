import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ProductProperties from './index';
import '../storybook.css';

storiesOf('ProductProperty', module)
  .add('with one item', () => <ProductProperties list={[{ iconName: 'watch-later', text: 'watch text' }]} />)
  .add('with three item', () => (
    <ProductProperties
      list={[
        { iconName: 'watch-later', text: 'متن زیبا' },
        { iconName: 'alarm-off', text: 'متن دیگری' },
        { iconName: 'aspect-ratio', text: 'و sssss هم متن دیگری', link: '/user' },
      ]}
    />
  ))
  .add('horizontal three item', () => (
    <ProductProperties
      isHorizontal
      list={[
        { iconName: 'watch-later', text: 'متن زیبا' },
        { iconName: 'alarm-off', text: 'متن دیگری' },
        { iconName: 'aspect-ratio', text: 'و باز هم متن دیگری' },
      ]}
    />
  ))
  .addDecorator(withInfo);
