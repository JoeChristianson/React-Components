import styles from "./index.module.scss"
import React from "react"
import getImageURL from "./getImageURL"
import useOnScreen from "../../../../hooks/useOnScreen"


type Props = {
className?:string
    techStack:string[]
}

const TechStack1 = ({className,techStack}: Props) => {


const {ref, isIntersecting} = useOnScreen({ threshold: 0.1 });

const images = techStack.map((tech)=>{
    return getImageURL({tech})
})

const fullClassName = `${styles['tech-stack-list']} ${isIntersecting?styles['visible']:styles.invisible}`



return <div ref={ref} className={fullClassName}>
    {images.map((img,index)=>{
        return<div className={styles['icon-wrapper']}>
        <Icon
        key={index}
        src={img}
        ></Icon>
        </div>
    })}
</div>
}

export default TechStack1