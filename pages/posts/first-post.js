import React, { useCallback } from 'react'
import Link from 'next/link'

console.log('执行了')
export default function post() {
  // Node 环境不会执行
  const clickMe = useCallback(() => {
    console.log('You clicked me')
  })
  return (
    <div>
      <div>First Post</div>
      <Link href="/">
        <a>回到首页</a>
      </Link>
      <hr />
      <button onClick={clickMe}>click me</button>
    </div>
  )
}
