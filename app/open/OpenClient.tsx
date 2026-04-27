'use client';
 
import { PDFViewer } from '@embedpdf/react-pdf-viewer';
 import { useSearchParams} from 'next/navigation';
export default function ViewerPage() {
  const searchParams = useSearchParams();
    const path = searchParams.get('path');
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer 
        config={{
          src: `/books/${path}.pdf`
        }}
      />
    </div>
  );
}