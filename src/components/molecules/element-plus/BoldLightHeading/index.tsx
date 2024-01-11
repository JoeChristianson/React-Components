import React from "react"
import Heading from "../../../atoms/Heading"
import styles from "./index.module.scss"

type Props = {
    boldHeading:string
    lightHeading:string
}

const BoldLightHeading = ({boldHeading,lightHeading}: Props) => {
    return <>
    <Heading className={styles.bold}>
        {boldHeading}
    </Heading>
    <Heading className={styles.light}>
        {lightHeading}
    </Heading>
    </>
}

export default BoldLightHeading