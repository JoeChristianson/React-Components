"use client"
import styles from "./index.module.scss"
import React from "react"
import {motion} from "framer-motion"
import makeAlt from "../../../../utils/images/makeAlt"

type Props = {
    className?:string
    src:string
    alt:string
    animated?:boolean
    steleBg?:string
    widthPercentage?:number
    heightPercentage?:number
    xTranslate?:number
    delay?:number
}

const ImageStele = ({className,src,alt,steleBg,widthPercentage,heightPercentage,xTranslate,delay,animated}: Props) => {

const fullClassName = `${styles.div} ${className}`

    const steleStyle = {
        background:steleBg||"black",
        width:`${widthPercentage||80}%`,
        height:`${heightPercentage||80}%`,
        transform:xTranslate?`translateX(${-50 + (xTranslate||0)}%)`:""
    }
    
    const variants = {
        hidden:{
            clipPath:"inset(100% 0 0 0)"
        },
        visible:{
            clipPath:"inset(0 0 0 0)"
        }
    }

    return <div className={fullClassName}>
                {animated&&<motion.div transition={{delay:delay||0,duration:1}} whileInView="visible" variants={variants} style={{...steleStyle,...variants.hidden}} className={styles.stele}></motion.div>}
                {!animated&&<motion.div style={{...steleStyle,...variants.hidden,clipPath:""}} className={styles.stele}></motion.div>}
                <img src={src} alt={alt||makeAlt(src)}></img>
            </div>
}

export default ImageStele