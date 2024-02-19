import { Button, Divider, FormControl, Input, InputAdornment, InputLabel, Link, Stack, TextField, Typography } from "@mui/material";
import logo from"../../Assets/images/Logo.png"
import './Login.css'
import Box from '@mui/system/Box';
import PasswordAdornments from "../PasswordInput/PasswordLogin";
import google_icon from '../../Assets/images/google-color-icon.svg';
import apple from '../../Assets/images/apple.svg';
import link from '../../Assets/images/link.svg';
import Footer from "../Footer/Footer";

function Login(){
    // axios.defaults.headers.common['jwt-token'] = localStorage.getItem("token");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const login = async(data) => axios.post('http://localhost:8080/login', data);
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     const response_token = await login({email, password});
    //     localStorage.setItem("token", response_token.data);
    // }

    return (
        <Box className='login-out'>
            {/* <h1>Login Form</h1>
            <form className='login-form'>
                <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" onClick={(e)=> handleSubmit(e)}>Submit</button>
            </form> */}
            <Box className='login-out2'>
                <Box className='logo-box'><img src={logo} alt='' className="logo-img"/></Box>
                <Stack className="signin-form">
                    {/* <Box>
                        <Typography sx={{paddingBottom:"4px"}}>Sign in</Typography>
                        <Typography>Stay updated on your professional world</Typography>
                    </Box> */}
                    {/* <FormControl>
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                    </FormControl> */}
                    {/* <Box className="login-form-box"> */}
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
                        paragraph="true"
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

                    {/* <form onSubmit={(e) => {handleSubmit(e)}}> */}
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
                        InputLabel={{
                            style: { color: '#fff' },
                          }}
                        // value={inputs.email}
                        // onChange={(e) => {handleEmail(e)}}
                    />

                    

                    <PasswordAdornments/>

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
                    >
                        Sign in
                    </Button>
                    {/* </form> */}
                    <Divider sx={{width:"100%", marginTop:"12px"}}>or</Divider>
                    <Box sx={{fontSize:"12px", fontWeight:"400", fontStyle:"normal", color:"rgba(0,0,0,0.6)", lineHeight:"16px", marginTop:"12px", marginBottom:"12px", textAlign:"left"}}>
                        By clicking Agree & Join, you agree to the LinkedIn <Link fontWeight={600} underline='none' color="#8344CC">User Agreement</Link>, <Link fontWeight={600} underline='none' color="#8344CC">Privacy policy</Link>, and <Link fontWeight={600} underline='none' color="#8344CC">Cookie Policy</Link>
                    </Box>
                    {/* <Box className="form-divider">
                        <span>
                        <span className="divider-line"></span>
                        </span>
                        <span className="divider-text-content">
                        <span className="divider-text">or</span>
                        </span>
                    </Box> */}
                    <Button variant="outlined"  fullWidth={true} disableRipple={true} disableFocusRipple={true} sx={{height:"42px", textTransform:"unset", borderRadius:"25px", borderColor:"black", color:"black", marginBottom:"12px"}}><img src={google_icon} alt='' className='google-img'/>&nbsp; Continue with Google</Button>
                    <Button variant="outlined"  fullWidth={true} disableRipple={true} disableFocusRipple={true} sx={{height:"42px", textTransform:"unset", borderRadius:"25px", borderColor:"black", color:"black", marginBottom:"12px"}}><img src={apple} alt='' className='google-img'/>&nbsp; Continue with Apple</Button>
                    <Button variant="outlined"  fullWidth={true} disableRipple={true} disableFocusRipple={true} sx={{height:"42px", textTransform:"unset", borderRadius:"25px", borderColor:"black", color:"black", marginBottom:"12px"}}><img src={link} alt='' className='google-img'/>&nbsp; Sign in with a one-time link</Button>
                    </Stack>
                {/* </Box> */}
                </Stack>
                <Footer/>
            </Box>

        </Box>
    );
}

export default Login;