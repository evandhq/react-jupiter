import styled from 'styled-components';

export const ProgressBar = styled.div`
    background-color: #f1f1f1;
    color: rgb(68, 68, 68);
    height: 15px;
    border-radius: 16px;

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    & div:first-child {
        width: ${(props) => props.width};
        height: 15px;
        background: rgb(80, 89, 117);
        left: 0;
        position: absolute;
        border-radius: 16px;
    }

    & div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        direction: ltr;
        position: relative;
        top: 12px;
        font-family: 'IranSharp';
    }
`;