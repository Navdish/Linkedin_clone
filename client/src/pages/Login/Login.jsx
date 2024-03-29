import { Button, Divider, FormControl, Input, InputAdornment, InputLabel, Link, Stack, TextField, Typography } from "@mui/material";
import logo from"../../assets/svg/Logo.png"
import './Login.css'
import Box from '@mui/system/Box';
import PasswordAdornments from "../../components/PasswordInput/PasswordLogin";
import google_icon from '../../assets/svg/google-color-icon.svg';
import apple from '../../assets/svg/apple.svg';
import link from '../../assets/svg/link.svg';
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from '../../features/Auth/Auth.action';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';

function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state)=> state.isLoading);
    const error = useSelector((state)=> state.error);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );

    const handleSubmit = async(e) => {
        dispatch(login({email, password})).then((response)=> {
            if(!response.payload) {
                console.log(response.error.message,'error');
                setEmail("");
                setPassword("");
                // add snackbar showing wrong credentials
                setOpen(true);

                navigate("/Login");
            }
            else {
                localStorage.setItem("token", response.payload.user.token);
                navigate('/Home');
            }
        });
        if(isLoading) return "Loading....";
    }

    return (
        <Box className='login-out'>
            
            <Box className='login-out2'>
                <Box className='logo-box'><img src={logo} alt='' className="logo-img"/></Box>
                <Stack className="signin-form" sx={{mb:"20px"}}>
                    <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    className="login-form"
                    >
                    <Typography
                        align="left"
                        sx={{
                        width: "100%",
                        fontFamily:
                            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
                        fontWeight: "600",
                        fontSize: "32px",
                        }}
                    >
                        Sign in
                    </Typography>
                    <Typography
                        paragraph= {true}
                        align="left"
                        sx={{
                        width: "100%",
                        fontFamily:
                            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
                        fontSize: "14px",
                        }}
                    >
                        Stay updated on your professional world
                    </Typography>

                    <TextField
                        label="Email"
                        variant="filled"
                        sx={{
                        width: "100%",
                        height: "52px",
                        fontFamily:
                            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
                        fontWeight: "400",
                        fontSize: "32px",
                        position: "relative",
                        zIndex: "1",
                        borderRadius: "4px !important",
                        backgroundColor: "white",
                        "& .MuiFilledInput-root": {
                            height: '52px',
                            background: "white",
                            border: "1px solid black",
                            '&.Mui-focused fieldset': {
                                border: 'none',
                              },
                            '&:hover fieldset': {
                              border: 'none',
                            },
                          }
                        }}
                        
                          
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <PasswordAdornments password = {password} setPassword = {setPassword}/>
                    <Typography
                        align="left"
                        sx={{
                        color: "#0b66c2",
                        fontWeight: "500",
                        width: "100%",
                        marginTop: "10px",
                        cursor: "pointer",
                        fontFamily:
                            '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                        }}
                    >
                        Forgot password?
                    </Typography>

                    <Button
                        variant="contained"
                        style={{
                        textTransform: "capitalize",
                        width: "100%",
                        boxShadow: "none",
                        height: "min-content",
                        minHeight: "48px",
                        borderRadius: "28px",
                        padding: "10px 24px 10px 24px",
                        textAlign: "center",
                        fontSize: "16px",
                        fontWeight: 500,
                        marginTop: "20px",
                        fontFamily:
                            '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                        backgroundColor: "#0a66c2",
                        }}
                        type="submit"
                        onClick={(e)=> handleSubmit(e)}
                    >
                        Sign in
                    </Button>
                    {/* </form> */}
                    <Divider sx={{width:"100%", marginTop:"12px"}}>or</Divider>
                    <Box sx={{fontSize:"12px", fontWeight:"400", fontStyle:"normal", color:"rgba(0,0,0,0.6)", lineHeight:"16px", marginTop:"12px", marginBottom:"12px", textAlign:"left"}}>
                        By clicking Agree & Join, you agree to the LinkedIn <Link fontWeight={600} underline='none' color="#8344CC">User Agreement</Link>, <Link fontWeight={600} underline='none' color="#8344CC">Privacy policy</Link>, and <Link fontWeight={600} underline='none' color="#8344CC">Cookie Policy</Link>
                    </Box>
                    
                    <Button variant="outlined"  fullWidth={true} disableRipple={true} disableFocusRipple={true} sx={{height:"42px", textTransform:"unset", borderRadius:"25px", borderColor:"black", color:"black", marginBottom:"12px"}}><img src={google_icon} alt='' className='google-img'/>&nbsp; Continue with Google</Button>
                    <Button variant="outlined"  fullWidth={true} disableRipple={true} disableFocusRipple={true} sx={{height:"42px", textTransform:"unset", borderRadius:"25px", borderColor:"black", color:"black", marginBottom:"12px"}}><img src={apple} alt='' className='google-img'/>&nbsp; Continue with Apple</Button>
                    <Button variant="outlined"  fullWidth={true} disableRipple={true} disableFocusRipple={true} sx={{height:"42px", textTransform:"unset", borderRadius:"25px", borderColor:"black", color:"black", marginBottom:"12px"}}><img src={link} alt='' className='google-img'/>&nbsp; Sign in with a one-time link</Button>
                    </Stack>
                </Stack>
                <Footer/>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Invalid credentials"
                    action={action}
                />
            </Box>

        </Box>
    );
}

export default Login;