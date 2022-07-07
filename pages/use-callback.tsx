import { useCallback, useState } from 'react'

export default function Component() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // count1は初回にセットされている0のまま
  const showCount1 = useCallback(() => {
    alert(`カウント1：${count1}`)
  }, [])

  // count2が更新されると関数内のcount2も更新される
  const showCount2 = useCallback(() => {
    alert(`カウント2：${count2}`)
  }, [count2])

  return (
    <div>
      <p>カウント1：{count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>カウント1に加算</button>
      <button onClick={showCount1}>カウント1を表示</button>

      <p>カウント2：{count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>カウント2に加算</button>
      <button onClick={showCount2}>カウント2を表示</button>
    </div>
  )
}
