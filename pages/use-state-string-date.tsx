import { useState } from 'react'

export default function Component() {
  // 内部的にはDate型で保持しておきたい
  const [date, setDate] = useState(new Date())
  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)

    return `${year}-${month}-${day}`
  }
  return (
    <div>
      {/* type="date"はyyyy-mm-dd形式の文字列でないと正しく表示されない */}
      <input
        type="date"
        value={formatDate(date)}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
    </div>
  )
}
