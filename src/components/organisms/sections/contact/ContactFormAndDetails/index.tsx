import ContactDetailsType from "../../../../../types/ContactDetailsType"
import SideBySide from "../../../../../components/atoms/containers/SideBySide"
import Section from "../../../../../components/atoms/section/Section"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import { ContactDetailKey } from "../../../../../utils/contact/getContactDetailItem"
import GenericForm from "../../../../../components/organisms/forms/GenericForm"
import FormInputType from "../../../../../types/FormInput"
import ContactDetails from "../../../../../components/molecules/ContactDetails"

type Props = {
    className?:string
    handleSubmit?:any
    header?:ReactNode
    footer?:ReactNode
    contactDetails?:ContactDetailsType
    detailsOrder?:ContactDetailKey[]
    inputs?:FormInputType[]
}

type DProps = {
    contactDetails?:ContactDetailsType
    detailsOrder?:ContactDetailKey[]
    inputs:FormInputType[]
}

const d:DProps = {
    detailsOrder:["Telephone","Email","Location"],
    inputs:[
        {name:"name",
        label:"Name"
    },
    {
        name:"email",
        label:"Email",
        type:"email"
    },
    {
        name:"message",
        label:"Message",
        type:"textarea"
    }
    ]
}

const ContactFormAndDetails = ({className,handleSubmit,header,footer,detailsOrder,inputs}: Props) => {

const fullClassName = styles.section+" " + className||""

    const currentDetailsOrder = detailsOrder||d.detailsOrder

    return <Section id="contact" className={fullClassName}>
        {header}
        <SideBySide className={styles['side-by-side']}>
            <div>
                <ContactDetails></ContactDetails>
            </div>
            <div>
                <GenericForm
                inputs={inputs||d.inputs}
                ></GenericForm>
            </div>
        </SideBySide>
            {footer}
    </Section>
}

export default ContactFormAndDetails