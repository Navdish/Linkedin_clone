import { Avatar, Button, CardContent, Collapse, IconButton, Input } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getComments, addComments } from '../../features/Comment/Comment.action';
import CommentDisplay from "../CommentDisplay/CommentDisplay";

export default function CommentCard({post}) {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    useEffect(()=> {
        try {
            console.log("Commentcard entry")
            dispatch(getComments(post._id))
        } catch (error) {
        console.log(error);
        throw error;
        }
    }, [])

    const comments = useSelector((state)=> state.comment.comments);
    const handleSubmit = (e) => {
        const data = {
            postId : post._id,
            body : comment
        }
        try {
            dispatch(addComments(data));
            setComment("");
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <>
            <CardContent sx={{display:"flex"}}>
            <Avatar sx={{width:"48px", height:"48px", marginRight:"5px"}}/>
            <Input variant="outlined"  
                sx={{width:"100%",
                borderRadius:"35px",
                height:"48px",
                border:"1px solid black",
                borderColor: "#A4A4A4",
                justifyContent:"left",
                outline:"none",
                paddingLeft:"25px"
                }}
                placeholder="Add a comment..."
                value={comment}
                onChange={(e)=> {setComment(e.target.value)}}
                disableUnderline={true}
                endAdornment={
                <>
                <IconButton ><SentimentSatisfiedAltIcon sx={{color:"#A4A4A4", padding:"5px"}}/></IconButton>
                <IconButton><InsertPhotoOutlinedIcon sx={{color:"#A4A4A4"}}/></IconButton>
                </>
                }/>

            </CardContent>
            <Collapse in={!(comment==="")}>
                <Button variant="contained" sx={{borderRadius:"35px", marginLeft:"69px"}} onClick={(e)=> handleSubmit(e)}>Post</Button>
            </Collapse> 
            <Collapse in={(comments)}>
                {comments.map((com)=> {
                    <CommentDisplay com={com}/>
                })}
            </Collapse> 
        </>
    )
}
        