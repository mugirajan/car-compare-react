import { FaxRounded } from '@mui/icons-material';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./edit.scss";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import {IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GTranslateIcon from '@mui/icons-material/GTranslate';




const Choose = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

  
  return (
    <section className='navbar-mui'>
    <div className="container">
    <Tabs aria-label="disabled tabs example">
    <div  className='img'>
      <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"></img> 
      </div>
      <Tab label="NEW CARS" />
      <Tab label="USED CARS" />
      <Tab label="REVIEWS&NEWS" />
      <Search>
      <SearchIconWrapper>
              
              </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            
            <SearchIcon />
    </Search>
    <IconButton color="primary" >
                <LocationOnIcon/>
                
            </IconButton>
            <IconButton color="primary" >
                
                <AccountCircleIcon/>
                
            </IconButton>
            <IconButton color="primary" >
                
                <GTranslateIcon/>
                
            </IconButton>
            
   
    </Tabs>
 </div>
 <div className="container">

 </div>
 </section>
  )
}

export default Choose;