import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import PostAddIcon from "@mui/icons-material/PostAdd";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink } from "react-router-dom";

export default function SidebarData() {
  const itemData = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
    { label: "Link 1", link: "/link", icon: <PostAddIcon /> },
    {
      label: "Notifications",
      link: "/notification",
      icon: <NotificationsActiveIcon />,
    },
    { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];
  return (
    <>
      <List>
        {itemData.map((n, i) => (
          <ListItem component={NavLink} to={n.link} key={i}>
            <ListItemIcon>{n.icon}</ListItemIcon>
            <ListItemText>{n.label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
