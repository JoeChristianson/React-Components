import SideBySide from "../../../../../components/atoms/containers/SideBySide"
import styles from "./index.module.scss"
import React from "react"
import ImageStele from "../../../../../components/molecules/image/ImageStele"
import LightBoldHeading from "../../../../../components/molecules/element-plus/LightBoldHeading"
import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter"
import FadeInTowards from "../../../../../components/atoms/containers/AnimatedDivs/FadeInTowards"
import Carousel1 from "../../carousel/Carousel1"

type Props = {
className?:string
    img?:string
    alt?:string
    smallHeading?:string
    bigHeading?:string
    text?:string
    steleBg?:string
}

const d = {className:"",
img:"/images/about/image1.png",
alt:"",
smallHeading:"",
bigHeading:"Glamour Grove",
text:"",
steleBg:"#eeddff"}

const About2 = ({className,img,alt,smallHeading,bigHeading,text,steleBg}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        <SideBySide className={styles['side-by-side']}>
            <>
            <Carousel1>
                <h1>Hello</h1>
                <h2>Goodbye</h2>
            </Carousel1>
            <FadeInTowards direction="down" className={styles.right}>
                <LightBoldHeading
                lightHeading={smallHeading||"Our Story"}
                boldHeading={bigHeading||"Our Company"}
                />
                <div className={styles.ps}>
                <ParagraphSplitter text={text||d.text}></ParagraphSplitter>
                </div>
                </FadeInTowards>
            </>
        </SideBySide>
    </section>
}

export default About2