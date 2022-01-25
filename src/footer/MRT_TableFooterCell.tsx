import React, { FC } from 'react';
import { styled, TableCell as MuiTableCell } from '@mui/material';
import { HeaderGroup } from 'react-table';
import { useMaterialReactTable } from '../useMaterialReactTable';

const TableCell = styled(MuiTableCell)({
  fontWeight: 'bold',
});

interface Props {
  column: HeaderGroup;
}

export const MRT_TableFooterCell: FC<Props> = ({ column }) => {
  const { tableInstance, overrideTableFooterCellComponent } =
    useMaterialReactTable();

  if (overrideTableFooterCellComponent) {
    return <>{overrideTableFooterCellComponent(column, tableInstance)}</>;
  }

  const isParentHeader = (column?.columns?.length ?? 0) > 0;

  return (
    <TableCell
      align={isParentHeader ? 'center' : 'left'}
      variant="head"
      {...column.getFooterProps()}
    >
      {column.render('Footer')}
    </TableCell>
  );
};
