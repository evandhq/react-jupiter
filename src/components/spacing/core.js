import styled from 'styled-components';

// Helper to add units if needed
const addPxIfNeeded = (value) => (typeof value === 'number' ? `${value}px` : value);

export const _m = (values, theme) => {
  if (!values || !theme?.spacing) return ''; // Check theme.spacing exists
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return ''; // Handle missing key
  return `margin: ${addPxIfNeeded(spacingValue)};`;
};

export const _mx = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `margin-left: ${formattedValue}; margin-right: ${formattedValue};`;
};

export const _my = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `margin-top: ${formattedValue}; margin-bottom: ${formattedValue};`;
};

export const _mt = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-top: ${addPxIfNeeded(spacingValue)};`;
};

export const _mr = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-right: ${addPxIfNeeded(spacingValue)};`;
};

export const _mb = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-bottom: ${addPxIfNeeded(spacingValue)};`;
};

export const _ml = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-left: ${addPxIfNeeded(spacingValue)};`;
};

export const _p = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding: ${addPxIfNeeded(spacingValue)};`;
};

export const _px = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `padding-left: ${formattedValue}; padding-right: ${formattedValue};`;
};

export const _py = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `padding-top: ${formattedValue}; padding-bottom: ${formattedValue};`;
};

export const _pt = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-top: ${addPxIfNeeded(spacingValue)};`;
};

export const _pr = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-right: ${addPxIfNeeded(spacingValue)};`;
};

export const _pb = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-bottom: ${addPxIfNeeded(spacingValue)};`;
};

export const _pl = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-left: ${addPxIfNeeded(spacingValue)};`;
}; 