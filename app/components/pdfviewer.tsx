'use client';

import { PDFViewer } from '@embedpdf/react-pdf-viewer';

export default function PdfViewer({ url }: { url: string }) {
  return (
    <div className="w-full h-screen">
      <PDFViewer
        config={{
          src: url,
        }}
      />
    </div>
  );
}