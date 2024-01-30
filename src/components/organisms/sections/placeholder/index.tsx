import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    sectionName:string
}

const PlaceholderSection = ({className,sectionName}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        <h1>{sectionName}</h1>
        
    </section>
}

export default PlaceholderSection