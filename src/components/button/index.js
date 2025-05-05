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
  const colors = colorMap[color] || colorMap.darkBlue;

  switch (styleType) {
    case 'primary':
      return `bg-${colors.base} border-${colors.base} text-white hover:bg-${colors.hover} active:bg-${colors.active} focus-visible:ring-${colors.base}`;
    case 'secondary':
      return `bg-transparent border-${colors.base} text-${colors.base} hover:bg-${colors.light} active:bg-${colors.lighter} focus-visible:ring-${colors.base}`;
    case 'tertiary':
      return `bg-transparent border-transparent text-${colors.base} hover:bg-${colors.light} active:bg-${colors.lighter} focus-visible:ring-${colors.base}`;
    default:
      return `bg-${colors.base} border-${colors.base} text-white hover:bg-${colors.hover} active:bg-${colors.active} focus-visible:ring-${colors.base}`;
  }
};

// Base styles for each styleType
const styleTypes = {
  primary: 'bg-{color} border-{color} text-white hover:bg-{color}/90 active:bg-{color}/80 focus-visible:ring-{color}',
  secondary: 'bg-transparent border-{color} text-{color} hover:bg-{color}/10 active:bg-{color}/20 focus-visible:ring-{color}',
  tertiary: 'bg-transparent border-transparent text-{color} hover:bg-{color}/10 active:bg-{color}/20 focus-visible:ring-{color}',
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
