import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ProgressBar from '.';

const labels = ['همیار', 'همکار'];
const points = {
    partner: 50,
    colleague: 200
}
storiesOf('Progress Bar', module)
.add('Progress Bar', () => <ProgressBar width="8" labels={labels} points={points} />)
.addDecorator(withInfo);