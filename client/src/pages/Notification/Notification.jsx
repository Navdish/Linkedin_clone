import { Avatar, Box, Button, IconButton } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {io} from 'socket.io-client'
import { useEffect } from 'react'
import { useSelector } from "react-redux";
var socket2  = io("http://localhost:4000",  {autoConnect:false});


const Notification = () => {
    const user = useSelector((state) => state.user)
    useEffect(()=> {
        socket2.connect();
        socket2.emit("userDetails", user.user._id);
        socket2.on('notification', (data) => {
            console.log('Received notification :', data);
            // dispatch(addMessage(data));
        });
    
        return ()=> {
            socket2.off('notification');
            socket2.emit("deleteUser", user.user._id);
            socket2.disconnect();
        }
      }, [])
    return (
        <Box sx={{backgroundColor:"#F4F2EE", display:"flex", justifyContent:"center", pt:"20px"}} style={{minHeight:'calc(100vh - 52px)'}}>
            <Box>

            </Box>

            <Box sx={{width:"523px" }}>
                <Box sx={{ height:"40px", backgroundColor:"white", pt:"8px", pb:"16px", pl:"16px", pr:"16px", mb:"12px"}}>
                    <Button  variant="contained">All</Button>
                </Box>
                    
                <Box sx={{  backgroundColor:"white"}}>
                    {/* {Notification.map(()=> {
                        return (


                        )
                    })} */}
                    <Box sx={{pl:"24px", pt:"16px", pb:"16px", pr:"8px", width:"100%", boxSizing:"border-box"}}>
                        <Box sx={{display:"flex", justifyContent:"space-between"}}>
                            <Box sx={{display:"flex", alignItems:"center"}}>
                                {/* <FiberManualRecordIcon sx={{width:"10px", height:"10px", color:"blue"}}/> */}
                                <Avatar sx={{height:"48px", width:"48px", mr:"8px"}}/>
                                <Box>Look who posted again</Box>
                            </Box>
                            <Box>
                                <Box sx={{fontStyle:"normal", fontWeight:"400", fontColor:"rgba(0,0,0,0.9)", fontSize:"14px", lineHeight:"18px", textAlign:"center"}}>18h</Box>
                                <IconButton><MoreHorizIcon/></IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box>

            </Box>
        </Box>
    )
}


export default Notification;