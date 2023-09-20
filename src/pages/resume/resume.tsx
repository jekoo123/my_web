import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Container,DocumentContainer } from "./styled.ts";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Container>
      <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>

      <DocumentContainer >
        <Document
          file="/KangJekoo_pr.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </DocumentContainer>
      <div>
        Page {pageNumber} of {numPages}
      </div>
      <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
    </Container>
  );
};
