"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _styledComponents = require("styled-components");

const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }
`;var _default = exports.default =

GlobalStyle;