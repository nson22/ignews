import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './index.module.scss'

interface ProductProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: ProductProps) {
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
            for only <span>{product.amount}</span> month.
          </p>

          <SubscribeButton priceId={product.priceId} />

        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(process.env.STRIPE_PRICE_SUBSCRIPTION);

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24hrs
  }
}
