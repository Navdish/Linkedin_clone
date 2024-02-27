import { Button, Box, Divider, Stack, Typography, Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import LinkIcon from '@mui/icons-material/Link';
import {useDispatch} from 'react-redux';

const Invitations = () => {
    
    const dispatch = useDispatch();
    useEffect(()=> {
        
    }, [])
    return (
      <Box sx={{width: "100%"}}>
        <Box sx={{paddingLeft: "16px", paddingRight:"8px", paddingTop:"8px", paddingBottom:"8px", display:"flex", justifyContent:"space-between", height:"48px"}}>
            <Typography>Invitations</Typography>
            <Typography>See All</Typography>
        </Box>        
        
      </Box>
    )
  }
  
  export default Invitations