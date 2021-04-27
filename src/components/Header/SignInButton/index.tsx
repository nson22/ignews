import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton() {
  const logged = true
  return logged ? (
    <button
      type="button"
      className={styles.SignInButton}
    >
      <FaGithub color="#04D361" />
      Nilson Silva

      <FiX
        className={styles.closeIcon}
        color="#737380"
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.SignInButton}
    >
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
}