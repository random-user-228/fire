"use client";
import { useEffect, useRef } from "react";

export default function PdfViewer({url}: {url: string}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import EmbedPDF from 'https://cdn.jsdelivr.net/npm/@embedpdf/snippet@2/dist/embedpdf.js';

      EmbedPDF.init({
        type: 'container',
        target: document.getElementById('pdf-viewer'),
        src: '${url}',
        theme: {preference: 'dark'},
      });
    `;

    document.body.appendChild(script);
  }, [url]);

  return (
    <div
      id="pdf-viewer"
      ref={containerRef}
      className="w-full h-screen"
    />
  );
}