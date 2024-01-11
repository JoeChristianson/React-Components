import NavItem from "../../../../../types/NavItem"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    navItems:NavItem[]
}

const Hamburger1 = ({className,navItems}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        <label>
            <input type="checkbox"/>
            <span className={styles.menu}> <span className={styles.hamburger}></span> </span>
            <ul>
                {navItems.map((navItem,index)=>{
                    const {name,href}= navItem
                    return<li key={index}><a href={href}>{name}</a> </li>
                })}
            </ul>
        </label>
        </div>
}

export default Hamburger1