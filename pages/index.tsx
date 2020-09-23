import styles from '../styles/Home.module.css'
import { GetServerSideProps, NextPage } from 'next'
import { UAParser } from 'ua-parser-js'
import { useEffect, useState } from 'react'

type Props = {
  browser: {
    name: string
    version: string
    major: string
  }
}

// 这是客户端代码
const Index: NextPage<Props> = props => {
  const { browser } = props
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const w = document.documentElement.clientWidth
    setWidth(w)
  })
  return (
    <div className={styles.container}>
      <h1>你的浏览器是 {browser.name}</h1>
      <h2>你的浏览器窗口大小是 {width} 像素</h2>
    </div>
  )
}

export default Index

// 这是服务端代码
export const getServerSideProps: GetServerSideProps = async context => {
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()
  return {
    props: {
      browser: result.browser,
    },
  }
}
