import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ProgressBar from '.';

const labels = ['همیار', 'همکار'];

storiesOf('Progress Bar', module)
.add('Progress Bar', () => <ProgressBar width="0" labels={labels} />)
.addDecorator(withInfo);