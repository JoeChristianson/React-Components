import Carousel from "../../../../atoms/containers/AnimatedDivs/Carousel1"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import Section from "../../../../../components/atoms/section/Section"

type Props = {
className?:string
    children:ReactNode[]
}

const Carousel1 = ({className,children}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <Section noPadding={true} className={fullClassName}>
        <Carousel
        slides={children}
        >
        </Carousel>
    </Section>
}

export default Carousel1