import Link from "next/link";
import styles from "./NavBar.module.css";
import { links } from "./data";
import Buttons from "@/app/elements/Buttons/Buttons";
import { Montserrat } from "next/font/google";
import Logo from "@/app/elements/Buttons/Logo/Logo";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function NavBar() {
    return (
    
<div className={styles.container}>
    <Logo/>
    <div className={styles.links}>
    <DarkModeToggle/>
    {links.map(link =><Link key={link.id} href={link.url}>{link.title}</Link>)}
<Buttons/>
    </div>


</div>
  )
} 
