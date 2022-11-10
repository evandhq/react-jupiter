import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar as Bar, Names, Numbers } from './index.styles';
import { toPersianNumber } from '../utils/numbers';
import Icon from '../icon';

const ProgressBar = ({ width, labels, points }) => {
  const percentWidth = (width * 100) / points.colleague;

  return (
    <>
      <Names points={points}>
        {labels.map((label, key) => (
          <span key={key}>
            {label}
            <Icon name="arrow-drop-down" size="sm" />
          </span>
        ))}
      </Names>
      <Bar width={percentWidth}>
        <div className="filled">
          <span>
            امتیاز شما:
            {toPersianNumber(width, {})}
          </span>
        </div>
      </Bar>
      <Numbers points={points}>
        <span>۰</span>
        <span>{toPersianNumber(points.partner)}</span>
        <span>{toPersianNumber(points.colleague)}</span>
      </Numbers>
    </>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  points: PropTypes.instanceOf({
    partner: PropTypes.number,
    colleague: PropTypes.number,
  }).isRequired,
};

export default ProgressBar;
