import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from '@mui/material';
import { Link } from 'react-scroll';
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

const DrawerComponent = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="toolkit" spy={true} smooth={true} offset={-70} duration={500}>Toolkit</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="resume" spy={true} smooth={true} offset={-70} duration={500}>Resume</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        {/* <MenuIcon /> */}
      </IconButton>
    </>
  );
}
export default DrawerComponent;