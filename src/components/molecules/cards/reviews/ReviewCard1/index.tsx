import ReviewType from "types/Review/Review"
import styles from "./index.module.scss"
import React from "react"
import LittleCircleImage from "../../../../../components/atoms/images/LittleCircleImage"
import makeAlt from "../../../../../utils/images/makeAlt"
import ReviewPlatformIcon from "../../../../../components/atoms/icons/branded/ReviewPlatform"
import BoxBorderCard from "../../../../../components/atoms/containers/cards/BoxBorderCard"
import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter"
import Stars from "../../../../../components/atoms/icons/branded/Stars"

type Props = {
className?:string
    review:ReviewType
}

const ReviewCard1 = ({className,review}: Props) => {

const fullClassName = styles.article+" " + className||""
    const {name,img,alt,reviewSource,text,stars} = review

    return <BoxBorderCard className={fullClassName}>
        <header>
            <div className={styles.left}>
            <LittleCircleImage
            img={img}
            alt={alt||makeAlt(img)}
            ></LittleCircleImage>
            <h4>{name}</h4>
            </div>
            <ReviewPlatformIcon
            platform={reviewSource}
            ></ReviewPlatformIcon>
        </header>
        <main>
            <Stars number={stars}></Stars>
            <ParagraphSplitter text={text}></ParagraphSplitter>
            </main>
        <footer></footer>
    </BoxBorderCard>
}

export default ReviewCard1