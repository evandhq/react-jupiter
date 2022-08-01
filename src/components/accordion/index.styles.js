import styled from 'styled-components';

export const PanelGroup = styled.div`
    font-family: 'IranSharp';
`;

export const Panel = styled.div`
    background-color: #fff;
    margin: 10px 0;
    border: 1px solid #000000;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    border-radius: 4px;
    padding: 10px;

    &.white {
        background: #ffffff;
    }
    &.light {
        background: #caf0fc;
    }
    &.white, &.light {
        & .panel-heading {
            color: #000000;
        }
    }
    &.dark {
        background: rgb(80, 89, 117);
        & .panel-heading {
            color: #ffffff;
        }
    }

    .collapse {
        display: none;
    }

    .panel-heading {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        &:hover {
            cursor: pointer;
        }        
    }
    
    .panel-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        color: inherit;
    }
`;