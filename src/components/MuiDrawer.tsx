import * as React from "react";
import { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <IconButton size="large" edge='start' color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleClose}>
        <Box
          padding={3}
          width={"250px"}
          textAlign={"center"}
          role="presentation"
        >
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
