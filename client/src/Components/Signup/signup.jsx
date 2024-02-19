import * as React from 'react';
import './signup.css'
import Box from '@mui/system/Box';
import logo from"../../Assets/images/Logo.png"
import google_icon from '../../Assets/images/google-color-icon.svg'
import InputLabel from '@mui/material/InputLabel';
import { Link } from '@mui/material';
import PasswordAdornments from '../PasswordInput/PasswordInput'
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux' 
import {useNavigate} from 'react-router-dom';
import { createUser } from '../../App/Slice/contentSlice';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';


function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state)=> state.isLoading);
    const error = useSelector((state)=> state.error);
        
    
    async function handleSubmit(e) {
        dispatch(createUser({email, password})).then((response)=> {
            console.log(response)
            if(!response.payload) console.log(response.error.message,'uhi')
        });
        if(isLoading) return "Loading....";
    }
    
    useEffect(()=> {
        console.log("useeffect");
        (error)? alert(error.message) : console.log("sds");
    }, [])
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
                    <Box sx={{width: "100%"}}>
                        <InputLabel htmlFor='outlined-email' sx={{marginBottom: "4px", fontSize:"14px", fontWeight:"500", color:"rgba(0,0,0,0.75)", fontStyle:"normal", lineHeight:"20px"}}>Email or phone number</InputLabel>
                        <OutlinedInput
                            id="outlined-email"
                            type='text'
                            sx={{width:"100%",border: "1px solid black" , outline: 'none', height:"30px",
                                '&.Mui-focused fieldset': {
                                    border: "none",
                                },
                            }}
                            value={email} onChange={(e)=> setEmail(e.target.value)}
                        />
                    </Box>
                    <Box sx={{width: "100%"}}>
                        <PasswordAdornments password = {password} setPassword = {setPassword}/>
                    </Box>
                    <Box sx={{fontSize:"12px", fontWeight:"400", fontStyle:"normal", color:"rgba(0,0,0,0.6)", lineHeight:"16px", marginTop:"16px", marginBottom:"16px", textAlign:"center"}}>
                        By clicking Agree & Join, you agree to the LinkedIn <Link fontWeight={600} underline='none' color="#8344CC">User Agreement</Link>, <Link fontWeight={600} underline='none' color="#8344CC">Privacy policy</Link>, and <Link fontWeight={600} underline='none' color="#8344CC">Cookie Policy</Link>
                    </Box>
                    <Button onClick={(e)=> handleSubmit(e)} variant="contained"  disableFocusRipple={true} disableRipple={true} sx={{textTransform:"unset", width: "100%", borderRadius: "25px", paddingTop:"12px", paddingBottom:"12px", paddingLeft:"24px", paddingRight:"24px", fontSize:"16px", fontWeight:"600"}}>Agree & join</Button>
                    <Divider  sx={{color:"black", width:"100%", marginTop:"20px", marginBottom:"20px"}}>or</Divider>
                    <Button variant="outlined"  fullWidth={true} disableRipple={true} disableFocusRipple={true} sx={{ textTransform:"unset", borderRadius:"25px", borderColor:"black", color:"black", marginBottom:"20px"}}><img src={google_icon} alt='' className='google-img'/>&nbsp; Continue with Google</Button>
                    <Box sx={{marginTop:"16px", marginBottom:"24px"}}>Already on Linkedin <Link fontWeight={600} underline='none' color="#8344CC" href="/Login">Sign in</Link></Box>
                </Box>
                <Box className="after-signup">Looking to create a page for a business? <Link fontWeight={600} underline='none' color="#8344CC">Get Help</Link></Box>
                <Footer/>
            </Box>
                
            </Box>
    );
}

export default Signup;