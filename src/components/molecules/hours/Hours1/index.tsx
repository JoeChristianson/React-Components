import HoursType from "../../../../types/HoursType"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    hours?:HoursType
}

const d = {
    hours: {
        sunday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        monday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        tuesday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        wednesday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        thursday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        friday: {
            open: "2:00 PM",
            close: "12:00 AM"
        },
        saturday: "closed"
    }
}

const Hours1 = ({className,hours}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
        Hours Here
        
    </div>
}

export default Hours1