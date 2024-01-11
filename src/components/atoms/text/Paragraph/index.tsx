import React,{ ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
    className?:string
}

const Paragraph = ({children,className}: Props) => {

    const fullClassName = `${styles.p} ${className||""}`

    return <p className={fullClassName}>
        {children}
    </p>
}

export default Paragraph