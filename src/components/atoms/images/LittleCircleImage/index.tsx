import FullCoverImage from "../FullCoverImage"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    img:string
    alt:string
}

const LittleCircleImage = ({className,img,alt}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        <FullCoverImage
        img={img}
        alt={alt}
        ></FullCoverImage>
    </div>
}

export default LittleCircleImage