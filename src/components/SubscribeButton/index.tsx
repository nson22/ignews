import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripejs'
import styles from './styles.module.scss'

interface ProductProps {
  priceId: string
}

export function SubscribeButton({ priceId }: ProductProps) {
  const [session] = useSession()

  async function handleSubscription() {
    if (!session) {
      signIn('github')
      return
    }
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripeJs = await getStripeJs()

      stripeJs.redirectToCheckout({ sessionId })

    } catch (error) {
      console.info("CHECKOUT: \n" + error)
    }
  }


  return (
    <button
      type='button'
      className={styles.subscribeButton}
      onClick={handleSubscription}
    >
      Subscribe now
    </button>
  )
}