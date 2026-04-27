"use client"
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
 
export default function PdfSearch({ url }: { url: string }) {
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer 
        config={{
          src: url,
          theme: { preference: 'light' }
        }}
      />
    </div>
  );
}