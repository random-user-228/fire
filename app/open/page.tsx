
import React, { Suspense } from "react"
import OpenClient from "./OpenClient"

export default function Open() {
  return (
    <Suspense fallback={<div style={{ padding: 16 }}>Завантаження PDF...</div>}>
      <OpenClient />
    </Suspense>
  )
}