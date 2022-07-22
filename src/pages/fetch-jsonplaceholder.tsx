import { useEffect, useState } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function Component() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
      setTodos(data)
    })()
  }, [])

  return (
    <div>
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
