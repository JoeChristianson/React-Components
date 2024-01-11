import React, { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    className?:string
    children:ReactNode
}

const SideBySide = ({children,className}: Props) => {

    const fullClassName = `${styles.div} ${className||""}`

    return <div className={fullClassName}>
        {children}
    </div>
}

export default SideBySide