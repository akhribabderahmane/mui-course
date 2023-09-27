import { Box, Stack,Divider} from "@mui/material";
import React from "react";

const MuiStack = () => {
  return (
    <Box>
      <Stack
        sx={{ padding: "20px" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row-reverse"}
        spacing={4}
        border={"1px solid"}
        width={"full"}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box width={"100px"} height={"100px"} bgcolor={"red"}></Box>
        <Box width={"100px"} height={"100px"} bgcolor={"blue"}></Box>
        <Box width={"100px"} height={"100px"} bgcolor={"yellow"}></Box>
        <Box width={"100px"} height={"100px"} bgcolor={"purple"}></Box>
      </Stack>
    </Box>
  );
};

export default MuiStack;
