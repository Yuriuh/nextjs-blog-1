import { getPost } from 'lib/posts'
import { NextPage } from 'next'
import React from 'react'

type Props = {
  post: Post
}

const PostsDetail: NextPage<Props> = props => {
  const { post } = props
  return (
    <div>
      <div>文章详情</div>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
    </div>
  )
}

export default PostsDetail

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '第一篇博客' } }, { params: { id: '第二篇博客' } }],
    fallback: true,
  }
}

export const getStaticProps = async (staticContext: any) => {
  const id = staticContext.params.id
  const post = await getPost(id)
  return {
    props: {
      post,
    },
  }
}
