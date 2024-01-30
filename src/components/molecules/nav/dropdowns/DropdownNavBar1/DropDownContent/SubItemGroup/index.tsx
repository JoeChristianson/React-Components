import { SubItemGroup } from "types/DropdownNavType"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    subItemGroup:SubItemGroup
}

const SubItemGroup = ({className,subItemGroup}: Props) => {
    const {heading,subItems} = subItemGroup

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        {heading&&<h3>{heading}</h3>}
        {subItems.map((item,index)=>{
            const {name,href} = item
            return<a key={index} href={href}>{name}</a>
        })}
    </div>
}

export default SubItemGroup