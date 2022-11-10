import React, { useRef } from 'react';
import { Panel as StyledPanel } from './index.styles';
import Icon from '../icon';

const Panel = ({ item }) => {
  const panelRef = useRef();

  const handleClick = () => {
    const icon = document.getElementById(`icon-${item.key}`);

    if (panelRef.current.classList.contains('collapse')) {
      panelRef.current.classList.remove('collapse');
      icon.classList.remove('new-icon-arrow-drop-down');
      icon.classList.add('new-icon-arrow-drop-up');
    } else {
      panelRef.current.classList.add('collapse');
      icon.classList.remove('new-icon-arrow-drop-up');
      icon.classList.add('new-icon-arrow-drop-down');
    }
  };

  return (
    <StyledPanel className={item.mode} status={item.status} bold={item.bold}>
      <a className="panel-heading" onClick={() => handleClick(item.key)}>
        <h4 className="panel-title">
          <Icon name={item.status ? 'check-circle' : 'error'} size="sm" color={item.status ? 'green' : 'gray'} />
          <span>{item.title}</span>
        </h4>
        <div>
          {item.meta}
          <Icon id={`icon-${item.key}`} name="arrow-drop-down" size="sm" color={item.status ? 'white' : 'darkBlue'} />
        </div>
      </a>
      <div id={item.key} ref={panelRef} className={`panel-collapse ${item.collapse && 'collapse'}`}>
        <div className="panel-body">{item.body}</div>
      </div>
    </StyledPanel>
  );
};
export default Panel;
