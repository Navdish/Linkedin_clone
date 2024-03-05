import { Button, Divider, InputBase, Stack, Typography } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import { useState } from "react";
import { useSelector } from "react-redux";

const MessageVerticalTab = ({connectedUser, setConnectedUser}) => {
    const socket = useSelector((state)=> state.room.socket)
    const [content, setContent] = useState();
    const handleClick = () => {
        console.log("content ")

        socket.emit("newMessage", {message: content, roomId : connectedUser._id})
    }
    return (
        <>
                  
        <Stack className='user-name' 
                                flexDirection={'row'} 
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
                                {/* {connectedUser.participants[0]._id === user._id ? connectedUser.participants[1].name: connectedUser.participants[0].name} */}
                                {connectedUser === "default" ? connectedUser : connectedUser.participants[1].name}
                                </Typography>

                                <Stack flexDirection={'row'} gap={2}>
                                    <MoreHorizIcon />
                                    <VideoCallIcon />
                                    <StarBorderRoundedIcon />
                                </Stack>

                            </Stack>
                            <Divider />
                            <Stack sx={{height: '55vh'}}>
                                {connectedUser === "default" ? connectedUser : connectedUser.participants[1].name}
                                {/*  dispatch an action to fetch all messages of that room in sorted order by createdAt*/}
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
                                        WebkitOverflowScrolling: 'auto'
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


                    </>
    )
}

export default MessageVerticalTab;