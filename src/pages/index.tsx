import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'

import styles from './index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> World</h1>
          <p>
            Get access to all publications <br />
            for only <span>$ 9.99</span> month.
          </p>

          <SubscribeButton />

        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
