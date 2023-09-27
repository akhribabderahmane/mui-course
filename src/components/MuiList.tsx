import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider
} from "@mui/material";
import { Mail } from "@mui/icons-material";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
            <ListItemButton>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' />
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 1" secondary=' Line 27:8:  MuiBottomNav is defined but never used   @typescript-eslint/no-unused-vars'></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail></Mail>
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 2"></ListItemText>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail></Mail>
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3"></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
