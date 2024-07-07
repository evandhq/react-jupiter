import React from 'react';
import PropTypes from 'prop-types';
import { DisplayStyle } from './index.style';

const Display = (props) => {
  const renderDisplay = () => {
    const { children } = props;
    if (children === undefined) {
      return null;
    }

    return <DisplayStyle {...props}>{children}</DisplayStyle>;
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
  display: PropTypes.string,
  width: PropTypes.string,
  justifyContent: PropTypes.string,
  justifyContentMobile: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  flexDirectionMobile: PropTypes.string,
  wrap: PropTypes.string,
  className: PropTypes.string,
  flex: PropTypes.string,
};

export default Display;
