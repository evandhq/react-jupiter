import React from 'react';
import { Text } from '../typography';

function TableHeaderRow({ columns }) {
  return (
    <tr>
      {columns.map((headerItem) => (
        <th key={headerItem.key}>
          <Text size={16} bold>
            {headerItem.label}
          </Text>
        </th>
      ))}
    </tr>
  );
}

export default TableHeaderRow;
