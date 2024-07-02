import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../typography';
import { convertToJalaali } from '../utils/date';
import { englishNumberToPersianInString } from '../utils/numbers';

const ShowDate = ({ fontSize = 12, color = 'default', date }) => (
  <Text size={fontSize} color={color} data-test="show-date">
    {englishNumberToPersianInString(convertToJalaali(date, 'dddd jD jMMMM jYYYY ساعت HH:mm'))}
  </Text>
);

ShowDate.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.oneOf(['default', 'red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'gray']),
};

export default ShowDate;
