import { Button, Box, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SearchAppBar from '../../components/Navbar/Navbar';
import './Network.css';
import Invitations from '../../components/Invitations/Invitations'


const Network = () => {


  return (
    <Box className='network-page'>
      <Box className='home-nav'>
        <SearchAppBar />
      </Box>

      <Stack 
      justifyContent={'center'} 
      flexDirection={'row'}
      gap={2.8}
      marginTop={'20px'}
      > 
        <Box sx={{width:"804px", boxSizing:"border-box", border:"1px solid grey", borderRadius:"5px", backgroundColor:"white"}}>
            <Invitations />
        </Box>
      </Stack>
    </Box>
  )
}

export default Network