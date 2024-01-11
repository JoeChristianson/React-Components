import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    lightHeading:string
    boldHeading:string
}

const LightBoldHeading = ({className,lightHeading,boldHeading}: Props) => {

const fullClassName = `${styles.div} ${className}`

    return <div className={fullClassName}>
        <h3>{lightHeading}</h3>
        <h2>{boldHeading}</h2>
    </div>
}

export default LightBoldHeading