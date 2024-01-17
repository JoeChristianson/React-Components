import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    children:ReactNode
    reverse?:boolean
}

const FlexCenterer2x = ({className,children,reverse}: Props) => {

    const fullClassName = `${styles.div} ${className||""} ${reverse?styles.reverse:""}`

    return <div className={fullClassName}>
        {children}        
    </div>
}

export default FlexCenterer2x