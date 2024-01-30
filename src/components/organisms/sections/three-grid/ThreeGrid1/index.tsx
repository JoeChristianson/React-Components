import FullImageCard1 from "../../../../molecules/cards/FullImageCard/FullImageCard1"
import ThreeGrid from "../../../../atoms/containers/ThreeGrid"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import Heading from "../../../../../components/atoms/Heading"
type Card = {
    image:string
    alt:string
    heading:string
    subheading:string
}


type Props = {
    cards:Card[]
    className?:string
    heading?:ReactNode
}

const ThreeGrid1 = ({cards,className,heading}: Props) => {

    const fullClassName = `${styles.section} ${className||""}`

    return <section className={fullClassName}>
        {heading||<></>}
        <ThreeGrid>
        {cards.map((card,index)=>{
            const {image,alt,heading,subheading} = card
            return<FullImageCard1
            image={image}
            key={index}
            alt={alt}
            heading={heading}
            subheading={subheading}
            ></FullImageCard1>
        })}
    </ThreeGrid>
        </section>
}

export default ThreeGrid1