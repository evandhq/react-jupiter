import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import Modal from './index';

storiesOf('Modal', module)
  .add('Minimal modal', () => {
    const [show, setShow] = useState(false);
    return (
      <div>
        <button type="button" onClick={() => setShow(true)}>نمایش مودال</button>
        <div>
          <article>
            <p>
              لورم ایپسوم متن ساختگی
            </p>
          </article>
        </div>
        <Modal isOpen={show} modalWidth="30%" modalWidthMobile="80%" onRequestClose={() => setShow(false)}>
          <h1>
            سلام
          </h1>
          <p>
            این یک نمونه است
          </p>
        </Modal>
      </div>
    );
  })
  .add('Full option modal', () => (
    <Modal
      modalWidth={text('optional modalWidth', '100px')}
      isOpen
      hasCloseButton={boolean('optional hasCloseButton', true)}
      disabledClose={boolean('optional disabledClose', false)}
      onRequestClose={action('trigger what you want to do in onRequestClose function')}
      onAfterOpen={action('trigger what you want to do in onAfterOpen function')}
    >
      <h1>
        سلام
      </h1>
      <p>
        این یک نمونه کامل  است
      </p>
    </Modal>
  ))
  .addDecorator(withInfo)
  .addDecorator(withKnobs);
