import React from "react";
import { ProgressBar as Bar, Names, Numbers} from './index.styles';
import { toPersianNumber } from '../utils/numbers';
import Icon from '../icon';

const ProgressBar = ({ width, labels }) => {
    return (
        <React.Fragment>
            <Names>
                {labels.map((label, key) => <span key={key}>{label}<Icon name="arrow-drop-down" size="sm" /></span>)}
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