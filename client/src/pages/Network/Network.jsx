import { Button, Box, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SearchAppBar from '../../components/Navbar/Navbar';
import './Network.css';
import Invitations from '../../components/Invitations/Invitations'
import axios from 'axios';
import UserCard from '../../components/UserCard/UserCard';
import Suggestions from '../../components/Suggestions/Suggestions';


const Network = () => {
  axios.defaults.headers.common['token'] = localStorage.getItem("token");

  return (
    <Box className='network-page'>
      <Box className='home-nav'>
        <SearchAppBar />
      </Box>

      <Stack 
      alignItems={'center'}
      flexDirection={'column'}
      gap={2.8}
      marginTop={'20px'}
      > 
        <Box sx={{width:"804px", boxSizing:"border-box", outline:"1px solid #e8e8e8", borderRadius:"5px", backgroundColor:"white"}}>
            <Invitations />
        </Box>

        <Box sx={{width:"804px", boxSizing:"border-box", outline:"1px solid #e8e8e8", borderRadius:"5px", backgroundColor:"white"}}>
            <Suggestions/>
        </Box>
      </Stack>
    </Box>
  )
}

export default Network