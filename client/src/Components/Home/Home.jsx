import { useState, useEffect, useNavigate } from 'react';
import './Home.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Box } from '@mui/material';
import ResponsiveDialog from '../Dialog/Dialog';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Home() {

    
    // useEffect(()=> {
    //     dispatchEvent()
    // }, [])
    
    
    
    return (
        <Box>
            <Box sx={{backgroundColor: "#F4F2EE", minHeight: "100vh", minWidth:"100vw", display: "flex",
                       flexDirection:"column",
                       alignItems:"center",
                       paddingTop: "24px",
                       boxSizing:"border-box"
                       }}>
                <Box sx={{width:"555px"}}>
                    <Box sx={{width:"100%", height:"116px", backgroundColor:"white", borderRadius:"0.4rem"}}>
                        <Box sx={{height:"56px", display:"flex", marginLeft:"16px", marginRight:"16px", paddingTop:"8px"}}>
                            <Box ><AccountCircleIcon sx={{width:"48px", height:"48px"}}/></Box>
                            <ResponsiveDialog sx={{marginTop:"4px" ,marginBottom:"4px", border:"1px solid black"}}/>
                        </Box>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Home;

// const dispatch = useDispatch();

// useEffect(()=> {
//   dispatch(fetchUser());
// }, [dispatch])

// const users = useSelector((state)=> state.user.users);
// const isLoading = useSelector((state)=> state.user.isLoading);
// const error = useSelector((state)=> state.user.error);

// if(isLoading)
// {
//   return "loading...."
// }

// if(error)
// {
//   return error
// }
// return (
//   <div className="App">
//     {users && users.map((user, id)=> {
//       return (<li key={id}>{user.name}</li>)
//     })}
//   </div>
// );