import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    children?:ReactNode
    src:string
    alt:string
}

const LogoAndName = ({className,children,src,alt}: Props) => {

const fullClassName = styles.div+" " + className||""

    return  <div className={fullClassName}>
    <img alt={alt} src={src}></img>
    {children}
 </div>
}

export default LogoAndName