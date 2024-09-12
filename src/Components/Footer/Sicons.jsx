'use client'
import Image from 'next/image';
import { icons } from './data'
import styles from './Footer.module.css'
export default function Sicons() {
  return (
    <>
    {icons.map(icon=> <Image key={icon.id} src={icon.url}width={20}height={20}className={styles.icon} alt={icon.alt}/>)}
    </>
)
}

