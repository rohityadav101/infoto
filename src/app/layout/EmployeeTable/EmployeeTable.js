import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import { Box, Typography } from "@mui/material";

const PAGE_SIZE_OPTIONS = [5, 10, 15];

const EmployeeTable = () => {
  // Dummy data
  const employees = [
    {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      office: "San Francisco",
      age: 28,
      startDate: "2019-05-10",
      salary: 75000,
    },
    {
      name: "Michael Johnson",
      position: "Product Manager",
      office: "Chicago",
      age: 35,
      startDate: "2018-09-20",
      salary: 90000,
    },
    {
      name: "patter",
      position: "Manager",
      office: "Chicago",
      age: 35,
      startDate: "2018-09-20",
      salary: 90000,
    },
    {
      name: "Emily Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "henna Doe",
      position: "Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Wix",
      position: "Software Engineer",
      office: "New York",
      age: 40,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "salman",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "ritik Doe",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Emily Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "maya",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "main Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      office: "San Francisco",
      age: 28,
      startDate: "2019-05-10",
      salary: 75000,
    },
    {
      name: "Michael Johnson",
      position: "Product Manager",
      office: "Chicago",
      age: 35,
      startDate: "2018-09-20",
      salary: 90000,
    },
    {
      name: "patter",
      position: "Manager",
      office: "Chicago",
      age: 35,
      startDate: "2018-09-20",
      salary: 90000,
    },
    {
      name: "Emily Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "henna Doe",
      position: "Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Wix",
      position: "Software Engineer",
      office: "New York",
      age: 40,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "salman",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "ritik Doe",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Emily Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "maya",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "main Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      office: "San Francisco",
      age: 28,
      startDate: "2019-05-10",
      salary: 75000,
    },
    {
      name: "Michael Johnson",
      position: "Product Manager",
      office: "Chicago",
      age: 35,
      startDate: "2018-09-20",
      salary: 90000,
    },
    {
      name: "patter",
      position: "Manager",
      office: "Chicago",
      age: 35,
      startDate: "2018-09-20",
      salary: 90000,
    },
    {
      name: "Emily Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "henna Doe",
      position: "Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Wix",
      position: "Software Engineer",
      office: "New York",
      age: 40,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "salman",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "ritik Doe",
      position: "Software Engineer",
      office: "New York",
      age: 30,
      startDate: "2020-01-15",
      salary: 80000,
    },
    {
      name: "Emily Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "maya",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "main Lee",
      position: "Data Scientist",
      office: "Seattle",
      age: 32,
      startDate: "2021-03-01",
      salary: 85000,
    },
    {
      name: "William Brown",
      position: "Frontend Developer",
      office: "Los Angeles",
      age: 27,
      startDate: "2022-01-10",
      salary: 70000,
    },
    {
      name: "jatin",
      position: "Frontend Developer",
      office: "Los Angeles",
      age: 27,
      startDate: "2022-01-10",
      salary: 70000,
    },
    {
      name: "rohit",
      position: "UX Designer",
      office: "San Francisco",
      age: 28,
      startDate: "2019-05-10",
      salary: 75000,
    },
  ];
  const data= employees.length
  console.log("SDfsdfsdf",data)
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(PAGE_SIZE_OPTIONS[0]);
console.log("Dfsdfsdfsdf",itemsPerPage)
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const filteredEmployees = employees.filter((employee) => {
    const { name, position, office } = employee;
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    return (
      name.toLowerCase().includes(lowerCasedSearchTerm) ||
      position.toLowerCase().includes(lowerCasedSearchTerm) ||
      office.toLowerCase().includes(lowerCasedSearchTerm)
    );
  });

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  
  const displayedEmployees = filteredEmployees.slice(startIndex, endIndex);

  return (
    <div>
      <Box class="block sm:flex justify-between items-center pb-3">
        <Box class="flex items-center">
          <Box style={{ width: "75px" }}>
            <FormControl variant="outlined" margin="normal">
              <Select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
               
              >
                {PAGE_SIZE_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Typography class="whitespace-pre " variant="body1">
            entries per page
          </Typography>
        </Box>
        <Box class="pt-3 sm:pt-0">
          <TextField
            placeholder="Search by name, position, or office..."
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Box>
      </Box>

      <TableContainer>
        <Table sx={{ minWidth: 650, border: "1px solid #E0E0E0" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}
              >
                Position
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}
              >
                Office
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}
              >
                Age
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}
              >
                Start Date
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", border: "1px solid #E0E0E0" }}
              >
                Salary
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedEmployees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: "1px solid #E0E0E0" }}>
                  {employee.name}
                </TableCell>
                <TableCell sx={{ border: "1px solid #E0E0E0" }}>
                  {employee.position}
                </TableCell>
                <TableCell sx={{ border: "1px solid #E0E0E0" }}>
                  {employee.office}
                </TableCell>
                <TableCell sx={{ border: "1px solid #E0E0E0" }}>
                  {employee.age}
                </TableCell>
                <TableCell sx={{ border: "1px solid #E0E0E0" }}>
                  {employee.startDate}
                </TableCell>
                <TableCell sx={{ border: "1px solid #E0E0E0" }}>
                  {employee.salary}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box class="py-3 justify-between items-center xs:block sm:flex">
        <Typography class="whitespace-pre" variant="body1">
          Showing 1 to {itemsPerPage} of {data} entries
        </Typography>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          class="pt-3 sm:pt-0"
          variant="outlined"
          shape="rounded"
        />
      </Box>

     
    </div>
  );
};

export default EmployeeTable;
