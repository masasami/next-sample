import { FC, VFC } from 'react'

// * 型FCにはchildrenが存在する
const Component1: FC = ({ children }) => {
  return <div>{children}</div>
}
// ! 型VFCにはchildrenが存在しない
const Component2: VFC = ({}) => {
  return <div>{}</div>
}

export default function App() {
  return (
    <div>
      <Component1>
        <div>child1</div>
      </Component1>
      <Component2></Component2>
    </div>
  )
}
