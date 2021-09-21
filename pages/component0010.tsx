import { useState } from 'react'
import styles from './component.module.scss'

export default function Component() {
  const [flag, setFlag] = useState(false)

  return (
    <div>
      <h1 className={flag ? styles.active : ''}>
        フラグに応じて色が変わります
      </h1>
      <button onClick={() => setFlag(!flag)}>フラグ切り替え</button>
    </div>
  )
}
