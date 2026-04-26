

'use client'
import PdfViewer from "../components/pdfviewer"
import { useSearchParams } from "next/navigation"
export default function Open() {
    const searchParams = useSearchParams();
    const path = searchParams.get("path") || "";
    return (
        <><PdfViewer url={decodeURIComponent(path)}/></>
    )
}