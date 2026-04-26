"use client"

export default function PdfViewer({ url }: { url: string }) {
        const path = `/pdfjs/web/viewer.html?file=${url}`
    return (
        <>
        <iframe src={path} className=" w-full h-screen"/>
        </>
    )}