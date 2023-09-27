import { Box, Stack, CircularProgress,LinearProgress } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <Stack spacing={4}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <CircularProgress color="inherit" variant="determinate" value={60} />
      <LinearProgress sx={{width:'600px'}} variant="determinate" value={100}></LinearProgress>
    </Stack>
  );
};

export default MuiProgress;
