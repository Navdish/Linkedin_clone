import React from 'react'
import {
    Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const NetworkPageList = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <List sx={{ display: 'flex', flexDirection: 'column'}}>
      <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <ListItemButton >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Connections" />
        </ListItemButton>
        
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Following & Followers" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Newsletter" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="HashTag" />
        </ListItemButton>
        </Collapse>
        <ListItemButton onClick={handleClick}>
        
        <ListItemText primary="Toggle" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </ListItem>
    </List>
  )
}
export default NetworkPageList