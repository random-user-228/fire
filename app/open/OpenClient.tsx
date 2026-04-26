"use client"
import PdfViewer from "../components/pdfviewer"
import { useSearchParams } from "next/navigation"

export default function OpenClient() {
  const searchParams = useSearchParams()
  const path = searchParams.get("path") || ""
  return <PdfViewer url={path} />
}