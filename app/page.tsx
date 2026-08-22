'use client'
import Navbar from "./components/NavBar"
import { Flame, BookOpen, Truck, BriefcaseMedical, LucidePilcrowSquare, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter();
  const book_identificator = 'ident'
  
  return (
    <main className="p-4 pb-20">
      <h1 className="text-lg mb-4">Головна</h1>
      {/* Екстрений виклик */}
      <Link href='/calendar'>
      <button className="bg-red-500 w-full p-4 rounded-2xl text-lg font-semibold mb-4">
      📅 Календар змін
      </button>
      </Link>

      {/* Розділи */}
      <div className="grid grid-cols-2 gap-3">
      <Link href="/documents">
        <div className="bg-[#121821] p-4 rounded-2xl flex flex-col items-center">
          <BookOpen className="text-red-500" />
          <p>Документи</p>
        </div></Link>
        <Link href="/med">
        </div>
        </Link>
        
      </div>

      <Navbar />
    </main>
  )}