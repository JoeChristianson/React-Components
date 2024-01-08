import React, { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
    className?:string
}

const Heading = ({children,className}: Props) => {

    const fullClassName = `${styles.h1} ${className||""}`

    return <h1 className={fullClassName}>
        {children}
    </h1>
}

export default Heading  