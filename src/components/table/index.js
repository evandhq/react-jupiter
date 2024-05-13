import React from 'react';
import { ThemeProvider } from 'styled-components';
import TableHeaderRow from './tableHeaderRow';
import TableRow from './tableRow';
import GlobalStyle from '../globalStyle';
import { TableContainer } from './index.style';
import theme from './theme';

type Props = {
  columns: [
    {
      key: string,
      label: string,
      dataType: 'text' | 'action' | 'node',
    }
  ],
  data: [
    {
      key: string,
    },
  ],
};

function Table(props: Props) {
  const { columns, data } = props;
  const actionColumnIndexNumber = columns.findIndex((columnItem) => columnItem.dataType === 'action');
  const hasActionColumn = !(actionColumnIndexNumber === -1);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TableContainer
        isResponsiveView={(window && window.innerWidth < 768)}
        data-test="jupiter-table"
        actionColumnNumber={hasActionColumn ? actionColumnIndexNumber + 1 : null}
      >
        <table>
          <thead>
            <TableHeaderRow columns={columns} />
          </thead>
          <tbody>
            {data.map((rowItem) => (
              <TableRow
                key={rowItem.key}
                rowItem={rowItem}
                columns={columns}
              />
            ))}
          </tbody>
        </table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default Table;
