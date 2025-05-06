// @flow

import React from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '../icon';
import { colorMap, sizes } from './theme';

type Props = {
  // Old API props
  styleType?: 'primary' | 'secondary' | 'tertiary',
  mainColor?: 'red' | 'blue' | 'green' | 'yellow' | 'darkBlue' | 'gray',
  size?: 'xs' | 'sm' | 'md' | 'lg',
  icon?: string,
  iconPosition?: 'left' | 'right',
  wide?: boolean,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset' | 'anchor',
  linkTo?: string,
  renderLink?: (React.Node) => React.Node,
  // New API props
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning',
  htmlType?: 'button' | 'submit' | 'reset',
  isLoading?: boolean,
  loadingText?: string,
  linkTarget?: '_self' | '_blank',
  className?: string,
  onClick?: (SyntheticMouseEvent<HTMLButtonElement>) => void,
  'aria-label'?: string,
  children?: React.Node,
}

const base = 'inline-flex items-center justify-center border box-border rounded font-semibold transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

// Style type templates
const getStyleClasses = (styleType, color) => {
  const colorClasses = {
    darkBlue: {
      primary: 'bg-main border-main text-white hover:bg-secondary active:bg-opacity-80 focus-visible:ring-main',
      secondary: 'bg-transparent border-main text-main hover:bg-opacity-10 active:bg-opacity-20 focus-visible:ring-main',
      tertiary: 'bg-transparent border-transparent text-main hover:bg-opacity-10 active:bg-opacity-20 focus-visible:ring-main'
    },
    red: {
      primary: 'bg-red-600 border-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-600',
      secondary: 'bg-transparent border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-600',
      tertiary: 'bg-transparent border-transparent text-red-600 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-600'
    },
    green: {
      primary: 'bg-green-600 border-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:ring-green-600',
      secondary: 'bg-transparent border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100 focus-visible:ring-green-600',
      tertiary: 'bg-transparent border-transparent text-green-600 hover:bg-green-50 active:bg-green-100 focus-visible:ring-green-600'
    },
    yellow: {
      primary: 'bg-yellow-600 border-yellow-600 text-white hover:bg-yellow-700 active:bg-yellow-800 focus-visible:ring-yellow-600',
      secondary: 'bg-transparent border-yellow-600 text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100 focus-visible:ring-yellow-600',
      tertiary: 'bg-transparent border-transparent text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100 focus-visible:ring-yellow-600'
    },
    blue: {
      primary: 'bg-sky-600 border-sky-600 text-white hover:bg-sky-700 active:bg-sky-800 focus-visible:ring-sky-600',
      secondary: 'bg-transparent border-sky-600 text-sky-600 hover:bg-sky-50 active:bg-sky-100 focus-visible:ring-sky-600',
      tertiary: 'bg-transparent border-transparent text-sky-600 hover:bg-sky-50 active:bg-sky-100 focus-visible:ring-sky-600'
    },
    gray: {
      primary: 'bg-gray-600 border-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 focus-visible:ring-gray-600',
      secondary: 'bg-transparent border-gray-600 text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-600',
      tertiary: 'bg-transparent border-transparent text-gray-600 hover:bg-gray-50 active:bg-gray-100 focus-visible:ring-gray-600'
    }
  };

  return colorClasses[color]?.[styleType] || colorClasses.darkBlue.primary;
};

// Color mapping
const colorToVariant = {
  red: 'danger',
  blue: 'blue',
  green: 'primary',
  yellow: 'warning',
  darkBlue: 'primary',
  gray: 'gray',
};

// Map old icon names to Heroicons
const iconMap = {
  'warning': 'ExclamationTriangleIcon',
  'arrow-down-on-square': 'ArrowDownTrayIcon',
  'bell-alert': 'BellAlertIcon',
  'help': 'QuestionMarkCircleIcon',
  'watch-later': 'ClockIcon',
  'loading': 'ArrowPathIcon',
};

const iconSizeMap = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const Button = ({
  // Old API props
  styleType = 'primary',
  mainColor = 'darkBlue',
  size = 'md',
  icon = null,
  iconPosition = 'left',
  wide = false,
  disabled = false,
  type = 'button',
  linkTo = null,
  renderLink = null,
  // New API props
  variant,
  htmlType,
  isLoading = false,
  loadingText = 'صبر کنید...',
  linkTarget = '_self',
  children,
  className = '',
  onClick,
  'aria-label': ariaLabel,
  ...rest
} :Props) => {
  const mappedVariant = variant || (mainColor ? colorToVariant[mainColor] : styleType);
  const mappedHtmlType = htmlType || (type === 'anchor' ? undefined : type);
  const isDisabled = disabled || isLoading;
  const isIconOnly = icon && !children;

  const styleClasses = getStyleClasses(styleType, mainColor);

  const mergedClasses = twMerge(
    base,
    sizes[size],
    styleClasses,
    wide ? 'w-full' : '',
    isIconOnly ? 'p-2' : '',
    className,
  );

  const buttonContent = (
    <>
      {isLoading && (
        <Icon
          name="loading"
          size={iconSizeMap[size]}
          className="animate-spin mr-2"
        />
      )}
      {!isLoading && icon && iconPosition === 'left' && (
        <Icon
          name={icon}
          size={iconSizeMap[size]}
          className={children ? 'mr-2' : ''}
        />
      )}
      {isLoading ? loadingText : children}
      {!isLoading && icon && iconPosition === 'right' && (
        <Icon
          name={icon}
          size={iconSizeMap[size]}
          className={children ? 'ml-2' : ''}
        />
      )}
    </>
  );

  const commonButtonProps = {
    type: linkTo || renderLink ? undefined : mappedHtmlType,
    className: mergedClasses,
    disabled: isDisabled,
    onClick: !isDisabled ? onClick : undefined,
    'aria-disabled': isDisabled,
    'aria-busy': isLoading,
    'aria-label': isIconOnly ? ariaLabel || icon : undefined,
    ...rest,
  };

  if (!isDisabled && renderLink) {
    return renderLink(
      <button {...commonButtonProps} type="button">
        {buttonContent}
      </button>
    );
  }

  if (!isDisabled && linkTo) {
    return (
      <a
        href={linkTo}
        target={linkTarget}
        className={mergedClasses}
        role="button"
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        aria-label={isIconOnly ? ariaLabel || icon : undefined}
        {...rest}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button {...commonButtonProps}>
      {buttonContent}
    </button>
  );
};

export default Button;
