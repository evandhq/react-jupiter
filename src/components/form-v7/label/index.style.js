import styled from 'styled-components';

const Label = styled.label`
    position: relative;
    display: block;
    margin-bottom: 5px;
    & span.required {
        color: #dc2626; /* red-600 */
        margin-right: 5px;
    }
`;
export default Label;
