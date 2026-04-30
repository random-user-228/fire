
'use client'
import Open from "./Open"
import { Suspense } from "react"
export default function OpenPage() {
  return (
    <Suspense fallback={<div>Завантаження...</div>}>
    <Open />
    </Suspense>
  )
}
