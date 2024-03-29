import LinkIcon from '@mui/icons-material/Link';
import { Avatar, Box, Button, Typography } from '@mui/material';
import React from 'react';
import { UpdateRequest } from '../../features/Connection/connection.action';
import { useDispatch } from 'react-redux';
import { createRoom } from '../../features/Room/room.action';
import { useNavigate } from 'react-router-dom';

const InvitationCard = ({request}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleIgnore = async(e) => {
        e.target.disabled = true;
        const data = {
            connectionId : request._id,
            status : 'REJECTED'
        }
        console.log(data);
        try {
            await dispatch(UpdateRequest(data));
        } catch (error) {
            e.target.disabled = false;
        }
        
    }
    const handleAccept = async(e) => {
        e.target.disabled = true;
        const data = {
            connectionId : request._id,
            status : 'ACCEPTED'
        }
        console.log(data);
        try {
            await dispatch(UpdateRequest(data));
        } catch (error) {
            e.target.disabled = false;
        }
        
    }

    const handleMessage = async(e) => {
        try {
            dispatch(createRoom(request?.senderId)).then(response => {
                if(response.payload) navigate('/Messaging')
            });
        } catch (error) {
            console.log(error);
        }
        navigate('/Messaging')
        // send request._id in  action
    }
    return (       
        <Box sx={{display:"flex", justifyContent:"space-between",alignItems:'center', padding:"8px", outline:"1px solid #e8e8e8"}}>
            <Box sx={{display:"flex"}}>
                <Avatar sx={{height:"72px", width:"72px"}}/>
                <Box sx={{marginLeft:"8px"}}>
                    <Typography sx={{fontStyle:"normal", fontWeight:"600", fontSize:"16px", LineHeight:"24px", color:"rgba(0,0,0,0.9)"}}>{request.senderId.name}</Typography>
                    <Typography sx={{fontStyle:"normal", fontWeight:"400", fontSize:"14px", LineHeight:"20px", color:"rgba(0,0,0,0.6)"}}>{request.senderId.description}</Typography>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <LinkIcon/>
                        <Typography sx={{fontStyle:"normal", fontWeight:"400", fontSize:"12px", LineHeight:"16px", color:"rgba(0,0,0,0.6)"}}>TPC, CCET and 19 others </Typography>
                    </Box>
                    <Button onClick={(e)=> handleMessage(e)}>Message</Button>
                </Box>
            </Box>
            <Box>
                <Button variant="text"  sx={{borderRadius:"25px", color:"black", textTransform:"unset"}} onClick={(e)=> handleIgnore(e)} disabled={false}>Ignore</Button>
                <Button variant="outlined" sx={{borderRadius:"25px" , textTransform:"unset"}} onClick={(e)=> handleAccept(e)} disabled={false}>Accept</Button>
            </Box>
        </Box>
    )
  }
  
  export default InvitationCard