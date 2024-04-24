import * as React from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Typography } from '@mui/material';

export default function HomeRightList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const title = ["Grooming women CEOs in finance", "Moglix to hire 500", "Shadowfax raises $100 million", "IT giants on acquisition spree", "EV firms to rev up pay hikes"];
  const title2 = ["More women look to study abroad", "How India is spending", "Raghuram Rajan on regulation", "Cybersecurity talent battles burnout", "Firms lag in career growth plans"]

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, backgroundColor: "white", borderRadius:"0.8rem", pt:"12px", pd:"12px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
        <Box sx={{pl:"12px", pr:"12px", fontSize:"16px", fontStyle:"normal", fontWeight:"600", LineHeight:"600", color:"#4e4e4e", mb:"8px"}}>
            LinkedIn News
        </Box>
        {title.map((single)=> {
            return (
            <Box>
                <Box sx={{pl:"14px", display:"flex", alignItems:"center", mt:"4px"}}>
                    <CircleIcon sx={{fontSize:"7px",mr:"12px"}} />
                    <Box  sx={{fontSize:"14px", fontWeight:"600", LineHeight:"20px", fontStyle:"normal", color:"#4e4e4e"}} >{single} </Box>
                </Box>
                <Typography sx={{fontSize:"12px", fontStyle:"normal", fontWeight:"400", LineHeight:"16px", color:"#a6a6a6", pl:"32px"}}>1d ago</Typography>
            </Box>)
        })}
    
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {title2.map((single)=> {
            return (
            <Box>
                <Box  sx={{pl:"14px", display:"flex", alignItems:"center", mt:"4px", color:"#4e4e4e"}}>
                    <CircleIcon sx={{fontSize:"7px",mr:"12px"}} />
                    <Box sx={{fontSize:"14px", fontWeight:"600", LineHeight:"20px", fontStyle:"normal"}}>{single} </Box>
                </Box>
                <Typography sx={{fontSize:"12px", fontStyle:"normal", fontWeight:"400", LineHeight:"16px", color:"#a6a6a6", pl:"32px"}}>2d ago</Typography>
            </Box>)
        })}
        </List>
      </Collapse>
      <Box onClick={handleClick} sx={{display:"flex"}}>
        <Box sx={{display:"flex", alignItems:"center", ml:"24px", pl:"8px", pr:"8px", pt:"2px", pb:"2px", color:"#8f8f8f", mt:"4px"}}>
        <Typography  sx={{fontSize:"14px", fontWeight:"600", LineHeight:"20px", fontStyle:"normal"}} >Show More</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
        </Box>
      </Box>

    </List>
  );
}