import React,{ ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
    className?:string
}

const FlexBar = ({className,children}: Props) => {
    
    const fullClassName = `${styles.div} ${className}`

    return <div className={fullClassName}>
        {children}
    </div>
}

export default FlexBar  