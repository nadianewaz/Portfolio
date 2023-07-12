import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <>
    <Box sx={{ flexGrow: 1 , backgroundColor: '#615F8B', py: 4}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
        <Typography variant="subtitle5" sx={{fontSize: '18px', color:'#fff' }}>
            Copyright &copy; Nadia Tamanna Nitu 2023

           </Typography>
        
        </Grid>
     </Grid>
    </Box>
            
        </>
    );
};

export default Footer;