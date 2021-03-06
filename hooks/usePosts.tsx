import { useEffect, useState } from 'react'
import axios from 'axios'

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get('/api/v1/posts').then(
      res => {
        if (res.data.length === 0) {
          setIsEmpty(true)
        }
        setTimeout(() => {
          setIsLoading(false)
          setPosts(res.data)
        }, 2000)
      },
      () => {
        setIsLoading(false)
      }
    )
  }, [])
  return {
    posts,
    setPosts,
    isLoading,
    setIsLoading,
    isEmpty,
    setIsEmpty,
  }
}
