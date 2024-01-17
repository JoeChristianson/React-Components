import FlexCenterer2x from "../../../../../../components/atoms/containers/FlexCenterer"
import styles from "./index.module.scss"
import React from "react"
import Coordinates from "../../../../../../types/Coordinates"
import MapGoogle from "../../../../../../components/molecules/third-party/MapGoogle"
import Section from "../../../../../../components/atoms/section/Section"
import GenericForm from "../../../../../../components/organisms/forms/GenericForm"
import FormInput from "../../../../../../types/FormInput"
import defaultFormInputs from "./defaultFormInputs"
import Heading from "../../../../../../components/atoms/Heading"

type Props = {
    className?:string
    coordinates:Coordinates
    googleMapsAPIKey:string
    customFormInputs?:FormInput[]
}

const ContactWithMap1  = ({className,coordinates,googleMapsAPIKey,customFormInputs}: Props) => {

const fullClassName = styles.section+" " + className||""

    const formInputs = customFormInputs || defaultFormInputs

    return <Section className={fullClassName}>
        <FlexCenterer2x className={styles.centerer}>
            <MapGoogle
            coordinates={coordinates}
            apiKey={googleMapsAPIKey}
            ></MapGoogle>
            <div className={styles.left}>
            <Heading>GET IN TOUCH</Heading>
            <GenericForm
            inputs={formInputs}
            ></GenericForm>
            </div>
        </FlexCenterer2x>
    </Section>
}

export default ContactWithMap1 