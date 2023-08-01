import { useState } from 'react';
import { Box, Button, Divider, Hidden, IconButton, InputAdornment, Popover, TextField, Typography } from '@mui/material';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import SideDrawer from './SideDrawer';


export default function Topbar({ open, setOpen, down1, setDown1, down, setDown }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(anchorEl);
  const id = open1 ? 'simple-popover' : undefined;

  return (
    <Box className="p-1 border-2 bg-[#212529] border-transparent flex items-center justify-between">
      <Box className="flex items-center">
        <Hidden lgUp>
          <SideDrawer down={down} down1={down1} setDown={setDown} setDown1={setDown1} />
        </Hidden>

        <Typography style={{fontSize:"26px",paddingLeft:"5px"}}  className="font-normal text-[#fff] text-[12px] ">Infotonic</Typography>
        <Hidden lgDown>
          <IconButton
            onClick={() => setOpen(!open)}
            style={{ color: '#9B9D9E', fontSize: '16px', marginLeft: '130px' }}
          >
            <FiMenu />
          </IconButton>
        </Hidden>
      </Box>

      <Box className="flex">
        <Hidden mdDown>
          <TextField
            className="text textfiledBocx"
            
            placeholder="Search for..."
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    style={{
                      background: '#0d6efd',
                      borderRadius: '0px 4px 4px 0px',
                      color: '#fff',
                      fontSize: '22px',
                      padding: '9px 0px',
                      marginRight: '-14px',
                    }}
                  >
                    <BiSearch />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Hidden>

        <Box onClick={handleClick} className="flex" style={{ paddingLeft: '20px' }}>
          <Box display="flex" alignItems="center" style={{ paddingLeft: '20px' }}>
            <FaUser style={{ color: '#9B9D9E' }} />
            <Box pl={0.5}>
              <FaCaretDown style={{ color: '#9B9D9E' }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Popover
        id={id}
        open={open1}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box align="left">
          <Typography sx={{ px: 3, py: 1, cursor: 'pointer' }}>settings</Typography>
          <Typography sx={{ px: 3, py: 1, cursor: 'pointer' }}>Activity Log</Typography>
          <Divider />
          <Typography sx={{ px: 3, py: 2, cursor: 'pointer' }}>Logout</Typography>
        </Box>
      </Popover>
    </Box>
  );
}
