import HoursType from "../../../../../types/HoursType"
import ContactDetailsType from "../../../../../types/ContactDetailsType"
import Coordinates from "../../../../../types/Coordinates"
import styles from "./index.module.scss"
import React from "react"
import Section from "../../../../../components/atoms/section/Section"
import MapGoogle from "../../../../../components/molecules/third-party/MapGoogle"
import Hours1 from "../../../../../components/molecules/hours/Hours1"

type Props = {
className?:string
    coordinates?:Coordinates
    contactDetails?:ContactDetailsType
    hours?:HoursType
    apiKey?:string
}

const d = {
    coordinates:{
        lat:20,
        lng:50,
        zoom:8
    }
}

const Location1 = ({className,coordinates,apiKey}: Props) => {

const fullClassName = styles.section+" " + className||""

    const containerStyle = {
        height:"100%",
        width:"100%"
    }

    return <Section className={fullClassName}>
        <div className={styles.right}>

        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
            <Hours1></Hours1>
        </div>
        <div className={styles.left}>

        <MapGoogle
        containerStyle={containerStyle}
        className={styles.map}
        apiKey={apiKey}
        coordinates={coordinates||d.coordinates}
        ></MapGoogle>
        </div>
    </Section>
}

export default Location1