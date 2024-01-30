import CardType from "types/CardType"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"
import FullWidthImage from "../../../../components/atoms/images/FullWidthImage"
import makeAlt from "../../../../utils/images/makeAlt"
import ParagraphSplitter from "../../../../components/molecules/element-plus/ParagraphSplitter"


type Props = {
className?:string
    card:CardType
    children?:ReactNode
    imgStyle?:React.CSSProperties
}

const GenericCard = ({className,card,imgStyle}: Props) => {

const fullClassName = styles.article+" " + className||""

    const {img,alt,heading,subheading,text,links} = card

    return <article className={fullClassName}>
        {img&&<header style={imgStyle}>
            <FullWidthImage src={img} alt={alt||makeAlt(img)}></FullWidthImage>
            </header>
            }
        <main>

        {heading&&<h3>{heading}</h3>}
        {subheading&&<h4>{subheading}</h4>}
        {text&&<ParagraphSplitter text={text}></ParagraphSplitter>}
            {links&&<footer>
                {links?.map((link,index)=>{
                    const {href,text} = link
                    return<a
                    href={href}
                    key={index}
                    >{text}</a>
                })}
            </footer>}
        </main>
    </article>
}

export default GenericCard