import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ProgressBar from './index';

storiesOf('Progress Bar', module)
.add('Progress Bar', () => <ProgressBar width="25%" />)
.addDecorator(withInfo);