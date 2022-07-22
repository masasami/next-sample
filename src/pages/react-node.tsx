import { FC, ReactNode } from 'react'

// propsでタグを渡す方法
interface Props {
  topElement: ReactNode
  bottomElement: ReactNode
}
const Container: FC<Props> = ({ topElement, bottomElement }) => {
  return (
    <div>
      {topElement}
      {bottomElement}
    </div>
  )
}

export default function Component() {
  return <Container topElement={<div>top</div>} bottomElement={<div>bottom</div>} />
}
