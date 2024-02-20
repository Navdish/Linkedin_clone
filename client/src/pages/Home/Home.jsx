import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { Box } from '@mui/material';
import ResponsiveDialog from '../../components/Dialog/Dialog';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../features/Post/Post.action';
import RecipeReviewCard from '../../components/Card/Card';
import axios from 'axios'

function Home() {

    axios.defaults.headers.common['token'] = localStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> {
        (async()=>{
            try {
                if(!user.user){
                    navigate("/Login");
                }
                dispatch(getPosts());
            } catch (error) {
                console.log(error);
            }
        })();
        
    },[])
    const user = useSelector((state)=> state.user);
    const posts = useSelector((state)=> state.post.posts);
    
    return (
        <Box>
            <Box sx={{backgroundColor: "#F4F2EE", minHeight: "100vh", display: "flex",
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
                    <Box>
                        {posts?.map((post)=> 
                            <RecipeReviewCard post={post}/>
                        )}
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Home;
