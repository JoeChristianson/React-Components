import styles from "./index.module.scss"
import React, { ReactNode, useRef } from "react"
import {motion, useInView} from "framer-motion"
type Props = {
    className?:string
    handleClick:()=>void
    children:ReactNode
}

const FadeInBoxButton = ({children,className,handleClick}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref);


const fullClassName = styles.button+" " + className||""

    var variants = {
        hidden: {
            opacity:.2,
            transform:'translateX(-30px)'
        },
        visible:{
            opacity:.9,
            transform:'translateX(0px)',
            transition:{
                duration:.7,
            }
        },
        hover: {
            opacity:1,
            background:"rgb(234 152 152)",
            transition: {
                duration: 0.3,
            }
        }
    };


    return <motion.button whileInView="visible" whileHover="hover" variants={variants} style={variants.hidden} onClick={handleClick} className={fullClassName}>
        {children}
    </motion.button>
}

export default FadeInBoxButton