import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    img:string
    alt:string          

}

const FullCoverImage = ({className,img,alt}: Props) => {

const fullClassName = styles.img+" " + className||""

    return <img
    src={img}
    alt={alt}
    className={fullClassName}></img>
}

export default FullCoverImage