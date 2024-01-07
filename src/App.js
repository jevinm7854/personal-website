// ResponsiveAppBar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Education from "./components/Education";
import Experience from "./components/Experience";
import RespAppBar from "./components/RespAppBar";

const App = () => {
  return (
    <>
      <RespAppBar></RespAppBar>
    </>
  );
};

export default App;
