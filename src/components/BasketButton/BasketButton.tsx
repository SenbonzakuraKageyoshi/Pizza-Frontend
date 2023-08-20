import styles from './basketButton.module.scss';

import Image from 'next/image';
import BasketIcon from '@/images/icons/basket.svg';
import Link from 'next/link';

interface BasketButton {
    totalPrice: number;
}

const BasketButton = ({ totalPrice }: BasketButton) => {
  return (
    <Link href="/basket" className={styles.basketButton}>
        <Image src={BasketIcon} width={24} height={24} alt='Корзина'/>
        {totalPrice} ₽
    </Link>
  )
}

export default BasketButton