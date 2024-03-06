import { Box, FormControl, IconButton, InputBase, Typography } from "@mui/material"
import React, { useEffect } from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MessageTab from "../../components/MessageTab/MessageTab";
import TuneIcon from '@mui/icons-material/Tune';

import { useState } from "react";
import { fetchRoom } from "../../features/Room/room.action";
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import {io} from 'socket.io-client'
import MessageVerticalTab from "../../components/MessageVerticalTab/MessageVerticalTab";
import {saveSocket} from '../../features/Room/room.slice';
import { addMessage } from "../../features/Message/message.slice";
var socket  = io.connect("http://localhost:8080");



const Messaging = () => {
    axios.defaults.headers.common['token'] = localStorage.getItem("token");
    const dispatch = useDispatch();
    const rooms = useSelector((state)=> state.room.room);
    const [connectedUser, setConnectedUser] = useState( "default");
    const user = useSelector((state)=> state.user.user);

    useEffect(()=> {
        console.log("useEffect");
        try {
            dispatch(fetchRoom());
            dispatch(saveSocket(socket));
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(()=> {
        socket.on('message', (data) => {
            console.log('Received message:', data);
            // Update UI to display the incoming message
            dispatch(addMessage(data));
        });

        return ()=> {
            socket.off('message');
        }
    }, [])

    
    return(
        <Box sx={{backgroundColor:"#F4F2EE", display:"flex", justifyContent:"center"}} style={{minHeight:'calc(100vh - 52px)'}}>
            <Box sx={{pt:"20px"}}>
            <Box sx={{ width:"1128px", display:"flex", gap:"2.4rem"}}>
            <Box sx={{ width:"782px", backgroundColor:"white", display:"flex"}}>
                    <Box sx={{width:"313px", border:"1px solid #e8e8e8"}}>
                        <Box sx={{height:"48px", width:"100%",  border:"1px solid #e8e8e8", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Typography sx={{pl:"16px", pr:"16px"}}>Messaging</Typography>
                            <Box sx={{mr:"8px", display:"flex"}}>
                                <IconButton sx={{width:"40px"}}><MoreHorizOutlinedIcon/></IconButton>
                                <IconButton sx={{width:"40px"}}><ModeEditOutlineOutlinedIcon/></IconButton>
                            </Box>
                            
                        </Box>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputBase
                            startAdornment={<SearchIcon sx={{color: 'black', paddingLeft: '10px', paddingRight: '8px'}} />}
                            endAdornment={<TuneIcon sx={{color: 'black', paddingLeft: '10px', paddingRight: '8px'}} />}
                            placeholder="Search messages"
                            sx={{
                                border: '1px Solid #EDF2F9',
                                borderRadius: '4px',
                                width: '100%',
                                fontSize: '14px',
                                fontWeight: '400',
                                color: 'black',
                                backgroundColor: '#EDF2F9',
                                "&:hover" : {
                                border: '1px solid black',
                                },
                                "&:focus" : {
                                border: '1px solid black',
                                },
                            }}
                            />
                        </FormControl>
                        <MessageTab  setConnectedUser = {setConnectedUser} />
                    </Box>
                    <Box sx={{width:"100%", minHeight:"calc(100vh - 74px)", border:"1px solid #e8e8e8"}}>
                        <Box sx={{width:"100%",  height:"41px", outline:"1px solid #e8e8e8", boxSizing:"border-box"}}>
                            <MessageVerticalTab  connectedUser={connectedUser} setConnectedUser = {setConnectedUser} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:"322px",minHeight:"calc(100vh - 74px)"}}>
                
                </Box>
            </Box>
            </Box>
        </Box>
    )
}

export default Messaging

















// {/* <Box sx={{ width:"782px", backgroundColor:"white", display:"flex"}}>
//                     <Box sx={{width:"313px", border:"1px solid #e8e8e8"}}>
//                         <Box sx={{height:"48px", width:"100%",  border:"1px solid #e8e8e8", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
//                             <Typography sx={{pl:"16px", pr:"16px"}}>Messaging</Typography>
//                             <Box sx={{mr:"8px", display:"flex"}}>
//                                 <IconButton sx={{width:"40px"}}><MoreHorizOutlinedIcon/></IconButton>
//                                 <IconButton sx={{width:"40px"}}><EditOutlinedIcon/></IconButton>
//                             </Box>
                            
//                         </Box>
//                         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//                             <OutlinedInput
//                                 id="outlined-adornment-weight"
//                                 startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
//                                 endAdornment={<InputAdornment position="end"><MenuIcon/></InputAdornment>}
//                                 aria-describedby="outlined-weight-helper-text"
//                                 inputProps={{
//                                 'aria-label': 'weight',
//                                 }}
//                             />
//                         </FormControl>


                        
//                     </Box>
//                     <Box sx={{width:"100%",height:"100%", border:"1px solid #e8e8e8"}}>
//                         <Box sx={{width:"100%", pl:"12px", pr:"12px", height:"43px", outline:"1px solid #e8e8e8", boxSizing:"border-box"}}>

//                         </Box>
//                     </Box>
//                 </Box>
//                 <Box sx={{width:"322px",height:"835px", backgroundColor:"white"}}>
                
//                 </Box> */}