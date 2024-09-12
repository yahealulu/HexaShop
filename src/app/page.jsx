import Image from "next/image";
import styles from "./page.module.css";
import hero from '/public/images/icons/hero.svg';
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
      <h1 className={styles.title}>your BEST  <br />  e-commerce destination!</h1>
         <p className={styles.description}>Discover a world of endless shopping  possibilities at Upcoming Hexa shops Commune Mall – Where Every Store Tells a Story.</p>
         <Link href="/products" className={styles.link}>
         <button className={styles.button} > 
         shop Now
         </button>
         </Link>
      </div>
      <div className={styles.col}><Image className={styles.img} src={hero}priority={true} alt="main-photo"/></div>
    </div>
  );
}
