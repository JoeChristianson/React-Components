import React, { ReactNode } from "react"
import styles from "./index.module.scss"

type Props = {
    children:ReactNode
    className?:string
}

const FullHeightSection = ({children,className}: Props) => {

    const fullClassName = `${styles.section} ${className||""}`

    return <section className={fullClassName}>
        <h2>Heyo</h2>
        {children}
    </section>
}

export default FullHeightSection  