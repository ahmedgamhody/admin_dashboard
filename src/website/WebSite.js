import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function WebSite() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Top bar commponet and pass to open and handelDrawerOpen becouse you need it and some Functons and consts */}
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      {/* Side bar commponet and pass to open and handelDrawerOpen becouse you need it and some Functons and consts */}
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/*  Outlet are what is inside the parentheses of the Routes, which are the pages that are navigated. */}
        <Outlet />
      </Box>
    </Box>
  );
}
