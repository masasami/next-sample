import { useState } from 'react'
import styled from '@emotion/styled'

const Table = styled.table`
  width: 100vw;
  height: 100vh;
  border-collapse: collapse;
`
const TableHead = styled.thead``
const TableHeader = styled.th`
  border: 1px solid lightgray;
`
const TableBody = styled.tbody``
const TableRow = styled.tr``
type TableDataProps = {
  color?: string
  fontWeight?: string
}
const TableData = styled.td<TableDataProps>`
  color: ${(props) => props.color || '#000000'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  position: relative;
  border: 1px solid lightgray;
`
const Day = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 32px;
`

export default function Calendar() {
  const oneWeek = ['日', '月', '火', '水', '木', '金', '土']
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth() + 1)

  const startDate = new Date(year, month - 1, 1) // 月の最初の日
  const endDate = new Date(year, month, 0) // 月の最後の日
  const endDayCount = endDate.getDate() // 月の末日
  const lastMonthEndDate = new Date(year, month - 2, 0) // 前月の最後の日
  const lastMonthEndDayCount = lastMonthEndDate.getDate() // 前月の末日
  const startDay = startDate.getDay() // 月の最初の日の曜日

  let dayCount = 1

  return (
    <Table>
      <TableHead>
        <TableRow>
          {oneWeek.map((dayOfWeek) => (
            <TableHeader key={dayOfWeek}>{dayOfWeek}</TableHeader>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {Array.from(Array(6).keys()).map((row) => (
          <TableRow key={row}>
            {Array.from(Array(7).keys()).map((column) => {
              if (row === 0 && column < startDay) {
                // 前月の最後
                const day = lastMonthEndDayCount - startDay + column + 1
                return (
                  <TableData key={column} color="lightgray">
                    <Day>{day}</Day>
                  </TableData>
                )
              } else if (dayCount > endDayCount) {
                // 来月の最初
                const day = dayCount - endDayCount
                dayCount++
                return (
                  <TableData key={column} color="lightgray">
                    <Day>{day}</Day>
                  </TableData>
                )
              } else {
                // 今月の日付
                const day = dayCount
                dayCount++
                return (
                  <TableData key={column} fontWeight="700">
                    <Day>{day}</Day>
                  </TableData>
                )
              }
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
