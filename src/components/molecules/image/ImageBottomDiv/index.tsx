"use client"

import React from "react";
import styles from "./index.module.scss"
import FadeInUpImage from "../../../../components/molecules/element-plus/FadeInUpImage";

type Props = {
    src:string
    alt:string
    className?:string
}

const ImageBottomDiv = ({src,className,alt}: Props) => {

    const duration = 1

    const fullClassName = `${styles.div} ${className||""}`

    return <div className={fullClassName}>
        <FadeInUpImage
        src={src}
        alt={alt}
        duration={1}
        ></FadeInUpImage>
    </div>
}

export default ImageBottomDiv