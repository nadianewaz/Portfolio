import { Box, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';


const About = () => {
    return (
        <>
        <Paper elevation={3} sx={{ m: 15, p: 8, borderRadius: 5}}> 
        <Box> 
        <Typography sx={{textTransform: 'capitalize', color: '#615F8B', m: 4}}>
        <h2>about me
            <FilterVintageIcon sx={{pl: 1, fontSize: 23}}></FilterVintageIcon> 
        </h2>
        </Typography>
       
        <Typography variant="subtitle5" sx={{fontSize: '18px', color:'#615F8B', px: 2, }}>
            I graduated from Primeasia University in Computer Science and Engineering. My interests include software development, front end / back end development, web app applications work with a focus on the MERN stack. Now, I am exploring other technologies and frameworks. 

           </Typography>
        
           </Box>
           </Paper>
         




        
            
        </>
    );
};

export default About;