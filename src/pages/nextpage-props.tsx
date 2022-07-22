import { NextPage } from 'next'

type Props = {
  message: string
}

const Message: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>Message</h1>
      {props.message}
    </div>
  )
}

const Index: NextPage = () => {
  return (
    <div>
      <h1>Index</h1>
      <Message message="hello" />
    </div>
  )
}

export default Index
