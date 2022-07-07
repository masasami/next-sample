import { FC, VFC } from 'react'

type Props = {
  message: string
}

const WrapperComponent: FC = ({ children }) => {
  return (
    <div>
      <h1>WrapperComponent</h1>
      {children}
    </div>
  )
}

const ChildComponent: VFC = () => {
  return (
    <WrapperComponent>
      <h1>ChildComponent</h1>
    </WrapperComponent>
  )
}

const Component: VFC<Props> = ({ message = 'Component' }) => {
  return (
    <div>
      <h1>Component</h1>
      <p>{message}</p>
      <ChildComponent />
    </div>
  )
}

export default Component
