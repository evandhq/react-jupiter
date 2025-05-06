"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports._py = exports._px = exports._pt = exports._pr = exports._pl = exports._pb = exports._p = exports._my = exports._mx = exports._mt = exports._mr = exports._ml = exports._mb = exports._m = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));function _interopRequireDefault(e) {return e && e.__esModule ? e : { default: e };}

// Helper to add units if needed
const addPxIfNeeded = (value) => typeof value === 'number' ? `${value}px` : value;

const _m = (values, theme) => {
  if (!values || !theme?.spacing) return ''; // Check theme.spacing exists
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return ''; // Handle missing key
  return `margin: ${addPxIfNeeded(spacingValue)};`;
};exports._m = _m;

const _mx = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `margin-left: ${formattedValue}; margin-right: ${formattedValue};`;
};exports._mx = _mx;

const _my = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `margin-top: ${formattedValue}; margin-bottom: ${formattedValue};`;
};exports._my = _my;

const _mt = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-top: ${addPxIfNeeded(spacingValue)};`;
};exports._mt = _mt;

const _mr = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-right: ${addPxIfNeeded(spacingValue)};`;
};exports._mr = _mr;

const _mb = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-bottom: ${addPxIfNeeded(spacingValue)};`;
};exports._mb = _mb;

const _ml = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `margin-left: ${addPxIfNeeded(spacingValue)};`;
};exports._ml = _ml;

const _p = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding: ${addPxIfNeeded(spacingValue)};`;
};exports._p = _p;

const _px = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `padding-left: ${formattedValue}; padding-right: ${formattedValue};`;
};exports._px = _px;

const _py = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  const formattedValue = addPxIfNeeded(spacingValue);
  return `padding-top: ${formattedValue}; padding-bottom: ${formattedValue};`;
};exports._py = _py;

const _pt = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-top: ${addPxIfNeeded(spacingValue)};`;
};exports._pt = _pt;

const _pr = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-right: ${addPxIfNeeded(spacingValue)};`;
};exports._pr = _pr;

const _pb = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-bottom: ${addPxIfNeeded(spacingValue)};`;
};exports._pb = _pb;

const _pl = (values, theme) => {
  if (!values || !theme?.spacing) return '';
  const spacingValue = theme.spacing[values];
  if (spacingValue === undefined) return '';
  return `padding-left: ${addPxIfNeeded(spacingValue)};`;
};exports._pl = _pl;