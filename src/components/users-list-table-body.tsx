import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import UsersListTableBodyContainer from '../containers/users-list-table-body-container';
import withUser from './with-user-hoc';
import {IUser} from '../store/users-list/types'

const rowStyles = {
  hover: {
    cursor: 'pointer',
  },
};

const StyledTableRow = withStyles(rowStyles)(TableRow);

export default () => 
  <UsersListTableBodyContainer>
    {(rows: IUser[], handleRowClick) => (
      <TableBody>
        {rows.map(
          row =>
            <StyledTableRow key={row.id} onClick={handleRowClick.bind(null, row)} hover>
              {withUser(TableCell, row)}
            </StyledTableRow>
          )}
      </TableBody>
    )}
    
  </UsersListTableBodyContainer>
