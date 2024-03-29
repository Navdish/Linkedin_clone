import { Avatar, Box } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

const Message = ({message, room}) => {
    const msgDate = formatAMPM(new Date(message?.createdAt));
    const sender = room?.participants[0]._id === message.sender ? room.participants[0] : room.participants[1];
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
                    <Box sx={{fontStyle:"normal", fontWeight:"400", fontSize:"12px", lineHeight:"16px", color:"rgba(0,0,0,0.6)"}}>
                        {(msgDate)}
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