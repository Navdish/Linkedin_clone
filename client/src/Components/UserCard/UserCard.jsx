import { Avatar, Box, Button, Typography } from "@mui/material"
import photo from "../../assets/images/profileBanner.jpg"
import './UserCard.css'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { postRequest } from "../../features/Connection/connection.action";
import { useDispatch } from "react-redux";
const UserCard = ({user}) => {
    const dispatch = useDispatch();
    const handleConnect = async(e) => {
        console.log("connect");
        e.target.disabled = true;
        const data = {
            recieverId : user._id
        }
        console.log(data);
        try {
            await dispatch(postRequest(data));
        } catch (error) {
            this.disabled("false");
            // notify that the request is not sent
        }
        
    }
    return (
        <Box sx={{position:"relative", width:"184px", height:"282px", border:"1px solid #e8e8e8", borderRadius:'0.8rem' , "&:hover":{boxShadow : "0 0  15px rgba(140, 140, 140, 0.2)"}}}>
            <img src={photo} alt="" className="user-back"/>
            <Box sx={{position:"absolute", display:"flex", flexDirection:"column", alignItems:"center", left:"0px", right:"0px", margin:"auto", top:"12px"}}>
                <Avatar sx={{width:"104px", height:"104px"}}/>
                <Typography>{user.name}</Typography>
                <Typography>{user.description}</Typography>
            </Box>
            <Box sx={{position:"absolute",  left:"12px", right:"12px", margin:"auto",bottom:"12px",  display:"flex", flexDirection:"column", alignItems:"center" }}>
                <Typography>Mutual Connections</Typography>
                <Button variant="outlined" sx={{textTransform:"unset", borderRadius:"16px", width:"100%"}} onClick={(e)=> handleConnect(e)} disabled = {false}><GroupAddIcon/> &nbsp; Connect</Button>
            </Box>
        </Box>
    )
}

export default UserCard