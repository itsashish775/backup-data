import * as React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function Notifications() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropdown = [
    { label: "Alex", desc: "Likes Your feeds .........." },
    { label: "Bob", desc: "Likes Your feeds .........." },
    { label: "Harry", desc: "Likes Your feeds .........." },
    { label: "Jackson", desc: "Likes Your feeds .........." },
    { label: "Maria", desc: "Likes Your feeds .........." },
  ];
  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <List>
          {dropdown.map((item, i) => (
            <ListItem component={ListItem} onClick={handleClose} key={i}>
              <ListItemIcon>
                <Avatar style={{ backgroundColor: "blue", color: "white" }}>
                  {item.label[0].toLocaleUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                secondary={item.desc}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
