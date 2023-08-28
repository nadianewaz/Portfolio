import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import DrawerComponent from './DrawerComponent';

const Navigation = () => {
    return (
        <>
                                     

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#615F8B'}}>
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontSize: '28px' }}>
            Nadia Tamanna Nitu  
          </Typography>
          <DrawerComponent/>
          {/* <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <Button sx={{color: '#fff'}}>Home   </Button>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <Button sx={{color: '#fff'}}>About  </Button>
          </Link>
          <Link to="toolkit" spy={true} smooth={true} offset={-70} duration={500}>
          <Button sx={{color: '#fff'}}>Toolkit </Button>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
          <Button sx={{color: '#fff'}}>Projects</Button>
          </Link>
          <Link to="resume" spy={true} smooth={true} offset={-70} duration={500}>
          <Button sx={{color: '#fff'}}>Resume </Button>
          </Link> */}
         
          
        </Toolbar>
      </AppBar>
    </Box>


        </>


    );
};

export default Navigation;