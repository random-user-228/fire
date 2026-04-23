import Navbar from "../components/NavBar"

export default function SearchPage() {
  return (
    <main className="p-4 pb-20">
      <input
        placeholder="Пошук..."
        className="w-full p-3 rounded-xl bg-[#1A222D]"
      />

      <Navbar />
    </main>
  )
}