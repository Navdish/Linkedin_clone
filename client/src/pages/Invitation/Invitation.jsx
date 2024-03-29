import React, { useState } from 'react'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import Recieved from '../../components/Recieved/Recieved.jsx'
import Sent from '../../components/Sent/Sent.jsx'
import {io} from 'socket.io-client'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
var socket2  = io("http://localhost:4000",  {autoConnect:false});

const Invitation = () => {

    const [response, setResponse] = useState(true)
    const user = useSelector((state)=> state.user);
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
        <Box sx={{backgroundColor:"#F4F2EE"}}>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px', backgroundColor:"#F4F2EE"}}>

                <Box className='invitation-box' sx={{width:"804px", backgroundColor:"white"}}>
                    <Stack>
                    <Typography sx={{marginBottom: '10px'}}>Manage Invitations</Typography>
                    <Stack flexDirection={'row'} justifyContent={'flex-start'} gap={2} sx={{paddingBottom: '5px'}}>
                        <Button 
                        sx={{
                            padding: '0', 
                            color: "#02754f", 
                            textTransform: 'none',
                            "&active": {
                                textDecoration: "underline" 
                            }
                            }}
                        onClick={() => {setResponse(true)}}
                            >Recieved</Button>
                        <Button
                        sx={{
                            padding: '0', 
                            color: "#02754f", 
                            textTransform: 'none',
                            "&active": {
                                textDecoration: "underline" 
                            }
                            }}
                            onClick={() => {setResponse(false)}}
                            >Sent</Button>
                    </Stack>
                    <Divider />
                    {response ? <Recieved /> : <Sent /> }
               
                    </Stack>

                </Box>

            </Box>

        </Box>
    )
}

export default Invitation