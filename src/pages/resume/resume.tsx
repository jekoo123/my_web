import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ResumePage, ContentsContainer, DocumentContainer } from "./styled.ts";

// 예를 들어, 스피너 컴포넌트
const Spinner = () => <div>Loading...</div>;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <ResumePage>
      <ContentsContainer>
        <DocumentContainer>
          <Document
            file="/KangJekoo_pr.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from({ length: numPages ?? 0 }, (_, i) => (
              <>
                <Page key={i + 1} pageNumber={i + 1} loading={<div>LETSGO</div>} />
                <hr></hr>
              </>
            ))}
          </Document>
        </DocumentContainer>
      </ContentsContainer>
    </ResumePage>
  );
};
