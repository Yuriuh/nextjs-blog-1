import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import png from 'assets/images/1.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/posts/first-post">
            <a>第一篇文章</a>
          </Link>
        </h1>
      </main>

      <img src={png} />
    </div>
  )
}
