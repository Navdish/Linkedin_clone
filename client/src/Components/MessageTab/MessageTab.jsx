import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../../features/Message/message.action';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MessageTab({ setConnectedUser}) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const rooms = useSelector((state)=> state.room.room);
  const user = useSelector((state)=> state.user.user);
  const socket = useSelector((state)=> state.room.socket);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e, room) => {
    setConnectedUser(room);
    console.log("roomm Id", room._id)
    socket.emit("join room", room._id);
    dispatch(fetchMessage(room._id));
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example" textColor="green">
          <Tab label="Focused" {...a11yProps(0)} />
          <Tab label="Other" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >




        {rooms.map((room)=> {
          return (
            <Button sx={{height:"92px", width:"100%", pl:"12px", boxSizing:"border-box", display:"flex", alignItems:"center", textTransform:"unset"}} onClick={(e)=>handleClick(e, room) }>
              <Avatar sx={{width:"56px", height:"56px"}}/>
              <Box sx={{pt:'12px', pb:"12px", pl:"8px", pr:"8px", width:"100%", height:"100%", boxSizing:"border-box"}}>
                <Box sx={{display:'flex', justifyContent:"space-between"}}>
                  <Box sx={{lineHeight:"24px", fontSize:"16px", fontWeight:"400", fontStyle:"normal", color:"rgba(0,0,0,0.9)"}}>{room?.participants[0]._id === user._id ? room?.participants[1].name: room?.participants[0].name}</Box>
                  <Box sx={{fontSize:"15px"}}>Date</Box>
                </Box>
                <Box sx={{lineHeight:"20px", fontSize:"14px", fontWeight:"400", fontStyle:"normal", color:"rgba(0,0,0,0.6)"}}>
                  Last Message...
                </Box>
              </Box>
            </Button>
          )
        })}

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Other
      </CustomTabPanel>
      
    </Box>
  );
}