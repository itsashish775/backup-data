import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "./Navtabs/Profile";
import Notifications from "./Navtabs/Notifications";
import Messages from "./Navtabs/Messages";
import { Hidden } from "@mui/material";
export default function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Hidden mdDown>
              <Notifications />
              <Messages />
              <Profile />
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                onClick={() => console.log("Ashish Sharma hits API")}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
