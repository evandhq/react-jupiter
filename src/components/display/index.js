import React from 'react';
import PropTypes from 'prop-types';
import { DisplayStyle } from './index.style';

const Display = (props) => {
  const {
    children, ...rest
  } = props;

  const renderDisplay = () => {
    if (children === undefined) {
      return null;
    }

    return <DisplayStyle {...rest}>{children}</DisplayStyle>
  };

  return (
    <>
      {renderDisplay()}
    </>
  );
};

Display.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Display;
