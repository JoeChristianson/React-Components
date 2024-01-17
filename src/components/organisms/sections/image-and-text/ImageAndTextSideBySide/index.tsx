import FullWidthImage from "../../../../../components/atoms/images/FullWidthImage"
import FlexCenterer2x from "../../../../atoms/containers/FlexCenterer"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    src:string
    alt:string
    children:ReactNode
    backboxBg?:string
    reverse?:boolean
}

const ImageAndTextSideBySide = ({className,src,alt,children,reverse,backboxBg}: Props) => {

const fullClassName = `${styles.section} ${className||""}`


    return <section className={fullClassName}>
        <FlexCenterer2x
        reverse={reverse}
        >
            <div>
            <FullWidthImage
            src={src}
            alt={alt}
            ></FullWidthImage>
            </div>
            <div className={styles.right}>{children}</div>
        </FlexCenterer2x>
    </section>
}

export default ImageAndTextSideBySide