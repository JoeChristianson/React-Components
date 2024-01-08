import React, { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    className?:string
    children:ReactNode
}

const NavHeading = ({className,children}: Props) => {

    const fullClassName = `${styles.h2} ${className}`

    return <h2 className={fullClassName}>
        {children}
    </h2>
}

export default NavHeading 