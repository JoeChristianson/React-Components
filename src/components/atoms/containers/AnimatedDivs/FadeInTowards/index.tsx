"use client"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import {motion} from "framer-motion"
import Direction from "../../../../../types/animation/Direction"
import getTransforms from "./helpers/getTransforms"

type Props = {
    className?:string
    children:ReactNode
    direction?:Direction
    scale?:number
}


const FadeInTowards = ({className,children,direction,scale}: Props) => {

    const fullClassName = styles.div+" " + className||""

    const {hiddenTransform,visibleTransform} = getTransforms({direction,scale})


    var variants = {
        hidden: {
            opacity:.2,
            transform:hiddenTransform
        },
        visible:{
            opacity:.9,
            transform:visibleTransform,
            transition:{
                duration:.7,
            }
        }
    };

    return <motion.div className={fullClassName}
    style={variants.hidden}
    variants={variants}
    whileInView="visible" 
    >
                {children}
            </motion.div>
}

export default FadeInTowards