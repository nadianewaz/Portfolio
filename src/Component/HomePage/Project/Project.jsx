import React from 'react';
import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';




const Project = ({project}) => {
    console.log(project);
    const { name, description } = project; 

    console.log(name);
    return (
        <>

<Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py: 5, textAlign: 'center'}} >
        <Typography sx={{fontWeight: '400', color: '#1CC7C1'}} variant="h5" gutterBottom>
           {name} 
        </Typography>
        <Typography variant="h6" gutterBottom>
           {description} 
        </Typography>
       
    

        </Paper>
    </Grid>
   
     
        </>
    );
};

export default Project;