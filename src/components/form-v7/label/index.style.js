import styled from "styled-components";

export const Label = styled.label`
    position: relative;
    & span.required {
        color: ${({ theme }) => theme.colors.red};
        margin-right: 5px;
    }
  `;