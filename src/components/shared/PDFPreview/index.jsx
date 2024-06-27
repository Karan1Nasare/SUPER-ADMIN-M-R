import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/web/pdf_viewer.css';

// Set the workerSrc to the pdf.worker.min.js file from the build directory
pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

const PDFPreview = ({ file }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file))
          .promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport,
        };
        await page.render(renderContext);
      } catch (error) {
        console.error('Error loading or rendering PDF:', error);
      }
    };

    if (file instanceof Blob) {
      loadPdf();
    }
  }, [file]);

  return <canvas ref={canvasRef} />;
};

export default PDFPreview;
