import NavItem from "../../../../../types/NavItem"
import styles from "./index.module.scss"
import React from "react"
import Hamburger1 from "../../../../../components/atoms/buttons/hamburgers/Hamburger1"

type Props = {
className?:string
    navItems:NavItem[]
}

const HamburgerNav1 = ({className,navItems}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        <Hamburger1
        navItems={navItems}
        ></Hamburger1>
    </div>
}

export default HamburgerNav1