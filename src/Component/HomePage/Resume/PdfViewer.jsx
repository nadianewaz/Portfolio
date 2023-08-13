import React, { useState } from 'react';
import { Document, Page, pdfjs  } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div>
			<nav>
				<Button variant='contained' sx={{ backgroundColor: '#615F8B', textTransform: 'uppercase', p: '10px 35px', mr: "8px"}} onClick={goToPrevPage}>Prev</Button>
				<Button variant='contained' sx={{ backgroundColor: '#615F8B', textTransform: 'uppercase', p: '10px 35px'}} onClick={goToNextPage}>Next</Button>
        <p>
          <Typography variant="subtitle5" sx={{fontSize: '18px', color:'#615F8B' }}>
            Page {pageNumber} of {numPages}
          </Typography>
        </p>
			</nav>
      <center>
        <Document
          file="Nadia_Tamanna_Nitu_Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
      </center>
		</div>
	);

};

export default PdfViewer;