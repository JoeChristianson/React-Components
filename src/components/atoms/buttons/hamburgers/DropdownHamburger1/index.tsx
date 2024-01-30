"use client"
import DropdownNavType from "types/DropdownNavType"
import NavItem from "../../../../../types/NavItem"
import styles from "./index.module.scss"
import React, { MouseEventHandler, useState } from "react"

type Props = {
className?:string
    navItems:DropdownNavType
}

const DropdownHamburger1 = ({className,navItems}: Props) => {

const fullClassName = styles.div+" " + className||""
const [checked,setChecked] = useState(false)

    const handleParentClick:MouseEventHandler<any> = (e)=>{
        setChecked(!checked)
    }

    return<>
        <div onClick={handleParentClick} className={styles.clicker}></div>
    <div    className={fullClassName}>
        <label>
            <input checked={checked} type="checkbox"/>
            <span className={styles.menu}> <span className={styles.hamburger}></span> </span>
            <ul>
                {[1,2,3].map((navItem,index)=>{
                    const {name,href}= {name:"home",href:""}
                    return<li key={index}><a href={href}>{name}</a> </li>
                })}
            </ul>
        </label>
        </div>
                </> 
}

export default DropdownHamburger1