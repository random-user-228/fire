'use client';
import { useSearchParams } from "next/navigation";
import PdfViewer from "../components/pdfviewer";
export default function Open() {
  const searchParams = useSearchParams();
  const url = searchParams.get("path") || "";
  const urll = `/books/${url}.pdf`;
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <PdfViewer url={urll} /> 
      </div>
)}