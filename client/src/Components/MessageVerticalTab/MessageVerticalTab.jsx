import { Avatar, Box, Button, Divider, InputBase, Stack, Typography } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import  Message  from "../Message/Message";
import { useEffect } from "react";

const MessageVerticalTab = ({connectedUser}) => {
    const socket = useSelector((state)=> state.room.socket)
    const user = useSelector((state)=> state.user.user)
    const messages = useSelector((state)=> state.message.messages)
    const [content, setContent] = useState();
    const dummy = useRef(null);
    const handleClick = () => {
        console.log("click event")
        socket.emit("newMessage", {message: content, roomId : connectedUser?._id, senderId: user?._id})
        setContent("");
    }
    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: "smooth" });
      }, [messages]);
    return (
        <Box>
                  
            <Stack flexDirection={'row'} 
                                justifyContent={'space-between'} 
                                alignItems={'center'} 
                                sx={{ width: '100%', boxSizing: 'border-box', padding: '8px'}}
                                >
                                <Typography 
                                    sx={{
                                    fontSize: '16px', 
                                    fontWeight: '500',
                                    }}
                                >
                                {connectedUser && connectedUser.participants[1].name}
                                </Typography>

                                <Stack flexDirection={'row'} gap={2}>
                                    <MoreHorizIcon />
                                    <VideoCallIcon />
                                    <StarBorderRoundedIcon />
                                </Stack>

                            </Stack>
                            <Divider />
                            <Stack sx={{height: '62.12vh', overflow:"scroll"}}>
                                
                                {messages.map((message)=> {
                                    return (
                                        <Message message = {message}  room={connectedUser}/>
                                    )
                                })}
                                <div ref={dummy}/>
                            </Stack>
                            <Divider />
                            <Stack className='textField' sx={{boxSizing: 'border-box', padding: '10px', height: '121px'}}>
                                    <InputBase
                                    multiline
                                    minRows={4}
                                    placeholder='Write a message...'
                                    value = {content}
                                
                                    sx={{
                                        backgroundColor: '#f5f3ee', 
                                        borderRadius: '5px', 
                                        boxSizing: 'border-box', 
                                        padding: '30px 10px 10px 10px',
                                        fontSize: '14px',
                                        height: '100%',
                                        overflow: 'scroll',
                                        WebkitOverflowScrolling: 'auto',
                                        wordBreak:"break-word"
                                        }}
                                        onChange={(e)=> setContent(e.target.value)}
                                    />
                            </Stack>
                            <Divider />

                                <Stack 
                                    flexDirection={'row'} 
                                    sx={{height: '78px', boxSizing: 'border-box', pt: '20px', pl:"20px", pr:"20px"}}
                                    gap={2}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Stack flexDirection={'row'}  gap={2}>
                                        <InsertPhotoIcon />
                                        <AttachFileIcon sx={{rotate: '50deg'}} />
                                        <GifIcon />
                                        <SentimentSatisfiedIcon />
                                    </Stack>
                                    <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                                        <Button variant='contained' 
                                            sx={{textTransform: 'none', borderRadius:'50px', padding: '0'}}
                                            onClick={(e) => handleClick(e)}>
                                            Send
                                        </Button>
                                        <MoreHorizIcon />
                                    </Stack>
                                </Stack>


                    </Box>
    )
}

export default MessageVerticalTab;