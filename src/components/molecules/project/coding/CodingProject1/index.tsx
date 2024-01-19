import ProjectType from "types/ProjectType"
import styles from "./index.module.scss"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons"
import ParagraphSplitter from "../../../../../components/molecules/element-plus/ParagraphSplitter"
import TechStack1 from "../../../../../components/molecules/tech-stack/TechStack1"


type Props = {
className?:string
    project:ProjectType
}

const CodingProject1 = ({className,project}: Props) => {
    const {link,code,techStack,description,img,name} = project

const fullClassName = styles.project+" " + className||""

    
           return <article className={fullClassName}>
        <div className={styles.left}>
            <div className={styles['img-cont']}>
            <div className={styles['slide-down']}>
                {link&& 
                <a href={link}>
                <FontAwesomeIcon icon={faLink} size="4x"></FontAwesomeIcon>
                </a>
                }
                {code&&<a href={code}>
                <FontAwesomeIcon icon={faLink} size="4x"></FontAwesomeIcon>

                </a>
                }
            </div>
            <img src={img}></img>
            </div>
            <TechStack1
            techStack={techStack}
            ></TechStack1>
        </div>
        <div className={styles.right}>
            <h2>{name}</h2>
            <ParagraphSplitter text={description}></ParagraphSplitter>
        </div>
    </article>

}

export default CodingProject1