import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Icon from './index';

storiesOf('Icon', module)
  .add('default size & color', () => <Icon name="watch-later" />)
  .add('small icon', () => <Icon name="watch-later" siz="sm" />)
  .add('medium icon', () => <Icon name="watch-later" size="md" />)
  .add('large icon', () => <Icon name="watch-later" size="lg" />)
  .add('red icon', () => <Icon name="watch-later" color="red" />)
  .add('green icon', () => <Icon name="watch-later" color="green" />)
  .add('blue icon', () => <Icon name="watch-later" color="blue" />)
  .add('gray icon', () => <Icon name="watch-later" color="gray" />)
  .add('light icon', () => <Icon name="watch-later" color="light" />)
  .add('dark blue icon', () => <Icon name="watch-later" color="darkBlue" />)
  .add('yellow icon', () => <Icon name="watch-later" color="yellow" />)
  .add('view-carousel', () => <Icon name="view-carousel" />)
  .add('verified-user', () => <Icon name="verified-user" />)
  .add('icon-update', () => <Icon name="icon-update" />)
  .add('touch-app', () => <Icon name="touch-app" />)
  .add('today', () => <Icon name="today" />)
  .add('theaters', () => <Icon name="theaters" />)
  .add('supervisor-account', () => <Icon name="supervisor-account" />)
  .add('supervised-user-circle', () => <Icon name="supervised-user-circle" />)
  .add('shopping-cart', () => <Icon name="shopping-cart" />)
  .add('settings-ethernet', () => <Icon name="settings-ethernet" />)
  .add('settings-applications', () => <Icon name="settings-applications" />)
  .add('setting', () => <Icon name="setting" />)
  .add('search', () => <Icon name="search" />)
  .add('restore', () => <Icon name="restore" />)
  .add('report-problem', () => <Icon name="report-problem" />)
  .add('question-answer', () => <Icon name="question-answer" />)
  .add('query-builder', () => <Icon name="query-builder" />)
  .add('print', () => <Icon name="print" />)
  .add('perm-identity', () => <Icon name="perm-identity" />)
  .add('perm-contact-calendar', () => <Icon name="perm-contact-calendar" />)
  .add('offline-pin', () => <Icon name="offline-pin" />)
  .add('note-add', () => <Icon name="note-add" />)
  .add('loyalty', () => <Icon name="loyalty" />)
  .add('lock', () => <Icon name="lock" />)
  .add('language', () => <Icon name="language" />)
  .add('info', () => <Icon name="info" />)
  .add('hourglass-full', () => <Icon name="hourglass-full" />)
  .add('hourglass-empty', () => <Icon name="hourglass-empty" />)
  .add('home', () => <Icon name="home" />)
  .add('history-1', () => <Icon name="history-1" />)
  .add('highlight-off', () => <Icon name="highlight-off" />)
  .add('help-outline', () => <Icon name="help-outline" />)
  .add('zoom-out', () => <Icon name="zoom-out" />)
  .add('zoom-in', () => <Icon name="zoom-in" />)
  .add('watch-later', () => <Icon name="watch-later" />)
  .add('warning', () => <Icon name="warning" />)
  .add('remove-red-eye', () => <Icon name="remove-red-eye" />)
  .add('notification-important', () => <Icon name="notification-important" />)
  .add('help', () => <Icon name="help" />)
  .add('get-app', () => <Icon name="get-app" />)
  .add('fingerprint', () => <Icon name="fingerprint" />)
  .add('favorite', () => <Icon name="favorite" />)
  .add('favorite-border', () => <Icon name="favorite-border" />)
  .add('exit-to-app', () => <Icon name="exit-to-app" />)
  .add('event', () => <Icon name="event" />)
  .add('event-seat', () => <Icon name="event-seat" />)
  .add('error', () => <Icon name="error" />)
  .add('error-outline', () => <Icon name="error-outline" />)
  .add('description', () => <Icon name="description" />)
  .add('delete', () => <Icon name="delete" />)
  .add('dashboard', () => <Icon name="dashboard" />)
  .add('credit-card', () => <Icon name="credit-card" />)
  .add('copyright', () => <Icon name="copyright" />)
  .add('commute', () => <Icon name="commute" />)
  .add('code', () => <Icon name="code" />)
  .add('check-circle', () => <Icon name="check-circle" />)
  .add('check-circle-outline', () => <Icon name="check-circle-outline" />)
  .add('card-giftcard', () => <Icon name="card-giftcard" />)
  .add('calendar-today', () => <Icon name="calendar-today" />)
  .add('build', () => <Icon name="build" />)
  .add('bookmarks', () => <Icon name="bookmarks" />)
  .add('bookmark', () => <Icon name="bookmark" />)
  .add('bookmark-border', () => <Icon name="bookmark-border" />)
  .add('backup', () => <Icon name="backup" />)
  .add('autorenew', () => <Icon name="autorenew" />)
  .add('assignment', () => <Icon name="assignment" />)
  .add('assignment-ind', () => <Icon name="assignment-ind" />)
  .add('assessment', () => <Icon name="assessment" />)
  .add('aspect-ratio', () => <Icon name="aspect-ratio" />)
  .add('alarm', () => <Icon name="alarm" />)
  .add('alarm-on', () => <Icon name="alarm-on" />)
  .add('alarm-off', () => <Icon name="alarm-off" />)
  .add('alarm-add', () => <Icon name="alarm-add" />)
  .add('account-circle', () => <Icon name="account-circle" />)
  .add('account-box', () => <Icon name="account-box" />)
  .add('account-balance-wallet', () => <Icon name="account-balance-wallet" />)
  .add('volume-up', () => <Icon name="volume-up" />)
  .add('volume-off', () => <Icon name="volume-off" />)
  .add('volume-mute', () => <Icon name="volume-mute" />)
  .add('volume-down', () => <Icon name="volume-down" />)
  .add('visibility', () => <Icon name="visibility" />)
  .add('visibility-off', () => <Icon name="visibility-off" />)
  .add('thumb-up', () => <Icon name="thumb-up" />)
  .add('thumb-down', () => <Icon name="thumb-down" />)
  .add('stay-current-landscape', () => <Icon name="stay-current-landscape" />)
  .add('sort-by-alpha', () => <Icon name="sort-by-alpha" />)
  .add('share', () => <Icon name="share" />)
  .add('remove-circle', () => <Icon name="remove-circle" />)
  .add('playlist-play', () => <Icon name="playlist-play" />)
  .add('playlist-add', () => <Icon name="playlist-add" />)
  .add('playlist-add-check', () => <Icon name="playlist-add-check" />)
  .add('play-circle-outline', () => <Icon name="play-circle-outline" />)
  .add('play-circle-filled', () => <Icon name="play-circle-filled" />)
  .add('play-arrow', () => <Icon name="play-arrow" />)
  .add('pause-circle-outline', () => <Icon name="pause-circle-outline" />)
  .add('note', () => <Icon name="note" />)
  .add('not-interested', () => <Icon name="not-interested" />)
  .add('mic', () => <Icon name="mic" />)
  .add('mic-off', () => <Icon name="mic-off" />)
  .add('mic-none', () => <Icon name="mic-none" />)
  .add('headset', () => <Icon name="headset" />)
  .add('check-box', () => <Icon name="check-box" />)
  .add('cancel', () => <Icon name="cancel" />)
  .add('call', () => <Icon name="call" />)
  .add('cake', () => <Icon name="cake" />)
  .add('bluetooth', () => <Icon name="bluetooth" />)
  .add('attachment', () => <Icon name="attachment" />)
  .add('apps', () => <Icon name="apps" />)
  .add('add', () => <Icon name="add" />)
  .add('add-alert', () => <Icon name="add-alert" />)
  .add('add-a-photo', () => <Icon name="add-a-photo" />)
  .add('Subtraction-2', () => <Icon name="Subtraction-2" />)
  .add('File', () => <Icon name="File" />)
  .add('facebook-alt', () => <Icon name="facebook-alt" />)
  .add('zoom-out-map', () => <Icon name="zoom-out-map" />)
  .add('work', () => <Icon name="work" />)
  .add('work-outline', () => <Icon name="work-outline" />)
  .add('work-off', () => <Icon name="work-off" />)
  .add('vpn-key', () => <Icon name="vpn-key" />)
  .add('thumb-up-alt', () => <Icon name="thumb-up-alt" />)
  .add('thumb-down-alt', () => <Icon name="thumb-down-alt" />)
  .add('textsms', () => <Icon name="textsms" />)
  .add('stay-current-portrait', () => <Icon name="stay-current-portrait" />)
  .add('send', () => <Icon name="send" />)
  .add('remove-circle-outline', () => <Icon name="remove-circle-outline" />)
  .add('place', () => <Icon name="place" />)
  .add('mood', () => <Icon name="mood" />)
  .add('mood-bad', () => <Icon name="mood-bad" />)
  .add('mail-outline', () => <Icon name="mail-outline" />)
  .add('loop', () => <Icon name="loop" />)
  .add('location-on', () => <Icon name="location-on" />)
  .add('location-off', () => <Icon name="location-off" />)
  .add('local-offer', () => <Icon name="local-offer" />)
  .add('keyboard', () => <Icon name="keyboard" />)
  .add('indeterminate-check-box', () => <Icon name="indeterminate-check-box" />)
  .add('import-contacts', () => <Icon name="import-contacts" />)
  .add('headset-mic', () => <Icon name="headset-mic" />)
  .add('forum', () => <Icon name="forum" />)
  .add('equalizer', () => <Icon name="equalizer" />)
  .add('email', () => <Icon name="email" />)
  .add('dialpad', () => <Icon name="dialpad" />)
  .add('crop-rotate', () => <Icon name="crop-rotate" />)
  .add('cloud-circle', () => <Icon name="cloud-circle" />)
  .add('cloud', () => <Icon name="cloud" />)
  .add('chevron-left', () => <Icon name="chevron-left" />)
  .add('check', () => <Icon name="check" />)
  .add('check-box-outline-blank', () => <Icon name="check-box-outline-blank" />)
  .add('chat', () => <Icon name="chat" />)
  .add('chat-bubble', () => <Icon name="chat-bubble" />)
  .add('call-end', () => <Icon name="call-end" />)
  .add('bluetooth-connected', () => <Icon name="bluetooth-connected" />)
  .add('block', () => <Icon name="block" />)
  .add('arrow-backward-ios', () => <Icon name="arrow-backward-ios" />)
  .add('arrow-back', () => <Icon name="arrow-back" />)
  .add('add-photo-alternate', () => <Icon name="add-photo-alternate" />)
  .add('add-box', () => <Icon name="add-box" />)
  .add('ic-content-copy-24px', () => <Icon name="ic-content-copy-24px" />)
  .add('google-plus-alt', () => <Icon name="google-plus-alt" />)
  .add('google-alt:', () => <Icon name="google-alt:" />)
  .add('facebook', () => <Icon name="facebook" />)
  .add('toggle-off', () => <Icon name="toggle-off" />)
  .add('star', () => <Icon name="star" />)
  .add('star-half', () => <Icon name="star-half" />)
  .add('star-border', () => <Icon name="star-border" />)
  .add('sentiment-very-satisfied', () => <Icon name="sentiment-very-satisfied" />)
  .add('sentiment-very-dissatisfied', () => <Icon name="sentiment-very-dissatisfied" />)
  .add('sentiment-satisfied', () => <Icon name="sentiment-satisfied" />)
  .add('sentiment-dissatisfied', () => <Icon name="sentiment-dissatisfied" />)
  .add('radio-button-unchecked', () => <Icon name="radio-button-unchecked" />)
  .add('radio-button-checked', () => <Icon name="radio-button-checked" />)
  .add('outlined-flag', () => <Icon name="outlined-flag" />)
  .add('ondemand-video', () => <Icon name="ondemand-video" />)
  .add('notifications', () => <Icon name="notifications" />)
  .add('notifications-paused', () => <Icon name="notifications-paused" />)
  .add('notifications-off', () => <Icon name="notifications-off" />)
  .add('notifications-none', () => <Icon name="notifications-none" />)
  .add('notifications-active', () => <Icon name="notifications-active" />)
  .add('more-vert', () => <Icon name="more-vert" />)
  .add('more-horiz', () => <Icon name="more-horiz" />)
  .add('menu', () => <Icon name="menu" />)
  .add('mail', () => <Icon name="mail" />)
  .add('link', () => <Icon name="link" />)
  .add('link-off', () => <Icon name="link-off" />)
  .add('group', () => <Icon name="group" />)
  .add('expand-more', () => <Icon name="expand-more" />)
  .add('expand-less', () => <Icon name="expand-less" />)
  .add('drafts', () => <Icon name="drafts" />)
  .add('delete-sweep', () => <Icon name="delete-sweep" />)
  .add('create', () => <Icon name="create" />)
  .add('close', () => <Icon name="close" />)
  .add('category', () => <Icon name="category" />)
  .add('bluetooth-disabled', () => <Icon name="bluetooth-disabled" />)
  .add('add-circle', () => <Icon name="add-circle" />)
  .add('add-circle-outline', () => <Icon name="add-circle-outline" />)
  .add('telegram-alt', () => <Icon name="telegram-alt" />)
  .add('telegram', () => <Icon name="telegram" />)
  .add('linkedin-alt', () => <Icon name="linkedin-alt" />)
  .add('linkedin', () => <Icon name="linkedin" />)
  .add('instagram-alt', () => <Icon name="instagram-alt" />)
  .add('instagram', () => <Icon name="instagram" />)
  .add('google-plus', () => <Icon name="google-plus" />)
  .add('google', () => <Icon name="google" />)
  .add('where-to-vote', () => <Icon name="where-to-vote" />)
  .add('tv', () => <Icon name="tc" />)
  .add('toggle-on', () => <Icon name="toggle-on" />)
  .add('tablet', () => <Icon name="tablet" />)
  .add('tablet-android', () => <Icon name="tablet-android" />)
  .add('smartphone', () => <Icon name="smartphone" />)
  .add('keyboard-voice', () => <Icon name="keyboard-voice" />)
  .add('keyboard-backspace', () => <Icon name="keyboard-backspace" />)
  .add('gps-off', () => <Icon name="gps-off" />)
  .add('gps-not-fixed', () => <Icon name="gps-not-fixed" />)
  .add('gps-fixed', () => <Icon name="gps-fixed" />)
  .add('cloud-upload', () => <Icon name="cloud-upload" />)
  .add('cloud-queue', () => <Icon name="cloud-queue" />)
  .add('cloud-off', () => <Icon name="cloud-off" />)
  .add('cloud-download', () => <Icon name="cloud-download" />)
  .add('cloud-done', () => <Icon name="cloud-done" />)
  .add('chevron-right', () => <Icon name="chevron-right" />)
  .add('camera-alt', () => <Icon name="camera-alt" />)
  .add('bluetooth-searching', () => <Icon name="bluetooth-searching" />)
  .add('arrow-upward', () => <Icon name="arrow-upward" />)
  .add('arrow-right', () => <Icon name="arrow-right" />)
  .add('arrow-left', () => <Icon name="arrow-left" />)
  .add('arrow-forward', () => <Icon name="arrow-forward" />)
  .add('arrow-forward-ios', () => <Icon name="arrow-forward-ios" />)
  .add('arrow-drop-up', () => <Icon name="arrow-drop-up" />)
  .add('arrow-drop-down', () => <Icon name="arrow-drop-down" />)
  .add('arrow-drop-down-circle', () => <Icon name="arrow-drop-down-circle" />)
  .add('arrow-downward', () => <Icon name="arrow-downward" />)
  .add('twitter-alt', () => <Icon name="twitter-alt" />)
  .add('twitter', () => <Icon name="twitter" />)
  .add('watch', () => <Icon name="watch" />)
  .addDecorator(withInfo);
