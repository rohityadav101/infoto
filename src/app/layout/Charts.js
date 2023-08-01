import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import LineChart from './LineChart'
import { FaChartArea, FaChartBar, FaTable } from 'react-icons/fa';
import Barchart from './Barchart';
import Circlechart from './Circlechart';


export default function Charts() {
    return (
        <Box>
            <Box mb={3.5}>
                <Typography class="text-[#0D062D] text-[38px] font-semibold">
                    Charts
                </Typography>
                <Typography class="text-[#6c757d] text-[14px] font-normal">
                    Dashboard / Charts
                </Typography>
            </Box>
            <Box class="rounded-lg border-[1px] overflow-hidden" >
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
            <Box mt={3.5}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box class="rounded-lg border-[1px] overflow-hidden">
                            <Box class="p-1  px-3 py-2 bg-[#F7F7F7] border-[#D2D2D2]">
                                <Box class="flex items-center">
                                    <FaChartArea class="mr-2" />
                                    <Typography variant="body1">
                                    Bar Chart Example
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box class="p-1">
                                <Barchart />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box class="rounded-lg border-[1px] overflow-hidden">
                            <Box class="p-1  px-3 py-2 bg-[#F7F7F7] border-[#D2D2D2]">
                                <Box class="flex items-center">
                                    <FaChartBar class="mr-2" />
                                    <Typography variant="body1">Pie Chart Example</Typography>
                                </Box>
                            </Box>
                            <Divider />
                            <Box class="p-1">
                                <Circlechart/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}
