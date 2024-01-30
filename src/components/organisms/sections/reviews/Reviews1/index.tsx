import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter"
import Heading from "../../../../../components/atoms/Heading"
import Section from "../../../../../components/atoms/section/Section"
import ReviewCard1 from "../../../../../components/molecules/cards/reviews/ReviewCard1"
import ReviewType from "../../../../../types/Review/Review"
import defaultReviews from "./defaultReviews"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    reviews?:ReviewType[]
    heading?:string
    text?:string
}

const d = {
    reviews:defaultReviews,
    heading:"REVIEWS",
    text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam nisi repellendus doloribus adipisci corrupti atque nihil totam omnis velit, quia iure deserunt beatae ipsum rerum blanditiis dicta deleniti ab?"
}



const Reviews1 = ({className,reviews,heading,text}: Props) => {
const fullClassName = styles.section+" " + className||""

    return <Section className={fullClassName}>
        <Heading className={styles.heading}>{heading||d.heading}</Heading>
        <div className={styles.text}>
        <ParagraphSplitter text={text||d.text}></ParagraphSplitter>
        </div>
        <div className={styles['reviews']}>

        {(reviews||d.reviews).map((review,index)=>{
            return<ReviewCard1
            review={review}
            key={index}
            ></ReviewCard1>
        })
    }
    </div>
    </Section>
}

export default Reviews1