import { FC } from 'react'

interface MyObject {
  value: number
  method1: () => MyObject
  method2: () => MyObject
  method3: () => MyObject
  method4: () => MyObject
}

const MethodChain: FC = () => {
  const myObject: MyObject = {
    value: 0,
    method1: function () {
      this.value += 1
      return this
    },
    method2: function () {
      this.value += 2
      return this
    },
    method3: function () {
      this.value += 3
      return this
    },
    method4: function () {
      this.value += 4
      return this
    },
  }

  return (
    <div>
      <h1>MethodChain</h1>
      <p>{myObject.method1().method2().method3().method4().value}</p>
    </div>
  )
}

export default MethodChain
