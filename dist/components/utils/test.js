"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};var _default = exports.default =

findByTestAtrr;