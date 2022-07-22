import { useCallback, useEffect, useState } from 'react'
// データを1件取得
const useFetchOne = <T extends unknown>(initialState: T, url: string): { data: T } => {
  const [data, setData] = useState(initialState)
  useEffect(() => {
    ;(async () => {
      const data = await (await fetch(url)).json()
      setData(data)
    })()
  }, [])
  return { data }
}
// データを一覧取得
const useFetchAll = <T extends unknown>(initialState: T[], url: string): { data: T[] } => {
  const [data, setData] = useState(initialState)
  useEffect(() => {
    ;(async () => {
      const data = await (await fetch(url)).json()
      setData(data)
    })()
  }, [])
  return { data }
}

// トグル
const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialState)
  const toggle = useCallback(() => setState((state) => !state), [])
  return [state, toggle]
}

// カウント
const useCount = (initialState: number) => {
  const [count, setCount] = useState(initialState)
  const increment = useCallback(() => setCount((count) => count + 1), [])
  const decrement = useCallback(() => setCount((count) => count - 1), [])
  return { count, increment, decrement }
}

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function Component() {
  const [isShow, toggleIsShow] = useToggle(false)
  const { count, increment, decrement } = useCount(0)
  const { data: todo } = useFetchOne<Todo>(null, 'https://jsonplaceholder.typicode.com/todos/1')
  const { data: todos } = useFetchAll<Todo>([], 'https://jsonplaceholder.typicode.com/todos')

  return (
    <div>
      <h1>トグル</h1>
      <button onClick={toggleIsShow}>toggle</button>
      {isShow && <div>Hello World</div>}

      <h1>カウント</h1>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>

      <h1>データを1件取得</h1>
      <p>{todo && todo.title}</p>

      <h1>データを一覧取得</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" checked={todo.completed} onChange={() => {}} />
          </li>
        ))}
      </ul>
    </div>
  )
}
