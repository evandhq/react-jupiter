import styled from 'styled-components';

export const ProgressBar = styled.div`
    background-color: #f1f1f1;
    color: rgb(68, 68, 68);
    height: 20px;
    border-radius: 16px;

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    & div.filled {
        width: ${(props) => props.width}%;
        height: 20px;
        background: rgb(80, 89, 117);
        left: 0;
        position: absolute;
        border-radius: 16px;
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #fff;
        justify-content: center;
      }
    }
`;

export const Names = styled.div`
    display: flex;
    justify-content: space-between;
    direction: ltr;
    position: relative;
    width: 100%;
    font-family: 'IranSharp';
    & span > i {
        display: block;
    }
    & span:first-child {
        position: relative;
        left: 48%;
    }
`;

export const Numbers = styled.div`
    display: flex;
    justify-content: space-between;
    direction: ltr;
    font-family: 'IranSharp';
`;