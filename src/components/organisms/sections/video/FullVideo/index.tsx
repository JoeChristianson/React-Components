import VideoBackground from "../../../../../components/molecules/VideoBackground"
import styles from "./index.module.scss"
import React, { ReactNode } from "react"

type Props = {
className?:string
    videoURL?:string
    children?:ReactNode
}


const d = {
    videoURL:"",
}

const FullVideo = ({className,videoURL,children}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        <VideoBackground
        src={videoURL}
        >
    {children||<></>}
        </VideoBackground>
    </section>
}

export default FullVideo