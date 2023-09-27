import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MuiNavbar = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose=()=>{
    setAnchor(null)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" color="inherit" aria-label="logo">
          <CatchingPokemonIcon
            className=" rounded-full"
            color="error"
          ></CatchingPokemonIcon>
        </IconButton>
        <Typography variant="h6" component={"div"} className=" flex-grow-[1]">
          POKEMONAPP
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="recources-button"
            aria-aria-controls={open ? "resources-items" : undefined}
            aria-haspopup={"true"}
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-items"
          MenuListProps={{ "aria-labelledby": "recources-button" }}
          open={open}
          anchorEl={anchor}
          onClose={handleClose}
          anchorOrigin={{
            vertical:'bottom',
            horizontal:'right'
          }}
          transformOrigin={{
            vertical:'top',
            horizontal:'right'
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcasts</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
