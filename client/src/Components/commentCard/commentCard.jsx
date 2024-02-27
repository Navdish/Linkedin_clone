import { Avatar, Button, CardContent, Collapse, IconButton, Input } from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getComments, addComments } from '../../features/Comment/Comment.action';
import CommentDisplay from "../CommentDisplay/CommentDisplay";

export default function CommentCard({post}) {
    const [date, setDate] = useState((new Date()).toISOString());
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    useEffect(()=> {
        try {
            console.log("Commentcard entry")
            if(date === undefined) {
                setDate(new Date());
            }
            console.log("date", date);
            const data = {
                postId : post._id,
                date : date
            }
            dispatch(getComments(data))
        } catch (error) {
        console.log(error);
        throw error;
        }
    }, [])

    const comments = useSelector((state)=> state.comment?.comments[post._id]);
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
                {console.log("comments - ", comments)}
                {comments?.map((com)=> { 
                    return <CommentDisplay com={com}/>
                })}
            </Collapse> 
        </>
    )
}
        