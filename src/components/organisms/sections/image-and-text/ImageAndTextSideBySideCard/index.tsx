import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    src:string
    alt:string
    children:ReactNode
    
}

const ImageAndTextSideBySideCard = ({className,src,alt,children}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        <h1>Here we are side by side</h1>
    </section>
}

export default ImageAndTextSideBySideCard