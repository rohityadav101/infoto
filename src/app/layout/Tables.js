import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { FaTable } from 'react-icons/fa'
import EmployeeTable from './EmployeeTable/EmployeeTable'

export default function Tables() {
    return (
        <Box>
            <Box mb={3.5}>
                <Typography class="text-[#0D062D] text-[38px] font-semibold">
                    Tables
                </Typography>
                <Typography class="text-[#6c757d] text-[14px] font-normal">
                    Dashboard / Tables
                </Typography>
            </Box>
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
    )
}
