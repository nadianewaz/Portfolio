import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
// import Paper from '@mui/material/Paper'; 
import LaptopIcon from '@mui/icons-material/Laptop';
import html5 from '../../../images/html5.jpg';
import css3 from '../../../images/css3.jpg';
import javascript from '../../../images/javascript.jpg';
import bootstrap from '../../../images/bootstrap.jpg';
import java from '../../../images/java.jpg';
import sass from '../../../images/sass.jpg';
import react from '../../../images/react.jpg';
import node from '../../../images/nodejs.jpg';
import mongodb from '../../../images/mongodb.jpg';
import git from '../../../images/github.jpg'

const Toolkit = () => {
    return (
        <>
        {/* <Paper elevation={3} sx={{ m: 15, p: 8, borderRadius: 5}}>  */}
        <Box sx={{ flexGrow: 1, mb: 15 }}> 
        <Typography sx={{textTransform: 'capitalize', color: '#615F8B', m: 4}}>
        <h2>my toolkit 
            <LaptopIcon sx={{pl: 2, fontSize: 23}}></LaptopIcon> 
        </h2>
        
        </Typography>
       
        <Typography variant="subtitle3" sx={{fontSize: '18px', color:'#615F8B', px: 2, }}>


        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>

        <img src={html5} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
          <img src={css3} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
          <img src={bootstrap} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
          <img src={sass} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
          <img src={javascript} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
         
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <img src={react} alt="" style={{
            width: 80,
            height: '80px',
            marginLeft: '30px'
          }}/>
        
          <img src={node} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
          <img src={mongodb} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
          <img src={git} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
          <img src={java} alt="" style={{
            width: 80,
            height: '80px'
          }}/>
         
        </Grid>
       
      </Grid>
       
         
      
          
         

           </Typography>
        
           </Box>
           {/* </Paper>  */}
        </>
    );
};

export default Toolkit;