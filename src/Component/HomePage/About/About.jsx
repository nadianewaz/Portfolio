import { Box, Typography } from '@mui/material';
import React from 'react';


const About = () => {
    return (
        <>
       
        <Box sx={{my: 4}}> 
        <Typography sx={{textTransform: 'uppercase', color: '#615F8B', m: 4}}>
        <h2>about </h2>
        </Typography>
        <Typography variant="subtitle5" sx={{fontSize: '18px', color:'#615F8B', px: 2}}>
            I graduate from primeasia university in computer science and engineering. My interest include software development, front end / back end development, web app applications work. 

           </Typography>
           </Box>
        
            
        </>
    );
};

export default About;