import { Montserrat} from "next/font/google";
const logofont = Montserrat({ subsets: ["latin"], weight: ['900'] });
import styles from'./logo.module.css'
import Link from "next/link";
export default function Logo() {
  return (
    <Link className={`${styles.logo} ${logofont.className}`} href={'/'}>HexaShop<br/></Link>
  )
}
