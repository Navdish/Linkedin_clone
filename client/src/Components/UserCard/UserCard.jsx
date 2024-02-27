import { Avatar, Box, Button, Typography } from "@mui/material"
import photo from "../../assets/images/profileBanner.jpg"
import './UserCard.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const UserCard = ({user}) => {

    return (
        <Box sx={{position:"relative", width:"184px", height:"282px", border:"1px solid #e8e8e8", borderRadius:'0.8rem' , "&:hover":{boxShadow : "0 0  15px rgba(140, 140, 140, 0.2)"}}}>
            <img src={photo} alt="" className="user-back"/>
            <Box sx={{position:"absolute", display:"flex", flexDirection:"column", alignItems:"center", left:"0px", right:"0px", margin:"auto", top:"12px"}}>
                <Avatar sx={{width:"104px", height:"104px"}}/>
                <Typography>user.name</Typography>
                <Typography>user.descripiton</Typography>
            </Box>
            <Box sx={{position:"absolute",  left:"12px", right:"12px", margin:"auto",bottom:"12px",  display:"flex", flexDirection:"column", alignItems:"center" }}>
                <Typography>Mutual Connections</Typography>
                <Button variant="outlined" sx={{textTransform:"unset", borderRadius:"16px", width:"100%"}}><GroupAddIcon/> &nbsp; Connect</Button>
            </Box>
        </Box>
    )
}

export default UserCard