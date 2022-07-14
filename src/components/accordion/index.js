import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup } from './index.styles';
import Icon from '../icon';
import Panel from './panel';

type item = {
    title: String,
    body: React.ReactNode
}

const Accordion = ({items}) => {
    
    return (
        <PanelGroup>
            {items.map((item, key) =>
                <Panel item={item} key={key}/>
            )}
        </PanelGroup>
    )
}

Accordion.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        mode: PropTypes.oneOf(['white', 'light', 'dark']),
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        meta: PropTypes.node,
        body: PropTypes.node.isRequired
    }))
}

export default Accordion;