import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    heading:string
    superscript?:string
}

const HeadingWithSuperscript = ({className,heading,superscript}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        {superscript&&<h4>{superscript}</h4>}
        <h1>{heading}</h1>
    </div>
}

export default HeadingWithSuperscript