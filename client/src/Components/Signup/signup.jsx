import * as React from 'react';
import {useState} from 'react'
import './signup.css'
import axios from 'axios'
import Box from '@mui/system/Box';
import logo from"../../Assets/images/Logo.png"
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { Link } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signup = async(data) => axios.post('http://localhost:8080/signup', data);
    async function handleSubmit(e) {
        const response = await signup({name, email, password});
        console.log(response);
    }
    return (
        <Box className='outside'>
            {/* <h1>Signup Form</h1>
            <form className='signup-form'>
                <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" onClick={(e)=> handleSubmit(e)}>Submit</button>
            </form> */}
            
            <Box className='outside2'>
                <Box className='logo-Box'><img src={logo} alt='' className='logo-img'/></Box>
                <Box className='title'>Make the most of your professional life</Box>
                <Box className='signup'>
                    <Box className='complete-input'>
                        <InputLabel htmlFor="my-input" className='form-input-label' sx={{ fontStyle:"normal", fontWeight: "600", lineHeight: "20px", fontSize:"14px", color:"rgb(0,0,0,0.75)"}}>Email or phone number</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" sx={{ width:"100%"}} className='form-input' />
                    </Box>
                    <Box className='complete-input'>
                        <InputLabel htmlFor="my-input" className='form-input-label' sx={{ fontStyle:"normal", fontWeight: "600", lineHeight: "20px", fontSize:"14px", color:"rgb(0,0,0,0.75)"}}>Password (6+ characters)</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" sx={{ width:"100%"}} className='form-input' />
                    </Box>
                    <Box>
                        
                    </Box>
                </Box>
                <Box className="after-signup">Looking to create a page for a business? <Link>Get Help</Link></Box>
            </Box>

        </Box>
    );
}

export default Signup;