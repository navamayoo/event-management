import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(morning, afternoon, evening) {
  return { morning, afternoon, evening };
}

const rows = [
  createData("9.00-10.00", "1.00-2.0", "4.00-5.00"),
  createData("10.00-11.00", "2.00-3.00", "5.00-6.00"),
  createData("11.00-12.00", "3.00-4.00", "6.00-7.00"),
];



export default function CustomizedTables() {
    const [open, setOpen] = useState(false);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Morning</StyledTableCell>
            <StyledTableCell align="right">Afternoon</StyledTableCell>
            <StyledTableCell align="right">Evening</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                align="right">
                  <Button color="secondary"  onClick={() => {
                  setOpen(true);}}>{row.morning}</Button>
                {row.morning}
              </StyledTableCell>
              <StyledTableCell
                align="right">
                  <Button color="secondary"  onClick={() => {
                  setOpen(true);}}>{row.afternoon}</Button>
                
              </StyledTableCell>
              <StyledTableCell
                align="right">
                  <Button color="secondary"  onClick={() => {
                  setOpen(true);}}>{row.evening}</Button>
               
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
