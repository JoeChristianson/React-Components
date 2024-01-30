import { SubItemGroup } from "types/DropdownNavType"
import styles from "./index.module.scss"
import React from "react"
import SubItemGroupComp from "./SubItemGroup"

type Props = {
className?:string
    subItemGroups:SubItemGroup[]
}

const DropDownContent = ({className,subItemGroups}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        {subItemGroups.map((group,index)=>{
            return<SubItemGroupComp
            key={index}
            subItemGroup={group}
            ></SubItemGroupComp>
        })}
    </div>
}

export default DropDownContent