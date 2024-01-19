import HamburgerNav1 from "../../../../../components/molecules/nav/hamburgers/HamburgerNav1"
import NavItem from "../../../../../types/NavItem"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    src:string
    alt:string
    children:ReactNode
    navItems:NavItem[]
}

const HamburgerHeader1 = ({className,src,alt,children,navItems}: Props) => {

const fullClassName = styles.header+" " + className||""

    return <header className={fullClassName}>
         <div className={styles.left}>
            <a href="/">
            <img src={src}></img>
            {children}
            </a>
         </div>
         <div className={styles.right}>
            <HamburgerNav1
            navItems={navItems}
            ></HamburgerNav1>
         </div>
    </header>
}

export default HamburgerHeader1