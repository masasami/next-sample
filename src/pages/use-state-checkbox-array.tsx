import { useState } from 'react'

export default function Component() {
  const [checkboxs, setCheckboxs] = useState([false, false, false])
  return (
    <div>
      {checkboxs.map((checkbox, i) => (
        <input
          key={i}
          type="checkbox"
          checked={checkbox}
          onChange={(e) => {
            setCheckboxs((prevCheckboxs) => {
              prevCheckboxs.fill(false)
              prevCheckboxs[i] = e.target.checked
              return [...prevCheckboxs]
            })
          }}
        />
      ))}
    </div>
  )
}
