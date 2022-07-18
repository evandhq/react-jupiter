import React from "react";
import { ProgressBar as Bar, Names, Numbers} from './index.styles';
import { toPersianNumber } from '../utils/numbers';
import Icon from '../icon';

const ProgressBar = ({ width }) => {
    return (
        <React.Fragment>
            <Names>
                <span>همیار<Icon name="arrow-drop-down" size="sm" /></span>
                <span>همکار<Icon name="arrow-drop-down" size="sm" /></span>
            </Names>
            <Bar width={width}>
                <div className="filled">
                    <span>امتیاز شما: {toPersianNumber(width, {})}</span>
                </div>
            </Bar>
            <Numbers>
                <span>۰</span>
                <span>۵۰</span>
                <span>۱۰۰</span>
            </Numbers>
        </React.Fragment>
    )
}

export default ProgressBar;