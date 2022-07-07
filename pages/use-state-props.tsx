import { Dispatch, SetStateAction, useState } from 'react'

type User = { id: number; firstName: string; lastName: string }
type SetUser = Dispatch<SetStateAction<User>>

const InputFirstName = (props: { user: User; setUser: SetUser }) => (
  <input
    type="text"
    value={props.user.firstName}
    onChange={(e) => props.setUser({ ...props.user, firstName: e.target.value })}
  />
)
const InputLastName = (props: { user: User; setUser: SetUser }) => (
  <input
    type="text"
    value={props.user.lastName}
    onChange={(e) => props.setUser({ ...props.user, lastName: e.target.value })}
  />
)

export default function Component() {
  const [user, setUser] = useState<User>({ id: 1, firstName: '太郎', lastName: '山本' })

  return (
    <div>
      <h2>
        {user.lastName}　{user.lastName}
      </h2>
      <InputFirstName user={user} setUser={setUser} />
      <InputLastName user={user} setUser={setUser} />
    </div>
  )
}
