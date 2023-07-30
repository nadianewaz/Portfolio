import React from 'react';
import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';




const Project = ({project}) => {
    console.log(project);
    const { name, description, Github } = project; 
    console.log(name);
    return (
        <>

<Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{py: 5,px: 3, textAlign: "left"}} >
        <Typography sx={{fontWeight: '400', color: '#615F8B'}} variant="h5" gutterBottom>
        <Link to={Github} target="_blank">{name} </Link>
        </Typography>
        <Typography variant="subtitle3" gutterBottom 
            
        >
           {description} 
        </Typography>
        <br />
        <Typography sx={{fontWeight: "bold", textAlign: "left"}} variant="subtitle3" gutterBottom>
           {Github}
        </Typography>
        </Paper>
    </Grid>
   
     
        </>
    );
};

export default Project;