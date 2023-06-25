import styled from 'styled-components';

const Label = styled.label`
    position: relative;
    display: block;
    margin-bottom: 5px;
    & span.required {
        color: ${({ theme }) => theme.colors.red};
        margin-right: 5px;
    }
`;
export default Label;
