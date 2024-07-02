import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../globalStyle';
import generalTheme from '../../themes';
import TemplateContainer from './index.style';

const CardTemplate = ({
  level = 1,
  hoverToLevel = 1,
  maxWidth = null,
  renderLink = undefined,
  direction = 'vertical',
  background = '',
  children,
  ...rest
}) => {
  const renderContent = () => {
    if (renderLink) {
      return renderLink(
        <TemplateContainer
          maxWidth={maxWidth}
          level={level}
          hoverToLevel={hoverToLevel}
          direction={direction}
          data-test="card-template"
          background={background}
          {...rest}
        >
          {children}
        </TemplateContainer>,
      );
    }
    return (
      <TemplateContainer
        maxWidth={maxWidth}
        level={level}
        hoverToLevel={hoverToLevel}
        direction={direction}
        data-test="card-template"
        background={background}
        {...rest}
      >
        {children}
      </TemplateContainer>
    );
  };

  return (
    <ThemeProvider theme={generalTheme}>
      <GlobalStyle />
      {renderContent()}
    </ThemeProvider>
  );
};

CardTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  hoverToLevel: PropTypes.number,
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  renderLink: PropTypes.func,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  background: PropTypes.string,
};

export default CardTemplate;
