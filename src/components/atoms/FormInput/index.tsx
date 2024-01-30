"use client"
import FormInput from "../../../types/FormInput"
import styles from "./index.module.scss"
import React, { useEffect, useState } from "react"

type Props = {
className?:string
    formInput:FormInput
    handleInputChange:({value,name}:{value:string,name:string})=>void
    side?:"right"|"left"|"full"
    }

const FormInput = ({className,formInput,handleInputChange,side}: Props) => {

    
    const {label,name,type,placeholder,width} = formInput
    const [value,setValue] = useState("")
    const isHalf = width===1
    const fullClassName = `${styles.div} ${className||""} ${isHalf?styles.half:""}`

    useEffect(()=>{
        handleInputChange({value,name})
    },[value])

    const style = {
        paddingRight:side==="left"?"10px":0,
        paddingLeft:side==="right"?"10px":0,
    }

    if(type==="textarea"){
        return<div style={style} className={fullClassName}>
        {label&&<label>{label}</label>}
        <textarea placeholder={placeholder||""} value={value} onChange={(e)=>setValue(e.target.value)}></textarea>
    </div>
    }

    return <div style={style} className={fullClassName}>
        {label&&<label>{label}</label>}
        <input placeholder={placeholder||""} value={value} onChange={(e)=>setValue(e.target.value)} type={type||"text"}></input>
    </div>
}

export default FormInput