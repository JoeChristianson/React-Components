import React, { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
    className?:string
}

const PaddedDiv = ({children,className}: Props) => {
    
    const fullClassName = `${styles.div} ${className||""}`
    
    return <div className={fullClassName}>
        {children}
    </div>
}

export default PaddedDiv