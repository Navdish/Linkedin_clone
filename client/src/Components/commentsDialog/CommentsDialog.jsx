import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, IconButton, Link, Tab, Tabs, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default function CommentsDialog({reactionCount, postId}) {
    const emojis = {
        Like : '👍',
        Celebrate : '👏',
        Support : '🫰',
        love : '❤️',
        Insightful : '💡',
        Funny : '😂'
      }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reactions = useSelector((state)=> state.reaction.reactions[postId]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Link variant="outlined" onClick={handleClickOpen} sx={{textDecoration:"none", color:"black"}}>
        {reactionCount} Like
      </Link>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        // PaperProps={{
        //     sx:{width:"552px", height:"570px"}
        // }}
        // sx={{width:"552px", height:"570px"}}
        fullWidth
        sx={{maxHeight:"570px"}}
      >
        <DialogTitle id="responsive-dialog-title" sx={{display:"flex", justifyContent:"space-between"}}>
          {"Reactions"}
          <IconButton autoFocus onClick={handleClose}>
            <CloseIcon/>
            </IconButton>
        </DialogTitle>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All" {...a11yProps(0)} />
                    {/* <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} /> */}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {reactions?.map((reaction)=> {
                        return (
                            <Box sx={{display:"flex"}}>
                                <Avatar sx={{height:"72px", width:"72px"}}/>
                                <Box sx={{marginLeft:"8px"}}>
                                    <Typography sx={{fontStyle:"normal", fontWeight:"600", fontSize:"16px", LineHeight:"24px", color:"rgba(0,0,0,0.9)"}}>{reaction.userId.name}</Typography>
                                    <Typography sx={{fontStyle:"normal", fontWeight:"400", fontSize:"14px", LineHeight:"20px", color:"rgba(0,0,0,0.6)"}}>{reaction.userId.description}</Typography>
                                    <Box>{reaction.type}{emojis[reaction.type]}</Box>
                                </Box>
                            </Box>
                    )
                    })}

                </CustomTabPanel>
                {/* <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel> */}
            </Box>
        <DialogContent>
          
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}