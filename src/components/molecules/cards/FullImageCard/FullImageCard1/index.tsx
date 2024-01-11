import TopCornerRotateText from "../../../../../components/atoms/containers/rotators/text/TopCornerRotateText"
import bgImage from "../../../../../utils/images/bgImage"
import styles from "./index.module.scss"
import React from "react"
type Props = {
    image:string
    alt:string
    heading:string
    subheading:string
    className?:string
}

const FullImageCard1 = ({alt,image,heading,subheading,className}: Props) => {
    
    const fullClassName = `${styles.div} ${className||""}`

    const style = {
        backgroundImage:bgImage(image)
    }

    return <div role="img" aria-label={alt} className={fullClassName}>
        <div className={styles.img} style={style}></div>
        <TopCornerRotateText className={styles.text}>
            <h3>{heading}</h3>
            <h4>{subheading}</h4>
        </TopCornerRotateText>
    </div>
}

export default FullImageCard1