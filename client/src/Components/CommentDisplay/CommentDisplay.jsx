import { Box } from "@mui/material"


export default function CommentDisplay({com}){
    console.log(com);
    return (
        <>
        <Box>
            {com.body}
               
        </Box>
        </>
    )
}