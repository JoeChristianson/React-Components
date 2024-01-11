import styles from "./index.module.scss"
import React from "react"

type Props = {
    className?:string
    src:string
    alt:string
    steleBg?:string
}

const ImageStele = ({className,src,alt,steleBg}: Props) => {

const fullClassName = `${styles.div} ${className}`

    const steleStyle = {
        background:steleBg||"black"
    }

    return <div className={fullClassName}>
                <div style={steleStyle} className={styles.stele}></div>
                <img src={src} alt={alt}></img>
            </div>
}

export default ImageStele