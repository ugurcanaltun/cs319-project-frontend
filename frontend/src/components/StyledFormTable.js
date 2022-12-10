import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

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
    <TableContainer sx={{ width: 800, marginTop: 5, marginLeft: 1, }} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow sx={{width: 200}}>
          {props.headers.map((row) => {
            return (
              row.map((cell) => {
                return (
                  <StyledTableCell sx={{width: 200}} align="left">{cell}</StyledTableCell>
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
              <TableRow sx={{width: 200}}>
              <div style={{display: "flex", width: 200}}>
                {row.map(() => {
                    return (
                        <div style={{width: 200}}>
                            <TextField sx={{width: 200}} id="standard-basic" label="Enter" variant="standard" />
                        </div>
                    )
                })}
              </div>
              </TableRow>
            </>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
