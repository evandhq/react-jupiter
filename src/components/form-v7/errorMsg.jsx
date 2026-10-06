import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';
import { Margin } from '../spacing';

const ErrorMsg = ({ errorMessage = '' }) => {
  if (errorMessage) {
    return (
      <p className="mt-1 flex items-center gap-2 text-xs text-red-500">
        <Icon name="error" size="sm" color="text-red-500" />
        {errorMessage}
      </p>
    );
  }

  return null;
};

export default ErrorMsg;
