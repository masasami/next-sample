import { useState, ChangeEventHandler } from 'react'

// 親子間での値のやりとり
// 親→子：値をそのまま渡せる
// 子→親：関数経由で値を渡す
const InputName = (props: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  )
}

export default function Component() {
  const [user, setUser] = useState({ id: 1, name: '松本太郎' })

  return (
    <div>
      <p>氏名：{user.name}</p>
      <InputName
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
    </div>
  )
}
