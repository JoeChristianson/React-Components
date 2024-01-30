import React from "react"
import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp } from "@fortawesome/free-solid-svg-icons"

interface Props {
    direction:"up"|"down"|"left"|"right"
    handleClick:()=>void
    className:string
}

const FloatArrowButton = ({direction,handleClick,className}:Props)=>{

    const onClick = ()=>{
        handleClick()
    }

    const icons = {
        up:faCaretUp,
        down:faCaretDown,
        left:faCaretLeft,
        right:faCaretRight
    }



    return <div
    className={`${styles.div} ${styles[direction]} ${className}`}
    onClick={onClick}
    >
        <FontAwesomeIcon
        icon={icons[direction]}
        ></FontAwesomeIcon>
    </div>
}




export default FloatArrowButton