import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
                                     

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#615F8B'}}>
      <Toolbar>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontSize: '28px' }}>
            Nadia Tamanna Nitu  
          </Typography>
          <Link to="/">
          <Button sx={{color: '#fff'}}>Home   </Button>
          </Link>
          <Link to="/about">
          <Button sx={{color: '#fff'}}>About  </Button>
          </Link>
          <Link to="/toolkit">
          <Button sx={{color: '#fff'}}>Toolkit </Button>
          </Link>
          <Link to="/project">
          <Button sx={{color: '#fff'}}>Project</Button>
          </Link>
          <Link to="/resume">
          <Button sx={{color: '#fff'}}>Resume </Button>
          </Link>
         
          
        </Toolbar>
      </AppBar>
    </Box>


        </>


    );
};

export default Navigation;