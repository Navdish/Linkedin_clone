import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InLogo from '../../assets/svg/In.svg'
import homesvg from '../../assets/svg/home.svg'
import networksvg from '../../assets/svg/network.svg'
import jobssvg from '../../assets/svg/jobs.svg'
import messagingsvg from '../../assets/svg/messaging.svg'
import notificationsvg from '../../assets/svg/notification.svg'
import { Avatar } from '@mui/material';
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';



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
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '250px',
      '&:focus': {
        width: '250px',
        backgroundColor:"#EDF3F8"
      },
    },
  },
}));

export default function SearchAppBar() {
  const location = useLocation()
  if(location.pathname === "/SignUp" || location.pathname === "/Login") {
    return null
  }

  return (
    <Box sx={{ display:"flex",  alignItems:"center", justifyContent:"center", width:"100%", position:"sticky", top:"0", zIndex:"1", boxSizing:"border-box"}}>
      <AppBar position="static" sx={{backgroundColor:"white" , border:"none",margin:"auto", boxShadow:"none"}}>
        <Toolbar sx={{justifyContent:"center", alignItems:"center", gap:'40px'}}>
          <Box sx={{display: "flex", alignItems:"center"}}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 , margin:'0px', padding:"0px"}}
            >
              <Link to={'/Home'}>
                <img src={InLogo} alt=''/>
              </Link>
            </IconButton>
            
            <Search sx={{backgroundColor:"#EDF3F8", height:"34px" }}>
                <SearchIconWrapper>
                <SearchIcon sx={{color:"black"}} />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                sx={{color:"black"}}
                />
            </Search>
          </Box>
          <Box sx={{display: "flex"}}>
            <Link to={'/Home'} style={{ textDecoration: 'none' }}><Box className="logo-label"><img className='nav-logos' src={homesvg} alt=''/><Typography className='logo-text'>Home</Typography></Box></Link>
            <Link to={'/Network'} style={{ textDecoration: 'none' }}><Box className="logo-label"><img className='nav-logos' src={networksvg} alt=''/><Typography className='logo-text'>My Network</Typography></Box></Link>
            <Link to={'/Home'} style={{ textDecoration: 'none' }}><Box className="logo-label"><img className='nav-logos' src={jobssvg} alt=''/><Typography className='logo-text'>Jobs</Typography></Box></Link>
            <Link to={'/Messaging'} style={{ textDecoration: 'none' }}><Box className="logo-label"><img className='nav-logos' src={messagingsvg} alt=''/><Typography className='logo-text'>Messaging</Typography></Box></Link>
            <Link to={'/Home'} style={{ textDecoration: 'none' }}><Box className="logo-label"><img className='nav-logos' src={notificationsvg} alt=''/><Typography className='logo-text'>Notification</Typography></Box></Link>
            <Box className="logo-label"><Avatar/></Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}