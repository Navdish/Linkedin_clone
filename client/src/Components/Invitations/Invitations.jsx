import { Button, Box, Divider, Stack, Typography, Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import LinkIcon from '@mui/icons-material/Link';
import {useDispatch, useSelector} from 'react-redux';
import { fetchRequests } from '../../features/Connection/connection.action';
import InvitationCard from '../InvitationCard/InvitationCard';

const Invitations = () => {
    
    const dispatch = useDispatch();
    const handlefetch = async() => {
      await dispatch(fetchRequests());
    }
    useEffect(()=> {
       handlefetch();
    }, [])

    const requests = useSelector((state)=> state.connection.requests);
    return (
      <Box sx={{width: "100%"}}>
        <Box sx={{paddingLeft: "16px", paddingRight:"8px", paddingTop:"8px", paddingBottom:"8px", display:"flex", justifyContent:"space-between", height:"48px"}}>
            <Typography>Invitations</Typography>
            <Typography>See All</Typography>
        </Box>        
        {requests?.map( req => <InvitationCard request={req}/>)}
      </Box>
    )
  }
  
  export default Invitations