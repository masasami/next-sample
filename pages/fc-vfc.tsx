import { FC, VFC } from 'react'

// * 型FCにはchildrenが存在する
const Component1: FC = ({ children }) => {
  return <div>{children}</div>
}
// ! 型VFCにはchildrenが存在しない
const Component2: VFC = ({ children }) => {
  return <div>{children}</div>
}

export default function App() {
  return (
    <div>
      <Component1>
        <div>child1</div>
      </Component1>
      <Component2>
        <div>child2</div>
      </Component2>
    </div>
  )
}
