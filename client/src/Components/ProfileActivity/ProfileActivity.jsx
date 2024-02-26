import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../../pages/Profile/Profile.css'
import EditIcon from '@mui/icons-material/EditOutlined';
import ResponsiveDialog from '../Dialog/Dialog';

const ProfileActivity = () => {


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };






  return (
    <Box classname='profile-page-card-secondary'
    sx={{
        width: '49vw !important',
    height: 'fit-content !important',
    border: '1px solid #d7d8d6 !important',
    borderRadius: '10px !important',
    backgroundColor: '#fff !important',
    padding: '20px',

    
    }}
    >
    <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Typography className='profile-activity'>Activity</Typography>
        <Stack flexDirection={'row'} gap={1.5}>
        <Button variant='outlined' className='profile-create-post-btn' onClick={handleClickOpen}>Create a post</Button>
        <Button className='edit-btn' sx={{minWidth: '10px', padding: '0'}}><EditIcon color='action' sx={{width:'30px'}} /></Button>
        </Stack>
        {open && <ResponsiveDialog hide={handleClose} />}
    </Stack>

    </Box>
  )
}

export default ProfileActivity