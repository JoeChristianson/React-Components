import NavItem from "types/NavItem"
import styles from "./index.module.scss"
import React from "react"

type Props = {
    className?:string
    navItems:NavItem[]
}

const NavBar = ({navItems,className}: Props) => {

    const fullClassName = `${styles.nav} ${className||""}`

    return <nav className={fullClassName}>
        <ul>
            {navItems.map((item,index)=>{
                const {name,href} = item
                return <li>
                    <a href={href}>
                        {name}
                    </a>
                </li>
            })}
        </ul>
    </nav>
}

export default NavBar