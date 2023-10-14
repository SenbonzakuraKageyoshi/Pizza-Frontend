import styles from './categoryLink.module.scss'

import Image from 'next/image';
import Link from 'next/link';

interface ICategoryLink {
    icon: string;
    name: string;
    href: string;
}

const CategoryLink = ({ icon, name, href }: ICategoryLink) => {
  return (
    <Link href={href} className={styles.categoryLink}>
        <Image src={icon} width={32} height={32} alt={name}/>
        <span>{name}</span>
    </Link>
  )
}

export default CategoryLink