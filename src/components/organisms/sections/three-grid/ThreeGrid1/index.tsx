import FullImageCard1 from "../../../../molecules/cards/FullImageCard/FullImageCard1"
import ThreeGrid from "../../../../atoms/containers/ThreeGrid"
import styles from "./index.module.scss"
import React from "react"
type Card = {
    image:string
    alt:string
    heading:string
    subheading:string
}


type Props = {
    cards:Card[]
    className?:string
}

const ThreeGrid1 = ({cards,className}: Props) => {

    const fullClassName = `${styles.section} ${className||""}`

    return <ThreeGrid className={fullClassName}>
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
}

export default ThreeGrid1