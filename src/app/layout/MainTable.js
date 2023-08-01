import { TableContainer } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const tittleDox = [
  {
    name: "arrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: "	63",
    sdate: "	2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "	63",
    sdate: "	2011/07/25",
    salary: "$170,750",
  },
  {
    name: "arrett Winters",
    position: "Chief Executive Officer (CEO)",
    office: "Tokyo",
    age: "	63",
    sdate: "	2011/07/25",
    salary: "$170,750",
  },
  {
    name: "arrett Winters",
    position: "Chief Executive Officer (CEO)",
    office: "Tokyo",
    age: "	63",
    sdate: "	2011/07/25",
    salary: "$170,750",
  },
  {
    name: "arrett Winters",
    position: "Accountant",
    office: "London",
    age: "	56",
    sdate: "	2011/07/25",
    salary: "$170,750",
  },
  {
    name: "arrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: "	63",
    sdate: "	2011/07/25",
    salary: "$170,750",
  },
  {
    name: "arrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: "	63",
    sdate: "	2011/07/25",
    salary: "$170,750",
  },
];
export default function MainTable() {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, border: "1px solid #E0E0E0" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}>
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}>
              Position
            </TableCell>
            <TableCell sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}>
              Office
            </TableCell>
            <TableCell sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}>
              Age
            </TableCell>
            <TableCell sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}>
              Start date
            </TableCell>
            <TableCell sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}>
              Salary
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tittleDox.map((data) => (
            <TableRow>

              <TableCell sx={{ border: "1px solid #E0E0E0" }}>{data.name}</TableCell>
              <TableCell sx={{ border: "1px solid #E0E0E0" }}>{data.position}</TableCell>
              <TableCell sx={{ border: "1px solid #E0E0E0" }}>{data.office}</TableCell>
              <TableCell sx={{ border: "1px solid #E0E0E0" }}>{data.age}</TableCell>
              <TableCell sx={{ border: "1px solid #E0E0E0" }}>{data.sdate}</TableCell>
              <TableCell sx={{ border: "1px solid #E0E0E0" }}>{data.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
