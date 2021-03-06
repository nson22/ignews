import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04D361" />
      {session.user.name}

      <FiX
        className={styles.closeIcon}
        color="#737380"
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
}