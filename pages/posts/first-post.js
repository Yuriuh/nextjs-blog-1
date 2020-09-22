import React, { useCallback } from 'react'
import Link from 'next/link'
import styles from 'styles/first-post.module.scss'

console.log('执行了')
export default function post() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>内容</div>
      <Link href="/">
        <a>回到首页</a>
      </Link>
    </div>
  )
}
