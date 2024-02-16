import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

export default function PasswordAdornments({password, setPassword}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            
            <InputLabel htmlFor='outlined-email' sx={{marginBottom: "4px",marginTop:"16px", fontSize:"14px", fontWeight:"500", color:"rgba(0,0,0,0.75)", fontStyle:"normal", lineHeight:"20px"}}>Password (6+ characters)</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{border: "1px solid black" , outline: 'none', height:"30px",width:"100%",
                    '&.Mui-focused fieldset': {
                        border: "none",
                      },
                      
                }}
                value={password}

                onChange={(e)=> {setPassword(e.target.value); console.log(password);}}
                endAdornment={
                <InputAdornment position="end">
                    <Box
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword ? <Box sx={{color:"#0A68C2", fontSize:"16px", fontWeight:"600"}}>Hide</Box> : <Box sx={{color:"#0A68C2", fontSize:"16px", fontWeight:"600"}}>Show</Box>}
                    </Box>
                </InputAdornment>
                }
            />
    </Box>
  );
}