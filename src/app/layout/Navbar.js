import { Box, Divider, Hidden, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { AiFillDashboard, AiOutlineArrowLeft } from "react-icons/ai";
import { RiDashboard3Fill, RiLayout6Fill, RiTableFill } from "react-icons/ri";
import { BiDotsHorizontalRounded, BiMessageAltMinus, BiTable } from "react-icons/bi";
import "./style.css";
import { FaBookOpen, FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const navmenu = [
  {
    icon: <AiFillDashboard />,
    text: "Dashboard",

  },

];
// const navmenu2 = [
//   {
//     icon: ,
//     text: "Charts",

//   },
//   {
//     icon: ,
//     text: "Tables",
//   },

// ];
export default function Navbar({setTable, open, down1, setDown1 , down, setDown,setChart  ,setMainPage , mainPage}) {
  return (
    < >
      {!open && (
        <Box class="border-2 bg-[#212529] border-transparent  ">
          <Box className="p-4">
            <Typography class="font-[800] text-[13px] text-[#595C5F]" >
              CORE
            </Typography>
          </Box>
          <Box className="px-3" >
            {navmenu.map((value) => (
              <Box class="flex items-center cursor-pointer gap-2 py-3"  onClick={()=>{setChart(false)
                setMainPage(true)
                setTable(false)
                }}>
                <IconButton class="text-[18px] text-[#787486] ">{value.icon}</IconButton>

                <Typography class="text-[#787486] hover:text-[#fff]  text-[15px] font-[500]">
                  {value.text}
                </Typography>

              </Box>
            ))}
          </Box>
          <Box className="p-4">
            <Typography class="font-[800] text-[13px] text-[#595C5F]" >
              INTERFACE
            </Typography>
          </Box>
          <Box className="px-3 pt-1 " >
            <Box onClick={() => setDown(!down)} class="flex items-center justify-between cursor-pointer">
              <Box onClick={() => setDown(!down)} class="flex items-center  cursor-pointer gap-2 py-3">
                <IconButton class="text-[18px] text-[#787486] "><RiTableFill /></IconButton>

                <Typography class="text-[#787486] hover:text-[#fff]  text-[15px] font-[500]">
                  Layouts
                </Typography>
              </Box>
              {down ?
              <Box onClick={() => setDown(!down)} class="text-[18px] text-[#787486] cursor-pointer rotate-90 ease-in duration-100" ><IoIosArrowForward /></Box>
              :  
              <Box onClick={() => setDown(!down)} class="text-[18px] text-[#787486] cursor-pointer ease-in duration-100" ><IoIosArrowForward /></Box>
            }
            </Box>
            {down && (
             <Box class="pl-6">
             <Typography class="text-[#787486] text-[15px] font-[500] py-3">
               Static Navigation
             </Typography>
             <Typography class="text-[#787486] text-[15px] font-[500] py-3">
              Light Sidenav
             </Typography>
             </Box>
            )}
          </Box>
          <Box className="px-3 pt-1 " >
          <Box onClick={() => setDown1(!down1)} class="flex cursor-pointer items-center justify-between">

            <Box class="flex items-center gap-2 py-3">
              <IconButton class="text-[18px] text-[#787486] "><FaBookOpen /></IconButton>

              <Typography class="text-[#787486] hover:text-[#fff]  text-[15px] font-[500]">
                Pages
              </Typography>
            </Box>
            {down1 ?
              <Box onClick={() => setDown1(!down1)} class="text-[18px] text-[#787486] cursor-pointer rotate-90 ease-in duration-100" ><IoIosArrowForward /></Box>
              :  
              <Box onClick={() => setDown1(!down1)} class="text-[18px] text-[#787486] cursor-pointer ease-in duration-100" ><IoIosArrowForward /></Box>
            }
           </Box>
            {down1 && (
              <Box class="pl-6">
              <Typography class="text-[#787486] text-[15px] font-[500] py-3">
                Authentication
              </Typography>
              <Typography class="text-[#787486] text-[15px] font-[500] py-3">
                Error
              </Typography>
              </Box>
            )}
          </Box>
          <Box className="p-4">
            <Typography class="font-[800] text-[13px] text-[#595C5F]" >
              ADDONS
            </Typography>
          </Box>
          <Box className="px-3 pt-1 beta" >
           
              <Box class="flex items-center  cursor-pointer gap-2 py-3" onClick={()=>{setChart(true)
              setTable(false)
              setMainPage(false)
              }}>
                <IconButton class="text-[18px] text-[#787486] "><FaChartArea /></IconButton>

                <Typography class="text-[#787486] hover:text-[#fff]  text-[15px] font-[500]">
                 Charts
                </Typography>

              </Box>
            
              <Box class="flex items-center cursor-pointer gap-2 py-3"onClick={()=>{setChart(false)
              setTable(true)
              setMainPage(false)
              }}>
                <IconButton class="text-[18px] text-[#787486] "><BiTable /></IconButton>

                <Typography class="text-[#787486] hover:text-[#fff] text-[15px] font-[500]">
                 Tables
                </Typography>

              </Box>

          </Box>
        
        </Box>

      )}

    </>
  );
}
