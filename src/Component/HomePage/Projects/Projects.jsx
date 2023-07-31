import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Project from '../Project/Project';

const projects = [
  {
    id: 1,
    name: ' Jewelry Management System',
    description: 'Develop a desktop application for manage a jewelry store. Store manager is able to add, buy or sell items. They can also search for items, see item details and see all the items in the inventory. This project is developed using Java and SQLite.',
    "Github": "https://github.com/nadianewaz/jewelry-management-system.git",
  
   },
  {
    id: 2,
    name: 'Doctors Portal',
    description: 'Develop a doctor and patient portal with Register and Login capabilities. Patients will be able to schedule appointments from the portal. This project is developed using React and Firebase.',
    "Github": "https://github.com/nadianewaz/Doctor-s-Portal",
  
  },
  {
    id: 3,
    name: ' PSD to HTML conversion',
    description: ' Built responsive and interactive web project. Used HTML5, CSS3, Bootstrap, JavaScript, jQuery.',
    "Github": "https://github.com/nadianewaz/Creative-Project",
  
  }
  
];

const Projects = () => {
  
    return (
        <>
        <Typography sx={{textTransform: 'capitalize', color: '#615F8B', m: 4}}>
        <h2>personal project
              <AccountCircleIcon sx={{pl: 2, fontSize: 18}}></AccountCircleIcon> 
        </h2>
        </Typography>

    
                                   
      <Container> 
      <Grid container spacing={2}>
        {
         projects.map( projectElement => <Project
         key={projectElement.id}
         project={projectElement}
         >  
        </Project>)
  
  
        }
        
      </Grid>
      </Container>
      </>
    );
};

export default Projects;