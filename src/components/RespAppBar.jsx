// ResponsiveAppBar.js
import React from "react";
import "../styles/respappbar.css"
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
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Home from "./Home";

const RespAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [EduOpen, setEduOpen] = React.useState(false);
  const [ExpOpen, setExpOpen] = React.useState(false);
  const [ProjOpen, setProjOpen] = React.useState(false);
  const [SkillsOpen, setSkillsOpen] = React.useState(false);
  const [HomeOpen, setHomeOpen] = React.useState(true);
  const [ContactOpen, setContactOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleMenuClick = (item) => {
    // Define different onClick handlers for each menu option
    switch (item.label) {
      case "Home":
        // Add your Home onClick logic here
        setEduOpen(false);
        setExpOpen(false);
        setHomeOpen(true);
        setProjOpen(false);
        setSkillsOpen(false);
        setContactOpen(false);
        break;
      case "Education":
        // Add your Education onClick logic here
        setEduOpen(true);
        setExpOpen(false);
        setHomeOpen(false);
        setProjOpen(false);
        setSkillsOpen(false);
        setContactOpen(false);

        break;
      // Add other cases for each menu option
      case "Experiences":
        // Add your Education onClick logic here
        setEduOpen(false);
        setExpOpen(true);
        setHomeOpen(false);
        setProjOpen(false);
        setSkillsOpen(false);
        setContactOpen(false);

        break;
      case "Projects":
        // Add your Education onClick logic here
        setEduOpen(false);
        setExpOpen(false);
        setHomeOpen(false);
        setProjOpen(true);
        setSkillsOpen(false);
        setContactOpen(false);

        break;
      case "Skills":
        // Add your Education onClick logic here
        setEduOpen(false);
        setExpOpen(false);
        setHomeOpen(false);
        setProjOpen(false);
        setSkillsOpen(true);
        setContactOpen(false);

        break;
      case "Contact":
        // Add your Education onClick logic here
        setEduOpen(false);
        setExpOpen(false);
        setHomeOpen(false);
        setProjOpen(false);
        setSkillsOpen(false);
        setContactOpen(true);

        break;

      default:
        setEduOpen(false);
        setExpOpen(false);
        setHomeOpen(true);
        setProjOpen(false);
        setSkillsOpen(false);
        setContactOpen(false);

        break;
    }
  };

  const menuItems = [
    { label: "Home", onClick: () => handleMenuClick({ label: "Home" }) },
    {
      label: "Education",
      onClick: () => handleMenuClick({ label: "Education" }),
    },
    {
      label: "Experiences",
      onClick: () => handleMenuClick({ label: "Experiences" }),
    },
    {
      label: "Projects",
      onClick: () => handleMenuClick({ label: "Projects" }),
    },
    { label: "Skills", onClick: () => handleMenuClick({ label: "Skills" }) },
    { label: "Contact", onClick: () => handleMenuClick({ label: "Contact" }) },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "left" }}
              >
                Jevin Modi's personal website
              </Typography>
            </>
          )}

          {/* Buttons or title based on screen size */}
          {isMobile ? (
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItemButton
                    key={index}
                    onClick={() => {
                      item.onClick();
                      toggleDrawer(false)();
                    }}
                  >
                    <Typography variant="subtitle1">{item.label}</Typography>
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          ) : (
            <div>
              {menuItems.map((item, index) => (
                <Button color="inherit" key={index} onClick={item.onClick} className="resp-app-bar-button">
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>

      {EduOpen && <Education />}
      {ExpOpen && <Experience />}
      {ContactOpen && <Contact />}
      {SkillsOpen && <Skills />}
      {ProjOpen && <Projects />}
      {HomeOpen && <Home />}
    </>
  );
};

export default RespAppBar;
