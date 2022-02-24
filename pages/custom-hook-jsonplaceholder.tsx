import { useEffect, useState, VFC } from 'react'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

// JSONPlaceholderから投稿を取得するカスタムフック
const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      setPosts(posts)
    }
    fetchPosts()
  }, [])
  return { posts }
}

// コンポーネント
const Component: VFC = () => {
  const { posts } = usePosts()

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
