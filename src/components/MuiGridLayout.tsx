import React from "react";
import { Stack, Box, Divider, Grid,Paper } from "@mui/material";

const MuiGridLayout = () => {
  return (
    <div className=" w-full py-4 px-10 sm={6}">
    <Paper elevation={8} sx={{padding:'30px',margin:'2em'}}>
      <Grid container width={'full'} spacing={4}>
         <Grid item xs={12} sm={6}>
           <Box padding={4} bgcolor={"red"}>Item 1</Box>
         </Grid>
         <Grid item xs={12} sm={6}>
           <Box padding={4} bgcolor={"yellow"}>Item 2</Box>
         </Grid>
         <Grid item xs={12} sm={6}>
           <Box padding={4} bgcolor={"purple"}>Item 3</Box>
         </Grid>
         <Grid item xs={12} sm={6}>
           <Box padding={4} bgcolor={"grey"}>Item 4</Box>
         </Grid>
      </Grid>
      </Paper>
    </div>
  );
};

export default MuiGridLayout;
