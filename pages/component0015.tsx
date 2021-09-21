import { useState } from 'react'

export default function Component() {
  const [amount, setAmount] = useState('')
  return (
    <div>
      <input
        type="text"
        style={{ textAlign: 'right' }}
        value={amount && Number(amount).toLocaleString()}
        onChange={(e) => {
          const value = e.target.value.replaceAll(',', '')
          !isNaN(Number(value)) && setAmount(value)
        }}
      />
    </div>
  )
}
