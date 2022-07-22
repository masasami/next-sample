import { useEffect, useState } from 'react'
import styles from './component.module.scss'

interface User {
  id: number
  name: string
}
export default function Component() {
  const [user, setUser] = useState<User>({ id: 1, name: 'ユーザー１' })
  return (
    <div>
      {/* 入力補完 */}
      {/* <h2>{user.i}</h2> */}
      {/* リアルタイムエラーチェック */}
      {/* <h2>{user.naem}</h2> */}
    </div>
  )
}
