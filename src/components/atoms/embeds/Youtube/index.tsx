import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    src?:string
}

const d = {
    src:"youtube.com"
}

const Youtube = ({className,src}: Props) => {

const fullClassName = styles.div+" " + className||""

const getVideoId = (src:string)=>{

    if(src.includes("watch?v=")){
        return src.split("watch?v=")[1]
    }
    return src
}

const currentSrc = src||d.src

const videoId = getVideoId(currentSrc)
    return <div className={fullClassName}>
            <iframe style={styles.iframeStyle} src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
}

export default Youtube