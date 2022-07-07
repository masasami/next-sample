import { FC, PropsWithChildren } from 'react'

interface Props {
  title: string
}

const Component: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default Component
