import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    children:ReactNode
    noPadding?:boolean
    id?:string
}

const Section = ({className,children,noPadding,id}: Props) => {

const fullClassName = styles.section+" " + className||""

    const style:any = {}
    if(noPadding){
        style.padding = 0;
    }

    return <section id={id||""} style={style} className={fullClassName}>
        {children}
    </section>
}

export default Section