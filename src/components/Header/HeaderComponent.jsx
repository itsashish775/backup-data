import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogComponent from "../Body/BlogComponent";
import Dashboard from "../Body/Desktop/Dashboard";
import Link from "../Body/Link";
import Logout from "../Body/Logout";
import Notification from "../Body/Notification";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function HeaderComponent() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Box style={{ margin: "20px 254px", padding: "10px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/blog" element={<BlogComponent />}></Route>
          <Route path="/link" element={<Link />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default HeaderComponent;
