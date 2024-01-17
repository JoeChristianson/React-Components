import ImageStele from "../../../../../components/molecules/image/ImageStele"
import TeamMember from "../../../../../types/TeamMember"
import styles from "./index.module.scss"
import React from "react"
import Heading from "../../../../../components/atoms/Heading"
import Socials1 from "../../../../../components/molecules/socials/Socials/Socials1"
import Section from "../../../../../components/atoms/section/Section"

type Props = {
    heading?:string
className?:string
    team:TeamMember[]
    steleBgs?:string[]
}

const Team1 = ({className,team,steleBgs,heading}: Props) => {

const fullClassName = styles.section+" " + className||""
    const defaultSteleBgs = [
        "red","yellow","blue"
    ]
    const heights = [100,80,60]
    const bgs = steleBgs||defaultSteleBgs
    const delays = [.2,.4,.6]
    return <Section className={fullClassName}>
        <Heading>{heading||"Our Team"}</Heading>
        <div className={styles['team-cont']}>
        {team.map((member,index)=>{
            const {src,alt,name,position,socials} = member
            return<div className={styles.member}> 
            <ImageStele
            steleBg={bgs?.[index]}
            src={src}
            alt={alt}
            className={styles['stele-cont']}
            heightPercentage={heights[index]}
            animated={true}
            delay={delays[index]}
            xTranslate={4}
            widthPercentage={90}
            ></ImageStele>
            <div className={styles['text-cont']}>
            <h2>{name}</h2>
            <h5>{position}</h5>
            </div>
            {socials&&<Socials1
            socials={socials}
            ></Socials1>}
            </div>
        })
        }
        </div>
    
    </Section>
}

export default Team1