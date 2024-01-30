import ThreeGrid from "../../../../atoms/containers/ThreeGrid"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import GenericCard from "../../../../../components/molecules/cards/GenericCard"
import Section from "../../../../../components/atoms/section/Section"
type Card = {
    image:string
    alt:string
    heading:string
    subheading:string
}


type Props = {
    cards?:Card[]
    className?:string
    heading?:ReactNode
}

const d = {
    cards:[
        {
            img:"http://northernlightsfilms.com/wp-content/uploads/2020/04/to-the-stars-poster-200x300.jpg",
            alt:"To The Stars",
            heading:"To The Stars",
            subheading:"Under small town scrutiny, a withdrawn farmer's daughter forges an intimate friendship with a worldly but reckless new girl in 1960s Oklahoma."
        },
        {
            img:"http://northernlightsfilms.com/wp-content/uploads/2017/03/HERO-Teaser_Final-691x1024.jpg",
            alt:"The hero",
            heading:"The Hero",
            subheading:"Opens June 9th 2017"
        },
        {
            img:"http://northernlightsfilms.com/wp-content/uploads/2016/05/dreams.jpg",
            alt:"I'll see you in my dreams",
            heading:"I'll see you in my dreams",
            subheading:"A widow and former songstress discovers that life can begin anew at any age. "
        }
    ]
}

const ThreeGrid2 = ({cards,className,heading}: Props) => {

    const fullClassName = `${styles.section} ${className||""}`

    return <Section className={fullClassName}>
        {heading||<></>}
        <ThreeGrid>
        {(cards||d.cards).map((card,index)=>{
            return<GenericCard
            card={card}
            ></GenericCard>
        })}
    </ThreeGrid>
        </Section>
}

export default ThreeGrid2