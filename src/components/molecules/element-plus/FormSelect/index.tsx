import styles from "./index.module.scss"
import React, { ChangeEventHandler } from "react"

type Props = {
className?:string
    name:string
    options:string[]
    formValues:any
    setFormValues:React.Dispatch<any>
}

const FormSelect = ({className,options,name,formValues,setFormValues}: Props) => {

const fullClassName = styles.div+" " + className||""

    const handleChange:ChangeEventHandler<HTMLSelectElement> = (e)=>{
        const {value} = e.target
        const newFormValues = {...formValues}
        newFormValues[name] = value
        setFormValues(newFormValues)
    }

    return <div className={fullClassName}>
        <select onChange={handleChange} value={formValues[name]}>
            {options.map((option,index)=>{
                return<option key={index}>{option}</option>
            })}
        </select>
    </div>
}

export default FormSelect