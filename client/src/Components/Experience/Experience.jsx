import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const Experience = () => {


    const user = useSelector((state) => state.user.content)
    console.log(user)





  return (
    <Box className="profile-page-card-secondary">
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography className="profile-activity">Experience</Typography>
        <Stack flexDirection={"row"} gap={1.5}>
          <Button sx={{ color: "black", fonstSize: "18px" }}>
            <AddIcon />
          </Button>
          <Button className="edit-btn" sx={{ minWidth: "10px", padding: "0" }}>
            <EditIcon color="action" sx={{ width: "30px" }} />
          </Button>
        </Stack>
      </Stack>
    
        <Stack>
        <Typography>{user?.company?.designation}</Typography>
            <Typography>{user?.company?.name}</Typography>
            <Typography>{user?.address?.city}</Typography>
            <Typography>{user?.summary}</Typography>
        </Stack>
    


    </Box>
  );
};

export default Experience;