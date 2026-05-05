import React from 'react';
import PropTypes from 'prop-types';

const adsLabelUrl = 'https://static.evand.net/assets/images/other/ads-label.svg';
// const adsLabelUrl = require('../../../../docs/assets/ads-label.svg');

const finishedLabelUrl = 'https://static.evand.net/assets/images/other/finished-text-label.svg';

const EventCardLabel = ({ type }) => {
  switch (type) {
    case 'ads':
      return <img src={adsLabelUrl} data-test="ads-label" className="inline-block ml-3 w-[33px]" alt="ads" />;
    case 'finished':
    default:
      return <img src={finishedLabelUrl} data-test="finished-label" className="inline-block ml-3 w-[33px]" alt="finished" />;
  }
};

EventCardLabel.propTypes = {
  type: PropTypes.oneOf(['ads', 'finished']).isRequired,
};

export default EventCardLabel;
