import FullStar from "./FullStar"
import HalfStar from "./HalfStar"
import getStarsArray from "./getStarsArray"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    number:FiveStarsType
}

const Stars = ({className,number}: Props) => {

const fullClassName = styles.div+" " + className||""

    const starsArray = getStarsArray(number)

    return <div className={fullClassName}>
        {starsArray.map((star,index)=>{
            if(star==="half"){
                return<HalfStar key={index}></HalfStar>
            }else{
                return<FullStar key={index}></FullStar>
            }
        })}
    </div>
}

export default Stars