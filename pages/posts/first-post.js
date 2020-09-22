import React from 'react'
import Link from 'next/link'

export default function post() {
  return (
    <div>
      <div>First Post</div>
      <Link href="/">
        <a>回到首页</a>
      </Link>
    </div>
  )
}
