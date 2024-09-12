'use client'
import { useContext } from 'react';
import styles from './Dark.module.css'
import { ThemeContext } from '@/context/ThemeContext';

export default function DarkModeToggle() {
    const {mode,toggleswitch}=useContext(ThemeContext);
  return (
    <div className={styles.container}onClick={toggleswitch}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌚</div>
        <div className={styles.switcher}
         style={mode==='light'?{left:"2px"}:{right:"2px"}}/>
    </div>
  )
}
