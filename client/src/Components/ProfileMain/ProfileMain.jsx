import { Button, Box, Divider, Stack, Typography, Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './ProfileMain.css'
import { useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/EditOutlined';
import ProfileBanner from '../../assets/images/profileBanner.jpg'
import EditProfile from './../ProfileEdit/ProfileEdit';

const ProfileMain = () => {

    const user = useSelector((state) => state.user.content)
    console.log(user)

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Box className='profile-page-primary-card'>
                <Stack sx={{height: '240px'}}>
                <img src={ProfileBanner} alt='banner' className='profile-banner' />
                <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                 {/* <img src={ProfilePic} alt='profile-pic' className='profile-picture' /> */}
                 <Avatar className='profile-picture'/>
                  <Button 
                  className='edit-btn profile-main-edit-btn' 
                  sx={{minWidth: '10px', padding: '0', height:'fit-content'}}
                  onClick={handleOpen}
                  >
                  <EditIcon color='action' sx={{width:'30px'}} />
                  </Button>
                {open && <EditProfile hide={handleClose} />}
                </Box>
                
                </Stack>
                {/* <Divider /> */}
                <Stack className='main-user-details' flexDirection={'row'} justifyContent={'space-between'}>

                    <Stack justifyContent={'flex-start'}>
                      
                    <Typography className='username'>{user?.name}</Typography>
                    <Typography className='designation'>{user?.company?.designation}</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', width: 'fit-content'}}>
                    <Typography className='address'>{user?.address?.city}</Typography>
                    <Divider sx={{width: '1px', marginLeft: '6px', marginRight: '6px'}} />
                    <Button className='contact-info-btn'>Contact info</Button>
                    </Box>
                    <Button className='connections-btn'>{user?.totalConnections} connections</Button>
                    <Stack 
                      gap={1} 
                      flexDirection={'row'}
                      alignItems={'center'}
                      sx={{
                        marginTop: '10px',
                        width: 'fit-content'
                      }}
                      >
                      <Button variant='contained' className='profile-main-btn1'>Open to</Button>
                      <Button variant='outlined' className='profile-main-btn2'>Add profile section</Button>
                      <Button variant='outlined' className='profile-main-btn3'>More</Button>
                    </Stack>
                    </Stack>
                    <Stack>

                    </Stack>

                    <Stack sx={{width: '200px'}}>
                    <Typography className='designation'>{user?.company?.name}</Typography>
                    </Stack>
                </Stack>
            </Box>
  )
}

export default ProfileMain