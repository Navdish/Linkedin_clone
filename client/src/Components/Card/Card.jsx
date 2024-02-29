import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { FacebookCounter, ReactionBarSelector } from '@charkour/react-reactions';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Box, Divider } from '@mui/material';
import { useState } from 'react';
import CommentCard from '../commentCard/commentCard.jsx';
import './Card.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReactions, getReactions, getUserReactions } from '../../features/Reaction/Reaction.action';



export default function RecipeReviewCard({post}) {
  
  const defaultIcon = <ThumbUpOffAltIcon sx={{height:"24px", width:"24px", marginRight:"4px", color:"#5E5E5E"}} />;
  const emojis = {
    Like : '👍',
    Celebrate : '👏',
    Support : '🫰',
    love : '❤️',
    Insightful : '💡',
    Funny : '😂',
    defaultIcon 
  }
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const [emoji, setEmoji] = useState( defaultIcon); 
  const [reactionCount, setReactionCount] = useState("1");
  const [commentCount, setCommentCount] = useState('1');
  const [status, setStatus] = useState(false);
  const [reactionContent, setReactionContent] = useState("Like")
  useEffect(()=> {
    try {
      console.log("Inside use effect ");
      dispatch(getUserReactions(post._id)).then((response)=> {
        if(response.payload) {
          setReactionContent(response.payload? response.payload.type : "Like");
          setEmoji(response.payload? emojis[response.payload.type] : emojis[defaultIcon])
        }           
      })
    } catch (error) {
      console.log(error);
    }
    
  }, [])
  
  // const userReaction = useSelector((state)=> state.reaction.userReaction[post._id]);

  const reactions = useSelector((state)=> state.reaction.reactions);
  // if(userReaction) {
  //   setReactionContent(userReaction);
  //   setEmoji(emojis[userReaction]);
  // }
  
  const handleExpandClick = () => {
    setExpanded(true);
  };

  const fetchReactions = async(e) => {
    dispatch(getReactions(post._id))
  }

  const handleClick = () => {
      setReactionContent("Like");
      status ? setEmoji(defaultIcon) : setEmoji(emojis["Like"]);
      setStatus(!status); 
      
  }

  return (
    <Card sx={{ maxWidth: "100%" , marginTop:"10px", marginBottom:"10px", boxShadow:"none", border:"1px solid #e8e8e8"}}>
      <CardHeader
        avatar={
          <Avatar >
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.userId.name}
        subheader={post.userId.description}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      {(post.photos.length !== 0)  && <CardMedia
        component="img"
        image={`http://localhost:8080/${post.photos[0]}`}
        alt="post image"
      />}
      <Divider />
      <CardContent sx={{p:"0px", pt:"5px"}}>
        <Box sx={{height:"34px", display:"flex", justifyContent:"space-between", pl:"25px", pr:"25px", alognItems:"center"}} onClick={(e)=>fetchReactions(e)}>
          <Box>{reactionCount} Likes</Box> <Box>{commentCount} comments</Box>
        </Box>
      </CardContent>
      <Divider/>
      <CardActions sx={{display:"flex", paddingLeft:"16px", paddingTop:"4px", paddingRight:"16px", paddingBottom:"4px", justifyContent:"space-between", position:"relative"}}>
        <Box className="action-box like-icon" >
          <Box sx={{display:"flex"}} onClick={(e)=> handleClick(e)}>
          {emoji}
          <Typography  sx={{color:"#5E5E5E" , fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>
          {reactionContent}
          </Typography>
          </Box>
          <Box className='adjacent'><ReactionBarSelector reactions={[{label:"Like", node:<node>👍</node>, key:"Like"},
                                                                      {label:"Celebrate", node:<node>👏</node>, key:"Celebrate"},
                                                                      {label:"Support", node:<node>🫰</node>, key:"Support"},
                                                                      {label:"love", node:<node>❤️</node>, key:"love"},
                                                                      {label:"Insightful", node:<node>💡</node>, key:"Insightful"},
                                                                      {label:"Funny", node:<node>😂</node>, key:"Funny"}]}  
                                                                      onSelect = {(key) => {
                                                                        if(key===reactionContent && emoji === emojis[reactionContent]){
                                                                          setEmoji(emojis.defaultIcon);
                                                                          setReactionContent("Like");
                                                                        }
                                                                        else{
                                                                          console.log("key",key)
                                                                          setEmoji(emojis[key]);
                                                                          setReactionContent(key);
                                                                        }
                                                                        const obj = {
                                                                          type: key,
                                                                          postId: post._id
                                                                        }
                                                                        dispatch(addReactions(obj));
                                                                      }}/></Box>
        </Box>


        <Box className="action-box" expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
            <InsertCommentOutlinedIcon sx={{height:"24px", width:"24px", marginRight:"4px" , color:"#5E5E5E"}}/>
            <Typography  sx={{color:"#5E5E5E", fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>
              Comment
            </Typography>
        </Box>
        <Box className="action-box"><RepeatOutlinedIcon sx={{height:"24px", width:"24px", marginRight:"4px" , color:"#5E5E5E"}}/><Typography  sx={{color:"#5E5E5E" , fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>Repost</Typography></Box>
        <Box className="action-box"><SendIcon sx={{height:"24px", width:"24px", marginRight:"4px" , color:"#5E5E5E"}}/><Typography  sx={{color:"#5E5E5E" , fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>Send</Typography></Box>
      </CardActions>





      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CommentCard post={post}/>
      </Collapse>
    </Card>
  );
}


