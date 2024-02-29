import { Box,  Stack} from '@mui/material'
import React from 'react'
import './Network.css';
import Invitations from '../../components/Invitations/Invitations'
import axios from 'axios';
import Suggestions from '../../components/Suggestions/Suggestions';
import NetworkPageList from '../../components/NetworkSidebar/NetworkSidebar';


const Network = () => {
  axios.defaults.headers.common['token'] = localStorage.getItem("token");

  return (
    
    <Box sx={{display:"flex", justifyContent:"center", gap:"22px"}} className='network-page'>
      <Box sx={{backgroundColor:"white", width:"300px", height:"400px"}}><NetworkPageList/></Box>
      <Stack 
      alignItems={'center'}
      flexDirection={'column'}
      gap={2.8}
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