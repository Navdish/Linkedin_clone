import { Box } from "@mui/material"
import UserCard from "../UserCard/UserCard"


const Suggestions = () => {
    return (
        <Box sx={{pt: "16px", pb:"8px"}}>
              &nbsp; &nbsp; User Suggestions
              <Box sx={{md: "12px", mt:"12px", ml:"16px", mr:"16px", display:"flex", flexWrap:"wrap", gap:"9px"}}>
                <UserCard/>
              </Box>
            </Box>
    )
}

export default Suggestions