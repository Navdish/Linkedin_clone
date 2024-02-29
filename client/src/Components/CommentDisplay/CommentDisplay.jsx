import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material"
import { red } from "@mui/material/colors";
import './CommentDisplay.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {  ReactionBarSelector } from '@charkour/react-reactions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addReactions, getReactions } from "../../features/Reaction/Reaction.action";
import { useEffect } from "react";

export default function CommentDisplay({com}){
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
      const dispatch = useDispatch();
      const [emoji, setEmoji] = useState( defaultIcon); 
      const [reactionContent, setReactionContent] = useState("Like")
      const [status, setStatus] = useState(false);
      useEffect(()=> {
        try {
          dispatch(getReactions(com._id)).then((response)=> {
            if(response.payload) {
                console.log("response of comment reaction", response.payload);
              setReactionContent(response.payload? response.payload[0].type : "Like");
              setEmoji(response.payload? emojis[response.payload[0].type] : emojis[defaultIcon])
            }           
          })
        } catch (error) {
          console.log(error);
        }
        
      }, [])
    const handleClick = () => {
        setReactionContent("Like");
        status ? setEmoji(defaultIcon) : setEmoji(emojis["Like"]);
        console.log(status)
        setStatus(!status); 
    }
    return (
        <>
        <Stack className='commentcard' direction={'row'} gap={1} margin={'10px'}>
            <Avatar sx={{width:"48px", height:"48px", ml:"5px"}} />
            <Stack spacing={1}>
                <Box className="text">
                    <Stack direction="row" justifyContent={'space-between'} spacing={0}>
                        <Stack direction="row" spacing={0} sx={{display:"flex", alignItems:"center"}}>
                            <Typography sx={{ fontSize: '14px' }}><b>{com.userId.name}</b></Typography>
                            &nbsp; <FiberManualRecordIcon sx={{width:"5px"}}/> &nbsp;
                            <Typography className='numtext' sx={{ fontSize: '14px' }}>2nd</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{ fontSize: '14px' }} className='numtext'>2h</Typography>
                            <Box sx={{ color: '#666666' }}><i class="fa-solid fa-ellipsis"></i></Box>
                        </Stack>
                    </Stack>
                    <Typography className='degination'>{com.description}</Typography>
                    <Typography sx={{ wordBreak: 'break-word', fontSize: '13px', marginTop: '12px' }}>
                        {com.body}                    
                    </Typography>
                </Box>
                <Stack direction={'row'} gap={1}>
                    <Box className='cmtbtn'>{emoji}</Box>
                    <IconButton className="like-icon"><Box className='cmtbtn ' sx={{ fontSize: '12px' }} onClick={(e)=> handleClick(e)}>
                        {reactionContent}
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
                                                                          setStatus(false);
                                                                        }
                                                                        else{
                                                                          setEmoji(emojis[key]);
                                                                          setReactionContent(key);
                                                                          setStatus(true);
                                                                        }
                                                                        const obj = {
                                                                          type: key,
                                                                          postId: com._id
                                                                        }
                                                                        dispatch(addReactions(obj));
                                                                      }}/></Box>
                    </IconButton>
                    <Divider orientation="vertical" />
                    <IconButton><Box className='cmtbtn' sx={{ fontSize: '12px' }}>Reply</Box></IconButton>
                </Stack>
            </Stack>
        </Stack>
        </>
    )
}