import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputBase, OutlinedInput, Stack, Typography } from "@mui/material"
import React from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MessageTab from "../../components/MessageTab/MessageTab";
import TuneIcon from '@mui/icons-material/Tune';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import { useState } from "react";

const Messaging = () => {

    const [connectedUser, setConnectedUser] = useState("User 1");

    return(
        <Box sx={{backgroundColor:"#F4F2EE", display:"flex", justifyContent:"center"}} style={{minHeight:'calc(100vh - 52px'}}>
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
                        <MessageTab connectedUser={connectedUser} setConnectedUser = {setConnectedUser}/>
                    </Box>
                    <Box sx={{width:"100%", minHeight:"calc(100vh - 74px)", border:"1px solid #e8e8e8"}}>
                        <Box sx={{width:"100%", pl:"12px", pr:"12px", height:"41px", outline:"1px solid #e8e8e8", boxSizing:"border-box"}}>
                            
                            
                            
                            
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
                                UserName
                                </Typography>

                                <Stack flexDirection={'row'} gap={2}>
                                    <MoreHorizIcon />
                                    <VideoCallIcon />
                                    <StarBorderRoundedIcon />
                                </Stack>

                            </Stack>
                            <Divider />
                            <Stack sx={{height: '55vh'}}>
                                {connectedUser}
                            </Stack>
                            <Divider />
                            <Stack className='textField' sx={{boxSizing: 'border-box', padding: '10px', height: '121px'}}>
                                    <InputBase
                                    multiline
                                    minRows={4}
                                    placeholder='Write a message...'
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
                                            sx={{textTransform: 'none', borderRadius:'50px', padding: '0'}}>
                                            Send
                                        </Button>
                                        <MoreHorizIcon />
                                    </Stack>
                                </Stack>



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

















{/* <Box sx={{ width:"782px", backgroundColor:"white", display:"flex"}}>
                    <Box sx={{width:"313px", border:"1px solid #e8e8e8"}}>
                        <Box sx={{height:"48px", width:"100%",  border:"1px solid #e8e8e8", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Typography sx={{pl:"16px", pr:"16px"}}>Messaging</Typography>
                            <Box sx={{mr:"8px", display:"flex"}}>
                                <IconButton sx={{width:"40px"}}><MoreHorizOutlinedIcon/></IconButton>
                                <IconButton sx={{width:"40px"}}><EditOutlinedIcon/></IconButton>
                            </Box>
                            
                        </Box>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                                endAdornment={<InputAdornment position="end"><MenuIcon/></InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                'aria-label': 'weight',
                                }}
                            />
                        </FormControl>


                        
                    </Box>
                    <Box sx={{width:"100%",height:"100%", border:"1px solid #e8e8e8"}}>
                        <Box sx={{width:"100%", pl:"12px", pr:"12px", height:"43px", outline:"1px solid #e8e8e8", boxSizing:"border-box"}}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:"322px",height:"835px", backgroundColor:"white"}}>
                
                </Box> */}