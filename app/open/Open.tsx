'use client';
import { useSearchParams } from "next/navigation";
import PdfViewer from "../components/pdfviewer";
export default function Open() {
  const searchParams = useSearchParams();
  const url = searchParams.get("path") || "";
  const urll = `/books/${url}.pdf`;
  return (
    <div style={{ height: '100vh' }}>
      <PdfViewer url={urll} /> 
      </div>
)}