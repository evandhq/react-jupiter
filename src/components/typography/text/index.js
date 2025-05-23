import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import theme from '../theme';
import {
  String, Strong, Emphasized, SubScript, SupScript,
} from './index.styles';

const renderString = ({
  size = theme.defaultSize,
  color = 'default',
  underline = false,
  lineThrough = false,
  strong = false,
  bold = false,
  fontWight = 400,
  emphasized = false,
  subScript = false,
  supScript = false,
  marked = false,
  label = false,
  isDisplayBlock = false,
  isCutWithEllipsis = false,
  children,
  ...rest
}) => {
  if (children === undefined) return null;

  let typeOfText;
  if (strong) typeOfText = 'strong';
  else if (emphasized) typeOfText = 'emphasized';
  else if (subScript) typeOfText = 'subScript';
  else if (supScript) typeOfText = 'supScript';
  else typeOfText = 'span';

  switch (typeOfText) {
    case 'strong':
      return (
        <Strong
          size={size}
          color={color}
          underline={underline && !lineThrough}
          lineThrough={lineThrough && !underline}
          emphasized={emphasized}
          marked={marked && !label}
          isLabel={label && !marked}
          data-test="strong"
          {...rest}
        >
          {children}
        </Strong>
      );
    case 'emphasized':
      return (
        <Emphasized
          size={size}
          color={color}
          underline={underline && !lineThrough}
          lineThrough={lineThrough && !underline}
          bold={bold}
          marked={marked && !label}
          isLabel={label && !marked}
          data-test="emphasized"
          {...rest}
        >
          {children}
        </Emphasized>
      );
    case 'subScript':
      return (
        <SubScript color={color} data-test="subScript" {...rest}>
          {children}
        </SubScript>
      );
    case 'supScript':
      return (
        <SupScript color={color} data-test="supScript" {...rest}>
          {children}
        </SupScript>
      );
    case 'span':
    default:
      return (
        <String
          spanSize={size}
          spanColor={color}
          underline={underline && !lineThrough}
          lineThrough={lineThrough && !underline}
          marked={marked && !label}
          isLabel={label && !marked}
          bold={bold}
          fontWight={fontWight}
          data-test="span"
          isDisplayBlock={isDisplayBlock}
          isCutWithEllipsis={isCutWithEllipsis}
          {...rest}
        >
          {children}
        </String>
      );
  }
};

renderString.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number,
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'white', 'darkBlue', 'black']),
  underline: PropTypes.bool,
  lineThrough: PropTypes.bool,
  strong: PropTypes.bool,
  bold: PropTypes.bool,
  emphasized: PropTypes.bool,
  subScript: PropTypes.bool,
  supScript: PropTypes.bool,
  marked: PropTypes.bool,
  label: PropTypes.bool,
  isDisplayBlock: PropTypes.bool,
  isCutWithEllipsis: PropTypes.bool,
};

const Text = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {renderString(props)}
  </ThemeProvider>
);

Text.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.number,
  color: PropTypes.oneOf(['red', 'green', 'blue', 'yellow', 'white', 'darkBlue']),
  underline: PropTypes.bool,
  lineThrough: PropTypes.bool,
  strong: PropTypes.bool,
  bold: PropTypes.bool,
  emphasized: PropTypes.bool,
  subScript: PropTypes.bool,
  supScript: PropTypes.bool,
  marked: PropTypes.bool,
  label: PropTypes.bool,
  isDisplayBlock: PropTypes.bool,
  isCutWithEllipsis: PropTypes.bool,
};

Text.defaultProps = renderString.defaultProps;

export default Text;
