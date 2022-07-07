import { memo, useState, VFC } from 'react'

const Component: VFC = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    console.log('+1')
    setCount(count + 1)
  }

  return (
    <div>
      <ChildComponent1 />
      {/* <ChildComponent2 /> */}
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default Component

// countの値が更新されるたびに再レンダリングされる
const ChildComponent1 = () => {
  console.log('コンポーネント1')
  return <div>コンポーネント1</div>
}

// ! ビルド時エラーでた
// メモ化しているため不要な再レンダリングを防げる
// const ChildComponent2 = memo(() => {
//   console.log('コンポーネント2')
//   return <div>コンポーネント2</div>
// })
