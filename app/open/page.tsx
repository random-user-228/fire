'use client';
 
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
export default function ViewerPage() {
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer 
        config={{
          src: `/books/116.pdf`
        }}
      />
    </div>
  );
}