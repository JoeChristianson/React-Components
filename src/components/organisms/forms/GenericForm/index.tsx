"use client"
import FadeInBoxButton from "../../../../components/atoms/buttons/FadeInBox"
import FormInput from "../../../../components/atoms/FormInput"
import FormInputType from "../../../../types/FormInput"
import getSidesArray from "./getSidesArray"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
inputs:FormInputType[]
}

const GenericForm = ({className,inputs}: Props) => {

const fullClassName = styles.form+" " + className||""

    const handleInputChange = ({value,name}:{value:string,name:string})=>{

    }

    const handleClick = ()=>{

    }

    const sidesArray = getSidesArray({inputs})

    return <form className={fullClassName}>
        {
            inputs.map((input,index)=>{
                return<FormInput
                    key={index}
                    formInput={input} 
                    handleInputChange={handleInputChange}
                    side={sidesArray[index]}           
                ></FormInput>
            })
        }
        <div className={styles['submit-cont']}>
        <FadeInBoxButton
        className={styles.submit}
        handleClick={handleClick}>
            <h3>Submit</h3>
        </FadeInBoxButton>
            </div>
    </form>
}

export default GenericForm