'use client'
import {createContext, useState} from 'react'
export const ThemeContext = createContext();
export default function ThemeProvider({children}) {
const [mode,setMode] =useState('dark');
 const toggleswitch =()=>{
setMode((prev)=>prev==='dark'?'light':'dark');
 }
    return (
        <ThemeContext.Provider value={{toggleswitch,mode}}>
           <div className={ `theme ${mode}`}>
            {children}
           </div>
        </ThemeContext.Provider>
  )
}
