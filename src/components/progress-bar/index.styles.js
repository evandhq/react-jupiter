import styled from 'styled-components';

export const ProgressBar = styled.div`
    background-color: rgb(167, 167, 167);
    color: rgb(68, 68, 68);
    height: 20px;
    border-radius: 16px;

    &:after {
        content: "";
        display: table;
        clear: both;
    }

    & div.filled {
        min-width: 100px;
        max-width: 100%;
        width: ${(props) => props.width}%;
        height: 20px;
        background: rgb(80, 89, 117);
        border-radius: 16px;
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #fff;
        justify-content: center;
        float: right;
      }
    }
`;

export const Names = styled.div`
    display: flex;
    justify-content: space-between;
    direction: rtl;
    position: relative;
    width: 100%;
    font-family: 'IranSharp';
    & span > i {
        display: block;
    }
    & span:first-child {
        position: relative;
        right: ${props => ((props.points.partner*100)/props.points.colleague)-2}%;
    }
`;

export const Numbers = styled.div`
    display: flex;
    justify-content: space-between;
    direction: rtl;
    font-family: 'IranSharp';
    position: relative;
    & span:nth-child(2) {
        position: absolute;
        right: ${props => (props.points.partner*100)/props.points.colleague}%
    }
`;