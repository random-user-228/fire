"use client"
import PdfSearch from "../components/PdfSearch"
import { useSearchParams } from "next/navigation"

export default function OpenClient() {

  const searchParams = useSearchParams()
  const path = searchParams.get("path") || ""
  return <PdfSearch url={`/books/${path}.pdf`} />
}