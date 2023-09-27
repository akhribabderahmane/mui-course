import * as React from "react";
import { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const MuiBottomNav = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "fixed", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        icon={<HomeIcon />}
        label="home"
      ></BottomNavigationAction>
      <BottomNavigationAction
        icon={<FavoriteIcon />}
        label="favorite"
      ></BottomNavigationAction>
      <BottomNavigationAction
        icon={<PersonIcon />}
        label="profile"
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default MuiBottomNav;
