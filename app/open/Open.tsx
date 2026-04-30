'use client';
import { useSearchParams } from "next/navigation";
import PdfViewer from "../components/pdfviewer";
export default function Open() {
  const searchParams = useSearchParams();
  const url = searchParams.get("path") || "";
  const urll = `/books/${url}.pdf`;
  return (
    <>
      <PdfViewer url={urll} /> 
    </>
)}