import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
// import Paper from '@mui/material/Paper'; 
import FilterVintageIcon from '@mui/icons-material/FilterVintage';


const About = () => {
    return (
        <>
        {/* <Paper elevation={3} sx={{ m: 15, p: 8, borderRadius: 5}}>  */}
        <Box sx={{flexGrow: 1,mb: 15}}> 

        <Grid container spacing={2} className='style'>
        <Grid item xs={12} sm={12} md={12}>
        <Typography sx={{textTransform: 'capitalize', color: '#615F8B', m: 4}}>
        <h2>about me
            <FilterVintageIcon sx={{pl: 2, fontSize: 23}}></FilterVintageIcon> 
        </h2>
        </Typography>
        
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <Typography variant="subtitle5" sx={{fontSize: '18px', color:'#615F8B', px: 2, }}>
            I graduated from Primeasia University in Computer Science and Engineering. My interests include software development, front end / back end development, web app applications work with a focus on the MERN stack. Now, I am exploring other technologies and frameworks. 

           </Typography>
        
        </Grid>
        
        </Grid>
        </Box>
    {/* </Paper> */}
         




        
            
        </>
    );
};

export default About;