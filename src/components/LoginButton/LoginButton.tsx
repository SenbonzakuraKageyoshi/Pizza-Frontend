import styles from './loginButton.module.scss';

import Image from 'next/image';
import UserIcon from '@/images/icons/user.svg';

const LoginButton = () => {
  return (
    <button className={styles.loginButton}>
        <Image src={UserIcon} width={20} height={20} alt='Аккаунт'/>
        Войти в аккаунт
    </button>
  )
}

export default LoginButton