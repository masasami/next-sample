import { createContext, useContext, useReducer, Dispatch } from 'react'

type State = { modal: { title: string; content: string } }
type Action = { type: 'SHOW'; payload: { title: string; content: string } } | { type: 'HIDE' }

const Context = createContext<{ state: State; dispatch: Dispatch<Action> }>(null)
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, modal: action.payload }
    case 'HIDE':
      return { ...state, modal: null }
    default:
      return state
  }
}

// モーダルコンポーネント
const Modal = () => {
  const { state, dispatch } = useContext(Context)
  if (!state.modal) return null
  return (
    <dialog>
      <div>
        <header>{state.modal.title}</header>
        <main>{state.modal.content}</main>
        <footer>
          <button onClick={() => dispatch({ type: 'HIDE' })}>閉じる</button>
        </footer>
      </div>
    </dialog>
  )
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { modal: null })
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component1 />
      {/* モーダルコンポーネント */}
      <Modal />
    </Context.Provider>
  )
}
// App ← コンポーネントを飛び越えてここのモーダルが開く
//  Component1
//    Component2
//      Component3
//        Component4 ← ここでモーダルを開くためのイベント発生
const Component1 = () => <Component2 />
const Component2 = () => <Component3 />
const Component3 = () => <Component4 />
const Component4 = () => {
  const { dispatch } = useContext(Context)
  return (
    // title, contentを変えるとモーダルの中身のメッセージを好きな内容にできる
    <button onClick={() => dispatch({ type: 'SHOW', payload: { title: 'タイトルです', content: '内容です' } })}>
      モーダルを開く
    </button>
  )
}
