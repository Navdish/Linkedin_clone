import { Button, Box, Divider, Stack, Typography, Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import LinkIcon from '@mui/icons-material/Link';

const Invitations = ({request}) => {


    return (       
        <Box sx={{display:"flex", justifyContent:"space-between", padding:"8px", outline:"1px solid #e8e8e8"}}>
            <Box sx={{display:"flex"}}>
                <Avatar sx={{height:"72px", width:"72px"}}/>
                <Box sx={{marginLeft:"8px"}}>
                    <Typography sx={{fontStyle:"normal", fontWeight:"600", fontSize:"16px", LineHeight:"24px", color:"rgba(0,0,0,0.9)"}}>{request.userId.name}</Typography>
                    <Typography sx={{fontStyle:"normal", fontWeight:"400", fontSize:"14px", LineHeight:"20px", color:"rgba(0,0,0,0.6)"}}>{request.userId.description}</Typography>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <LinkIcon/>
                        <Typography sx={{fontStyle:"normal", fontWeight:"400", fontSize:"12px", LineHeight:"16px", color:"rgba(0,0,0,0.6)"}}>TPC, CCET and 19 others </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
  }
  
  export default Invitations