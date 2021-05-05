import { signIn, useSession } from 'next-auth/client'
import styles from './styles.module.scss'

interface ProductProps {
  priceId: string
}

export function SubscribeButton({ priceId }: ProductProps) {
  const [ session ] = useSession()

  function handleSubscription(){
    if(!session){
      signIn('github')
      return
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