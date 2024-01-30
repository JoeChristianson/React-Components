import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    children:ReactNode
    href?:string
    targetBlank?:boolean
}

const Anchor1 = ({className,children,href,targetBlank}: Props) => {

const fullClassName = styles.a+" " + className||""

    return <a href={href} target={targetBlank?"_blank":"_self"} className={fullClassName}>
        <span>
            {children}
        </span>
    </a>
}

export default Anchor1