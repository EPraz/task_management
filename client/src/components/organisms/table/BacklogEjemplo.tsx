import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  order: number,
  name: string,
  state: string,
  assignedTo: string,
  protein: number
) {
  return { order, name, state, assignedTo, protein };
}

const rows = [
  createData(1, "Frozen yoghurt", "New", "Edwin Pile", 6),
  createData(2, "Ice cream sandwich", "Blocked", "Jonathan Lam", 37),
  createData(3, "Eclair", "Done", "Edwin Pile", 16.0),
  createData(4, "Cupcake", "Closed", "Jonathan Lam", 67),
  createData(5, "Gingerbread", "In Progress", "Jonathan Lam", 49),
];

export default function BasicTable2() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">State</TableCell>
            <TableCell align="left">Asigned To</TableCell>
            <TableCell align="left">Remaining Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.order}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.state}</TableCell>
              <TableCell align="left">{row.assignedTo}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
