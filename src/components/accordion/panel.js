import React, { useRef} from "react";
import { Panel as StyledPanel } from "./index.styles";
import Icon from '../icon';

const Panel = ({item}) => {

    const panelRef = useRef();

    const handleClick = key => {
        const icon = document.getElementById(`icon-${item.key}`);

        if(panelRef.current.classList.contains('collapse')) {
            panelRef.current.classList.remove('collapse');
            icon.classList.remove('new-icon-arrow-drop-down');
            icon.classList.add('new-icon-arrow-drop-up');
        } else {
            panelRef.current.classList.add('collapse');
            icon.classList.remove('new-icon-arrow-drop-up');
            icon.classList.add('new-icon-arrow-drop-down');
        }
    }

    return (
        <StyledPanel className={item.mode}>
            <a className="panel-heading" onClick={() => handleClick(item.key)}>
                <h4 className="panel-title">
                    <Icon name={item.status ? 'check-circle' : 'info'} size="sm" color={item.status ? 'green' : 'yellow'} />
                    <span>{item.title}</span>
                </h4>
                <div>
                    {item.meta}
                    <Icon id={`icon-${item.key}`} name="arrow-drop-down" size="sm" />
                </div>
            </a>
            <div id={item.key} ref={panelRef} className="panel-collapse collapse in">
                <div className="panel-body">{item.body}</div>
            </div>
        </StyledPanel>
    );
}
export default Panel;