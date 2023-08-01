import * as React from 'react';
import Box from '@mui/material/Box';
import { Drawer, IconButton, Typography } from '@mui/material';
import { AiFillDashboard } from "react-icons/ai";
import { FaBookOpen, FaChartArea } from "react-icons/fa";
import { RiTableFill } from "react-icons/ri";
import {  BiTable } from "react-icons/bi";
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowForward } from "react-icons/io";

const navmenu = [
    {
      icon: <AiFillDashboard />,
      text: "Dashboard",
  
    },
  
  ];
  
  const navmenu2 = [
    {
      icon: <FaChartArea />,
      text: "Charts",
  
    },
    {
      icon: <BiTable />,
      text: "Tables",
    },
  
  ];

export default function TemporaryDrawer({down1, setDown1 , down, setDown}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <Box className="p-4">
            <Typography class="font-[800] text-[13px] text-[#595C5F]" >
              CORE
            </Typography>
          </Box>
          <Box className="px-3" >
            {navmenu.map((value) => (
              <Box class="flex items-center gap-2 py-3">
                <IconButton class="text-[18px] text-[#787486] ">{value.icon}</IconButton>
           
                  <Typography class="text-[#787486] text-[15px] font-[500]">
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
            <Box class="flex items-center justify-between">
              <Box class="flex items-center gap-2 py-3">
                <IconButton class="text-[18px] text-[#787486] "><RiTableFill /></IconButton>

                <Typography class="text-[#787486] text-[15px] font-[500]">
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
          <Box class="flex items-center justify-between">

            <Box class="flex items-center gap-2 py-3">
              <IconButton class="text-[18px] text-[#787486] "><FaBookOpen /></IconButton>

              <Typography class="text-[#787486] text-[15px] font-[500]">
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
            {navmenu2.map((value) => (
              <Box class="flex items-center gap-2 py-3">
                <IconButton class="text-[18px] text-[#787486] ">{value.icon}</IconButton>
                {/* {open === false && ( */}
                  <Typography class="text-[#787486] text-[15px] font-[500]">
                    {value.text}
                  </Typography>
                {/* )} */}
              </Box>
            ))}

          </Box>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
           <IconButton onClick={toggleDrawer(anchor, true)} style={{ color: "#9B9D9E", fontSize: "16px",marginRight:"10px" }}>
          <FiMenu />
        </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

