import VideoBackground from "../../../../../../components/molecules/VideoBackground"
import styles from "./index.module.scss"
import React from "react"

type Props = {
className?:string
    videoURL?:string
    heading?:string
    subheading?:string
    img?:string
}


const d = {
    videoURL:"",
}

const VideoHero1 = ({className,videoURL,img}: Props) => {

const fullClassName = styles.section+" " + className||""

    return <section className={fullClassName}>
        <VideoBackground
        src={videoURL}
        >
            <div className={styles.cont}>
                <h1>Aster's Bistro</h1>
                {img&&<img src={img}></img>}
                <h3>Good Times Since 2021</h3>
            </div>
        </VideoBackground>
    </section>
}

export default VideoHero1