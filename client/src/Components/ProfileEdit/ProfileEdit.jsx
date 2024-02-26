import { Box, Button, DialogTitle, Divider, FormControl, IconButton, InputBase, InputLabel, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import './ProfileEdit.css'
import CloseIcon  from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
// import { editUser } from '../../redux/slice/user/userAction';

const EditProfile = ({hide}) => {

  const dispatch = useDispatch()

  const user = useSelector((state) => state?.user?.content)
  console.log(user)
  const [inputs, setInputs] = useState({
      name: user?.name,
      headline: user?.headline,
      company: {
        designation: user?.company?.designation,
      },
      address: {
        city: user?.address?.city,
        country: user?.address?.country
      },

  })

  const handleSubmit = () => {
    // dispatch(editUser(inputs))
  }

  return (
    <Box>
      <Box
        className="modal-wrapper"
        onClick={() => hide()}
        style={{
          position: " fixed",
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          backgroundColor: "rgba(230, 226, 226, 0.804)",
        }}
      ></Box>

      <Stack sx={{
        backgroundColor: '#fff',
        width: '60vw',
       position: 'fixed',
        top: '122px',
        zIndex: '1',
        left:' 150px',
       borderRadius:' 10px'
      }}
      >
        <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <DialogTitle sx={{ m: 0, p: 2, display: "flex" }}>
            <Typography>Edit intro</Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={hide}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            "&:hover": {},
          }}
        >
          <CloseIcon />
        </IconButton>

        </Stack>
        <Divider />
        <FormControl 
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
        >
        {/* <InputLabel>Name</InputLabel> */}
        <label htmlFor='name'>Name</label>
          <InputBase 
            type='text'
            name='name'
            value={inputs.name}
            placeholder='name'
            sx={{
              width: '100%',
              border: '1px solid black'
            }}
            onChange={(e) => setInputs({...inputs, name: e.target.value})}
           />
           <label htmlFor='headline'>Headline</label>
          <InputBase  
            type='text'
            name='headline'
            value={inputs.headline}
            onChange={(e) => setInputs({...inputs, headline: e.target.value})}
            sx={{
              width: '100%',
              border: '1px solid black'
            }}

          />
          <Typography>Current Poistion</Typography>
          <label htmlFor='designation'>Position</label>
          <InputBase 
            type='text'
            name='designation'
            value={inputs.company.designation}
            sx={{
              width: '100%',
              border: '1px solid black'
            }}
            onChange={(e) => setInputs({ ...inputs, ...inputs.company, designation: e.target.value})}
          />
        </FormControl>
        <Box>
          <Button 
          variant='contained'
          type='submit'
          onClick={(e) => handleSubmit(e)}
          
          >Save</Button>
        </Box>
      </Stack>

    </Box>
  )
}

export default EditProfile