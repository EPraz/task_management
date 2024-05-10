import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  user: string,
  daysOff: string,
  activity: string,
  capacity: number
) {
  return { user, daysOff, activity, capacity };
}

const rows = [
  createData("Frozen yoghurt", "0 days", "Development", 5),
  createData("Ice cream sandwich", "0 days", "Development", 5),
  createData("Eclair", "0 days", "Development", 5),
  createData("Cupcake", "0 days", "Development", 5),
  createData("Gingerbread", "0 days", "Testing", 5),
  createData(
    "Team Days Off",
    "0 days",
    "Tese days off apply to the whole team",
    0
  ),
];

export default function BasicTable3() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="left">Days Off</TableCell>
            <TableCell align="left">Activity</TableCell>
            <TableCell align="left">Capacity Per day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.user}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.daysOff}
              </TableCell>
              <TableCell align="left">{row.activity}</TableCell>
              <TableCell align="left">{row.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
