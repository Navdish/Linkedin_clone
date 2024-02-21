import { Box } from "@mui/material"


export default function CommentDisplay({com}){
    return (
        <>
        <Box>
            {com.body}   
        </Box>
        </>
    )
}