import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import React from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MessageTab from "../../components/MessageTab/MessageTab";

const Messaging = () => {

    

    return(
        <Box sx={{backgroundColor:"#F4F2EE", display:"flex", justifyContent:"center", minHeight:"850px"}}>
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
                        <MessageTab />

                        
                    </Box>
                    <Box sx={{width:"100%",height:"100%", border:"1px solid #e8e8e8"}}>
                        <Box sx={{width:"100%", pl:"12px", pr:"12px", height:"41px", outline:"1px solid #e8e8e8", boxSizing:"border-box"}}>

                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:"322px",height:"835px", backgroundColor:"white"}}>
                
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