import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { Avatar, Box, Divider, Typography } from '@mui/material';
import ResponsiveDialog from '../../components/Dialog/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../features/Post/Post.action';
import RecipeReviewCard from '../../components/Card/Card';
import axios from 'axios'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import BackLabel from '../../assets/images/profileBanner.jpg'
import HomeRightList from '../../components/HomeRightList/HomeRightList';
import ad from '../../assets/images/Ad.png'

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
        <Box sx={{width: "100%", display:"flex", backgroundColor: "#F4F2EE", justifyContent:"center"}}>
            

                <Box sx={{backgroundColor: "#F4F2EE", minHeight: "100vh", display: "flex",
                        paddingTop: "24px",
                        boxSizing:"border-box",
                        justifyContent:"space-between",
                        gap:'22px'
                        }}>
                    <Box sx={{width:'225px',minHeight:"356px", marginBottom:'8px',  backgroundColor:"white", borderRadius:"0.8rem", boxSizing:'border-box', height:"56.25px"}}>
                        <Box sx={{ width:"225px", height:"56.25px"}}>
                            <img src={BackLabel} className='user-back' alt=''/>
                        </Box>
                        <Box sx={{p:"12px"}}>
                            <Box sx={{ display:"flex", justifyContent:"center",  height:"52px",position:"relative",}}>
                                <Avatar sx={{ position:"absolute",height:'72px', width:"72px", mb:"12px", top:"-48px", left:"0px", right:"0px", margin:"auto"}}/>
                            </Box>
                            <Box sx={{height:"24px", display:"flex", justifyContent:"center"}}>
                                <Typography sx={{color:"#191919", fontSize:"16px", fontStyle:"normal", fontWeight:"600", lineHeight:"24px", fontColor:"rgba(0,0,0,0.9)"}}> Welcome, Navdish! </Typography>
                            </Box>
                            <Box sx={{height:"15.984", mt:"4px", display:"flex", justifyContent:"center"}}>
                                <Typography sx={{color:"#0866C6", fontSize:"12px", fontWeight:"", fontStyle:"", lineHeight:"", fontColor:""}}>Add a photo</Typography>
                            </Box>
                            
                        </Box>
                        <Divider/>
                        <Box sx={{pt:"12px", pb:"12px"}}></Box>
                        <Divider/>
                        <Box sx={{p:"12px"}}></Box>
                        <Divider/>
                        <Box sx={{p:"12px"}}></Box>
                    </Box>


                    <Box sx={{width:"555px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Box sx={{width:"100%", height:"116px", backgroundColor:"white", borderRadius:"0.8rem", border:"1px solid #e8e8e8"}}>
                            <Box sx={{height:"56px", display:"flex", marginLeft:"16px", marginRight:"16px", paddingTop:"8px"}}>
                                <Box ><Avatar sx={{width:"48px", height:"48px", marginRight:"5px"}}/></Box>
                                <ResponsiveDialog sx={{marginTop:"4px" ,marginBottom:"4px", border:"1px solid black"}}/>
                            </Box>
                            <Box sx={{height:"48px", display:"flex", justifyContent:"space-around", ml:"16px", mr:"16px"}}>
                                <Box sx={{display:"flex", alignItems:"center"}}>
                                    <InsertPhotoOutlinedIcon sx={{mr:"8px", fill:"blue"}}/>
                                    <span>Media</span>
                                </Box>
                                <Box sx={{display:"flex", alignItems:"center"}}>
                                    <CalendarMonthIcon sx={{mr:"8px",  fill:"orange"}}/>
                                    <span>Event</span>
                                </Box>
                                <Box sx={{display:"flex", alignItems:"center"}}>
                                    <ArticleIcon sx={{mr:"8px" , fill:"orange"}}/>
                                    <span>Write a article</span>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            {posts?.map((post)=> 
                                <RecipeReviewCard post={post}/>
                            )}
                        </Box>
                    </Box>

                    
                    <Box sx={{width:'300px', marginBottom:'8px',  backgroundColor:"white", borderRadius:"0.8rem", boxSizing:'border-box', height:"56.25px"}}>
                       <HomeRightList/>
                       <img src={ad} alt='' className='ad'/>
                    </Box>

                </Box>
            
        </Box>
    )
}

export default Home;
