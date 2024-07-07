import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';
import OrgnizerCard from './index';

storiesOf('OrganizerCard', module)
  .add('sample', () => (
    <OrgnizerCard
      name={text('name', 'وزارت آموزش و پرورش')}
      followersCount={text('followersCount (string-optional)', '۱۳۲۴۷')}
      description="برگزارکننده رویداد‌های آموزشی و فرهنگی زیر نظر وزارت ارشاد"
      logo={text('logo(optional)', 'https://i.pravatar.cc/150?img=62')}
      renderOrganizerLink={(el) => (<a href="https://i.pravatar.cc/150?img=62">{el}</a>)}
      activeEventsCount={text('activeEventsCount(optional)', '۱۲۳')}
      allEventsCount={text('allEventsCount(optional)', '۲۴۵۶۷')}
      recommendedCount={text('recommendedCount(optional)', '۳۳ نفر')}
      isFollowed
      partnership="partner"
    />
  ))
  .addDecorator(withKnobs)
  .addDecorator(withInfo);
