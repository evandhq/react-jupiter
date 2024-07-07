import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? 'row' : 'column')};
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: auto;
  margin: ${({ isHorizontal }) => (isHorizontal ? '2px 10px' : '2px 0')};
  &:first-child { 
    margin-top: 0;
    margin-right: 0;
  }
  &:last-child { 
    margin-bottom: 0;
    margin-left: 0;
  }
  padding: 5px 10px;
  border-radius: 2px;
  background: ${({ theme }) => (theme.colors.gray400)};
`;
