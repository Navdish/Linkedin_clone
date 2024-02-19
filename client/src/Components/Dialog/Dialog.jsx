import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Input, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const name = useSelector((state)=> state.user.name)

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  
        sx={{width:"100%",
        borderRadius:"35px",
        height:"48px",
        borderColor: "#A4A4A4",
        textTransform:"unset",
        color:"#A4A4A4",
        justifyContent:"left"
        }}>
        Start a post, try writing with AI
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
      >
        <DialogTitle id="responsive-dialog-title">
          
        </DialogTitle>
        <DialogContent >
          {/* <DialogContentText>
          </DialogContentText> */}
          <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Box sx={{ display:"flex"}}>
              <AccountCircleIcon sx={{width:"48px", height:"48px"}}/>
              <Box>{name}</Box>
            </Box>
            <Box><CloseIcon   onClick={handleClose} /></Box>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <TextField id="outlined-basic" label="Title" variant="outlined" multiline minRows={1} sx={{marginTop:"10px"}} />
            <TextField
              id="outlined-multiline-flexible"
              multiline
              minRows={4}
              placeholder='Description'
              sx={{border:"none"}}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

//744 592