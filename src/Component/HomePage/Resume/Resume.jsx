import React from 'react';
import { Box, Button, Typography } from '@mui/material';
// import Paper from '@mui/material/Paper'; 
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PdfViewer from './PdfViewer';

const Resume = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume-of-Nadia-Tamanna-Nitu.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume-of-Nadia-Tamanna-Nitu.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
       
        {/* <Paper elevation={3} sx={{ m: 15, p: 8, borderRadius: 5}}>  */}
        <Box sx={{my: 15}}> 
        <Typography sx={{textTransform: 'capitalize', color: '#615F8B', m: 4}}>
        <h2>my resume 
         
            <InsertDriveFileIcon sx={{pl: 2, fontSize: 23}}></InsertDriveFileIcon>
        </h2>
        </Typography>
        <PdfViewer/ >
        <Typography>
        <Button variant='contained' sx={{ backgroundColor: '#615F8B', mt: 3, textTransform: 'uppercase', p: '10px 35px'}} onClick={onButtonClick}>save resume </Button>

        </Typography>
        
        
           </Box>
           {/* </Paper>  */}
            
        </>
    );
};

export default Resume;