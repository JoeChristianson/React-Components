import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    src:string
    alt:string
}

const FullWidthImage = ({className,src,alt}: Props) => {

const fullClassName = styles.img+" " + className||""

    return <img className={fullClassName}
    src={src} alt={alt}
    ></img>
}

export default FullWidthImage