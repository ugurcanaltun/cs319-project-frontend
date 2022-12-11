import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function CustomizedTables(props) {
  return (
    <TableContainer sx={{ width: props.width, marginTop: 5, marginLeft: 1, }} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
          {props.headers.map((row) => {
            return (
              row.map((cell) => {
                return (
                  <StyledTableCell align="center">{cell}</StyledTableCell>
                )
              }) 
              )
          })}
          </TableRow>
        </TableHead>

        <TableBody>
        {props.rows.map((row) => {
          return (
            <>
              <TableRow>
                {row.map((cell) => {
                  return (
                    <StyledTableCell align="center">{cell}</StyledTableCell>
                  )
                })}
              </TableRow>
            </>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
