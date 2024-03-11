import { Button, Box, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SearchAppBar from '../../components/Navbar/Navbar';
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/EditOutlined';
import ProfileMain from '../../components/ProfileMain/ProfileMain'
import ProfileActivity from '../../components/ProfileActivity/ProfileActivity'
import Experience from '../../components/Experience/Experience'
import {io} from 'socket.io-client'
var socket2  = io("http://localhost:4000",  {autoConnect:false});


const Profile = () => {

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchUser())
    // }, [dispatch])

    const user = useSelector((state) => state.user)
    useEffect(()=> {
      socket2.connect();
      socket2.emit("userDetails", user.user._id);
      socket2.on('notification', (data) => {
          console.log('Received notification :', data);
          // dispatch(addMessage(data));
      });
  
      return ()=> {
          socket2.off('notification');
          socket2.emit("deleteUser", user.user._id);
          socket2.disconnect();
      }
    }, [])
  return (
    <Box className='profile-page'>

      <Stack 
      justifyContent={'center'} 
      flexDirection={'row'}
      gap={2.8}
      marginTop={'20px'}
      > 
        
        <Stack gap={1}>
            <ProfileMain />
            <ProfileActivity />
            <Experience />
        </Stack>

        <Stack>
            <Stack className='profile-language'>
                  <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                 <Typography className='profile-language-header'>Profile language</Typography>
                  <Button className='edit-btn' sx={{minWidth: '10px', padding: '0'}}><EditIcon color='action' sx={{width:'30px'}} /></Button>
                  </Stack>
                 <Typography className='profile-language-sub-text'>English</Typography>
                 <Divider sx={{paddingTop: '15px'}} />
                 <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                 <Typography className='profile-language-header' sx={{marginTop:'15px'}}>Public profile & URL</Typography>
                 <Button className='edit-btn' sx={{minWidth: '10px', padding: '0'}}><EditIcon color='action' sx={{width:'30px'}} /></Button>
                  </Stack>
                 <Typography className='profile-language-sub-text'>www.linkedin.com/in</Typography>
            </Stack>
            
            
            <Box>
                
            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
        </Stack>



      </Stack>
    </Box>
  )
}

export default Profile