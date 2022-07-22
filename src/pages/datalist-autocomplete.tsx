import { useState } from 'react'

export default function Component() {
  const flavors = ['チョコレート', 'イチゴ', 'バナナ', 'バニラ']
  const [selectedFlavor, setSelectedFlavor] = useState('')

  return (
    <div>
      <h2>アイスの味：{selectedFlavor}</h2>
      <input type="text" list="flavors" value={selectedFlavor} onChange={(e) => setSelectedFlavor(e.target.value)} />
      <datalist id="flavors">
        {flavors.map((flavor, i) => (
          <option key={i} value={flavor} />
        ))}
      </datalist>
    </div>
  )
}
