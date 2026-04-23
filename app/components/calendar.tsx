"use client"

import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const shifts = ["A", "B", "C", "D"]
const startDate = new Date(2024, 0, 1)
function getDayNumber(date: Date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000)
}

function getShift(date: Date) {
  const start = getDayNumber(startDate)
  const current = getDayNumber(date)

  const diffDays = current - start

  return shifts[((diffDays % 4) + 4) % 4]
}

export default function ShiftCalendar() {
  const [value, setValue] = useState(new Date())

  return (
    <div className="calendar-wrap">
      <Calendar
        showNeighboringMonth={false}
        value={value}
        onChange={(v) => setValue(v as Date)}
        tileClassName={({ date }) => {
          return `shift-${getShift(date)}`
        }}
      />
    <div className="legend" >
    <div className="shift-D">1 зміна</div>
    <div className="shift-A">2 зміна</div>
    <div className="shift-B">3 зміна</div>
    <div className="shift-C">4 зміна</div>
    </div>
    </div>
  )
}