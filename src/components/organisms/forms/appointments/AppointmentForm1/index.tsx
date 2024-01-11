"use client"
import FormTextarea from "../../../../../components/molecules/element-plus/FormTextArea"
import FormInput from "../../../../../components/molecules/element-plus/FormInput"
import FormSelect from "../../../../../components/molecules/element-plus/FormSelect"
import LightBoldHeading from "../../../../../components/molecules/element-plus/LightBoldHeading"
import styles from "./index.module.scss"
import React, {useState} from "react"
import FadeInBox from "../../../../../components/atoms/buttons/FadeInBox"

type Props = {
className?:string
availableServices:string[]
}

const AppointmentForm1 = ({className,availableServices}: Props) => {
    
    const initialState = {
        fullName:"",
        time:"",
        service:"",
        phone:"",
        note:""
    }

    
    const fullClassName = `${styles.div} ${className}`

    const [formValues,setFormValues] = useState(initialState)

    const handleSubmit = ()=>{
        
    }

    return <div className={fullClassName}>
            <LightBoldHeading
            lightHeading="Quick Booking"
            boldHeading="Appointment"
            ></LightBoldHeading>      
            <form className={styles.form}>
            <FormInput
                formValues={formValues}
                setFormValues={setFormValues}
                name="fullName"
                label="Full Name"
                ></FormInput>
                <FormInput
                formValues={formValues}
                setFormValues={setFormValues}
                name="time"
                label="Time"
                ></FormInput>
                <FormSelect
                formValues={formValues}
                setFormValues={setFormValues}
                options={availableServices}
                name="services"
                ></FormSelect>
                <FormInput
                formValues={formValues}
                setFormValues={setFormValues}
                name="phone"
                label="Phone"
                ></FormInput>
                <FormTextarea
                formValues={formValues}
                setFormValues={setFormValues}
                name="note"
                className={styles['textarea-cont']}
                label="Note"
                ></FormTextarea>
                <FadeInBox
                handleClick={handleSubmit}
                >
                    <h4>SEND</h4>
                </FadeInBox>
            </form>
        </div>
}

export default AppointmentForm1