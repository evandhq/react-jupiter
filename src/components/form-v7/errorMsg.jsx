import React from 'react';
import Icon from '../icon';
import { Text } from '../typography';
import { Margin } from '../spacing';

const ErrorMsg = ({ errorMessage = '' }) => {
  if (errorMessage) {
    return (
      <div className="flex items-center gap-2">
        <Icon name="error" color="red" size="sm" />
        <Text bold size={10} color="red" data-test="error-message">
          {errorMessage}
        </Text>
      </div>
    );
  }

  return null;
};

export default ErrorMsg;
