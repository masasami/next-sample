// propsでまとめて取得
// 個人的にはこっちの方が好き
// なぜなら親コンポーネントから受け取ってることがわかりやすい
const ChildComponent1 = (props: { title: string; content: string }) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}
// 分割代入
// 型を書くと冗長になる
const ChildComponent2 = ({ title, content }: { title: string; content: string }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}
// 分割代入
// 型を外出し
type Props = {
  title: string
  content: string
}
const ChildComponent3 = ({ title, content }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default function Component() {
  return (
    <div>
      <ChildComponent1 title={'タイトル１'} content={'内容１'} />
      <ChildComponent2 title={'タイトル２'} content={'内容２'} />
      <ChildComponent3 title={'タイトル３'} content={'内容３'} />
    </div>
  )
}
