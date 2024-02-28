import { Box, IconButton, Typography } from "@mui/material"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Messaging = () => {
    return(
        <Box sx={{backgroundColor:"#F4F2EE", minHeight:"100vh", display:"flex", justifyContent:"center"}}>
            <Box sx={{height:"835px", width:"1128px", display:"flex", gap:"2.4rem"}}>
                <Box sx={{height:"835px", width:"782px", backgroundColor:"white", display:"flex"}}>
                    <Box sx={{width:"313px", height:"100%", border:"1px solid #e8e8e8"}}>
                        <Box sx={{height:"48px", width:"100%",  border:"1px solid #e8e8e8", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <Typography sx={{pl:"16px", pr:"16px"}}>Messaging</Typography>
                            <Box sx={{mr:"8px", display:"flex"}}>
                                <IconButton sx={{width:"40px"}}><MoreHorizOutlinedIcon/></IconButton>
                                <IconButton sx={{width:"40px"}}><EditOutlinedIcon/></IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{width:"100%",height:"100%", border:"1px solid #e8e8e8"}}>

                    </Box>
                </Box>
                <Box sx={{width:"322px",height:"835px", backgroundColor:"white"}}>

                </Box>
            </Box>
        </Box>
    )
}

export default Messaging