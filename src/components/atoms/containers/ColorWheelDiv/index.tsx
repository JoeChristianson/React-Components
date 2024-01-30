import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    saturation?:number
    light?:number
    steps:number[]
    currentIndex:number
    children:ReactNode
}

const ColorWheelDiv = ({className,saturation,light,steps,currentIndex,children}: Props) => {

const fullClassName = styles.div+" " + className||""
const cSaturation = saturation?`${saturation}%`:"100%"
const cLightness = light?`${light}%`:"10%"

const style = {background:`hsl(${steps[currentIndex]}, ${cSaturation}, ${cLightness})`}

    return <div style={style} className={fullClassName}>
        {children}
    </div>
}

export default ColorWheelDiv