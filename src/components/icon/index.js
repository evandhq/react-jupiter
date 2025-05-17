import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { legacyIconMap } from './legacyIcons';

type Props = {
  name: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number,
  color?: string,
  className?: string,
  style?: Object,
  variant?: 'outline' | 'solid' | 'filled' | 'duotone',
}

/**
 * KeenIcon component for rendering Keenicons font icons.
 *
 * @param {Object} props
 * @param {string} props.icon - The icon name (e.g., 'refresh')
 * @param {'duotone'|'filled'|'solid'|'outline'} [props.style] - The icon style
 * @param {string} [props.className] - Additional CSS classes
 */
export const Icon = forwardRef(function KeenIcon(
  { 
    name, 
    size = 'md', 
    color,
    className,
    style,
    onClick,
    variant = 'solid',
    ...rest 
  }: Props,
  ref
) {

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
        return '#132A3E'; // primary-700
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
  const mappedName = legacyIconMap[name] || name;
  
  const iconStyle = {
    ...style,
    color: iconColor,
    fontSize: iconSize,
  };

  return (
    <i
      ref={ref}
      {...rest}
      className={twMerge(`ki-${variant}`, `ki-${mappedName}`, className)}
      style={iconStyle}
    />
  );
});

export default Icon; 