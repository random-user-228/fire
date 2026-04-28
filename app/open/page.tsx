'use client';

import dynamic from 'next/dynamic';

// Завантажуємо компонент динамічно, вимикаючи SSR
const PDFViewer = dynamic(
  () => import('@embedpdf/react-pdf-viewer').then((mod) => mod.PDFViewer),
  { 
    ssr: false,
    loading: () => <div className="h-screen w-full flex items-center justify-center">Завантаження...</div> 
  }
);

export default function ViewerPage() {
  return (
    /* Використовуємо 100dvh замість 100vh для iOS Safari, 
       щоб уникнути стрибків через панель навігації 
    */
    <div style={{ height: '100dvh', width: '100%' }}>
      <PDFViewer 
        config={{
          src: '/books/116.pdf'
        }}
      />
    </div>
  );
}
