import { createContext, Dispatch, useReducer, useContext } from 'react'

type State = { count: number }
type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'INCREMENT_BY_PAYLOAD'; payload: number }
  | { type: 'DECREMENT_BY_PAYLOAD'; payload: number }

const Context = createContext<{ state: State; dispatch: Dispatch<Action> }>(null)
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 }
    case 'DECREMENT': return { ...state, count: state.count - 1 }
    case 'INCREMENT_BY_PAYLOAD': return { ...state, count: state.count + action.payload }
    case 'DECREMENT_BY_PAYLOAD': return { ...state, count: state.count - action.payload }
    default: return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component1 />
    </Context.Provider>
  )
}
const Component1 = () => {
  const { state } = useContext(Context)
  return (
    <>
      <p>{state.count}</p>
      <Component2 />
    </>
  )
}
const Component2 = () => <Component3 />
const Component3 = () => <Component4 />
const Component4 = () => <Component5 />
const Component5 = () => {
  const { dispatch } = useContext(Context)
  return (
    <>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT_BY_PAYLOAD', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'DECREMENT_BY_PAYLOAD', payload: 5 })}>-5</button>
    </>
  )
}
