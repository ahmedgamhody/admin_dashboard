import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Links } from "./SideBarLinks";
import React from "react";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

function SideBar({ open, handleDrawerClose }) {
  const nav = useNavigate();
  const theme = useTheme();
  const showLinks = Links.map((item, key) => {
    return (
      <React.Fragment key={key}>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={() => {
            nav(item.path);
          }}
        >
          <Tooltip title={open ? null : item.name} placement={"right"}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&.active": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[400],
                },
              }}
              component={NavLink}
              to={item.path}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        {item.divider && <Divider />}
      </React.Fragment>
    );
  });

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{
          padding: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            border: `3px solid ${theme.palette.text.disabled} `,
            width: open ? 100 : 40,
            height: open ? 100 : 40,
            transition: "width 0.4s ease, height 0.4s ease",
            mb: open && "8px",
          }}
          alt="Remy Sharp"
          src={require("../Assets/Screenshot_1.png")}
        />

        {open && (
          <>
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Ahmed Gamhody
            </Typography>
            <Typography variant="body1" color={theme.palette.info.main}>
              Admin
            </Typography>
          </>
        )}
      </Box>
      <Divider />
      <List>{showLinks}</List>
    </Drawer>
  );
}

export default SideBar;
