import TestimonialType from "../../../../../types/TestimonialType"
import LightBoldHeading from "../../../../../components/molecules/element-plus/LightBoldHeading"
import styles from "./index.module.scss"
import React from "react"
import Testimonial1 from "../../../../../components/molecules/testimonial/Testimonial1"


type Props = {
className?:string
    testimonials:TestimonialType[]
}

const Testimonials1 = ({className,testimonials}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        
        <LightBoldHeading
        lightHeading="Our Client"
        boldHeading="Testimonials"
        className={styles['light-bold']}        
        ></LightBoldHeading>
        <div className={styles.testimonials}>
            {testimonials.map((testimonial,index)=>{
                return<Testimonial1
                testimonial={testimonial}
                key={index}
                reverse={(index%2)?true:false}
                ></Testimonial1>
            })}
        </div>
    </section>
}

export default Testimonials1