import TestimonialType from "../../../../types/TestimonialType"
import styles from "./index.module.scss"
import React from "react"
import ParagraphSplitter from "../../../../components/molecules/element-plus/ParagraphSplitter"
import SideBySide from "../../../../components/atoms/containers/SideBySide"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import FadeInTowards from "../../../../components/atoms/containers/AnimatedDivs/FadeInTowards"
import makeAlt from "../../../../utils/images/makeAlt"

type Props = {
className?:string
    testimonial:TestimonialType
    reverse?:boolean
}

const Testimonial1 = ({className,testimonial,reverse}: Props) => {

const fullClassName = `${styles.article} ${className||""} ${reverse&&styles.reverse}`

    const {img,alt,name,quote,title} = testimonial

    return <article className={fullClassName}>
        <SideBySide className={styles['side-by-side']}>
        <FadeInTowards className={styles.left} direction={reverse?"right":"left"}>
        <img src={img} alt={alt||makeAlt(img)}/>
        </FadeInTowards>
        <FadeInTowards className={styles.right} direction="up">

        <div className={styles['quote-sign']}>
            <FontAwesomeIcon icon={faQuoteLeft} size="lg"></FontAwesomeIcon>
        </div>
            <h3>{title}</h3>
            <h2>{name}</h2>
            <ParagraphSplitter text={quote}></ParagraphSplitter>
            </FadeInTowards>
        </SideBySide>
    </article>
}

export default Testimonial1