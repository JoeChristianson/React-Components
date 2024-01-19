import React from "react"
import Section from "../../../../../../components/atoms/section/Section"
import styles from "./index.module.scss"
import ProjectType from "types/ProjectType"
import CodingProject1 from "../../../../../../components/molecules/project/coding/CodingProject1"

type Props = {
    heading:string
    projects:ProjectType[]
}

const CodingProjects1 = ({projects,heading}: Props) => {


    return <Section className={styles['section']}>
        <h1>{heading}</h1>
        {projects.map((project,index)=>{
            return<CodingProject1
            project={project}
            key={index}
            ></CodingProject1>
        })}
    </Section>
}

export default CodingProjects1