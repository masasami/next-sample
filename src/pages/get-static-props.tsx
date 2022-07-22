import { GetStaticProps } from 'next'
import { VFC } from 'react'

interface Props {
  posts: {
    userId: number
    id: number
    title: string
    body: string
  }[]
}
const Component: VFC<Props> = ({ posts }) => {
  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <pre>{post.body}</pre>
        </li>
      ))}
    </ol>
  )
}

export default Component

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}
