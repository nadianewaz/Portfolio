import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PdfViewer from './PdfViewer';

const Resume = () => {
    return (
        <>
       
       <Paper elevation={3} sx={{ m: 15, p: 8, borderRadius: 5}}> 
        <Box> 
        <Typography sx={{textTransform: 'capitalize', color: '#615F8B', m: 4}}>
        <h2>my resume 
         
            <InsertDriveFileIcon sx={{pl: 2, fontSize: 23}}></InsertDriveFileIcon>
        </h2>
        </Typography>
                                           
        
       
        <Typography variant="subtitle5" sx={{fontSize: '18px', color:'#615F8B', px: 2, }}>
            Tap to view my resume!
        </Typography>
        <PdfViewer/ >
        <Typography>
        <Button variant='contained' sx={{ backgroundColor: '#615F8B', mt: 3, textTransform: 'uppercase', p: '10px 35px'}} >view resume </Button>

        </Typography>
        
        
           </Box>
           </Paper>
            
        </>
    );
};

export default Resume;