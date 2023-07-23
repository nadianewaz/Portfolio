import React from 'react';
import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';




const Project = ({project}) => {
    console.log(project);
    const { name, description, link } = project; 

    console.log(name);
    return (
        <>

<Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{height: "220px", py: 5,px: 3}} >
        <Typography sx={{fontWeight: '400', color: '#615F8B'}} variant="h5" gutterBottom>
           {name} 
        </Typography>
        <Typography sx={{textAlign: "right"}} variant="subtitle3" gutterBottom>
           {description} 
        </Typography>
        <br />
        <Typography sx={{fontWeight: "bold", textAlign: "left"}} variant="subtitle3" gutterBottom>
           {link} 
        </Typography>
       
    

        </Paper>
    </Grid>
   
     
        </>
    );
};

export default Project;