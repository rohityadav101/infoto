import { useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import { BsChevronRight } from 'react-icons/bs';
import { FaChartArea, FaChartBar, FaTable } from 'react-icons/fa';
import Barchart from './Barchart';
import LineChart from './LineChart';
import MainTable from './MainTable';
import Pagination from '@mui/material/Pagination';
import EmployeeTable from './EmployeeTable/EmployeeTable';

const cardMainData = [
  {
    head: ' Primary Card',
    color: '#0d6efd',
  },
  {
    head: ' Warning Card',
    color: '#FFC107',
  },
  {
    head: 'Success Card',
    color: '#198754',
  },
  {
    head: 'Danger Card',
    color: '#DC3545 ',
  },
];

export default function MainContent() {
  const [age, setAge] = useState('10');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box >
       <Box >
        <Box>
          <Typography class="text-[#0D062D] text-[38px] font-semibold">
            Dashboard
          </Typography>
          <Typography class="text-[#6c757d] text-[14px] font-normal">
            Dashboard
          </Typography>
        </Box>
        <Box class="py-6">
          <Grid container spacing={3}>
            {cardMainData.map((data) => (
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  class="border-1 overflow-hidden  border-[#000] transition ease-in-out delay-150 hover:-translate-y-3"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    class={"px-4  py-4"}
                    style={{ background: `${data.color}` }}
                  >
                    <Typography class="text-[#fff]" variant="body1">
                      {data.head}
                    </Typography>
                  </Box>
                  <Divider style={{ borderColor: "rgb(135 121 121 / 68%)" }} />
                  <Box
                    class="px-4  py-2 flex justify-between  items-center"
                    style={{ background: `${data.color}` }}
                  >
                    <Typography class="text-[#fff] underline text-[13px]">
                      View Details
                    </Typography>
                    <Typography class="text-[#fff]  text-[13px]">
                      <BsChevronRight />
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <Box class="rounded-lg border-[1px] overflow-hidden">
                  <Box class="p-1  px-3 py-2 bg-[#F7F7F7] border-[#D2D2D2]">
                    <Box class="flex items-center">
                      <FaChartArea class="mr-2" />
                      <Typography variant="body1">
                        Area Chart Example
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box class="p-1">
                    <LineChart />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box class="rounded-lg border-[1px] overflow-hidden">
                  <Box class="p-1  px-3 py-2 bg-[#F7F7F7] border-[#D2D2D2]">
                    <Box class="flex items-center">
                      <FaChartBar class="mr-2" />
                      <Typography variant="body1">Bar Chart Example</Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box class="p-1">
                    <Barchart />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
          <Box class="rounded-lg mt-6 border-[1px] overflow-hidden">
              <Box class="p-1  px-3 py-2 bg-[#F7F7F7] border-[#D2D2D2]">
                <Box class="flex items-center">
                  <FaTable class="mr-2" />
                  <Typography variant="body1">DataTable Example</Typography>
                </Box>
              </Box>
              <Divider />

              <Box px={2}>
                <EmployeeTable />
              </Box>
            </Box>
          </Box>
          {/* <CardsList /> */}
        </Box>
      </Box>
    </Box>
  );
}
