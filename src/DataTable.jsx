import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, codelink: string, deployedLink: string) {
  return { name, codelink, deployedLink };
}

const rows = [
  createData(
    "(Pre-Bootcamp) Homework 0 Flex-box and Grid with Responsiveness",
    "https://github.com/iamabhishekt/responsive_exercise",
    "https://responsive-layout-exercise.netlify.app"
  ),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Homework Name</TableCell>
            <TableCell align="right">Github ( If Applicable)</TableCell>
            <TableCell align="right">Deployed Link (If Applicable )</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                <a href={row.codelink}>Github Link</a>
              </TableCell>
              <TableCell align="right">
                <a href={row.deployedLink}>Netlify Link</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
