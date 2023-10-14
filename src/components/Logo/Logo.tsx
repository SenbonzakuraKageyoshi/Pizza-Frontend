'use client';

import Image from 'next/image';
import LogoIcon from '@/images/icons/logo.svg';

const Logo = () => {
  return <Image src={LogoIcon} width={32} height={32} alt='Пиццерия'/>
}

export default Logo