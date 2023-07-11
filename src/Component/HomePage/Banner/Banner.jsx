import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import nitu from '../../../images/nitu.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Banner = () => {
    return (
        <>

    <Box sx={{ flexGrow: 1, backgroundColor: '#615F8B' , py: 10}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={7}>
            <Typography sx={{textTransform: 'uppercase', color: '#fff', fontSize: '32px'}}>
            <h2>hi, i'm a front end 
              <br /> developer</h2>
           </Typography>
           <Typography variant="subtitle1" sx={{fontSize: '18px', color:'#fff', px: 2}}>
            I am a frontend web developer. I can develop a project with clean code and perfect design. I also love to work with React and dynamic applications!!

           </Typography>
            <Typography variant="subtitle1" sx={{color: '#fff', py: 2}}>
             <TwitterIcon></TwitterIcon>
              <LinkedInIcon sx={{px: 2}}></LinkedInIcon>
              <GitHubIcon></GitHubIcon>
            </Typography>
           
            
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
            <Typography sx={{}}>
            <img src={nitu} alt="" style={{
            width: 300,
            height: '300px',
            borderRadius: '50%',
            border: 1
          }}/>
            </Typography>
           
         
        </Grid>
       
      </Grid>
    </Box>
  

       
        </>
    );
};

export default Banner;