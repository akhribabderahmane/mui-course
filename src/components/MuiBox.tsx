import { Box } from "@mui/material";
import React from "react";

const MuiBox = () => {
  return <Box component={"section"} sx={{
    backgroundColor:"success.main",
    color:'white',
    height:'400px',
    aspectRatio:'1',
    padding:'20px',
    '&:hover':{
      backgroundColor:'success.light'
    },
    fontSize:'4em',
    fontWeight:'700'
  }}
  className=" flex justify-center items-center"
  >codeEvolution</Box>;
};

export default MuiBox;
