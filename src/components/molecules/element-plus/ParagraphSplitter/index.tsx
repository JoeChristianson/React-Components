import React,{ ReactNode } from "react"
import styles from "./index.module.scss"
import Paragraph from "../../../../components/atoms/text/Paragraph"

type Props = {
    text:string
}

const ParagraphSplitter = ({text}: Props) => {

    return <>
        {text.split("<br>").map((p,index)=>{
            return<Paragraph className={styles.p} key={index}>{p}</Paragraph>
        })}
    </>
}

export default ParagraphSplitter