import Navbar from "./components/NavBar"
import { Flame, BookOpen, Truck, Shield } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="p-4 pb-20">
      {/* Екстрений виклик */}
      <Link href='/calendar'>
      <button className="bg-red-500 w-full p-4 rounded-2xl text-lg font-semibold mb-4">
      📅 Календар змін
      </button>
      </Link>

      {/* Розділи */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#121821] p-4 rounded-2xl flex flex-col items-center">
          <BookOpen className="text-red-500" />
          <Link href="/documents"><p>Документи</p></Link>
        </div>

        <div className="bg-[#121821] p-4 rounded-2xl flex flex-col items-center">
          <Truck className="text-red-500" />
          <p>Техніка</p>
        </div>

        <div className="bg-[#121821] p-4 rounded-2xl flex flex-col items-center">
          <Flame className="text-red-500" />
          <p>Тактика</p>
        </div>

        <div className="bg-[#121821] p-4 rounded-2xl flex flex-col items-center">
          <Shield className="text-red-500" />
          <p>Безпека</p>
        </div>
      </div>

      <Navbar />
    </main>
  )
}