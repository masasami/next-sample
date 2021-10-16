import { useEffect } from 'react'

export default function Component() {
  const func = () => {} // ←アロー関数の{}は省略したり、()にしたりできます

  // 括弧なし：結果を即座に返したいとき
  const func1 = () => '1つ目の関数です'
  const _func1 = () => {
    return '1つ目の関数です'
  }

  // ()：オブジェクトを即座に返したいとき
  const func2 = () => ({ message: '2つ目の関数です' })
  const _func2 = () => {
    return { message: '2つ目の関数です' }
  }

  // {}：結果を返す以外に処理を行いたいとき
  const func3 = () => {
    const message = '3つ目の関数です'
    return message
  }

  useEffect(() => {
    console.log(func1())
    console.log(func2().message)
    console.log(func3())
  }, [])

  return <div></div>
}
