import DropdownNavType from "types/DropdownNavType"
import styles from "./index.module.scss"
import React from "react"
import Anchor1 from "../../../../../components/atoms/anchors/Anchor1"
import Dropdown1 from "../../../../../components/atoms/dropdowns/DropDown1"
import DropDownContent from "./DropDownContent"

type Props = {
className?:string
dropdownNav:DropdownNavType  
}

const DropdownNavBar1 = ({className,dropdownNav}: Props) => {

    const {items} = dropdownNav
const fullClassName = styles.nav+" " + className||""

    return <nav className={fullClassName}>
        {items.map((item,index)=>{
            const {name,href,subItemGroups} = item

            if(subItemGroups){
                return<div className={styles['dropdown-cont']} style={{position:"relative"}}>
                    <Anchor1>{name}</Anchor1>
                    <Dropdown1 className={styles.dropdown}>
                        <DropDownContent
                        subItemGroups={subItemGroups}
                        ></DropDownContent>
                    </Dropdown1>
                </div>
            }
            else{
                return<Anchor1 href={href||""}>{name}</Anchor1>
            }
        })}
    </nav>
}

export default DropdownNavBar1