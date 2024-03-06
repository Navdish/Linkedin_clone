import { Avatar, Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

const Message = ({message, room}) => {
    const sender = room.participants[0]._id === message.sender ? room.participants[0] : room.participants[1];
    return (
        <Box sx={{width:"100%", position:"relative"}}>
            <Avatar sx={{width:"40px", height:"40px", position:"absolute", left: "8px"}}/>
            <Box>
                <Box sx={{display:"flex",  alignItems:"center", pl:"56px", boxSizing:"border-box"}}>
                    <Box sx={{fontStyle:"normal", fontWeight:"600", fontSize:"14px", lineHeight:"20px"}}>
                        {sender.name}
                    </Box>
                    &nbsp;
                    <CircleIcon sx={{color:"green", width:"6px", height:"6px"}}/>
                    &nbsp;
                    <Box>
                        {(new Date(message?.createdAt).toLocaleDateString('en-US'))}
                    </Box>
                </Box>
                <Box sx={{fontStyle:"normal", fontWeight:"400", fontSize:"14px", lineHeight:"20px", pl:"56px", boxSizing:"border-box", mt:"4px", mb:"4px"}}>
                    {message.content}
                </Box>
            </Box>
        </Box>
    )
}

export default Message;