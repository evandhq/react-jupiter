import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
  i.jupiter-icon {
    /* use !important to prevent issues with browser extensions that change fonts */
    display: inline-block;
    vertical-align: middle;
    font-family: 'Jupiterico' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .new-icon-account-balance-wallet:before {
    content: "\\e900";
  }
  .new-icon-account-box:before {
    content: "\\e901";
  }
  .new-icon-account-circle:before {
    content: "\\e902";
  }
  .new-icon-add-a-photo:before {
    content: "\\e903";
  }
  .new-icon-add-alert:before {
    content: "\\e904";
  }
  .new-icon-add-box:before {
    content: "\\e905";
  }
  .new-icon-add-circle-outline:before {
    content: "\\e906";
  }
  .new-icon-add-circle:before {
    content: "\\e907";
  }
  .new-icon-add-photo-alternate:before {
    content: "\\e908";
  }
  .new-icon-add:before {
    content: "\\e909";
  }
  .new-icon-alarm-add:before {
    content: "\\e90a";
  }
  .new-icon-alarm-off:before {
    content: "\\e90b";
  }
  .new-icon-alarm-on:before {
    content: "\\e90c";
  }
  .new-icon-alarm:before {
    content: "\\e90d";
  }
  .new-icon-apps:before {
    content: "\\e90e";
  }
  .new-icon-arrow-back:before {
    content: "\\e90f";
  }
  .new-icon-arrow-backward-ios:before {
    content: "\\e910";
  }
  .new-icon-arrow-downward:before {
    content: "\\e911";
  }
  .new-icon-arrow-drop-down-circle:before {
    content: "\\e912";
  }
  .new-icon-arrow-drop-down:before {
    content: "\\e913";
  }
  .new-icon-arrow-drop-up:before {
    content: "\\e914";
  }
  .new-icon-arrow-forward-ios:before {
    content: "\\e915";
  }
  .new-icon-arrow-forward:before {
    content: "\\e916";
  }
  .new-icon-arrow-left:before {
    content: "\\e917";
  }
  .new-icon-arrow-right:before {
    content: "\\e918";
  }
  .new-icon-arrow-upward:before {
    content: "\\e919";
  }
  .new-icon-aspect-ratio:before {
    content: "\\e91a";
  }
  .new-icon-assessment:before {
    content: "\\e91b";
  }
  .new-icon-assignment-ind:before {
    content: "\\e91c";
  }
  .new-icon-assignment:before {
    content: "\\e91d";
  }
  .new-icon-attachment:before {
    content: "\\e91e";
  }
  .new-icon-attendees:before {
    content: "\\e91f";
    color: #535353;
  }
  .new-icon-autorenew:before {
    content: "\\e920";
  }
  .new-icon-backup:before {
    content: "\\e921";
  }
  .new-icon-block:before {
    content: "\\e922";
  }
  .new-icon-bluetooth-connected:before {
    content: "\\e923";
  }
  .new-icon-bluetooth-disabled:before {
    content: "\\e924";
  }
  .new-icon-bluetooth-searching:before {
    content: "\\e925";
  }
  .new-icon-bluetooth:before {
    content: "\\e926";
  }
  .new-icon-bookmark-border:before {
    content: "\\e927";
  }
  .new-icon-bookmark:before {
    content: "\\e928";
  }
  .new-icon-bookmarks:before {
    content: "\\e929";
  }
  .new-icon-build:before {
    content: "\\e92a";
  }
  .new-icon-cake:before {
    content: "\\e92b";
  }
  .new-icon-calendar-today:before {
    content: "\\e92c";
  }
  .new-icon-call-end:before {
    content: "\\e92d";
  }
  .new-icon-call-message:before {
    content: "\\e92e";
  }
  .new-icon-call:before {
    content: "\\e92f";
  }
  .new-icon-camera-alt:before {
    content: "\\e930";
  }
  .new-icon-cancel:before {
    content: "\\e931";
  }
  .new-icon-card-giftcard:before {
    content: "\\e932";
  }
  .new-icon-categories:before {
    content: "\\e933";
    color: #535353;
  }
  .new-icon-category:before {
    content: "\\e934";
  }
  .new-icon-chat-bubble:before {
    content: "\\e935";
  }
  .new-icon-chat:before {
    content: "\\e936";
  }
  .new-icon-check-box-outline-blank:before {
    content: "\\e937";
  }
  .new-icon-check-box:before {
    content: "\\e938";
  }
  .new-icon-check-circle-outline:before {
    content: "\\e939";
  }
  .new-icon-check-circle:before {
    content: "\\e93a";
  }
  .new-icon-check:before {
    content: "\\e93b";
  }
  .new-icon-chevron-left:before {
    content: "\\e93c";
  }
  .new-icon-chevron-right:before {
    content: "\\e93d";
  }
  .new-icon-close:before {
    content: "\\e93e";
  }
  .new-icon-cloud-circle:before {
    content: "\\e93f";
  }
  .new-icon-cloud-done:before {
    content: "\\e940";
  }
  .new-icon-cloud-download:before {
    content: "\\e941";
  }
  .new-icon-cloud-off:before {
    content: "\\e942";
  }
  .new-icon-cloud-queue:before {
    content: "\\e943";
  }
  .new-icon-cloud-upload:before {
    content: "\\e944";
  }
  .new-icon-cloud:before {
    content: "\\e945";
  }
  .new-icon-code:before {
    content: "\\e946";
  }
  .new-icon-commute:before {
    content: "\\e947";
  }
  .new-icon-copyright:before {
    content: "\\e948";
  }
  .new-icon-create:before {
    content: "\\e949";
  }
  .new-icon-credit-card:before {
    content: "\\e94a";
  }
  .new-icon-crop-rotate:before {
    content: "\\e94b";
  }
  .new-icon-dashboard:before {
    content: "\\e94c";
  }
  .new-icon-delete-outline:before {
    content: "\\e94d";
  }
  .new-icon-delete-sweep:before {
    content: "\\e94e";
  }
  .new-icon-delete:before {
    content: "\\e94f";
  }
  .new-icon-description:before {
    content: "\\e950";
  }
  .new-icon-dialpad:before {
    content: "\\e951";
  }
  .new-icon-drafts:before {
    content: "\\e952";
  }
  .new-icon-email:before {
    content: "\\e953";
  }
  .new-icon-equalizer:before {
    content: "\\e954";
  }
  .new-icon-error-outline:before {
    content: "\\e955";
  }
  .new-icon-error:before {
    content: "\\e956";
  }
  .new-icon-event-seat:before {
    content: "\\e957";
  }
  .new-icon-event:before {
    content: "\\e958";
  }
  .new-icon-exit-to-app:before {
    content: "\\e959";
  }
  .new-icon-expand-less:before {
    content: "\\e95a";
  }
  .new-icon-expand-more:before {
    content: "\\e95b";
  }
  .new-icon-facebook-alt:before {
    content: "\\e95c";
  }
  .new-icon-facebook:before {
    content: "\\e95d";
  }
  .new-icon-favorite-border:before {
    content: "\\e95e";
  }
  .new-icon-favorite:before {
    content: "\\e95f";
  }
  .new-icon-file .path1:before {
    content: "\\e960";
    color: rgb(255, 255, 255);
  }
  .new-icon-file .path2:before {
    content: "\\e961";
    margin-left: -1em;
    color: rgb(59, 65, 65);
  }
  .new-icon-fingerprint:before {
    content: "\\e962";
  }
  .new-icon-forum:before {
    content: "\\e963";
  }
  .new-icon-get-app:before {
    content: "\\e964";
  }
  .new-icon-google-alt:before {
    content: "\\e965";
  }
  .new-icon-google-plus-alt:before {
    content: "\\e966";
  }
  .new-icon-google-plus:before {
    content: "\\e967";
  }
  .new-icon-google:before {
    content: "\\e968";
  }
  .new-icon-gps-fixed:before {
    content: "\\e969";
  }
  .new-icon-gps-not-fixed:before {
    content: "\\e96a";
  }
  .new-icon-gps-off:before {
    content: "\\e96b";
  }
  .new-icon-group:before {
    content: "\\e96c";
  }
  .new-icon-hamkar:before {
    content: "\\e96d";
    color: #595959;
  }
  .new-icon-hamyar:before {
    content: "\\e96e";
  }
  .new-icon-headset-mic:before {
    content: "\\e96f";
  }
  .new-icon-headset:before {
    content: "\\e970";
  }
  .new-icon-help-outline:before {
    content: "\\e971";
  }
  .new-icon-help:before {
    content: "\\e972";
  }
  .new-icon-highlight-off:before {
    content: "\\e973";
  }
  .new-icon-history:before {
    content: "\\e974";
  }
  .new-icon-home:before {
    content: "\\e975";
  }
  .new-icon-hourglass-empty:before {
    content: "\\e976";
  }
  .new-icon-hourglass-full:before {
    content: "\\e977";
  }
  .new-icon-ic-content-copy:before {
    content: "\\e978";
  }
  .new-icon-import-contacts:before {
    content: "\\e979";
  }
  .new-icon-indeterminate-check-box:before {
    content: "\\e97a";
  }
  .new-icon-info:before {
    content: "\\e97b";
  }
  .new-icon-instagram-alt:before {
    content: "\\e97c";
  }
  .new-icon-instagram:before {
    content: "\\e97d";
  }
  .new-icon-keyboard-backspace:before {
    content: "\\e97e";
  }
  .new-icon-keyboard-voice:before {
    content: "\\e97f";
  }
  .new-icon-keyboard:before {
    content: "\\e980";
  }
  .new-icon-language:before {
    content: "\\e981";
  }
  .new-icon-link-off:before {
    content: "\\e982";
  }
  .new-icon-link:before {
    content: "\\e983";
  }
  .new-icon-linkedin-alt:before {
    content: "\\e984";
  }
  .new-icon-linkedin:before {
    content: "\\e985";
  }
  .new-icon-local-offer .path1:before {
    content: "\\e986";
    color: rgb(255, 255, 255);
  }
  .new-icon-local-offer .path2:before {
    content: "\\e987";
    margin-left: -1em;
    color: rgb(59, 65, 65);
  }
  .new-icon-location-off:before {
    content: "\\e988";
  }
  .new-icon-location-on:before {
    content: "\\e989";
  }
  .new-icon-lock-open:before {
    content: "\\e98a";
  }
  .new-icon-lock:before {
    content: "\\e98b";
  }
  .new-icon-loop:before {
    content: "\\e98c";
  }
  .new-icon-loyalty:before {
    content: "\\e98d";
  }
  .new-icon-mail-outline:before {
    content: "\\e98e";
  }
  .new-icon-mail:before {
    content: "\\e98f";
  }
  .new-icon-menu:before {
    content: "\\e990";
  }
  .new-icon-mic-none:before {
    content: "\\e991";
  }
  .new-icon-mic-off:before {
    content: "\\e992";
  }
  .new-icon-mic:before {
    content: "\\e993";
  }
  .new-icon-mood-bad:before {
    content: "\\e994";
  }
  .new-icon-mood:before {
    content: "\\e995";
  }
  .new-icon-more-horiz:before {
    content: "\\e996";
  }
  .new-icon-more-vert:before {
    content: "\\e997";
  }
  .new-icon-not-interested:before {
    content: "\\e998";
  }
  .new-icon-note-add:before {
    content: "\\e999";
  }
  .new-icon-note:before {
    content: "\\e99a";
  }
  .new-icon-notification-important:before {
    content: "\\e99b";
  }
  .new-icon-notifications-active:before {
    content: "\\e99c";
  }
  .new-icon-notifications-none:before {
    content: "\\e99d";
  }
  .new-icon-notifications-off:before {
    content: "\\e99e";
  }
  .new-icon-notifications-paused:before {
    content: "\\e99f";
  }
  .new-icon-notifications:before {
    content: "\\e9a0";
  }
  .new-icon-offline-pin:before {
    content: "\\e9a1";
  }
  .new-icon-ondemand-video:before {
    content: "\\e9a2";
  }
  .new-icon-outlined-flag:before {
    content: "\\e9a3";
  }
  .new-icon-pause-circle-outline:before {
    content: "\\e9a4";
  }
  .new-icon-perm-contact-calendar:before {
    content: "\\e9a5";
  }
  .new-icon-perm-identity:before {
    content: "\\e9a6";
  }
  .new-icon-place:before {
    content: "\\e9a7";
  }
  .new-icon-play-arrow:before {
    content: "\\e9a8";
  }
  .new-icon-play-circle-filled:before {
    content: "\\e9a9";
  }
  .new-icon-play-circle-outline:before {
    content: "\\e9aa";
  }
  .new-icon-playlist-add-check:before {
    content: "\\e9ab";
  }
  .new-icon-playlist-add:before {
    content: "\\e9ac";
  }
  .new-icon-playlist-play:before {
    content: "\\e9ad";
  }
  .new-icon-print:before {
    content: "\\e9ae";
  }
  .new-icon-query-builder:before {
    content: "\\e9af";
  }
  .new-icon-question-answer:before {
    content: "\\e9b0";
  }
  .new-icon-radio-button-checked:before {
    content: "\\e9b1";
  }
  .new-icon-radio-button-unchecked:before {
    content: "\\e9b2";
  }
  .new-icon-remove-circle-outline:before {
    content: "\\e9b3";
  }
  .new-icon-remove-circle:before {
    content: "\\e9b4";
  }
  .new-icon-remove-red-eye-2 .path1:before {
    content: "\\e9b5";
    color: rgb(255, 255, 255);
  }
  .new-icon-remove-red-eye-2 .path2:before {
    content: "\\e9b6";
    margin-left: -1em;
    color: rgb(59, 65, 65);
  }
  .new-icon-remove-red-eye .path1:before {
    content: "\\e9b7";
    color: rgb(255, 255, 255);
  }
  .new-icon-remove-red-eye .path2:before {
    content: "\\e9b8";
    margin-left: -1em;
    color: rgb(59, 65, 65);
  }
  .new-icon-report-problem:before {
    content: "\\e9b9";
  }
  .new-icon-restore:before {
    content: "\\e9ba";
  }
  .new-icon-search:before {
    content: "\\e9bb";
  }
  .new-icon-send:before {
    content: "\\e9bc";
  }
  .new-icon-sentiment-dissatisfied:before {
    content: "\\e9bd";
  }
  .new-icon-sentiment-satisfied:before {
    content: "\\e9be";
  }
  .new-icon-sentiment-very-dissatisfied:before {
    content: "\\e9bf";
  }
  .new-icon-sentiment-very-satisfied:before {
    content: "\\e9c0";
  }
  .new-icon-setting:before {
    content: "\\e9c1";
  }
  .new-icon-settings-applications:before {
    content: "\\e9c2";
  }
  .new-icon-settings-ethernet:before {
    content: "\\e9c3";
  }
  .new-icon-share:before {
    content: "\\e9c4";
  }
  .new-icon-shopping-cart:before {
    content: "\\e9c5";
  }
  .new-icon-smartphone:before {
    content: "\\e9c6";
  }
  .new-icon-sort-by-alpha:before {
    content: "\\e9c7";
  }
  .new-icon-speaker:before {
    content: "\\e9c8";
    color: #535353;
  }
  .new-icon-star-border:before {
    content: "\\e9c9";
  }
  .new-icon-star-half:before {
    content: "\\e9ca";
  }
  .new-icon-star:before {
    content: "\\e9cb";
  }
  .new-icon-stay-current-landscape:before {
    content: "\\e9cc";
  }
  .new-icon-stay-current-portrait:before {
    content: "\\e9cd";
  }
  .new-icon-Subtraction:before {
    content: "\\e9ce";
  }
  .new-icon-supervised-user-circle:before {
    content: "\\e9cf";
  }
  .new-icon-supervisor-account:before {
    content: "\\e9d0";
  }
  .new-icon-tablet-android:before {
    content: "\\e9d1";
  }
  .new-icon-tablet:before {
    content: "\\e9d2";
  }
  .new-icon-telegram-alt:before {
    content: "\\e9d3";
  }
  .new-icon-telegram:before {
    content: "\\e9d4";
  }
  .new-icon-textsms:before {
    content: "\\e9d5";
  }
  .new-icon-theaters:before {
    content: "\\e9d6";
  }
  .new-icon-thumb-down-alt:before {
    content: "\\e9d7";
  }
  .new-icon-thumb-down:before {
    content: "\\e9d8";
  }
  .new-icon-thumb-up-alt:before {
    content: "\\e9d9";
  }
  .new-icon-thumb-up:before {
    content: "\\e9da";
  }
  .new-icon-ticket:before {
    content: "\\e9db";
  }
  .new-icon-today:before {
    content: "\\e9dc";
  }
  .new-icon-toggle-off:before {
    content: "\\e9dd";
  }
  .new-icon-toggle-on:before {
    content: "\\e9de";
  }
  .new-icon-touch-app:before {
    content: "\\e9df";
  }
  .new-icon-tv .path1:before {
    content: "\\e9e0";
    color: rgb(255, 255, 255);
  }
  .new-icon-tv .path2:before {
    content: "\\e9e1";
    margin-left: -1em;
    color: rgb(59, 65, 65);
  }
  .new-icon-twitter-alt:before {
    content: "\\e9e2";
  }
  .new-icon-twitter:before {
    content: "\\e9e3";
  }
  .new-icon-update:before {
    content: "\\e9e4";
  }
  .new-icon-verified-user:before {
    content: "\\e9e5";
  }
  .new-icon-view-carousel:before {
    content: "\\e9e6";
  }
  .new-icon-visibility-off:before {
    content: "\\e9e7";
  }
  .new-icon-visibility:before {
    content: "\\e9e8";
  }
  .new-icon-volume-down:before {
    content: "\\e9e9";
  }
  .new-icon-volume-mute:before {
    content: "\\e9ea";
  }
  .new-icon-volume-off:before {
    content: "\\e9eb";
  }
  .new-icon-volume-up:before {
    content: "\\e9ec";
  }
  .new-icon-vpn-key:before {
    content: "\\e9ed";
  }
  .new-icon-warning:before {
    content: "\\e9ee";
  }
  .new-icon-watch-later:before {
    content: "\\e9ef";
  }
  .new-icon-watch:before {
    content: "\\e9f0";
  }
  .new-icon-Whatsapp-alt:before {
    content: "\\e9f1";
  }
  .new-icon-where-to-vote:before {
    content: "\\e9f2";
  }
  .new-icon-work-off:before {
    content: "\\e9f3";
  }
  .new-icon-work-outline:before {
    content: "\\e9f4";
  }
  .new-icon-work:before {
    content: "\\e9f5";
  }
  .new-icon-zoom-in:before {
    content: "\\e9f6";
  }
  .new-icon-zoom-out-map:before {
    content: "\\e9f7";
  }
  .new-icon-zoom-out:before {
    content: "\\e9f8";
  }
  
  
`;

export default FontStyle;
