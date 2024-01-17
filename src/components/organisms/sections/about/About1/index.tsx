import SideBySide from "../../../../../components/atoms/containers/SideBySide"
import styles from "./index.module.scss"
import React from "react"
import ImageStele from "../../../../../components/molecules/image/ImageStele"
import LightBoldHeading from "../../../../../components/molecules/element-plus/LightBoldHeading"
import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter"
import FadeInTowards from "../../../../../components/atoms/containers/AnimatedDivs/FadeInTowards"

type Props = {
className?:string
    img:string
    alt:string
    smallHeading:string
    bigHeading:string
    text:string
    steleBg:string

}

const About1 = ({className,img,alt,smallHeading,bigHeading,text,steleBg}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        <SideBySide className={styles['side-by-side']}>
            <>
            <FadeInTowards className={styles.left}>
                <ImageStele
                src={img}
                alt={alt}
                steleBg={steleBg}
                className={styles.stele}
                ></ImageStele>

                </FadeInTowards>
            <FadeInTowards direction="down" className={styles.right}>
                <LightBoldHeading
                lightHeading={smallHeading||"Our Story"}
                boldHeading={bigHeading||"Our Company"}
                />
                <div className={styles.ps}>
                <ParagraphSplitter text={text}></ParagraphSplitter>
                </div>
                </FadeInTowards>
            </>
        </SideBySide>
    </section>
}

export default About1