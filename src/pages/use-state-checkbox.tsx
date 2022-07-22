import { useState } from 'react'

export default function Component() {
  // チェックボックス
  const [checked, setChecked] = useState(false)

  return <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}
