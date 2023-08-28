import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import nitu from '../../../images/nitu.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>

    <Box sx={{ flexGrow: 1, backgroundColor: '#615F8B' , py: 10}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7}>
            <Typography sx={{textTransform: 'uppercase', color: '#fff', fontSize: '32px'}}>
              <h2>hi, i'm a
                <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("frontend")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("developer")
                          .pauseFor(1000)
                          .start();
                  }}
                  options={{
                    loop: true,
                  }}
                  />
              </h2>
           </Typography>
           <Typography variant="subtitle1" sx={{fontSize: '18px', color:'#fff', px: 2}}>
           Hi THERE! I'M NADIA TAMANNA NITU, A Front-End Web Developer passionate about creating interactive applications with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest!

           </Typography>
            <Typography variant="subtitle1" sx={{color: '#fff', py: 2}}>
             <TwitterIcon></TwitterIcon>
             <Link to="https://www.linkedin.com/in/nadianewaz/" target="_blank">
                <LinkedInIcon sx={{px: 2}} htmlColor="white"></LinkedInIcon>
              </Link>
              <GitHubIcon></GitHubIcon>
            </Typography>
           
            
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
            <Typography sx={{}}>
            {/* <img src={nitu} alt="" style={{
            width: 300,
            height: '300px',
            borderRadius: '50%',
            border: "10px solid #fff",
            outline: 0,
          }}/> */}
            </Typography>
           
         
        </Grid>
       
      </Grid>
    </Box>
  

       
        </>
    );
};

export default Banner;