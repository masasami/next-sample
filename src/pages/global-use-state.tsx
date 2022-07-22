import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'

type User = {
  id: number
  name: string
}
const Context = createContext<{ user: User; setUser: Dispatch<SetStateAction<User>> }>(undefined)
const Provider: FC = ({ children }) => {
  const [user, setUser] = useState({ id: 1, name: 'user1' })

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}

const UserName: FC = () => {
  const { user } = useContext(Context)
  return <h1>{user.name}</h1>
}
const InputUserName: FC = () => {
  const { user, setUser } = useContext(Context)
  return <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
}

export default function App() {
  return (
    <Provider>
      <UserName />
      <InputUserName />
    </Provider>
  )
}
