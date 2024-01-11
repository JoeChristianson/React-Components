import styles from "./index.module.scss"
import React, { ChangeEventHandler } from "react"

type Props = {
className?:string
label?:string    
name:string
    formValues:any
    setFormValues:React.Dispatch<any>
}

const FormTextarea = ({label,className,name,formValues,setFormValues}: Props) => {

const fullClassName = styles.div+" " + className||""

    const handleChange:ChangeEventHandler<HTMLTextAreaElement> = (e)=>{
        const {value} = e.target
        const newFormValues = {...formValues}
        newFormValues[name] = value
        setFormValues(newFormValues)
    }

    return <div className={fullClassName}>
        <textarea placeholder={label||name} onChange={handleChange} value={formValues[name]}/>
    </div>
}

export default FormTextarea