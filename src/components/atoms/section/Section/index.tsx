import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    children:ReactNode
}

const Section = ({className,children}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        {children}
    </section>
}

export default Section