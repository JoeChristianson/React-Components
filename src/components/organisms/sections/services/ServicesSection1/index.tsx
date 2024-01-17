import ImageStele from "../../../../../components/molecules/image/ImageStele"
import SideBySide from "../../../../../components/atoms/containers/SideBySide"
import ServicesType from "../../../../../types/services/ServicesType"
import styles from "./index.module.scss"
import React from "react"
import HeadingWithSuperscript from "../../../../../components/molecules/element-plus/HeadingWithSuperscript"

type Props = {
className?:string
    services:ServicesType
    overheading?:string
    category:string
    img:string
    alt:string
    reverse?:boolean
}

const ServicesSection1 = ({reverse,className,services,category,overheading,img,alt}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        <SideBySide className={reverse?styles.reverse:""}>
            <div className={styles.left}>
            <HeadingWithSuperscript
            className={styles.heading}
            heading={category}
            superscript={overheading}
            ></HeadingWithSuperscript>
            <div className={styles.services}>

        {services.map((service,index)=>{
            const {name,price} = service
            return<div 
            className={styles.service}
            key={index}
            >{name} <strong>
                {price}
                </strong>
                </div>
        })}
        </div>
        </div>
        <div className={styles.right}>
            <ImageStele
            src={img}
            alt={alt}
            className={styles.stele}
            ></ImageStele>
        </div>
        </SideBySide>
    </section>
}

export default ServicesSection1