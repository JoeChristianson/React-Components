import React, { ReactNode } from "react"
import styles from "./index.module.scss"
import FlexBar from "../../../atoms/containers/FlexBar"
import StandardNavBar from "../../../molecules/nav/StandardNavBar"
import NavItem from "types/NavItem"
import NavHeading from "../../../atoms/NavHeading"

type Props = {
    navItems:NavItem[]
    children?:ReactNode
    heading?:string
    maxWidth?:number
}

const StandardHeader = ({navItems,children,heading,maxWidth}: Props) => {
    return <header className={styles.header}>
        <FlexBar>
            <div className={styles.left}>

            {heading&&<NavHeading>{heading}</NavHeading>}
            {children}
            </div>
            <StandardNavBar
            navItems={navItems}
            ></StandardNavBar>
        </FlexBar>
    </header>
}

export default StandardHeader   