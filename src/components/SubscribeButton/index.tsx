import styles from './styles.module.scss'

interface ProductProps {
  priceId: string
}

export function SubscribeButton({ priceId }: ProductProps) {
  return (
    <button type='button' className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}