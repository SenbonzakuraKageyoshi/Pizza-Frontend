import styles from './header.module.scss';

import WorkingHours from '../WorkingHours/WorkingHours';
import Logo from '../Logo/Logo';
import LoginButton from '../LoginButton/LoginButton';
import BasketButton from '../BasketButton/BasketButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.headerContent}>
            <WorkingHours fisrtHours='11:00' secondHours='23:00'/>
            <LoginButton />
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className="container">
          <div className={styles.headerContent}>
            <Logo />
            <BasketButton totalPrice={0}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header