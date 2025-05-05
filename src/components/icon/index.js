// @flow

import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  name: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number,
  color?: string,
  className?: string,
  style?: Object,
  onClick?: (SyntheticMouseEvent<HTMLDivElement>) => void,
}

const Icon = ({ 
  name, 
  size = 'md', 
  color,
  className,
  style,
  onClick,
  ...rest 
}: Props) => {
  // Map old size values to new size values in pixels
  const getSizeInPixels = () => {
    switch (size) {
      case 'xs':
        return 12;
      case 'sm':
        return 16;
      case 'md':
        return 20;
      case 'lg':
        return 24;
      case 'xl':
        return 32;
      case '2xl':
        return 40;
      default:
        // If it's already a number, return it directly
        return typeof size === 'number' ? size : 20;
    }
  };

  // Map old color values to new color tokens
  const getColor = () => {
    switch (color) {
      case 'white':
        return 'white';
      case 'black':
        return '#000000';
      case 'gray':
        return '#6B7280'; // gray-500
      case 'darkGray':
        return '#374151'; // gray-700
      case 'darkBlue':
        return '#6941C6'; // primary-700
      case 'red':
        return '#EF4444'; // error-500
      case 'green':
        return '#10B981'; // success-500
      case 'yellow':
        return '#F59E0B'; // warning-500
      case 'blue':
        return '#3B82F6'; // info-500
      default:
        // If it's not a known color name, pass it through as a custom color
        return color;
    }
  };

  // Apply styles and colors
  const iconSize = getSizeInPixels();
  const iconColor = getColor();
  
  const iconStyle = {
    ...style,
    color: iconColor,
    width: iconSize,
    height: iconSize
  };
  
  return (
    <div 
      style={iconStyle} 
      className={twMerge('inline-block', className)}
      onClick={onClick}
      aria-hidden="true"
      {...rest}
    >
      {/* Icon SVG content will be added here */}
    </div>
  );
};

export default Icon; 