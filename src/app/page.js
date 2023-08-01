"use client"
import React, { useState } from 'react';
import { Box, Hidden } from '@mui/material'
import Navbar from './layout/Navbar'
import Topbar from './layout/Topbar'
import MainContent from './layout/MainContent'
import Charts from './layout/Charts';
import Tables from './layout/Tables';

export default function App() {
  const [open, setOpen] = useState(false)
  const [down, setDown] = useState(false)
  const [down1, setDown1] = useState(false)
  const [chart, setChart] = useState(false)
  const [table, setTable] = useState(false)
  const [mainPage, setMainPage] = useState(true)

  return (
    <>
      <Topbar setOpen={setOpen} open={open} down={down} down1={down1} setDown={setDown} setDown1={setDown1} />
      <Box className="flex h-[90vh] overflow-hidden">
        <Hidden lgDown>
          <Box className={open === true ? "w-[0px] transition-all ease-in-out" : "w-[20%] transition-all ease-in-out "} >
            <Navbar setOpen={setOpen} setTable={setTable} open={open} down={down} down1={down1} setDown={setDown} setDown1={setDown1} setChart={setChart} mainPage={mainPage} setMainPage={setMainPage} />
          </Box>
        </Hidden>
        <Box className="w-full p-7 overflow-auto">
          {mainPage &&

            <MainContent />
          }
          {chart &&

            <Charts />
          }
          {table &&

           <Tables/>
          }
        </Box>
      </Box>
    </>
  )
}
