import { Box } from "@mui/material"
import UserCard from "../UserCard/UserCard"
import { fetchUser } from "../../features/Connection/connection.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Suggestions = () => {
  const dispatch = useDispatch();
    const handlefetch = async() => {
      await dispatch(fetchUser());
    }
    useEffect(()=> {
       handlefetch();
    }, [])

    const suggestions = useSelector((state)=> state.connection.suggestions);
    return (
        <Box sx={{pt: "16px", pb:"8px"}}>
              &nbsp; &nbsp; User Suggestions
              <Box sx={{md: "12px", mt:"12px", ml:"16px", mr:"16px", display:"flex", flexWrap:"wrap", gap:"9px"}}>
                {suggestions?.map( req => <UserCard user={req}/>)}
              </Box>
            </Box>
    )
}

export default Suggestions