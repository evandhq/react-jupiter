import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from './index.styles';
import Panel from './panel';

const Accordion = ({ items }) => (
  <PanelGroup>
    {items.map((item, key) => <Panel item={item} key={key} />)}
  </PanelGroup>
);

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    mode: PropTypes.oneOf(['white', 'light', 'dark']),
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    status: PropTypes.bool,
    collapse: PropTypes.bool.isRequired,
    meta: PropTypes.node,
    body: PropTypes.node.isRequired,
    bold: PropTypes.bool,
  })).isRequired,
};

export default Accordion;
