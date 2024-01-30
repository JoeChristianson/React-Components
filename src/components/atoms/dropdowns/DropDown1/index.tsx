import Anchor1 from "../../../../components/atoms/anchors/Anchor1"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    children:ReactNode
}

const Dropdown1 = ({className,children}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        {children}
    </div>
}

export default Dropdown1