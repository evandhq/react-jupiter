import React from 'react';

import { action } from '@storybook/addon-actions';
import { Tabs, TabPanel } from './index';

export default {
  title: 'Tabs',
  component: Tabs,
  
  argTypes: {
    defaultTab: {
      control: 'select',
      options: ['firstTab', 'secTab', 'thirsdTab', 'the4thTab'],
      defaultValue: 'firstTab',
    },
    onChange: {
      action: 'onChange',
    },
  },
};

const Template = (args) => (
  <Tabs {...args}>
    <TabPanel label="تب اول" tabKey="firstTab">
      this is 1th panel data
    </TabPanel>
    <TabPanel label="تب دوم اینجا" tabKey="secTab">
      this is 2nd panel data
    </TabPanel>
    <TabPanel label="تب سوم طولانی است" tabKey="thirsdTab">
      this is 3th panel data
    </TabPanel>
    <TabPanel label="تب بعدی خیلی خیلی خیلی خیلی طولانی است" tabKey="the4thTab">
      this is ۴th panel data
    </TabPanel>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  defaultTab: 'firstTab',
  onChange: action('optional onChange function, triggers what you want to do in onChange tab (it has new tabKey as input argument)'),
};

export const SecondTabDefault = Template.bind({});
SecondTabDefault.args = {
  ...Default.args,
  defaultTab: 'secTab',
};

export const ThirdTabDefault = Template.bind({});
ThirdTabDefault.args = {
  ...Default.args,
  defaultTab: 'thirsdTab',
};

export const FourthTabDefault = Template.bind({});
FourthTabDefault.args = {
  ...Default.args,
  defaultTab: 'the4thTab',
};
