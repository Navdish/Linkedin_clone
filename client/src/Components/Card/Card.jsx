import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box,Divider } from '@mui/material';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import './Card.css'
import { useState } from 'react';
import CommentCard from '../commentCard/commentCard';





export default function RecipeReviewCard({post}) {
  
  const [expanded, setExpanded] = useState(false);

  
  const handleExpandClick = () => {
    setExpanded(true);
  };
  return (
    <Card sx={{ maxWidth: "100%" , marginTop:"10px", marginBottom:"10px", boxShadow:"none"}}>
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
      <CardActions sx={{display:"flex", paddingLeft:"16px", paddingTop:"4px", paddingRight:"16px", paddingBottom:"4px", justifyContent:"space-between"}}>
        <Box className="action-box"><ThumbUpOffAltIcon sx={{height:"24px", width:"24px", marginRight:"4px", color:"#5E5E5E"}} /><Typography sx={{color:"#5E5E5E" , fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>Like</Typography></Box>
        <Box className="action-box" expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"><InsertCommentOutlinedIcon sx={{height:"24px", width:"24px", marginRight:"4px" , color:"#5E5E5E"}}/><Typography  sx={{color:"#5E5E5E", fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>Comment</Typography></Box>
        <Box className="action-box"><RepeatOutlinedIcon sx={{height:"24px", width:"24px", marginRight:"4px" , color:"#5E5E5E"}}/><Typography  sx={{color:"#5E5E5E" , fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>Repost</Typography></Box>
        <Box className="action-box"><SendIcon sx={{height:"24px", width:"24px", marginRight:"4px" , color:"#5E5E5E"}}/><Typography  sx={{color:"#5E5E5E" , fontSize:"14px", fontWeight:"600", lineHeight:"28px", fontStyle:"normal"}}>Send</Typography></Box>
      </CardActions>





      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CommentCard post={post}/>
      </Collapse>
    </Card>
  );
}