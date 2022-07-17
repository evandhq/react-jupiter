import React from "react";
import { ProgressBar as Bar} from './index.styles';

const ProgressBar = ({ width }) => {
    return (
        <Bar width={width}>
            <div />
            <div>
                <span>۰</span>
                <span>۵۰</span>
                <span>۱۰۰</span>
            </div>
        </Bar>
    )
}

export default ProgressBar;