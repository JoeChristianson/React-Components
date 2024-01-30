import Section from "../../../../../../components/atoms/section/Section"
import Heading from "../../../../../../components/atoms/Heading"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import FadeInDiv from "../../../../../atoms/containers/AnimatedDivs/FadeIn"

type Props = {
className?:string
children?:ReactNode
}

const d = {
    heading:"We make it. We serve it. What more is there to it really?"
}

const MidBanner = ({className,children}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <Section className={fullClassName}>
        <FadeInDiv>
        <Heading
        className={styles.heading}
        >{children||d.heading}</Heading>
        </FadeInDiv>
    </Section>
}

export default MidBanner