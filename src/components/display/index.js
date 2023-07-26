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

    return <DisplayStyle {...rest}>{children}</DisplayStyle>;
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
};
Display.defaultProps = {
  display: '',
  width: '',
  justifyContent: '',
  justifyContentMobile: '',
  alignItems: '',
  flexDirection: '',
  flexDirectionMobile: '',
  wrap: '',
  className: '',
};

export default Display;
