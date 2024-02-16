import logo from"../../Assets/images/Logo.png"
import './Login.css'
import Box from '@mui/system/Box';
// import Cookies from 'js-cookie';

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
                <Box className="signin-form"></Box>
            </Box>

        </Box>
    );
}

export default Login;