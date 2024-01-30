import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    children:ReactNode
}

const BoxBorderCard = ({className,children}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        {children}
    </div>
}

export default BoxBorderCard