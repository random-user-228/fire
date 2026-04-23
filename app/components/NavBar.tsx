"use client"

import { Home, Search, Bookmark, Settings } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full bg-[#0B0F14] border-t border-[#222C38] flex justify-around p-3">
      <Link href="/"><Home /></Link>
      <Link href="/search"><Search /></Link>
      <Bookmark />
      <Link href="/settings"><Settings /></Link>
    </div>
  )
}