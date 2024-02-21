import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { Button, FilledInput, FormControl } from '@mui/material';

export default function PasswordAdornments({password, setPassword}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', marginTop:"24px"}}>
            <FormControl sx={{ m: 1, width: '100%', margin:"0px" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{border: "1px solid black" , outline: 'none', height:"52px",width:"100%",
                    '&.Mui-focused fieldset': {
                        border: "none",
                      },
                      
                }}
                inputProps={{ }}
                value={password}

                onChange={(e)=> setPassword(e.target.value)}
                endAdornment={
                <InputAdornment position="end">
                    <Box
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword ? <Button sx={{textTransform:"unset", color:"#0A68C2", fontSize:"16px", fontWeight:"600"}}>hide</Button> : <Button sx={{textTransform:"unset", color:"#0A68C2", fontSize:"16px", fontWeight:"600"}}>show</Button>}
                    </Box>
                </InputAdornment>
                }
            />
            </FormControl>
    </Box>
  );
}