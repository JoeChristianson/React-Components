import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    src?:string
    children?:ReactNode
}

const VideoBackground = ({className,src,children}: Props) => {

const fullClassName = styles.div+" " + className||""

    return <div className={fullClassName}>
            <video autoPlay loop muted plays-inline="true" className={styles.video}>
            <source src={src||"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"} type="video/mp4"/>
            </video>
            <div className={styles.content}>
                {children||<></>}
            </div>
    </div>
}

export default VideoBackground