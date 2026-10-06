import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';
import { Margin } from '../spacing';

const ErrorMsg = ({ errorMessage = '' }) => {
  if (errorMessage) {
    return (
      <div className="mt-1 flex flex-row gap-1.25 items-start">
        <Icon name="error" color="text-red-500" size="sm" />
        <span className="text-xs text-red-500" data-test="error-message">
          {errorMessage}
        </span>
      </div>
    );
  }

  return null;
};

export default ErrorMsg;
