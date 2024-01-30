import ContactDetailsType from "types/ContactDetailsType"
import styles from "./index.module.scss"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getContactDetailIcon, { ContactDetailKey } from "../../../utils/contact/getContactDetailItem"
import makeArrayFromObject from "../../../utils/array/makeArrayFromObject"

type Props = {
className?:string
    details?:ContactDetailsType
}

const d = {
    details:{
        "Telephone":"701 318 4338",
        "Location":"Fargo, North Dakota"
    }
}

const ContactDetails = ({className,details}: Props) => {

const fullClassName = styles.div+" " + className||""

const currentDetails = details||d.details
    const arr = makeArrayFromObject({object:currentDetails})

    return <div className={fullClassName}>
        {arr.map((pair,index)=>{
            const {key,value} = pair as {key:ContactDetailKey,value:any}
           return <div className={styles.card}><div className={styles.icon}>
            <FontAwesomeIcon
            icon={getContactDetailIcon(key)}
            ></FontAwesomeIcon>
            </div>
            <p>{value}</p>
            </div>
        })}
    </div>
}

export default ContactDetails